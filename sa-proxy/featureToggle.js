var fs = require('fs');
var STORAGE = "/usr/share/nginx/html/sa/feature.txt"

function update(r){
    fs.writeFileSync(STORAGE, "");
    fs.appendFileSync(STORAGE, r.args.enabled);    
    r.return(200)
}

export default {
	update
}