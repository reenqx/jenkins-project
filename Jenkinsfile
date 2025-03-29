pipeline {
    agent none

    environment {
        NETLIFY_SITE_ID = '43209e1b-2e89-4b47-91a5-92dd21a3c8e7'
        NETLIFY_AUTH_TOKEN = credentials('token')
    }

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'   // ใช้ Docker image ที่มี Node.js ติดตั้งอยู่แล้ว
                    reuseNode true
                }
            }
            steps {
                echo "🔍 Checking required files..."
                sh '''
                    test -f public/index.html || (echo "🚨 index.html is missing!" && exit 1)
                    test -f netlify/functions/app.js || (echo "⚠️ app.js is missing!" && exit 1)
                    echo "✅ All necessary files are available!"
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "🛠️ Running application test..."
                sh '''
                    node -e "require('./netlify/functions/app.js'); console.log('🎯 app.js loaded successfully!')"
                '''
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                echo "🚀 Installing Netlify CLI and deploying the project to Netlify..."
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify deploy \
                      --auth=$NETLIFY_AUTH_TOKEN \
                      --site=$NETLIFY_SITE_ID \
                      --dir=. \
                      --prod
                '''
            }
        }

        stage('Post Deploy') {
            steps {
                echo "🎉 Deployment complete! Your website is now live."
            }
        }
    }

    post {
        success {
            echo "✅ CI/CD pipeline executed successfully! 🎊"
        }
        failure {
            echo "❌ Pipeline failed. Please check the logs!"
        }
    }
}
