let clearBackground;
document.querySelector('#start').addEventListener('click', function(){
    clearBackground = setInterval(function(){
        var x = Math. floor(Math. random() * 256);
        var y = Math. floor(Math. random() * 256);
        var z = Math. floor(Math. random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console. log(bgColor);
        document. body. style. background = bgColor;
    },1000)
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(clearBackground);
    document.body.style.backgroundColor = "#424242";
})