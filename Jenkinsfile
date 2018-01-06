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
                echo "test 3"
                sh 'hostname'
                input message: 'Continue'
            }
        }
        stage('Build') {
            steps {
                echo "build"
                sh 'hostname'
                input message: 'Continue'
            }
        }
        stage('Release') {
            steps {
                sh 'hostname'
                input message: 'Continue'
            }
        }
    }
}
