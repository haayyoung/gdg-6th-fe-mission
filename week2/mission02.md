커스텀 훅의 이점: useFetchUser와 같은 커스텀 훅을 만들어 사용하면, 여러 페이지에서 공통으로 사용하는 로직(데이터 패칭, 상태 관리 등)을 한 곳으로 모아 코드의 중복을 줄일 수 있습니다.

주의사항: 커스텀 훅은 유용하지만 너무 남발하지 않는 것이 좋으며, 더 나은 방법들이 있을 수 있음을 인지해야 합니다

여러 페이지를 가진 서비스를 만들기 위해 페이지별로 URL을 할당하는 방법을 소개. 리액트 라우터 라이브러리 .. 패키지 관리, 라이브러리 설치, 설치 확인 등 .. 
랜더함수 다시 넣으면 브라우저 주소창에 /user/1 또는 /user/2를 입력하여 각기 다른 유저 페이지가 정상적으로 출력

react router 적용과정
터미널에
npm i react-router
npm run dev
작성

main.jsx 수정
import { createBrowserRouter, RouterProvider } from 'react-router'
라우터 기능을 가져오는 코드 작성

tailwindcss 적용과정

터미널에
npm install tailwindcss @tailwindcss/vite
작성
vite.config.js 수정

 plugins: [
    react(),
    tailwindcss(),
  ],
tailwindcss 추가한것이 핵심

