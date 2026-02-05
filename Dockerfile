# ---------- Stage 1: Build ----------
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files first
COPY package.json package-lock.json ./

# Install ALL deps including devDependencies
RUN npm install

# Copy rest of the app
COPY . .

# Build Vite app
RUN npm run build

# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine

# Vite outputs to /dist (NOT build)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
