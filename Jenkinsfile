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
            }
        }
        stage('Build') {
            steps {
                echo "build"
            }
        }
        stage('Release') {
            steps {
                echo "Release"
            }
        }
    }
}
