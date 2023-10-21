function setup(){
    canvas=createCanvas(500,450);
    canvas.position(850,150);

    video=createCapture(VIDEO);
    video.size(500,600);
    video.position(200,50);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

};

function modelLoaded(){
    console.log("model is ready");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}


function draw(){
    background(76, 111, 140);
} 