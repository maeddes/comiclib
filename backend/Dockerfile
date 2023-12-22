#FROM ubuntu:latest
#LABEL authors="elena"
#ENTRYPOINT ["top", "-b"]

FROM maven:3-eclipse-temurin-17 AS build
RUN mkdir -p /opt/app/src
COPY src /opt/app/src
COPY pom.xml /opt/app
RUN mvn -f /opt/app/pom.xml clean package

# backend/Dockerfile

# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:17-jre-alpine AS run

# Set the working directory to /app
WORKDIR /app

# Copy the JAR file into the container at /app
COPY --from=build /opt/app/target/comiclib-0.0.1-SNAPSHOT.jar /app/comiclib.jar

# Make port 8090 available to the world outside this container
EXPOSE 8090

# Run the JAR file
CMD ["java", "-jar", "comiclib.jar"]
