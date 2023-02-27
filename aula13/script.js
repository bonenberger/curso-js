function carregar() {
    var msg = window.document.getElementById("msg")
    var photo = document.getElementById("photo")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9
    msg.innerHTML = `agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        photo.scr = "imagens/manha.jpg"
        document.body.style.background = 'green'
    } else if (hora >= 12 && hora < 18) {
        photo.src = "imagens/tarde.jpg"
        document.body.style.background = 'orange'
    } else {
        photo.src = "imagens/noite.jpg"
        document.body.style.background = 'purple'
    }
}

