# Build stage
FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .
RUN bun run build

# Production stage
FROM oven/bun:latest

WORKDIR /app

COPY package.json .
RUN bun install --production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["bun", "run", "start"]
