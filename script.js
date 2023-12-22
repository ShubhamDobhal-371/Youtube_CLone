var menuIcon = document.querySelector('.logo0');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector('.container');
var sublist = document.querySelector(".subcribed-list")




menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("big-container")
    sublist.classList.toggle("hide-sublist")
   
    
}


