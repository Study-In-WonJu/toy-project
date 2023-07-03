# toy-project
toy-project


## API 문서
https://documenter.getpostman.com/view/14960809/2s93sjUUbY#c7704ccb-3884-49ff-be47-62e1d6e8f37a


## 정리 내용 
테이블 구성:
Article 
id   PrimaryKey
title
content
lastDate

Comment
id   PrimaryKey
content 
lastDate
articleID ForeignKey

구현 순서:
1. 게시글 작성
2. 게시글 리스트 찾기
3. 게시글 하나 찾기 
4. 게시글 삭제
5. 게시글 수정 
6. 댓글 작성
7, 게시글 하나 찾기  + 데이터 추가
8. 댓글 삭제
9. 댓글 수정

깃허브 브랜치 규칙
front:feat#1
front:feat#2 

API 간단 요약본:
게시글  
  1. 작성 
    request:  post 요청으로 http://localhost:8080/article ,   body = {titile, content},  
    response: 응답 헤더 statusCode 201, body는 x
   예외는 201이 아닌 status일 시, body: message를  alert()
  
  2. 리스트 찾기  
   request: get 요청으로 http://localhost:8080/article 
   response: 응답 body: List<title articleId, lastDate>, 응답 헤더 statusCode 200
 
  3. 게시글 하나 찾기 
   reqeust: get 요청으로 http://localhost:8080/article/{articleId}
   response: 응답 body:  id, title, cotent, lastDate + 댓글 List<commentId, content, lastDate> ,응답 헤더 statusCode 200
          
  4. 삭제 기능 
   request: Delete 요청 http://localhost:8080/article/{articleId}  
   response: 응답 헤더 statusCode 204
 
  5. 수정 기능  
   request: PUT 요청 http://localhost:8080/article/{articleId} ,  body  = {content} 
   response: 응답 헤더 statusCode 204


댓글 
  1. 작성   
   request: post 요청으로 http://localhost:8080/article/{articleId}/comment ,  body = {content} 
   response: 응답 헤더 statusCode 201
  
  2. 삭제 기능  
   request: Delete 요청으로 http://localhost:8080/comment/{commentId} 
   response: 응답 헤더 statusCode 204
  
  3. 수정 기능 
   reqeust: PUT 요청으로 http://localhost:8080/comment/{commentId}  , body = {content}  
   response: 응답 헤더 statusCode 204
