/*   --------------------------------------------------------------------------
crpto is an example of cpu heavy task so it will go to the thread pool 
and by default there are 4 threads . in this example we are creating 7 hashed passwords 
so ist 4 will be done on aprox same time and other three will be on same time (take more 
time  because they will be solved after the threads become free from previous task) 
------------------------------------------------------------------------------  */
const crypto = require("crypto");
const os = require("os")

console.log(os.cpus().length)

process.env.UV_THREADPOOL_SIZE = 16;

let start = Date.now();


crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});


crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});


crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});