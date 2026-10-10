# 1. Use official Node.js base image
FROM node:24-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files first to leverage Docker layer caching n rest souce code
COPY package*.json ./
RUN npm ci
COPY . .   

# 5. Expose port 
EXPOSE 3000

# 6. Run app
CMD [ "node", "start" ]
