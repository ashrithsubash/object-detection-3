cocossd =""

function preload()
{
img = loadImage("IMG1.jpg");
}

function setup()
{
canvas = createCanvas(380, 380);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
   console.log("Model Loaded!");
   status = true;
   objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
   if(error)
   {
      console.log(error);
   }
   console.log(results);
   objects = results;
}

function draw()
{
    

    if(status != undefined)
    {
      image(img, 0, 0, 640, 420);
       for (i = 0; i < objects.length; i++)
       {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill(255,0,0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y + 15);
        noFill();
        stroke(255,0,0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       } 
    }

    
}

