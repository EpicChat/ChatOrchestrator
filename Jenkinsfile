pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'epic-chat/app-orchestrator:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'checkouting...'
                checkout scm
            }
        }

        stage('Build and test') {
            steps {
                  nodejs(nodeJSInstallationName: 'NodeJs 18') {
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'npm run test'
                  }
            }
        }

        stage('Docker Build') {
            steps { 
                script {
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }

        stage('Run Application') {
            steps {
                script {
                    sh 'docker stop epic-chat-orchestrator || true'
                    sh 'docker rm epic-chat-orchestrator || true'

                    sh "docker run -d --name=epic-chat-orchestrator -p 3003:3003 --hostname=app-orchestrator --network=global_network $DOCKER_IMAGE"
                }
            }
        }
    }
}
