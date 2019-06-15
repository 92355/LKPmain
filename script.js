function change () {
    var p = document.getElementById("ex1");
    
        p.src = "해변2.jpg";
    
}
function change2 () {
    var p = document.getElementById("ex1");
    
        p.src = "해변3.jpg";
}
function change3 () {
    var p = document.getElementById("ex1");
    
        p.src = "해변1.jpg";
}
setInterval(change, 3000);
setInterval(change2, 3500);
setInterval(change3, 4000);