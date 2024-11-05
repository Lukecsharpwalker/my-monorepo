# Use the Node image to build the application
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package and lock files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

# Use a lightweight server image for deployment
FROM nginx:alpine

# Copy built Angular app to Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the Cloud
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
