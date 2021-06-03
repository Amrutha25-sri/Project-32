const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here

      text(hour,100,100);
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var Menu = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var menujson = await Menu.json();
    var DateTime = menujson.datetime;
    console.log(menujson);
    // write code slice the datetime
    hour = DateTime.slice(11,13);
   // console.log(hour);
    // add conditions to change the background images from sunrise to sunset
if (hour >= 20 && hour < 22){
    bg = "sunrise1.png";
}
if (hour >= 06 && hour < 07){
    bg = "sunrise2.png";
}
if (hour >= 07 && hour < 08){
    bg = "sunrise3.png";
}
if (hour >= 08 && hour < 12){
    bg = "sunrise4.png";
}
if (hour >= 12 && hour < 15){
    bg = "sunrise5.png";
}
if (hour >= 15 && hour < 16){
    bg = "sunrise6.png";
}
if (hour >= 16 && hour < 17){
    bg = "sunset7.png";
}
if (hour >= 17 && hour < 18){
    bg = "sunset8.png";
}
if (hour >= 18 && hour < 19){
    bg = "sunset9.png";
}
if (hour >= 19 && hour < 20){
    bg = "sunset10.png";
}
if (hour >= 20 && hour < 22){
    bg = "sunset11.png";
}
else{
    bg = "sunset12.png";
}

    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg);
}
