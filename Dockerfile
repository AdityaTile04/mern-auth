
FROM node
WORKDIR /app


COPY client/package*.json ./
RUN npm install
COPY client/ ./

RUN npm run build


FROM node
WORKDIR /app


COPY api/package*.json ./
RUN npm install
COPY api/ ./


COPY --from=builder /app/dist ./client/dist


EXPOSE 3000


CMD ["npm", "run", "dev"]
