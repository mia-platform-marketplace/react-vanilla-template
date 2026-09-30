# Build stage: compiles the app inside Docker, so the image does not depend on
# a `build/` folder handed over by the CI (the docker-build job of the
# pipelines-templates Application pipeline receives no artifacts).
# BUILDPLATFORM keeps this stage native when building multi-platform images.
FROM --platform=$BUILDPLATFORM node:24-alpine AS build

WORKDIR /build-dir

RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/releases .yarn/releases
RUN yarn install --immutable

COPY . .
RUN NODE_ENV=production INLINE_RUNTIME_CHUNK=false yarn build

########################################################################################################################

FROM nginx:1.17.2-alpine

LABEL maintainer="%CUSTOM_PLUGIN_CREATOR_USERNAME%" \
      name="%MICROSERVICE_NAME%" \
      description="%CUSTOM_PLUGIN_SERVICE_DESCRIPTION%" \
      eu.mia-platform.url="https://www.mia-platform.eu" \
      eu.mia-platform.version="0.1.0"

COPY nginx /etc/nginx

# Passed by the CI with --build-arg; without the declaration it expands to nothing
ARG COMMIT_SHA="unknown"
RUN touch ./off \
  && chmod o+rw ./off \
  && echo "%MICROSERVICE_NAME%: ${COMMIT_SHA}" >> /etc/nginx/commit.sha

WORKDIR /usr/static

# Vite outputs to 'build' (see vite.config.ts)
COPY --from=build /build-dir/build .

USER nginx
