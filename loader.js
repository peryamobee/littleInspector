/**
 * Created by pery on 31/10/2015.
 */
var script = document.createElement('script');
script.src = 'https://rawgit.com/pyrsmk/toast/master/toast.min.js';
script.onload = afterload;
document.head.appendChild(script);

function afterload (){
    //toast(
    //    ['https://cdnjs.cloudflare.com/ajax/libs/crel/2.1.8/crel.min.js', function () {return window.crel;}]
    //    ,'inspector3.js'
    //    ,'style.css'
    //)
    toast(
        ['https://cdnjs.cloudflare.com/ajax/libs/crel/2.1.8/crel.min.js', function () {return window.crel;}]
        ,'http://rawgit.com/perymimon/53d83b44acbf608403cb/raw/80337f2ce719eadd76fde782a45bf2784bac2626/inspector'
        ,'style.css'
    )
}