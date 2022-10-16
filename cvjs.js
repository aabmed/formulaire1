var ob = document.getElementById("obj");
var obp = document.getElementById("obi");
ob.onclick = function(event){
    event.preventDefault();
    let inp=document.createElement("input");
    let esp=document.createElement("br");
    obp.appendChild(inp);
    obp.appendChild(esp)
}
