let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 10;

let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#fa8509 ${progressStartValue * 3.6}deg, #ededed 0deg)`
if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);
//progress1
let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");
let progressStartValue1 = 0,    
    progressEndValue1 = 80;

let progress1 = setInterval(() => {
    progressStartValue1++;
progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#098afa ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

if(progressStartValue1 == progressEndValue1){
    clearInterval(progress1);
}    
}, speed);
//progress2
let circularProgress2 = document.querySelector(".circular-progress2"),
    progressValue2 = document.querySelector(".progress-value2");
let progressStartValue2 = 0,    
    progressEndValue2 = 60;

let progress2 = setInterval(() => {
    progressStartValue2++;
    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#d1d106 ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

if(progressStartValue2 == progressEndValue2){
    clearInterval(progress2);
}    
}, speed);
//progress3
let circularProgress3 = document.querySelector(".circular-progress3"),
    progressValue3 = document.querySelector(".progress-value3");
let progressStartValue3 = 0,    
    progressEndValue3 = 30;

let progress3 = setInterval(() => {
    progressStartValue3++;
    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(#00ffff ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

if(progressStartValue3 == progressEndValue3){
    clearInterval(progress3);
}    
}, speed);
//progress4
let circularProgress4 = document.querySelector(".circular-progress4"),
    progressValue4 = document.querySelector(".progress-value4");
let progressStartValue4 = 0,    
    progressEndValue4 = 40;

let progress4 = setInterval(() => {
    progressStartValue4++;
    progressValue4.textContent = `${progressStartValue4}%`
    circularProgress4.style.background = `conic-gradient(#9000ff ${progressStartValue4 * 3.6}deg, #ededed 0deg)`

if(progressStartValue4 == progressEndValue4){
    clearInterval(progress4);
}    
}, speed);


let menuBar = document.querySelector(".navbar");
    document.querySelector("#menu").onclick = () =>{
        menuBar.classList.toggle('active');
    }