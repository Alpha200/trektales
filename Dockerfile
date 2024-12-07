FROM node:16 AS builder

WORKDIR /opt/app/

# Copy files for npm package manager and repository config
COPY package.json ./
COPY package-lock.json ./

COPY .npmrc ./

# Download dependencies for this project (uses .npmrc as config)
RUN npm ci

# Copy all resources inkl. app source code to build the project
COPY . ./

# Run the production build process for docker images
RUN npm run build:prod --no-cache

# Use docker image Nginx to deliver the application on a web server
FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/*
COPY nginx.conf /etc/nginx/conf.d
COPY --from=builder /opt/app/dist/trektales/browser /var/www
