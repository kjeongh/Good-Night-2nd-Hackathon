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


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# 레스토랑 리뷰 앱

## 안내사항

- 본 레포지토리를 fork하여 과제를 수행하고, 완료시 PR을 보냅니다.
- 과제의 소스코드는 본인의 GitHub 레포지토리에 **Public**으로 올려주세요.
- 진행 간 문의사항은 이 레포지토리의 Issue로 등록해주세요.
- 구현 내용은 README.md 하단에 이어서 작성해 주세요.

## 기본 요구사항

- Spring Boot Framework를 활용하여 레스토랑 리뷰 앱을 구현합니다.
- Spring Data JPA를 활용하여 구현합니다. 그 외의 라이브러리는 자유롭게 선택이 가능합니다.
- 빌드 도구는 gradle를 사용해주세요.
- 일관된 코딩 컨벤션을 유지해주세요. (camelCase)
- REST API 규격을 맞춰주세요.
- 기능 당 커밋은 필수입니다.

### 도메인

- Restaurant
- Review

## 기능

### 리뷰 목록 조회

- 레스토랑 명, 리뷰 리스트를 내용을 반환합니다.
- 리뷰 리스트는 등록 순이나 역순으로 조회할 수 있고 pagination을 지원하며, 리뷰 제목과 내용으로 검색할 수 있습니다.

### 리뷰 조회

- 하나의 레스토랑명, 리뷰 제목, 리뷰 내용이 반환합니다.

### 리뷰 수정

- 리뷰를 수정할 수 있습니다.

### 리뷰 작성

- 리뷰에는 제목과 내용이 있습니다.

### 리뷰 삭제

- 리뷰 삭제에서는 하나의 리뷰를 삭제합니다.
- Hard Delete를 통해 데이터를 삭제합니다.

### 레스토랑 등록

- 레스토랑에는 레스토랑명, 레스토랑 카테고리 (한식, 중식, 일식 등)의 내용이 있습니다.
- 등록한 날짜를 기록해야 합니다.

### 레스토랑 수정

- 레스토랑의 카테고리만 변경할 수 있습니다.

### 레스토랑 목록 조회

- 레스토랑의 전체 목록을 조회할 수 있습니다.
- 레스토랑 카테고리에 따른 레스토랑 목록 조회를 할 수 있습니다.

### 레스토랑 조회

- 레스토랑 명, 카테고리, 음식점의 생성 일자가 반환 되어야 합니다.

### 레스토랑 삭제

- 레스토랑의 삭제로 인하여 작성된 리뷰들이 삭제 되면 안됩니다. (Soft Delete)

# 기여해주신 분

- [김기현](https://github.com/kim1387) ✨
- [김영준](https://github.com/0BVer) ✨
- [정길연](https://github.com/gilyeon00) ✨
- [최세연](https://github.com/barabobBOB) ✨
- [최우석](https://github.com/Sith-call) ✨
