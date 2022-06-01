function show() {
    var element = document.getElementById("description");
    element.style.maxHeight  = "3000px";
    var element = document.getElementById("read_text");
    element.style.display = 'none';  
    var element = document.getElementById("gradient");
    element.style.display = 'none';  
    var element = document.getElementById("сollapse");
    element.style.display = 'block';  
}

function hide() {
    var element = document.getElementById("description");
    element.style.maxHeight  = "341px";
    var element = document.getElementById("read_text");
    element.style.display = 'block';  
    var element = document.getElementById("gradient");
    element.style.display = 'block';  
    var element = document.getElementById("сollapse");
    element.style.display = 'none';  
}

function installClick() {
    fbq('trackCustom', 'Install');
    window.alert("Oops! Something went wrong...");
}

fbq('track', 'PageView');