FROM nginx:1.17.2-alpine as build

LABEL maintainer="%CUSTOM_PLUGIN_CREATOR_USERNAME%" \
      name="%MICROSERVICE_NAME%" \
      description="%CUSTOM_PLUGIN_SERVICE_DESCRIPTION%" \
      eu.mia-platform.url="https://www.mia-platform.eu" \
      eu.mia-platform.version="0.1.0"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "%MICROSERVICE_NAME%: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

# Copy build artifacts - Vite is configured to output to 'build' directory (see vite.config.ts)
# This ensures CSS and all assets are properly included in the production build
COPY ./build .

USER nginx
