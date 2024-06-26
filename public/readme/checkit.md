# CheckIt

## **🍀 Introduction**

<img width="269" alt="스크린샷 2023-11-22 오후 9 46 59" src="https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/5ad668a4-e445-4378-954f-8be4c413d0c1">


> **그래프 기반 독서 기록 서비스**
> 
> 
> - 서점 사이트 크롤링하여 책 데이터를 저장해요
> - 나만의 서재 만들어 기록할 수 있어요
> - 등록한 책을 쌓아볼 수 있어요
> - 일주일 독서 추세를 그래프로 볼 수 있어요
> 

<br>

## **📌 System Architecture**
![image (4)](https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/86594108/f2cf6a39-3ad3-4606-aaf0-800b77abcdcd)

<br>

## **📚 Tech Stack**

|Frontend|Backend|Test|Database|DevOps| 
| :-----: | :-----: | :-----: | :-----: | :-----: |
| <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <br> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"> <br> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <br> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <br> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <br> <img src="https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white"> <br> <img src="https://img.shields.io/badge/three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white"> <br> | <br> <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <br> <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"> <br> <img src="https://img.shields.io/badge/rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"> <br> <img src="https://img.shields.io/badge/logstash-005571?style=for-the-badge&logo=logstash&logoColor=white"> <br> <img src="https://img.shields.io/badge/elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white"> <br> | <img src="https://img.shields.io/badge/junit5-25A162?style=for-the-badge&logo=junit5&logoColor=white"> <br> | <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <br> <img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"> <br> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"> <br> | <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white"> <br> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> <br> <img src="https://img.shields.io/badge/Amazon EC2 -FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <br> <img src="https://img.shields.io/badge/Github Actions-2088FF?style=for-the-badge&logo=Github Actions&logoColor=white"> <br> | 


<br>

## **🔍 Features**

- 메인 페이지 + 로그인
    ![메인](https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/46607bee-68b9-4fd2-a2a7-2b1e58b1837f)
    
    - 밀리의 서재 서비스와 비슷하게 구현
    - 스크롤 위치에 따른 이벤트를 적용시켜 동적인 메인페이지 퍼블리싱 진행
- 검색 페이지

   ![검색3](https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/86594108/d3612d60-0f83-41e6-b8fe-de18bb2e6cbd)
    - swiper 를 사용한 슬라이더 구현
    - 인기있는 도서 안내
        - 가장 좋아요 수를 많이 받은 책
    - 최근 출시작 안내
        - 가장 최근에 출시된 신작
    - 책 검색 기능
    - 내 서재 등록
        - 읽기, 다 읽은 책 버튼을 활용한 내 서재 관리
    - 좋아요 기능
        - 좋아요 버튼을 눌러 “찜한 책” 등록 가능
- 내 서재 페이지
    ![내서재](https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/0b431e65-e080-4420-9ae1-885df1800e20)
    
    - Pagination 을 이용하여 서재 구현
        - 읽은 페이지 기록
        - 리뷰 작성 기능
- 독서 통계 페이지
    ![통계](https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/7ce99eb5-8252-4d86-b1a1-1669ccfc6a84)
  
    - **Three.js** 를 이용한 독서 기록 시각화
        - 읽은 책의 페이지 수에 따라 책 컴포넌트 두께를 다르게 설정
    - **Chart.js** 를 이용한 독서 기록 시각화
        - 완독 날짜를 기준, 일주일 단위로 독서량 체크
- 관리자 문의하기 채팅 기능
    ![문의하기](https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/86594108/cc8d017a-951d-4222-81e8-0de8b5e9c156)

    - 웹소켓을 사용한 실시간 통신 구현
        - WebSocket + STOMP를 활용한 실시간 관리자 채팅 구현

<br>

## Swagger

Frontend와 Backend 통신을 위한 API 문서화는 Swagger를 이용

<img width="885" alt="swagger 1" src="https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/f5e4b3d2-dfe9-4ff7-a2e2-aa116340cead">
<img width="883" alt="swagger 2" src="https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/deb8e447-2ebb-4156-acff-ccc10e0ee484">
<img width="881" alt="swagger 3" src="https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/f03d9a38-5f88-48b0-a00d-4f914c92d01c">
<img width="882" alt="swagger 4" src="https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/4677c4f0-0e31-44eb-8089-dfcbda8bcba3">

<br>

## ERD

<img width="1036" alt="erd" src="https://github.com/2023-Team-Joon-CheckIt/checkIt/assets/85063965/4ef95cd9-6c51-4a1f-9e19-ea47226134ec">

<br>

## 👥 Our Team

| Name | 박희경 | 송지민 | 김선재 | 정우희 | 권찬영 | 고원준 |
| ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| Profile | <img width="100px" alt="박희경" src="https://avatars.githubusercontent.com/u/101381901?v=4"> | <img width="100px" alt="송지민" src="https://avatars.githubusercontent.com/u/84628898?v=4"> | <img width="100px" alt="김선재" src="https://avatars.githubusercontent.com/u/83015089?v=4"> | <img width="100px" alt="정우희" src="https://avatars.githubusercontent.com/u/121246589?v=4"> | <img width="100px" alt="권찬영" src="https://avatars.githubusercontent.com/u/85063965?v=4"> | <img width="100px" alt="고원준" src="https://avatars.githubusercontent.com/u/86594108?v=4"> | 
| Role | Backend, DevOps | Backend, DevOps | Frontend | Frontend | Backend | Frontend | 
| gitHub  | [@gmlrude](https://github.com/gmlrude) | [jiminsong490](https://github.com/jiminsong490) | [@sunjae98](https://github.com/sunjae98) | [@Joy0w0](https://github.com/Joy0w0) | [@fnzl54](https://github.com/fnzl54) | [@KoneJ](https://github.com/KoneJ) | 
