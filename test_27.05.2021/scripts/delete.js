
    // кнопка удалить
    document.addEventListener("click", function(e) {

        const ident = e.target.id; 

        if (ident){
         
        let q = ident;

            for (let k = ident; k < product.length; k++) {
                if(document.getElementById(k)){
                    if(document.getElementById(k).getAttribute('id') == ident){
                        delete product[k];
                    }
                }
            }
            var c = document.getElementsByClassName("delete")[0];
            console.log(c);

            for (let m = ident; m < checkWidth(); m++) {    // что делать с m?

                 q++;
                if( product[q]){
                    document.getElementsByClassName("img-product")[m].src            = product[q].picture;    // получаем картинку
                    document.getElementsByClassName("product-name-2")[m].innerText   = product[q].name;  
                    document.getElementsByClassName("price")[m].innerText            = product[q].price;  
                    document.getElementsByClassName("article_number")[m].innerText   = product[q].articul;
                    document.getElementsByClassName("size")[m].innerText             = product[q].size;  
                    document.getElementsByClassName("article_number_2")[m].innerText = product[q].articul_two;  
                    document.getElementsByClassName("material")[m].innerText         = product[q].material; 
                    document.getElementsByClassName("delete-product")[m].innerHTML   = product[q].del;

                    width_img(document.getElementsByClassName("img-product")[m]); 
                }else {
                    document.getElementsByClassName("box_product")[m].style.display = "none"; // скрыть все товары
                    visible( m , "none" , "display" ); 
                }
            }
        }

    });

//         // избавляемся от empty
    
//         let storage = {};

//         for (let elem in product) {
//           for (let prop in product[elem]) {
//             if (product[elem][prop].length != 0) {
//               storage[elem] = product[elem];
//             }
//           }
//         }
//         new_product = storage;
