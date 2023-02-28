FROM node:14-alpine

WORKDIR /app

COPY frontend/package*.json /app/
RUN npm install && npm cache clean --force

COPY frontend .

ENV PATH ./node_modules/.bin/:$PATH

# RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=1337

# CMD ["npm", "start"]