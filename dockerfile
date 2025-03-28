# เริ่มต้นจาก Jenkins Alpine base image
FROM jenkins/jenkins:lts-alpine

# ติดตั้ง Node.js 18 Alpine
USER root
RUN apk add --no-cache nodejs npm

# ตั้งค่าให้ Jenkins ใช้ root user (ในบางกรณีการใช้ root ช่วยให้สามารถติดตั้ง node_modules หรือ package ที่ต้องใช้ root ได้)
USER jenkins

# เปิดพอร์ตที่ Jenkins ใช้งาน (default ports)
EXPOSE 8080 50000

# เริ่ม Jenkins server
CMD ["java", "-jar", "/usr/share/jenkins/jenkins.war"]
