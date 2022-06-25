FROM node:16
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx prisma migrate deploy
CMD ["npm", "start"]
