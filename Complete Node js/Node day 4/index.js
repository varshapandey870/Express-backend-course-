//these chunks are stored in buffer memory for processing 
//req -- readable stream , res -- writable stream 
//creating http server 

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{
    res.end("helloo");
    //1. bad way of downloading file/data(read file) --without using streams
    //readfile will load the data all at once (large file not efficient )
    // fs.readFile("./sample.txt","utf-8",(err,data)=>{
    //     if(err){
    //           console.log(err);
    //           res.end();
    //     }else{
    //         res.end(data);
    //     }
    // })

    //good approach(using streams) -- load data in chunks 
    // const readstream = fs.createReadStream("./sample.txt","utf-8");
    // readstream.on("data",(chunk)=>{
    //      res.write(chunk);
    // })
    // readstream.on("end",()=>{
    //     res.end();
    // })

    //there can be other good ways as well where data loads in chunks 


});
const port = 3000;
server.listen(port,(req,res)=>{
    console.log(`server is running at port ${port}`);
})
