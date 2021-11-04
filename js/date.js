/*Дата*/
const dayC = document.querySelector(".day");
const monthC = document.querySelector(".month");
const yearC = document.querySelector(".year");

document.addEventListener("DOMContentLoaded", currentDate);

function currentDate (){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    dayC.textContent = day;
    const m = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    monthC.textContent = m[month];
    yearC.textContent = year;
}