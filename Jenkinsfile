pipeline {
  agent any

  environment {
    DOCKER_HUB_CREDENTIALS = credentials('dockerhub')
    DOCKER_IMAGE_BACKEND = "karthickdevops/backend"
    DOCKER_IMAGE_FRONTEND = "karthickdevops/frontend"
  }

  options {
    timestamps()
    ansiColor('xterm')
  }

  stages {
    stage('Docker Login') {
      steps {
        script {
          sh "echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin"
        }
      }
    }

    stage('Build & Push Backend') {
      steps {
        dir('backend') {
          sh "docker build -t ${DOCKER_IMAGE_BACKEND}:latest ."
          sh "docker push ${DOCKER_IMAGE_BACKEND}:latest"
        }
      }
    }

    stage('Build & Push Frontend') {
      steps {
        dir('frontend') {
          sh "docker build -t ${DOCKER_IMAGE_FRONTEND}:latest ."
          sh "docker push ${DOCKER_IMAGE_FRONTEND}:latest"
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/mongodb-deployment.yaml'
        sh 'kubectl apply -f k8s/backend-deployment.yaml'
        sh 'kubectl apply -f k8s/frontend-deployment.yaml'
      }
    }
  }
}

