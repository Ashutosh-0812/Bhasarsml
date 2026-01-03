# Frontend Dockerfile - Using Express server
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Accept build argument for API URL
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Remove devDependencies after build
RUN npm prune --production

# Expose port
EXPOSE 80

# Start Express server
CMD ["node", "server.js"]
