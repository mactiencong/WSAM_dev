pipeline {
    agent {
        docker {
            image 'bitnami/nginx' 
            args '-p 8888:80 -v /Users/matico/Workspace/Docker/nginx:/app' 
        }
    }
    stages {
        stage('Test') {
            steps {
                echo "test"
                input message: 'Continue'
            }
        }
        stage('Build') {
            steps {
                echo "build"
                input message: 'Continue'
            }
        }
        stage('Release') {
            steps {
                input message: 'Continue'
            }
        }
    }
}
