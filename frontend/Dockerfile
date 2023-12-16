FROM ubuntu:latest
LABEL authors="elena"

ENTRYPOINT ["top", "-b"]

# frontend/Dockerfile

# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install any needed packages specified
RUN npm install

# Bundle app source
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.py when the container launches
CMD ["npm", "run", "start"]
