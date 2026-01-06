//example to show the order of execution in the main thread and event loop 


/*  ------------------------------------------------------------------------------------- 
1 top level code --> 2expired timer callbacks -->io polling (fs success) -->setimmidiate  
   io polling or timers can take some more time so event loop  will not wait it will
    check for other things
  ---------------------------------------------------------------------------------- */

const fs = require("fs")

console.log("Hello from top level code")//1


setTimeout(()=>console.log("Hello from timer-1") , 0); //3

setImmediate(()=>console.log("Hello from setImmediate")) //4

fs.readFile("sample.txt" , "utf-8" , ()=>{
    console.log("IO polling")
}) //5

console.log("Hello from top level code 2") //2