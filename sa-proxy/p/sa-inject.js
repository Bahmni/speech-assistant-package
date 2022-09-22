fetch('feature.txt')
.then(response => response.text())
.then(data => {
    if(data){
        let myScript = document.createElement("script");
        myScript.setAttribute("src", "hello.js");
        document.body.appendChild(myScript);
    }
})