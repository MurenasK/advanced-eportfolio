// template_jszcyr3

// service_xrs62um

//ypB9pk0bi0FthI-QX

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const oddInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.module__overlay--loading');
    const success = document.querySelector('.module__overlay--success');
    loading.classList += ' module__overlay--visible';
    emailjs
        .sendForm(
            'service_xrs62um',
            'template_jszcyr3',
            event.target,
            'ypB9pk0bi0FthI-QX'
        ).then(() => {
            loading.classList.remove("module__overlay--visible");
            success.classList += " module__overlay--visible";
        }).catch(() => {
            loading.classList.remove("module__overlay--visible");
            alert(
                "The email services are currently unavailable"
            );
        });
}

function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList.remove("modal--open");
    }
    document.body.classList += " modal--open";
}