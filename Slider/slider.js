let imageArray = ["images/A-Cloud-Migration-Checklist.png",
    "images/ai.png",
    "images/augmented-img.png",
    "images/big-bang.png",
    "images/collabrate.png"
]
var image1 = document.getElementById("image1");
count = 0;
function imagerepeat() {
    if (count <= imageArray.length - 1) {
        //console.log(timer);
        let imagePath = imageArray[count];
        count++;
        image1.src = imagePath;
    } else {
        count = 0;
    }
}
function imageslides() {
    imagedelay = setInterval(imagerepeat, 2000);
}
function stopslide() {
    clearInterval(imagedelay);
}