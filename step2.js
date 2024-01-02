/////////////////STEP 2////////////////////////////

const axios = require('axios');
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
async function webCat(url){
    try {
        let data = await axios.get(url)
        console.log(data)
    } catch(err){
        console.log(`Error fetching ${url}: ${err}`)
        process.exit(1)
    }

        
    }
    

let path = process.argv[2];

if(path.slice(0,4) === 'http'){
    webCat(path)
}
else{
    cat(path)
}


module.exports = {
    cat :cat,
    webCat: webCat
}