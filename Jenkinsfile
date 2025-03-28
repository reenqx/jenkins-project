pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'nfp_CThpCK2NcZYxVMyH6FWVtemi3mhurqyBb170v'
        NETLIFY_AUTH_TOKEN = credentials('netlify-tokens')
    }

    stages {
    stage('Build') {
        agent {
            docker {
                image 'node:18-alpine'
                dockerArgs '-v /var/run/docker.sock:/var/run/docker.sock' // Add this line
                reuseNode true
            }
        }
        steps {
            echo "🔍 Verifying required files..."
            sh '''
                test -f index.html || (echo "🚨 index.html is missing!" && exit 1)
                test -f netlify/functions/random-song.js || (echo "⚠️ The random song function is missing!" && exit 1)
                echo "✅ All necessary files are in place!"
            '''
        }
    }

    stage('Test') {
        
        steps {
            echo "🛠️ Running function load test..."
            sh '''
                node -e "require('./netlify/functions/random-song.js'); console.log('🎯 Function loaded successfully!')"
            '''
        }
    }

    stage('Deploy') {
        
        steps {
            echo "🚀 Deploying the project to Netlify..."
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
            echo "🎉 Deployment is complete! Your website is now live."
        }
    }
}

post {
    success {
        echo "✅ CI/CD pipeline executed successfully! 🎊"
    }
    failure {
        echo "❌ An error occurred during the pipeline execution. Please check the logs!"
    }
}

        
}