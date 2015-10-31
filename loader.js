
var script = document.createElement('script');
script.src = 'https://rawgit.com/pyrsmk/toast/master/toast.min.js';
script.onload = afterload;
document.head.appendChild(script);

function afterload (){
    if(location.hostname == 'localhost'){
        toast(
            ['https://cdnjs.cloudflare.com/ajax/libs/crel/2.1.8/crel.min.js', function () {return window.crel;}]
            ,'inspector3.js'
            ,'style.css'
        )
    }else{
        toast(
            ['https://cdnjs.cloudflare.com/ajax/libs/crel/2.1.8/crel.min.js', function () {return window.crel;}]
            ,'https://rawgit.com/peryamobee/littleInspector/master/inspector3.js'
            ,'https://rawgit.com/peryamobee/littleInspector/master/style.css'
        )
    }


}