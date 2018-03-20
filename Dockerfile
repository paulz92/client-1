FROM node:6
RUN git clone https://github.com/try-torq/client
WORKDIR client
RUN yarn && yarn build
EXPOSE 3000
CMD ['npm', 'start']
