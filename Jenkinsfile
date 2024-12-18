pipeline {
    agent any
 
    stages {
        stage('Build'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    ls -la
                    node --version
                    npm --version 
                    npm ci 
                    npm run build
                    ls -la
                ''' 
            }
        }

        stage('Test'){
            agent {
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    test -f build/index.html
                    npm test
                '''
            }
        }

        stage('Deploy'){
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
    sh '''
        # List files and check node version
            ls -la
            node --version

        # Clear npm cache to avoid corrupted cache issues
            npm cache clean --force

        # Retry npm install command
            npm install netlify-cli -g || (echo "First attempt failed, retrying..."; npm install netlify-cli -g)
    '''
}

        }
    }

    post{
        always{
            junit 'test-results/junit.xml'
        }
    }
}