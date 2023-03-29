# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install the serve package globally
RUN npm install -g serve

# Expose the port the server will run on
EXPOSE 3500

# Start the server
CMD ["serve", "-s", "build", "-l", "3500"]
