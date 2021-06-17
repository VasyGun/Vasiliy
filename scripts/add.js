
            var block_cart = document.getElementsByClassName('add_cart');  // добавление товара
    for (let i = 0; i < block_cart.length; i++) { 

        block_cart[i].addEventListener('click', function() {

            document.getElementsByClassName("box_arrow")[0].style.display = 'none'; // скроем стрелки 

            if( block_cart[i].disabled != true ){  // запрет на нажатие

        for (let i = 0; i < block_cart.length; i++) { 
            document.getElementsByClassName("box_product")[i].style.display = "none";   // при клике все элементы невидимые 
            visible( i , "none", "display" );       //  details невидимый
        }

        if( i == product[i].id){

            document.getElementsByClassName("img-product")[i].src            = product[i]['picture'];    // получаем картинку
            document.getElementsByClassName("product-name-2")[i].innerText   = product[i]['name'];  
            document.getElementsByClassName("price")[i].innerText            = product[i]['price'];  
            document.getElementsByClassName("article_number")[i].innerText   = product[i]['articul'];
            document.getElementsByClassName("size")[i].innerText             = product[i]['size'];  
            document.getElementsByClassName("article_number_2")[i].innerText = product[i]['articul_two'];  
            document.getElementsByClassName("material")[i].innerText         = product[i]['material'];  

            document.getElementsByClassName("box_product")[i].style.display = "";   // отображаем выбранный элемент
            visible( i , "", "display" ); 
                
                var elem = document.createElement("div");
                elem.innerHTML= button_add();  // заносим в блок надпись 
                elem.style.border = 0;
                elem.style.fontFamily = "Gilroy";
                elem.style.fontWeight = "500";
                elem.style.fontSize = "22px"; 
                elem.style.height = "22px"; 
                elem.style.padding = "8% 4% 0 4%";
                elem.style.textAlign = "center";
                elem.style.width = "26.5%";
                document.getElementsByClassName("box_products")[0].insertBefore(elem, document.getElementsByClassName("box_product")[i].nextSibling);
  
                return_catalog(elem, block_cart[i]);
        }   // конец  i == product[i].id

            }

    block_cart[i].disabled = true; 

        })
    };      // добавление товара