    // стрелки 

// Вот тут функция оптимизации резайса (троттлинг)
(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// Событие
window.addEventListener("optimizedResize", function() {
    func(i, checkWidth()); 
});


    var i = 1;  // перебор страниц
    let countOfItems = Math.ceil(product.length / checkWidth()); // всего страниц

    func(i, checkWidth());

    var left = document.querySelector(".left_arrow");
    left.addEventListener('click', function(){
        if( 1 < i ){    // вводим ограничение опускаться не ниже 1-ой страницы
          func(--i, checkWidth());
        }
      }, false);

    var right = document.querySelector(".right_arrow");
    right.addEventListener('click', function(){
    if( i < countOfItems){ // вводим ограничение подниматься не выше чем есть страницы
           func(++i, checkWidth());
        }
     }, false);


 function func(i, notesOnPage){
    let notes; 
    let start;
    let end;

        start = ( i - 1 ) * notesOnPage;    // начало вывода записи на странице
        end = start + notesOnPage;          // конец
        notes = product.slice(start, end);  // отрезать на промежутке

    let discount = document.getElementsByClassName("discount");
    let picture = document.getElementsByClassName("img-product");
    let box_product = document.getElementsByClassName("box_product");

        for (let i = 0; i < product.length; i++) { 
            if(box_product[i] && document.getElementsByClassName("article_number")[i]){

                box_product[i].style.display = "none"; // скрыть все товары
                visible( i , "none" , "display" ); 
            }
        }

        for (let k = 0; k < notes.length; k++) {
            
            if(box_product[k] && document.getElementsByClassName("article_number")[k]){
                box_product[k].style.display = ""; // вывести 2 или 3 товара       
                visible( k , "" , "display" ); 
            }

           insert(k, notes);   // в блоки вставляем данные с объектов

            // discount[k] при первоначальном выводе undefined

        //     if(discount[k]){     // если click на стрелку

        //         if (k == 0){
        //             for (let k = 0; k < notes.length; k++) {
        //                 if( discount[k] ){
        //                     discount[k].style.display ='none';
        //                     discount[k].remove();
        //                 }
        //             }
        //         } 

        //     }
        //     if ( discount[k] ){   // избавляемся от повторов
        //         discount[k].style.display ='none';
        //         discount[k].remove();
        //     }

        //     if ( notes[k].no_discount ){ // если найдена цена без скидки на выбранной странице, добавить цену

        //         var price = document.getElementsByClassName("cart")[k];
        //         var price_discount = document.createElement("p");
        //             price_discount.className += "discount";
        //             price_discount.style.color = "#888";
        //             price_discount.style.textAlign = 'center';
        //             price_discount.style.boxSizing = 'border-box';
        //             price_discount.style.textDecoration = 'line-through';
        //             price_discount.style.lineHeight = '18,56px';
        //             price_discount.style.fontWeight = '400';
        //             price_discount.innerHTML = notes[k].no_discount;
        //             price.appendChild(price_discount);

        //    } 

        width_img(picture[k]);

        }   //конец цикла for
    }

     function checkWidth(){
        let notesOnPage;
        const pageWidth = document.documentElement.scrollWidth;
        if( pageWidth < 1024){
            notesOnPage = 2;    // товаров на странице
        }   else{
            notesOnPage = 3;
        }
        return notesOnPage;
     }

     function insert(k, notes){

                if ( typeof notes[k]  == 'undefined') {
                    console.log( notes[++k]);
                }
                       else {

                    document.getElementsByClassName("img-product")[k].src            = notes[k].picture;    // получаем картинку
                    document.getElementsByClassName("product-name-2")[k].innerText   = notes[k].name;  
                    document.getElementsByClassName("price")[k].innerText            = notes[k].price;  
                    document.getElementsByClassName("article_number")[k].innerText   = notes[k].articul;
                    document.getElementsByClassName("size")[k].innerText             = notes[k].size;  
                    document.getElementsByClassName("article_number_2")[k].innerText = notes[k].articul_two;  
                    document.getElementsByClassName("material")[k].innerText         = notes[k].material; 

                    document.getElementsByClassName("delete-product")[k].innerHTML = notes[k].del; 

                }
     }

function width_img(img){
    const pageWidth = document.documentElement.scrollWidth;
    if( 768 > pageWidth) {
        img.style.width = "100px";
    } else if ( 'img/product-3.png' == img.getAttribute("src")){
        img.style.width = "106px";
    }   else {
        img.style.width = "160px";
    }
}