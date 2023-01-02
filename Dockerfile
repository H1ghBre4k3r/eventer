FROM ubuntu:lunar
LABEL org.opencontainers.image.source="https://github.com/H1ghBre4k3r/eventer"

RUN apt update && apt install ca-certificates -y

WORKDIR /app

COPY ./bin/eventer /app/
COPY ./frontend/dist /app/pb_public

ENTRYPOINT [ "/app/eventer", "serve", "--http=0.0.0.0:8090" ]
