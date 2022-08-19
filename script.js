function carregar() {
    var msg = window.document.getElementById('msg') //pega a div msg e atribui a var msg
    var img = window.document.getElementById('imagem') //pega a div imagem e atribui a var imagem
    var data = new Date()    
    var hora = data.getHours()    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'manha.png'
        document.body.style.background = '#cfdce3' //pega via DOM o backgroud do body e insere a cor específica
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#f6a866'
    } else {
        //boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#ae8bc1'
    }
}

