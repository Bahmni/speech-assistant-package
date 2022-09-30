var fs = require('fs');
var STORAGE = "/usr/share/nginx/feature-toggle.txt"

function update(r){
    if (r.args.enabled === undefined) {
        let data = fs.readFileSync(STORAGE);
        r.return(200, data)
    }
    fs.writeFileSync(STORAGE, "");
    fs.appendFileSync(STORAGE, r.args.enabled);    
    r.return(200)
}

export default {
	update
}

