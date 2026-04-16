# ---------- Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

ARG PUBLIC_URL_API
ENV PUBLIC_URL_API=$PUBLIC_URL_API

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- Runtime ----------
FROM node:20-alpine

WORKDIR /app

# instalar servidor estático liviano
RUN npm install -g serve

# copiar build
COPY --from=builder /app/dist ./dist

# puerto
EXPOSE 3010

# servir app
CMD ["serve", "-s", "dist", "-l", "3010"]
