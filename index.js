
const date = require('date-and-time')
const fs = require("fs")

//Get current date and Time.
const now = new Date();
const value = date.format(now, 'DD-MM-YYYY,HH:mm:ss')


//Make a text file with current date and time.
fs.writeFile("date-time.txt", `${value}`, function (err) {
    if (err) throw err
    
})

//Read a File Directory.
    fs.readFile("date-time.txt","utf-8",function(err,data){
    if(err) throw err;
    console.log(data);
})