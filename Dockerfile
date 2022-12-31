FROM alpine:3.17
LABEL org.opencontainers.image.source="https://github.com/H1ghBre4k3r/eventer"

WORKDIR /app

COPY ./bin/eventer /app/
COPY ./frontend/dist /app/pb_public

ENTRYPOINT [ "/app/eventer", "serve" ]
