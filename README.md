<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<br><br>

---

# 📽️ 영화 리뷰 앱 📽️

---

<br>

## 안내사항
- 본 레포지토리를 fork하여 과제를 수행하고, 완료시 PR을 보냅니다.
- 과제의 소스코드는 본인의 GitHub 레포지토리에 **Public**으로 올려주세요.
- 진행 간 문의사항은 이 레포지토리의 Issue로 등록해주세요.
- 구현 내용은 README.md 하단에 이어서 작성해 주세요.

<br>

## 기본 요구사항
- 아래 제시된 라이브러리, 프레임워크를 활용하여 영화 리뷰 앱을 구현합니다.
- 일관된 코딩 컨벤션을 유지해주세요.
- 기능 당 커밋은 필수입니다.

<br>

## 기술스택별 요구사항

### 1. Kotlin + Springboot
- 빌드 도구는 gradle를 사용해주세요.
- Spring data JPA를 사용해주세요.

### 2. Typescript + Nest.JS
- TypeORM을 사용해주세요.

### 3. Golang
- 프레임워크 사용은 자유입니다.
- Gorm이라는 ORM이 있지만 사용은 자유입니다.

<br>

## 도메인

- Movie
- Review

<br>

---

# 기능

## [📽️ 영화]

### 1. 영화 등록
  - 제목, 장르, 개봉일, 상영 종료일, 상영 중 여부 정보를 포함해야 합니다.
  - 등록 일자를 저장해야 합니다.
  - 장르는 스릴러, 로맨스, 코믹, 액션 네 가지만 등록 가능합니다.
  - 제목을 null로 등록하려고 할 때 예외를 처리합니다. (추가기능)
    
<br>
 
### 2. 영화 삭제
  - soft delete로 구현하여 영화 삭제시 리뷰 정보가 삭제 되지 않도록 합니다.
  - 조회 기능에서 삭제 처리된 영화는 조회하지 않도록 합니다.

<br>
 
### 3. 영화 수정
  - 제목, 장르, 개봉일, 상영 종료일, 상영 중 여부를 수정합니다.
  - 수정 일자가 업데이트되어야 합니다.

 <br>

### 4. 영화 단일 조회
  - 제목, 장르, 개봉일, 상영 종료일, 상영 중 여부 정보를 반환합니다.
  - 존재하지 않는 영화를 조회할 경우의 예외를 처리합니다. (추가기능)

 <br>

### 5. 영화 목록 조회
  - 하나의 API에서 장르, 현재 상영중 여부 조건을 선택하여 조회할 수 있어야 합니다. (쿼리 파라미터)
  - 개봉일 순으로 정렬합니다.

 <br>
    
### 6. 영화 목록 평점 순 조회 (추가기능)
  - 페이지네이션이 가능합니다.
  - 영화 정보와 영화별 평점평균을 반환합니다.

 <br> <br>

## [📝 리뷰]

### 7. 리뷰 등록
  - 영화에 대한 리뷰 등록이 가능해야 합니다.
  - 평점 (5점 만점), 리뷰 내용을 포함해야 합니다.

<br>

### 8. 리뷰 목록 조회
  - 영화별로 리뷰 목록 조회가 가능해야 합니다.
  - 등록일의 역순으로 정렬되어 있어야 합니다.
  - 평점 n점 이상만 조회하도록 필터링 조건을 추가할 수 있어야 합니다. (추가기능)
       예) 평점 3.5이상 리뷰 조회

<br><br>

## [✅ 유닛 테스트]
  - 유닛 테스트 코드를 작성합니다. (추가기능)

<br><br>

---

# 기여해주신 분

- [김영준](https://github.com/0BVer) 🦫
- [김하린](https://github.com/kimhalin) 🦦
- [김정현](https://github.com/kjeongh) 🦌
