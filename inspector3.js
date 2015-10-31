/**
 * Created by pery on 31/10/2015.
 */
(function () {
    var divInsoector;

    crel (document.body
        ,divInsoector = crel('div')
    );


    divInsoector.classList.add('inspecor');

    var inputs = document.getElementsByTagName('input');
    inputs = [].slice.call(inputs);
    inputs.forEach(function (input) {
        input.title ='# '+ input.id ;
        input.addEventListener('click',function () {
            divInsoector.innerHTML = '';
            crel(divInsoector,'id: ', this.id
                ,crel('div','document.getElementById(\'',this.id,'\')'));
        })
    });

})();
