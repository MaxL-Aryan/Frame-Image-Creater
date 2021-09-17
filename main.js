function preload()
{

}

function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(350,350);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,210,150,220,200);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);

    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20);

    rect(90,420,460,20);

    fill(255,0,0);
    stroke(255,0,0);
    circle(580,50,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(580,425,80)

    fill(0,128,0);
    stroke(0,128,0);
    rect(40,90,20,320)

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,425,80)

    fill(0,128,0);
    stroke(0,128,0);
    rect(570,90,20,295)
}
function take_snapshot()
{
    img_nme=document.getElementById("name_of_img").value;
    save(img_nme+".png");
}