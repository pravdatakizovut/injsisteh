'user strict'

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit',formSend);
    
    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll('._req');
        

        for (let index = 0; index < formReq.lenght; index++) {
            const input = formReq[index];
        }

    }
    function formAddError(input) {
        input.parentElement.ClassList.add('_error');
    }






});