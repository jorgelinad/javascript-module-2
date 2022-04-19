// Write your code here
const imagenesPlaya = ["https://media.istockphoto.com/photos/coastline-aerial-photograph-of-aquamarine-ocean-and-man-walking-along-picture-id1299198919?b=1&k=20&m=1299198919&s=170667a&w=0&h=OukNdouyUPBtxHro52LiDktZrQYDdFwQJo67AW9dv2c=",
"https://media.istockphoto.com/photos/tropical-beach-palm-trees-sea-wave-and-white-sand-picture-id1300296030?b=1&k=20&m=1300296030&s=170667a&w=0&h=w1s7kmN2TH7O326d263Cs-E44teA1hy6u29UIVf_z1w=",
"https://media.istockphoto.com/photos/clean-ocean-waves-breaking-on-white-sand-beach-with-turquoise-emerald-picture-id1302343043?b=1&k=20&m=1302343043&s=170667a&w=0&h=d0IJEMqMp1A6Ih9FYrhmludHY4EnqxJkXMrm1cZ1-bw=",
"https://media.istockphoto.com/photos/summertime-vacation-background-picture-id1316185938?b=1&k=20&m=1316185938&s=170667a&w=0&h=5xbb4YutamBfuf5sT0W7BGMWApjQL2gbUsq2owbI3xA=",
"https://media.istockphoto.com/photos/two-friends-are-diving-in-the-sea-from-a-cliff-picture-id1330224121?k=20&m=1330224121&s=612x612&w=0&h=9pzkZcuESU_hYoEqxRZjmbkgOe9PG-cvZbhEQQ3n0Kk=",
"https://media.istockphoto.com/photos/picturesque-beach-mallorca-island-beautiful-seaside-bay-of-cala-picture-id960823094?k=20&m=960823094&s=612x612&w=0&h=5f8tezV2oNrA25Xc7RMt7FcbRoKbkBQ3w8jYmwc1DyQ="]

//QuerySelector
const autoBackBtn = document.querySelector('#autoBackBtn')
const anteriorBtn = document.querySelector('#anteriorBtn')
const stopBtn = document.querySelector('#stopBtn')
const siguienteBtn = document.querySelector('#siguienteBtn')
const autoNextBtn = document.querySelector('#autoNextBtn')
const imagenesEl = document.querySelector('#imgPlaya')
let index = 0
let bucleAdelante 
let bucleAtras

imagenesEl.src= imagenesPlaya[index]

//AddEventListener
siguienteBtn.addEventListener('click',() => siguiente())
anteriorBtn.addEventListener('click',() => anterior())
autoNextBtn.addEventListener('click',() => autoNext())
autoBackBtn.addEventListener('click',() => autoBack())
stopBtn.addEventListener('click',() => Stop())

//Funciones
function siguiente() {
    if (index == imagenesPlaya.length -1) {index = -1 ;
    }
    index++;
    imagenesEl.src = imagenesPlaya [index];
    console.log(index, imagenesPlaya[index]);
};

function autoNext(){
    clearInterval(bucleAtras)
     bucleAdelante = setInterval("siguiente()",1000);
};

function autoBack(){
    clearInterval(bucleAdelante)
     bucleAtras = setInterval("anterior()",1000);
};

function Stop(){
    if (bucleAdelante != undefined) {
        clearInterval(bucleAdelante)
    }
    if (bucleAtras != undefined) {
        clearInterval(bucleAtras)
    }
};

function anterior (){
    if(index < 1){
        index = imagenesPlaya.length 
    }
    index --
    imagenesEl.src = imagenesPlaya[index]
    console.log(index, imagenesPlaya[index]);
};