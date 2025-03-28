pipeline {
  agent any

  environment {
    DOCKER_HUB_CREDENTIALS = credentials('dockerhub')
    DOCKER_IMAGE_BACKEND = "karthickdevops/backend"
    DOCKER_IMAGE_FRONTEND = "karthickdevops/frontend"
  }

  options {
    ansiColor('xterm')
  }

  stages {
    stage('Build & Push Backend') {
      steps {
        dir('backend') {
          script {
            sh "docker build -t $DOCKER_IMAGE_BACKEND:latest ."
            sh "echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
            sh "docker push $DOCKER_IMAGE_BACKEND:latest"
          }
        }
      }
    }

    ...

