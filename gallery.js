function upDate(previewPic){
  image.innerHTML = previewPic.alt;
  image.style.backgroundImage = "url(" + previewPic.src + ")";
    }

    function unDo(){
    image.style.background = "#8e68ff";
    image.innerHTML = "Hover over an image below to display here."  
    }