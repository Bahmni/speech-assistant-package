var fs = require('fs');
var STORAGE = "/usr/share/nginx/html/speech-assistant/feature-enable.txt"

function update(r){
    fs.writeFileSync(STORAGE, "");
    fs.appendFileSync(STORAGE, r.args.enabled);    
    r.return(200)
}
function get(r){
   let data =  fs.readFileSync(STORAGE);
    r.return(200, data)
}

export default {
	update, get
}

