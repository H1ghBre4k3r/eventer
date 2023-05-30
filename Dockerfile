FROM --platform=$BUILDPLATFORM golang:1.20.4-bullseye AS builder

WORKDIR /opt/eventer
COPY cmd cmd 
COPY internal internal
COPY scripts scripts
COPY go.mod go.sum .

RUN PESCA_RELEASE=1 ./scripts/build.sh

FROM ubuntu:lunar
LABEL org.opencontainers.image.source="https://github.com/H1ghBre4k3r/eventer"

RUN apt update && apt install ca-certificates -y

WORKDIR /app

COPY --from=builder /opt/eventer/bin/eventer /app/
COPY ./frontend/dist /app/pb_public

ENTRYPOINT [ "/app/eventer", "serve", "--http=0.0.0.0:8090" ]
