
        var difference = document.getElementById("radio-2");    // кнопка только отличающиеся
        difference.addEventListener('click', function(){
            alert("Если товары не удалены, вывод в консоль");
        let num;
            for (let i = 0; i < product.length; i++) { 
                if(product[i].articul){
                    num = product[i].articul;
                    console.log(num);
                } 
                    for (let k = 0; k < product.length; k++) { 
                        if ( num != product[k].articul ){

                            console.log(num + "!=" + product[k].articul);

                        }  else if ((num == product[k].articul) && (num != num)){

                            console.log(num + "==" + product[k].articul);
                            }
                    }
            }

        }, false);