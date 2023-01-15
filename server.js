//import function tứ file js khác

/*
import { sum,mutiple,substract } from "./calculation.js";


console.log(`3 plus 17: ${sum(3,17)}`);
console.log(`10 mutiple 10: ${mutiple(10,10)}`)
console.log(`20 substract 5: ${substract(20,5)}`);
*/
import express from "express"; 
import * as doenv from "dotenv"
doenv.config()// must have: bắt buộc
import connect from "./Database/database.js"; 
// xử lí nhiều đối tượng router
import {userRouter,studentRouter} from "./routers/index.js";
//xử lí 1 đối tượng router
//import userRouter from "./routers/user.js";



//send test request using postman


const app = express(); //Tạo một ứng dụng Express. Hàm express() là hàm cấp cao nhất được xuất bởi mô-đun express.
/*Cho phep doc the body của đối tượng request (Trả về phần mềm trung gian chỉ phân tích cú pháp json
và chỉ xem xét các yêu cầu trong đó tiêu đề Loại nội dung khớp với tùy chọn loại.)*/
app.use(express.json());
const port = process.env.PORT ?? 3000;


//router 
app.use('/users',userRouter)
app.use('/students',studentRouter)

//root router 
app.get('/', (req, res) =>{
    res.send('response send root router , `11222');
});

//Lắng nghe chạy server port
app.listen(port,async()=>{
    await connect()
    console.log(`listening on port :${port}`);
}) // ?? Default value (if null)