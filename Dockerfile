FROM node:alpine

WORKDIR /home/node
COPY --chown=node:node . .

USER node
RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
