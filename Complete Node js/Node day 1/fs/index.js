const fs = require("fs")

// async - non blocking
// sync - blocking 

//* write -- if file doesnt exists create a new one 
fs.writeFileSync("sample.txt","hello this is my file");

fs.writeFile("sample.txt" , "Hello world this is updated content" , (err)=>{
     console.log(err)
 })


 //* read
fs.readFile("sample.txt" , "utf-8" , (err , data)=>{
   if(err){
        console.log(err)
  }

    console.log(data)
 })

 // update
fs.appendFile("sample.txt" , "\n I am new line" , (err)=>{
    console.log(err)
})

// delete

fs.unlink("sample.txt" , (err)=>{
    console.log(err)
}) 

