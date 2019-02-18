FROM ubuntu:18.04
MAINTAINER Viraj Chitnis chitnisviraj@gmail.com

ENV NODE_DIR /opt/node
ENV NODE_VERSION 6.10.3
ENV ENVRC=/root/.bashrc

RUN apt-get update
RUN apt-get install -y curl xz-utils
RUN mkdir -p $NODE_DIR
RUN curl -O https://nodejs.org/download/release/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz && \
    tar -xJf node-v$NODE_VERSION-linux-x64.tar.xz -C $NODE_DIR

ENV PATH="$NODE_DIR/node-v$NODE_VERSION-linux-x64/bin:${PATH}"

EXPOSE 3000
VOLUME ["/src"]
WORKDIR /src
