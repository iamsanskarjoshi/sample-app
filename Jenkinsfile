pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh """ 
                    npm i 
                """
            }
        }
        stage('Test') {
            steps {
                sh """
                    npm test
                """
            }
        }
    }
}