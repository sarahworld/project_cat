/////////////////STEP 1////////////////////////////

const fs = require('fs');
const process = require('process');

function cat(path){
    
    fs.readFile(path, 'utf8', function(err, data) {
        if(err){
            console.error(err);
            process.exit(1);
        }else{
            console.log(`file contents: ${data}`)
        }
        
    })
    
}

cat(process.argv[2])


module.exports = {
    cat :cat
}