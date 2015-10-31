/**
 * Created by pery on 31/10/2015.
 */
(function () {
    function copyText(text){
        var select = document.querySelector('#clipboard');
        select.value = text;
        select.select();

        try {
            document.execCommand('copy');
            alert('Text copied to clipboard!');
        } catch (err) {
            window.prompt("To copy the text to clipboard: Ctrl+C, Enter", code);
        }

    }

    var divInsoector;

    crel (document.body
        ,divInsoector = crel('div')
        ,crel('textarea',{id:'clipboard'})

    );


    divInsoector.classList.add('inspecor');

    var inputs = document.getElementsByTagName('input');
    inputs = [].slice.call(inputs);
    inputs.forEach(function (input) {
        input.title ='# '+ input.id ;
        input.addEventListener('click',function () {
            divInsoector.innerHTML = '';
            var codeElm
                , codeText = 'document.getElementById(\''+this.id+'\')';

            crel(divInsoector,'id: ', this.id
                ,codeElm = crel('div',
                    crel('span','code: '),
                    crel('span',{class:'code',title:'click to copy'},codeText)
                )
            );
            codeElm.addEventListener('click', function () {
                copyText(codeText)
            })

        })
    });

})();
