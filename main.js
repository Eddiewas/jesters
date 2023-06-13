var e = "https://teachablemachine.withgoogle.com/models/mWTiZicNl/model.json";
var Prediction1 = ""
var Prediction2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takeSnapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captureImage" src="'+data_uri+'">'

    });

}
console.log(ml5.version); 
classifier = ml5.imageClassifier(e, modelLoaded);
function modelLoaded() {
    console.log("The model is Loaded 😃")

}
function speak() {
    var synth = window.speechSynthesis;
    speakData1 = "The First Prediction is "+Prediction1;
    speakData2 = "and the second prediction is "+Prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2)
    synth.speak(utterThis);
}
