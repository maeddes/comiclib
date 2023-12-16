FROM ubuntu:latest
LABEL authors="elena"

ENTRYPOINT ["top", "-b"]

# backend/Dockerfile

# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jre-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the JAR file into the container at /app
COPY target/comiclib-0.0.1-SNAPSHOT.jar /app/comiclib.jar

# Make port 8090 available to the world outside this container
EXPOSE 8090

# Run the JAR file
CMD ["java", "-jar", "comiclib.jar"]
