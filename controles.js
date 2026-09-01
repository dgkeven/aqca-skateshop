function contate_me() {
    window.location.href = "https://web.whatsapp.com/send?text=Olá,%20tudo%20bem%20?&phone=+5528999581746"
}

function send_me_notify(event) {
    // The form has no real backend (action="#"), so stop the page from
    // reloading and just confirm the message was "sent".
    if (event) {
        event.preventDefault();
    }
    alert("Mensagem enviada com sucesso!!!");
}