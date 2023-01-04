// template_jszcyr3

// service_xrs62um

//ypB9pk0bi0FthI-QX

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
        })
}


function toggleModal () {
    
}