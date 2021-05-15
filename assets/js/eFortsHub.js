var isHamBurgerOpened = false;
var hamBurger = document.getElementsByTagName('hbHamBurger');
var mainMenu = document.getElementById('hbHeaderMenu');
var burger1 = document.getElementsByClassName('burger1')[0];
var burger2 = document.getElementsByClassName('burger2')[0];
var burger3 = document.getElementsByClassName('burger3')[0];


hamBurger[0].onclick = function (){
loadHamBurger();
}


function loadHamBurger(){
    if(isHamBurgerOpened){
        isHamBurgerOpened = false;


        mainMenu.classList.add('hbMenuHide');
        mainMenu.classList.remove('hbMenuShow');

        // mainMenu.style.display = "none";
        // mainMenu.style.visibility = "hidden";

        burger2.style.display = "block";
        burger1.style.transform = "rotate(0deg)"; 
        burger3.style.transform = "rotate(0deg)"; 

        burger1.style.position = "relative"; 
       // burger3.style.position = "relative"; 
       // burger1.style.width = "26px";
        //burger3.style.width = "26px";

    }else{
        
        isHamBurgerOpened = true;

        mainMenu.classList.add('hbMenuShow');
        mainMenu.classList.remove('hbMenuHide');

        burger2.style.display = "none";

        burger1.style.transform = "rotate(45deg)"; 
        burger3.style.transform = "rotate(-45deg)"; 

        burger1.style.position = "absolute"; 
       // burger3.style.position = "relative"; 
      //  burger1.style.width = "26px";
       // burger3.style.width = "26px";


    }

}


