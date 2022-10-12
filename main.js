prediction= "";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera= document.getElementById("cam");
Webcam.attach('#cam');
function snap() {
    Webcam.snap(function(data_uri) {
        document.getElementById("foto").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version: ", ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_y5biutFH/model.json", modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}
function check() {
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("nome_emoji").innerHTML= results[0].label;
        prediction= results[0].label;
        if(results[0].label == "ok") {
            document.getElementById("emoji").innerHTML= "👌🏻";
        }
        if(results[0].label == "rock") {
            document.getElementById("emoji").innerHTML= "🤘🏻";
        }
        if(results[0].label == "sorte") {
            document.getElementById("emoji").innerHTML= "🤞🏻";
        }
        if(results[0].label == "to d boa") {
            document.getElementById("emoji").innerHTML= "🤙🏻";
        }
    }
}