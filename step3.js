/////////////////STEP 3////////////////////////////

const axios = require('axios');
const fs = require('fs');
const process = require('process');

function manageOutput(text, out){
    if(out) {
        fs.writeFile(out, text, 'utf8', function(err){
            if(err){
                console.error(`Unable to write ${out}: ${err}`);
                process.exit(1);
            }
        })
      
    }
    else{
        console.log(text)
    }
}
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
async function webCat(url){
    try {
        let data = await axios.get(url)
        console.log(data)
    } catch(err){
        console.log(`Error fetching ${url}: ${err}`)
        process.exit(1)
    }

        
    }
    
let out;
let path = process.argv[2];

if(process.argv[2] === '--out'){
    out = process.argv[3];
    path = process.argv[4];
}else{
    path = process.argv[2];
}

if(path.slice(0,4) === 'http'){
    webCat(path)
}
else{
    cat(path)
}


module.exports = {
    cat :cat,
    webCat: webCat,
    manageOutput:manageOutput
}