pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'build'
            }
        }
        stage('Test') {
            steps {
                sh 'make test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'make deploy'
            }
        }
    }
}