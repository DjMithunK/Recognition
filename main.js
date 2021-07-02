Webcam.set({
    width : 400,
    height : 300,
    img_format : "png",
    png_quality : 90
    });
    Webcam.attach("#camera");
    
    function take_snapshot(){
    
    Webcam.snap(data);
    
    }
    function data(datauri) {
        var captureImage = "<img id='image'src='"+ datauri + "'/>";
        document.getElementById("result").innerHTML = captureImage;
        
    }
    
    console.log("ml5 version ",ml5.version);
     var classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/IQ3LXNGVY/model.json",modelLoaded);
    
    function modelLoaded(){
        console.log("model loaded ");
    }
    function Check(){
     var img =    document.getElementById("image");
     classfier.classify(img,result)
    }
    function result(error,results){
        if(error){
         console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("result_object_name").innerHTML= results[0].label;
            document.getElementById("object_accuracy").innerHTML= results[0].confidence;
    
        }
    
    }