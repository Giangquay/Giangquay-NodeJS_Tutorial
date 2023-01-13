# Tự học NodeJS 2023 - MongoDB Mongoose - JWT | JSON Web Token

How to install express with command line

1. yarn add express && yarn install --save express
2. npm install express --save : cài thư viện expressJS

Libary useful for frameworks express <br />
### yarn add dotenv : là thư viện cấu hình tới file port server.js <br />
### yarn add nodemon && npm install -g nodemon:Mỗi lần sửa code cập nhật ngay<br />
After when use adotenv <br />
*Ctrl+c -> Để thoát và chạy lại server ->>>  listening on port*<br />
After when use nodemon<br />
*chạy lại = lệnh nodemon file.js*<br />

## Bao nhiêu thực thể thì có bấy nhiêu router

## debugger -------------------------> node inspect server.js   //c để tiếp tục  /// list(value) để xem số lượng dòng debugger 
 chế độ debug> repl để xem request **request.params** && **request?.params?.id có thể null**
  && **request?.params?.id ? "" không có thông tin trả về ""**

{
  "name": "myapp", <br />
  "type": "module",      **"type": "module" trong package.json : config cho phép import các file js sử dụng trong cùng nhau**<br />
  "version": "1.0.0",<br />
  "description": "",<br />
  "main": "index.js",<br />
   "scripts": {<br />
    "start": "nodemon server.js",<br />
    "debug": "node inspect server.js"<br />
  },<br />
  "keywords": [],<br />
  "author": "",<br />
  "license": "ISC",<br />
  "dependencies": {  **Nơi chứa các thư viện**<br />
    "express": "^4.18.2" **Phiên bản thư viện**<br />
    "dotenv": "^16.0.3", **thư viện cấu hình tới file port server.js**<br />
    "nodemon": "^2.0.20"   **Mỗi lần sửa code cập nhật ngay**<br />
  }<br />
}<br />
<br />
With long command line ,let user scripts  
<br />
 "scripts": {<br />
    "start": "nodemon server.js",<br />
    "debug": "node inspect server.js"<br />
  },<br />
  
## Chỉ cần dùng yarn start thì sẽ tự động chạy script.start


## JSON 

**
Response(json) Eg:{"name":"Nguyen Minh Giang","password":1232312312}
node a "parser" :Express/Json parser

//debug để xem js phải thêm app.use(express.Json)
debug 
repl

request.body
request.body.key
**



*Thêm sự kiện events có sẵn trong node Notify*
import { EventEmitter } from "node:events";