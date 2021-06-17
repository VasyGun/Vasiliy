function visible( i , visible, property ){  // i , "none" , "display" 
    if( i < 3){
        document.getElementsByClassName("article_number")[i].style[property] = visible;
        document.getElementsByClassName("size")[i].style[property] = visible;
        document.getElementsByClassName("article_number_2")[i].style[property] = visible;
        document.getElementsByClassName("material")[i].style[property] = visible; 
    }
}

    function header_article( property ){
        document.querySelector(".box-header_article").style.justifyContent = property;
        document.querySelector(".box-header_article_2").style.justifyContent = property;
        document.querySelector(".box-header_size").style.justifyContent = property;
        document.querySelector(".box-header_material").style.justifyContent = property;
    }