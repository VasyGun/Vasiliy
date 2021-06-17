
        var clear = document.getElementsByClassName("link_clear")[0]; // кнопка очистить сравнение

            clear.addEventListener('click', function(){

                if( clear.disabled != true ){  // запрет на нажатие

                for (let i = 0; i < product.length; i++) { 
                    visible( i , "none" , "display" );
                    document.getElementsByClassName("box_product")[i].style.display = "none"; 
                    delete product[i]; 
                }

                var elem = document.createElement("div");
                elem.innerHTML= button_add();  // заносим в блок надпись 
                elem.style.border = 0;
                elem.style.fontFamily = "Gilroy";
                elem.style.fontWeight = "500";
                elem.style.fontSize = "22px"; 
                elem.style.height = "22px"; 
                elem.style.padding = "8% 4% 0 4%";
                elem.style.textAlign = "center";
                elem.style.width = "100%";
                document.getElementsByClassName("box_products")[0].insertBefore(elem, document.getElementsByClassName("box_product")[0].nextSibling);
  
                document.getElementsByClassName("box_arrow")[0].style.display = 'none'; //скроем стрелки

                return_catalog(elem, clear);

                }

                clear.disabled = true; 
             
            }, false);