/**
 * Created by pery on 31/10/2015.
 */
(function(){
    var style = document.createElement('style');
    style.innerText = '\
        element.style {\
        width: 10em;\
        height: 2em;\
        background: rgba(23, 78, 234, 0.3);\
    }\
    ';
    document.head.appendChild(style);

    var divInsoector = document.createElement('div');
    divInsoector.classList.add('inspecor');
    document.body.appendChild(divInsoector);

    var inputs = document.getElementsByTagName('input');
     inputs = [].slice.call(inputs);
    inputs.forEach(function (input) {
        input.title ='# '+ input.id ;
        input.addEventListener(function () {
            divInsoector.innerHTML = this.id
        })
    });



})();