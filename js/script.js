window.addEventListener('DOMContentLoaded', () => {
    let counter = 1;
    setInterval(function () {
        document.querySelector('#radio' + counter).checked = true;
        counter++;
        if(counter > 6) {
            counter = 1;
        }
    }, 3000);

    const circle = document.querySelector('circle'),
    anon = document.querySelector('.b71609');
    circle.addEventListener('click', () => {
        anon.style.display = 'none'
    })
})