    function button_add(){

      //  document.querySelector(".box-atic");
    
    var text = document.createElement("div");
    text.innerHTML = "Добавьте товары для сравнения&nbsp;";
    var button = document.createElement("button");
    var link = document.createTextNode ("из каталога");
    button.appendChild(link);
    button.title = 'каталог';
    button.style.border = 0;
    button.style.color = "#f50010";
    button.style.background = "none";
    button.style.cursor = "pointer";  
    button.style.fontFamily = "Gilroy";
    button.style.fontSize = "22px";  
    button.style.fontWeight = "500";
    text.appendChild(button);

    return text.innerHTML;

}