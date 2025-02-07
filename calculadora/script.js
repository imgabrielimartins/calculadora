document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '=') {
               try {
                display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else if (button.textContent === 'C') {
                display.value = '';
            } else {
                display.value += button.textContent;
            }
        });
    }); 
});