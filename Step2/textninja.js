const { log } = require('console');

function addToText(fileName,textToAdd){
    const a=require('fs');
    a.readdir('./',function(error,files){
        if(error){
            a.writeFile(fileName,textToAdd,err=>{
                if(err){
                    console.log("Something went wrong "+err);
                }
                console.log("File was created and text was inserted");
            })
        }
        else{
            a.appendFile(fileName,textToAdd,fail=>{
                if(fail){
                    console.log("file is present but text cannot be append due to technical issue "+fail);
                }
                console.log("text was just entered into the file");
            })

        }
    });

}
module.exports=addToText;