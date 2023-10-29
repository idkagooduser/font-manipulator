var noseX=0;
var noseY=0;
var leftWristX=0;
var rightWristX=0;
var diff=0;

function setup(){
    canvas=createCanvas(500,500);
    canvas.position(600,100);

    video=createCapture(VIDEO);
    video.size(500,600);
    video.position(20,50);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

};

function modelLoaded(){
    console.log("model is ready");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);

    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    diff=floor(leftWristX-rightWristX);
}
}


function draw(){
    document.getElementById("size").innerHTML="Width and height of the text: "+diff +" pixels";
    background(79,11,50);
stroke(76,80,90);
fill(76,80,90);
textSize(diff);
textAlign(CENTER,CENTER);    
text("YIPEE",noseX,noseY);
} 