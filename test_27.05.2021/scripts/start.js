   
        var box = document.querySelector(".box_products");
        box.style.display = "";
        document.querySelector(".box_details").style.display = "";
    
    var mass = [];

    for (let i = 0; i < product.length; i++) { 
        mass[i] = box.innerHTML;    // размножаем article 
    }
        for (let i = 0; i < product.length - 1; i++) { 
            box.innerHTML += mass[i];   // выводим article
        }
            for (let i = 0; i < product.length; i++) { 
                document.getElementsByClassName("box_product")[i].style.display = "none"; // скрыть все товары
                visible( i , "none" , "display" );    // скрыть details
            }