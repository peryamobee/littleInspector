/**
 * Created by pery on 31/10/2015.
 */
(function(){
    //
    var src = 'https://rawgit.com/pyrsmk/toast/master/toast.min.js';
    var script = document.createElement('script');
    script.src = src;
    script.onload = afterload;
    document.head.appendChild(script);

    function afterload (){
        //var src = 'https://cdnjs.cloudflare.com/ajax/libs/crel/2.1.8/crel.min.js';
        toast(
            'https://cdnjs.cloudflare.com/ajax/libs/crel/2.1.8/crel.min.js',


        function () {
            var style = document.createElement('style');
            style.innerText = '\
                body{\
                    padding-top:2em\
                }\
                .inspecor{\
                width: 100%;\
                min-height: 2em;\
                position: fixed;\
                top: 0;\
                left:0;\
                background: rgba(23, 78, 234, 0.3);\
                \
            }\
            ';
            /*crel(tagName/dom element [, attributes, child1, child2, childN...])*/
            crel (document.head, style);

        })




    }



})();