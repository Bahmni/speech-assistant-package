fetch('sa/feature.txt')
.then(response => response.text())
.then(data => {
     if(data === "true"){
        const myScript = document.createElement("script");
        myScript.setAttribute("src", "dist/bundle.js");
        myScript.setAttribute("id", "sa-bundle")
        document.body.appendChild(myScript);
    } else if(data === "false"){
        var mfContainer = document.body.querySelector("div[mf-container='sa']")
        if(mfContainer) {
            mfContainer.remove()
        }
        var bundle = document.getElementById("sa-bundle")
        if(bundle) {
        document.body.removeChild(bundle); }
    }
})