pipeline {
    agent any

    environment {
        // กำหนดค่า environment variables สำหรับการใช้งานกับ Netlify
        NETLIFY_SITE_ID = '43209e1b-2e89-4b47-91a5-92dd21a3c8e7' // ตัวระบุของ Netlify site
        NETLIFY_AUTH_TOKEN = credentials('token') // ใช้ token จาก Jenkins credentials
    }

        stage('Check Node.js Installation') {
            steps {
                echo "🔍 Checking Node.js version..."
                sh 'node --version || (echo "Node.js is not installed." && exit 1)'
                sh 'npm --version || (echo "npm is not installed." && exit 1)'
            }
        }
    
    stages {
        // ขั้นตอนการ Build
        stage('Build') {
            steps {
                echo "🔍 Checking required files..."
                // ตรวจสอบว่าไฟล์ index.html และ app.js อยู่ในตำแหน่งที่ถูกต้อง
                sh '''
                    test -f public/index.html || (echo "🚨 index.html is missing!" && exit 1)
                    test -f netlify/functions/app.js || (echo "⚠️ app.js is missing!" && exit 1)
                    echo "✅ All necessary files are available!"
                '''
            }
        }

        // ขั้นตอนการทดสอบ
        stage('Test') {
            steps {
                echo "🛠️ Running application test..."
                // ทดสอบการโหลด app.js และให้ข้อมูลว่าโหลดสำเร็จ
                sh '''
                    node -e "require('./netlify/functions/app.js'); console.log('🎯 app.js loaded successfully!')"
                '''
            }
        }

        // ขั้นตอนการ Deploy
        stage('Deploy') {
            steps {
                echo "🚀 Deploying the project to Netlify..."
                // ติดตั้ง netlify-cli และทำการ deploy ไปยัง Netlify
                sh '''
                    npm install netlify-cli
                    node_modules/.bin/netlify deploy --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID --dir=. --prod
                '''
            }
        }

        // ขั้นตอนหลังจากการ Deploy
        stage('Post Deploy') {
            steps {
                echo "🎉 Deployment complete! Your website is now live."
            }
        }
    }

    // การกำหนดการดำเนินการหลังจาก Pipeline เสร็จสิ้น
    post {
        success {
            echo "✅ CI/CD pipeline executed successfully! 🎊"
        }
        failure {
            echo "❌ Pipeline failed. Please check the logs!"
        }
    }
}
