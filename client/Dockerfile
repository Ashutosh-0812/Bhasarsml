# Frontend Dockerfile - Using Node.js serve
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Accept build argument for API URL
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Copy package files
COPY package*.json ./

# Install dependencies including serve
RUN npm ci && npm install -g serve

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 80

# Start serve with SPA support on port 80
CMD ["serve", "-s", "build", "-l", "80"]
