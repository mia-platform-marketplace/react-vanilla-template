# Build stage: compiles the app inside Docker, so the image does not depend on
# a `build/` folder handed over by the CI pipeline.
FROM node:24-alpine AS build

WORKDIR /build-dir

# Yarn 4 comes from the `packageManager` field in package.json
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./
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
