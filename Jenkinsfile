pipeline {
    agent {
        docker {
            image 'bitnami/nginx' 
            args '-p 8081:80 -v /Users/matico/Workspace/Docker/nginx:/app --name nginx' 
        }
    }
    stages {
        stage('Test') {
            steps {
                echo "Test"
                sh 'hostname'
                input message: 'Continue'
            }
        }
        stage('Build') {
            steps {
                echo "Build"
            }
        }
        stage('Release') {
            steps {
                echo "Release"
            }
        }
    }
}
