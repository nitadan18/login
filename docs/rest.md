# Rest Apis

## rest.http file
&nbsp;
####
Using [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) (VS Code package) was created for testing purposes [rest.http](/rest.http) file (which is in root app) instead Postman collection

[rest.http](/rest.http)

&nbsp;
####
## Register / Sign Up new account
&nbsp;
####
### Request
&nbsp;
####
The request body should contain the username, and the password. 
```
APP_URL=http://localhost:4001/api/v1

POST {{APP_URL}}/register
Content-Type: application/json
Accept: application/json

{
    "userName": "test2@test.com",
    "passWord": "password2"
}
```
&nbsp;
####
### Response
&nbsp;
####
```
HTTP/1.1 201 Created
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 42
ETag: W/"2a-mVSxfczC3gw+7REc3lvdumDHCgE"
X-Response-Time: 561.094ms
Date: Tue, 22 Nov 2022 22:49:14 GMT
Connection: close

{
  "message": "New account has been created"
}
```
&nbsp;
####
## Login account
&nbsp;
####
### Request
&nbsp;
####
The request body should contain the username, and the password. 
```
APP_URL=http://localhost:4001/api/v1

POST {{APP_URL}}/login
Content-Type: application/json
Accept: application/json

{
    "userName": "test2@test.com",
    "passWord": "password2"
}
```
&nbsp;
####
### Response
&nbsp;
####
```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 298
ETag: W/"12a-3xM/5TJcbeX13jknMv11BpFDJl4"
X-Response-Time: 304.727ms
Date: Tue, 22 Nov 2022 22:50:41 GMT
Connection: close

{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QzQHRlc3QuY29tIiwiaWF0IjoxNjY5MTU3NDQxLCJleHAiOjE2NjkxNTkyNDF9.5lJpbjIGVTPTtUSGfaNa0wM9MMVGDnW8afIvokX2t_4",
  "token_type": "bearer",
  "refresh_token": "dca75161b722f8400ebef7b2c95af4bf315ce28ea20e65b168cb7e9616f13081",
  "scope": ""
}
```
&nbsp;
####
Was generate:
- acessToken - is a jwt token;
- refreshToken - is a jwt refresh token;
- token_type - bearer token type
- scope - scope jwt
&nbsp;
####
## Logout account
&nbsp;
####
### Request
&nbsp;
####
The request should contain `Authotization : Bearer Access_Token`. 
```
APP_URL=http://localhost:4001/api/v1
APP_BEARER=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QyQHRlc3QuY29tIiwiaWF0IjoxNjY5MTM0MzAyLCJleHAiOjE2NjkxMzYxMDJ9.TJd2il_XAn9jMksQCS10r_8zIpl09NE0dDIgTjv9pK0

POST {{APP_URL}}/logout
Content-Type: application/json
Accept: application/json
Authorization: Bearer {{APP_BEARER}}
```
&nbsp;
####
### Response
&nbsp;
####
```
HTTP/1.1 204 OK
```