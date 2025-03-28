pipeline {
  agent any

  environment {
    DOCKER_HUB_CREDENTIALS = credentials('dockerhub')
    DOCKER_IMAGE_BACKEND = "karthickdevops/backend"
    DOCKER_IMAGE_FRONTEND = "karthickdevops/frontend"
  }

  stages {
    stage('Clone Repo') {
      steps {
        git credentialsId: 'github', url: 'https://github.com/admin971/3-tier-nodejs-app.git', branch: 'main'
      }
    }

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

    stage('Build & Push Frontend') {
      steps {
        dir('frontend') {
          script {
            sh "docker build -t $DOCKER_IMAGE_FRONTEND:latest ."
            sh "echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
            sh "docker push $DOCKER_IMAGE_FRONTEND:latest"
          }
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
