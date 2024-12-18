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
                    
                    ls -la
                    node --version
            
                    
                    npm cache clean --force
            
                    echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf > /dev/null
                    echo "nameserver 8.8.4.4" | sudo tee -a /etc/resolv.conf > /dev/null
            
                    npm install netlify-cli || (echo "First attempt failed, retrying..."; npm install netlify-cli)
            
                    sudo apt-get update && sudo apt-get install -y libvips-dev
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