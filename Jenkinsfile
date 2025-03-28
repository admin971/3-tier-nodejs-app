pipeline {
  agent any
  ...
}

stage('Clone Repo') {
  steps {
    git credentialsId: 'github', url: 'https://github.com/admin971/3-tier-nodejs-app.git', branch: 'main'
  }
}

