# Node.js 이미지를 기반으로 설정함
FROM node:18 AS builder
# 작업 디렉토리 설정
WORKDIR /usr/src/app
# package.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install
# 소스 코드를 컨테이너에 복사합니다. 
COPY . .

# TYPESCRIPT를 js 로 컴파일 합니다. 
RUN npm run build

# app을 시작합니다. 
CMD [ "node", "dist/main" ]
