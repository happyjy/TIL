
<!-- TOC -->

- [간략 설명](#간략-설명)
- [](#)
- [1. 부 전동적인 디자인 패턴](#1-부-전동적인-디자인-패턴)
  - [1.1. 코드구성](#11-코드구성)
    - [1.1.1. 코드 청크](#111-코드-청크)
    - [1.1.2. 전역 범위의 문제](#112-전역-범위의-문제)
    - [1.1.3. 자바스크립트의 객체](#113-자바스크립트의-객체)
    - [1.1.4. 프로토타입 구축](#114-프로토타입-구축)
    - [1.1.5. 상속](#115-상속)
    - [1.1.6. 모듈](#116-모듈)
    - [1.1.7. ECMAScript 6 클래스와 모듈](#117-ecmascript-6-클래스와-모듈)
    - [1.1.8. 모범사례및 문제해결](#118-모범사례및-문제해결)
  - [1.2. 생성패턴](#12-생성패턴)
    - [1.2.1. 추상팩토리](#121-추상팩토리)
    - [1.2.2. 빌더](#122-빌더)
    - [1.2.3. 팩토리 메소드](#123-팩토리-메소드)
    - [1.2.4. 단일체](#124-단일체)
    - [1.2.5. 프로토타입](#125-프로토타입)+
  - [1.3. 구조패턴](#13-구조패턴)
    - [1.3.1. 적응자](#131-적응자)
    - [1.3.2. 복합체](#132-복합체)
    - [1.3.3. 장식자](#133-장식자)
    - [1.3.4. 퍼사드](#134-퍼사드)
    - [1.3.5. 플라이급](#135-플라이급)
    - [1.3.6. 프록시](#136-프록시)
  - [1.4. 행동패턴](#14-행동패턴)
    - [1.4.1. 책임연쇄](#141-책임연쇄)
    - [1.4.2. 명령](#142-명령)
    - [1.4.3. 해석자](#143-해석자)
    - [1.4.4. 반복자](#144-반복자)
    - [1.4.5. 중재자](#145-중재자)
    - [1.4.6. 메멘토](#146-메멘토)
    - [1.4.7. 감시자](#147-감시자)
    - [1.4.8. 상태](#148-상태)
    - [1.4.9. 전략](#149-전략)
    - [1.4.10. 템플릿 메소드](#1410-템플릿-메소드)
- [2. 부 그밖의 패턴](#2-부-그밖의-패턴)
  - [2.1. 함수형 프로그랭](#21-함수형-프로그랭)
    - [2.1.1. 함수전달](#211-함수전달)
    - [2.1.2. 필터와파이프](#212-필터와파이프)
    - [2.1.3. 어큐뮬레이터](#213-어큐뮬레이터)
    - [2.1.4. 메모이제이션](#214-메모이제이션)
    - [2.1.5. 불변성](#215-불변성)
    - [2.1.6. 지연인스턴스생성](#216-지연인스턴스생성)
  - [2.2. 모델 뷰 패턴](#22-모델-뷰-패턴)
    - [2.2.1. MVC 패턴](#221-mvc-패턴)
    - [2.2.2. MVP 패턴](#222-mvp-패턴)
    - [2.2.3. MVVM 패턴](#223-mvvm-패턴)
  - [2.3. 웹 패턴](#23-웹-패턴)
    - [2.3.1. 자바스크립트 전송](#231-자바스크립트-전송)
    - [2.3.2. 플러그인](#232-플러그인)
    - [2.3.3. 한번에 두가지 일을 처리하기: 멜티스레드](#233-한번에-두가지-일을-처리하기-멜티스레드)
    - [2.3.4. 서킷브레이커 패턴](#234-서킷브레이커-패턴)
  - [2.4. 메시징 패턴](#24-메시징-패턴)
  - [2.5. 테스트를 위한 패턴](#25-테스트를-위한-패턴)
  - [2.6. 고급패턴](#26-고급패턴)
    - [2.6.1. 의존성 주입](#261-의존성-주입)
    - [2.6.2. 라이브 후처리](#262-라이브-후처리)
    - [2.6.3. 관점지향 프로그래밍](#263-관점지향-프로그래밍)
    - [2.6.4. 매크로](#264-매크로)
  - [2.7. 오늘날의 ES6 솔루션](#27-오늘날의-es6-솔루션)
    - [2.7.1. 타입스크립트](#271-타입스크립트)
    - [2.7.2. 트레이서](#272-트레이서)

<!-- /TOC -->
# 1. 간략 설명
* 2장 
  - 재사용 가능하고 이해하기 쉬운 코드 구성 방법
  - 클래스를 생성하는 방법
  - 코드 모듈화의 필요성과 자바스크립트 뮤듈을 생성하는 방법

* 3장 
  - 클래스의 인스턴스를 생성하는 방법
  - 재사용을 위해 객체의 생성을 최적화하는 방법

* 4장
  - 객체들이 상호작용 할 수 있는 간단한 방법으로 디자인을 쉽게 해주는 패턴인 구조 패턴(Structural patterns)
  - GoF의 책에 설명된 패턴으로 한정
  - GoF의 책 발간 이후 발표된 구조패턴은 part2에서 

# 3. 부 전동적인 디자인 패턴

## 3.1. 코드구성
### 3.1.1. 코드 청크
### 3.1.2. 전역 범위의 문제
### 3.1.3. 자바스크립트의 객체
### 3.1.4. 프로토타입 구축
### 3.1.5. 상속
### 3.1.6. 모듈 
### 3.1.7. ECMAScript 6 클래스와 모듈
### 3.1.8. 모범사례및 문제해결

## 3.2. 생성패턴
### 3.2.1. 추상팩토리
### 3.2.2. 빌더
### 3.2.3. 팩토리 메소드
### 3.2.4. 단일체
### 3.2.5. 프로토타입

## 3.3. 구조패턴
### 3.3.1. 적응자
### 3.3.2. 복합체
### 3.3.3. 장식자
### 3.3.4. 퍼사드
### 3.3.5. 플라이급
### 3.3.6. 프록시

## 3.4. 행동패턴
### 3.4.1. 책임연쇄
### 3.4.2. 명령
### 3.4.3. 해석자
### 3.4.4. 반복자
### 3.4.5. 중재자
### 3.4.6. 메멘토
### 3.4.7. 감시자
### 3.4.8. 상태
### 3.4.9. 전략
### 3.4.10. 템플릿 메소드

# 4. 부 그밖의 패턴
## 4.1. 함수형 프로그랭
### 4.1.1. 함수전달
### 4.1.2. 필터와파이프
### 4.1.3. 어큐뮬레이터
### 4.1.4. 메모이제이션
### 4.1.5. 불변성
### 4.1.6. 지연인스턴스생성

## 4.2. 모델 뷰 패턴
### 4.2.1. MVC 패턴 
### 4.2.2. MVP 패턴
### 4.2.3. MVVM 패턴

## 4.3. 웹 패턴
### 4.3.1. 자바스크립트 전송
### 4.3.2. 플러그인
### 4.3.3. 한번에 두가지 일을 처리하기: 멜티스레드
### 4.3.4. 서킷브레이커 패턴

## 4.4. 메시징 패턴

## 4.5. 테스트를 위한 패턴
## 4.6. 고급패턴
### 4.6.1. 의존성 주입
### 4.6.2. 라이브 후처리
### 4.6.3. 관점지향 프로그래밍
### 4.6.4. 매크로

## 4.7. 오늘날의 ES6 솔루션
### 4.7.1. 타입스크립트
### 4.7.2. 트레이서