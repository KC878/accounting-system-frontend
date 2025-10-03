# syntax=docker/dockerfile:1


ARG NODE_VERSION=22.18.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default

WORKDIR /usr/src/app

# Install dependencies 
COPY package*.json ./
RUN npm ci

# Copy source fles 
COPY . .

# Copy development env variable
COPY .env.development .env


# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["npm", "run", "dev"]
