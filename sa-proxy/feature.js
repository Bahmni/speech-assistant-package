var fs = require('fs');
var STORAGE = "/usr/share/nginx/html/feature.txt"

function f(r){
    fs.writeFileSync(STORAGE, "");
    fs.appendFileSync(STORAGE, r.args.enabled);    
    r.return(200)
}

export default {
	f
}