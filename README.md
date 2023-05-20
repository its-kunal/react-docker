# React Docker

This repository contains a template for running a React application in a Docker container using nginx as the web server.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Docker: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

## Getting Started

To get started, follow the steps below:

1. Clone this repository to your local machine:

```sh
git clone https://github.com/your-username/react-docker.git
```
Navigate to the project directory:

```sh
cd react-docker
```
Build the Docker image:

```sh
docker build -t react-app .
```
This will build a Docker image named react-app based on the provided Dockerfile and the contents of the project directory.

Run the Docker container:

bash
```sh
docker run -d -p 80:80 react-app
```
This command will start a Docker container based on the react-app image and map port 80 of the container to port 80 on your local machine. You can access the React application by opening http://localhost in your web browser.

If you prefer to use a different port on your local machine, you can modify the command to `docker -p <your-port>:80 react-app`.

## Image
Build of this image is available at [Link](https://hub.docker.com/repository/docker/dkunalpy3/react-test/general)
or you can pull image using this command:

```sh
docker pull dkunalpy3/react-test:v1
```


### Customization
You can customize the React application by modifying the files in the src directory. Once you make any changes, you will need to rebuild the Docker image using the docker build command mentioned above.

Feel free to customize this template according to your specific needs.
