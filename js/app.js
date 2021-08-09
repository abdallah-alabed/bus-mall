'use strict'

let imgArray =[ 'bag.jpg',
'banana.jpg',
'bathroom.jpg',
'boots.jpg',
'breakfast.jpg',
'bubblegum.jpg',
'chair.jpg',
'cthulhu.jpg',
'dog-duck.jpg',
'dragon.jpg',
'pen.jpg',
'pet-sweep.jpg',
'scissors.jpg',
'shark.jpg',
'sweep.png',
'tauntaun.jpg',
'unicorn.jpg',
'water-can.jpg',
'wine-glass.jpg']
let counter=25;
let leftRandom=0;
let middleRandom=0;
let rightRandom=0;


const select = document.getElementById('select');
let leftImage = document.getElementById( 'left' );
let middleImage = document.getElementById( 'middle' );
let rightImage = document.getElementById( 'right' );
const button = document.getElementById('button');
const main = document.getElementById('main');

function Mall ( name , imageSrc , show , click ){
    this.name = name;
    this.imageSrc = imageSrc;
    this.show=0;
    this.click=0;
    Mall.all.push ( this );
}

Mall.all =[];
for (let i=0; i<imgArray.length; i++){
    new Mall ( imgArray[i].split('.')[0], imgArray[i]);
}
//console.log(Mall.all);

function random( min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function render (){
    leftRandom = random( 0 , (imgArray.length - 1) );
    middleRandom = random( 0 , (imgArray.length - 1) );
    rightRandom = random( 0 , (imgArray.length - 1) );
  

    leftImage.src= './img/' + Mall.all[leftRandom].imageSrc;
    middleImage.src= './img/' + Mall.all[middleRandom].imageSrc;
    rightImage.src= './img/' + Mall.all[rightRandom].imageSrc;


    Mall.all[leftRandom].show++;
    Mall.all[middleRandom].show++;
    Mall.all[rightRandom].show++;

   

    //console.log(Mall.all);
    //console.log(counter);
   

}

select.addEventListener( 'click' , clickCounter );

function clickCounter(event){
    if ( (counter > 0) && (event.target.id === 'left' ||  event.target.id === 'middle' || event.target.id === 'right' ) ){
        render() ;
        counter-- ;
    }

    if (event.target.id === 'left'){
        Mall.all[leftRandom].click++;
    }
    else if ( event.target.id === 'middle'){
        Mall.all[middleRandom].click++;
    }
    else if (event.target.id === 'right'){
        Mall.all[rightRandom].click++;
    }

}



button.addEventListener( 'click' , showResults );

function showResults(event2){
    const ulElement = document.createElement('ul');
    main.appendChild(ulElement);

 
for(let i=0; i<imgArray.length; i++){
    let liElement = document.createElement('li');
    liElement.textContent = Mall.all[i].name + ' was shown: '+ Mall.all[i].show + ' and was clicked: ' + Mall.all[i].click;
    ulElement.appendChild(liElement);
}


}



render();