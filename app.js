var show_input = document.querySelector('.icon_search')
var input_search = document.querySelector('.input_search')
var search_box = document.querySelector('.search_box')
//
// js,khi onclick vào icon_search thì tự focus vào tag input
// js,lấy element cha của thẻ nhấp vào , parentElement
show_input.onclick = function(events){
    console.log(this.parentElement)
    console.log(this.parentNode)
    // search_box.classList.toggle('show_search')
    this.parentElement.classList.toggle('show_search')
   //input_search.focus() ,  cách 1
   // cách 2 previousElementsibling là thẻ đứng trước thẻ input 
    this.previousElementSibling.focus()
}