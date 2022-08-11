let canvas;
let URL1 = 'https://catfact.ninja/fact';
let URL2 = 'https://randomuser.me/api/';
let URL3 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let URL4 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
let URL5 = 'https://dog.ceo/api/breeds/image/random';

let cat = null;
let user = null;
let coin = null;
let usa = null;
let dog = null;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);

    fetch(URL1)
      .then(response => response.json())
      .then(data => {
        cat = data
      });

    fetch(URL2)
      .then(response => response.json())
      .then(data => {
        user = data
      });

    fetch(URL3)
      .then(response => response.json())
      .then(data => {
        coin = data
      });

    fetch(URL4)
      .then(response => response.json())
      .then(data => {
        usa = data
      });

      fetch(URL5)
      .then(response => response.json())
      .then(data => {
        dog = data
      });

    let boton = createButton('Reload Page');
    boton.position(50,200)
    boton.mousePressed(reload)
}

function reload(){
  location.reload();
}

function draw() {
    background(150);
    catFunction()
    userFunction()
    coinFunction()
    usaFunction()
    dogFunction()
}

function catFunction(){
  if (cat != null) {
    rect(40, 40, 310, 150);
    text(cat.fact, 50, 50, 300);
  }
}

function userFunction(){
  if (user != null) {
    rect(360, 40, 300, 150);
    text(user.results[0].email, 370, 50, 300);
  }
}

function coinFunction(){
  if(coin != null){
    rect(670, 40, 200, 150);
    text("Bitcoin: U$D" + coin.bpi.USD.rate, 680, 50, 200);
  }
}

function usaFunction(){
  if(usa != null){
    rect(880, 40, 200, 150);
    text("Population in " + usa.data[0].Year + ": " + usa.data[0].Population, 890, 50, 200);
  }
}

/**
 * No pude mostrar la imagen porque se demora mucho precargandola
 */
function dogFunction(){
  if(dog!= null){
    // console.log(dog)
    // let img = loadImage(dog.message);
    // image(img,100,300, 100,100);
    rect(670, 200, 400, 150);
    text("Image url: " + dog.message, 690, 210, 200);
  }
}