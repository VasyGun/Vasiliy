// клик по кнопке из каталога
    function return_catalog(elem, block_cart){
        elem.addEventListener('click', function() {
            if(block_cart){
                block_cart.disabled = false; 
            }

            document.getElementsByClassName("box_arrow")[0].style.display = ''; 

            elem.style.display = 'none';
            var k = 1;  // перебор страниц
            func(k, checkWidth());
           }, false);
    }

