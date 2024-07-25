const phoneInput = document.getElementById('phone');
const ddi = document.getElementById('ddi');
const telValido = document.getElementById('telValido');

    phoneInput.addEventListener('input', () => {
        let input = phoneInput.value.replace(/\D/g, '');
        let formattedInput = '';
        if (input.length > 0) {
            formattedInput += '(' + input.substring(0, 2);
        }
        if (input.length >= 3) {
            formattedInput += ') ' + input.substring(2, 7);
        }
        if (input.length >= 8) {
            formattedInput += '-' + input.substring(7, 11);
        }
        phoneInput.value = formattedInput;
    });

    ddi.addEventListener('keydown', (e) => {
        if (ddi.value.length <= 3 && e.key === 'Backspace') {
            e.preventDefault();
        }
    });

    ddi.addEventListener('input', () => {
        if (!ddi.value.startsWith('+55')) {
            ddi.value = '+55';
        }
    });

    phoneInput.addEventListener('input', function(){
        const tel = phoneInput.value;
        if(tel.length == 15) {
            telValido.textContent = 'Telefone válido!';
            telValido.style.color = 'green';
        } else {
            telValido.textContent = 'Telefone inválido!';
            telValido.style.color = 'red';
        }
    });