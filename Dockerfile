# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
