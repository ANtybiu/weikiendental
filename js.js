let cosmeticCurrent = 1;

function rotate(direction){
    if(direction !== 'M'){
    let distanceVal = cosmeticCurrent-direction
    if(distanceVal === 1 || distanceVal === 2){

        // go to left

        document.querySelector('.cosmetic-box-nonL').style.marginTop = '0';
        document.querySelector('.cosmetic-box-nonL').style.left = '50%';
        document.querySelector('.cosmetic-box-nonL').style.rotate = '0deg';
        document.querySelector('.cosmetic-box-current').style.marginTop = '13rem';
        document.querySelector('.cosmetic-box-current').style.left = '150%';
        document.querySelector('.cosmetic-box-current').style.rotate = '30deg';
        document.querySelector('.cosmetic-box-nonR').style.marginTop = '37rem';
        document.querySelector('.cosmetic-box-nonR').style.left = '210%';
        document.querySelector('.cosmetic-box-nonR').style.rotate = '60deg';
        cosmeticCurrent = 0;
        document.getElementById('nonL').style.backgroundColor = 'black';
        document.getElementById('nonL').style.color = 'white';
        document.getElementById('nonL').style.borderRadius = '1321231rem';
        document.getElementById('current').style.backgroundColor = "#EEEEEE"
        document.getElementById('current').style.borderRadius = "0"
        document.getElementById('current').style.color = "black"
        document.getElementById('nonR').style.backgroundColor = "#EEEEEE"
        document.getElementById('nonR').style.borderRadius = "0"
        document.getElementById('nonR').style.color = "black"
        
    }
    if(distanceVal === -2 || distanceVal === -1){

        // go to right

        document.querySelector('.cosmetic-box-nonR').style.marginTop = '0';
        document.querySelector('.cosmetic-box-nonR').style.left = '50%';
        document.querySelector('.cosmetic-box-nonR').style.rotate = '0deg';
        document.querySelector('.cosmetic-box-current').style.marginTop = '3rem';
        document.querySelector('.cosmetic-box-current').style.left = '-60%';
        document.querySelector('.cosmetic-box-current').style.rotate = '-30deg';
        document.querySelector('.cosmetic-box-nonL').style.marginTop = '6rem';
        document.querySelector('.cosmetic-box-nonL').style.left = '-120%';
        document.querySelector('.cosmetic-box-nonL').style.rotate = '-60deg';
        cosmeticCurrent = 2;
        document.getElementById('nonR').style.backgroundColor = 'black';
        document.getElementById('nonR').style.color = 'white';
        document.getElementById('nonR').style.borderRadius = '1321231rem';
        document.getElementById('current').style.backgroundColor = "#EEEEEE"
        document.getElementById('current').style.borderRadius = "0"
        document.getElementById('current').style.color = "black"
        document.getElementById('nonL').style.backgroundColor = "#EEEEEE"
        document.getElementById('nonL').style.borderRadius = "0"
        document.getElementById('nonL').style.color = "black"
    }
    }else{
        document.querySelector('.cosmetic-box-nonL').removeAttribute('style')
        document.querySelector('.cosmetic-box-current').removeAttribute('style')
        document.querySelector('.cosmetic-box-nonR').removeAttribute('style')
        document.getElementById("nonR").removeAttribute('style');
        document.getElementById("current").removeAttribute('style');
        document.getElementById("nonL").removeAttribute('style');
        
    }
}

let countSpeed = 1;
let unique = false;
const target = document.querySelector('#unique-patients');


const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        let currentData = 0;
        if(!unique){
        count('unique')
        unique = true;
        }
    }
  });
};


const observer = new IntersectionObserver(callback);
observer.observe(target);

const target2 = document.querySelector('#unique-patients');

let total = false;
const callback2 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        let currentData = 0;
        if(!total){
        count('total')
        total = true;
        }
    }
  });
};


const observer2 = new IntersectionObserver(callback2);
observer2.observe(target2);

const target3 = document.querySelector('#unique-patients');

let years = false;
const callback3 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        let currentData = 0;
        if(!years){
        count('years')
        years = true;
        }
    }
  });
};


const observer3 = new IntersectionObserver(callback3);
observer3.observe(target3);

let uniqueCount = 0;
let totalCount = 0;
let yearCount = 0;
function count(set){
    if(set === 'unique' && uniqueCount<70000){
        setTimeout(()=>{
            uniqueCount += 100;
            document.getElementById('unique-patients').innerText = `${uniqueCount}`;
            count('unique')
        },countSpeed)
    }
    if(set === 'total' && totalCount<180000){
        setTimeout(()=>{
            totalCount += 300;
            document.getElementById('total-treats').innerText = `~${totalCount}`;
            count('total')
        },countSpeed)
    }
    if(set === 'years' && yearCount<26){
        setTimeout(()=>{
            yearCount += 1;
            document.getElementById('years').innerText = `${yearCount}+`;
            count('years')
        },countSpeed*100)
    }
}
console.log(window.innerHeight,window.innerWidth)


// Wait for the DOM to be ready
window.addEventListener('load', () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
        lerp: 0.1 // Adjust this for smoothness (0.1 is default)
    });

    // This is important! It recalculates the page height after 
    // images and videos (like your dental landing video) load.
    setTimeout(() => {
        scroll.update();
    }, 1000);
});