function verificar(){
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = window.document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) == 0 || Number(fano.value) < 1800){
        window.alert('[Erro] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade >= 0 && idade < 10){
                //kid
                img.setAttribute('src','img/criancah.jpg')
            }else if(idade < 21){
                //adult
                img.setAttribute('src','img/menino.jpg')
            }
            else if(idade < 50){
                //adult
                img.setAttribute('src','img/homem.jpg')
            }
            else{
                //old
                img.setAttribute('src','img/senhor.jpg')
            }
            
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //kid
                img.setAttribute('src','img/criancam.jpg')
            }else if(idade < 21){
                //adult
                img.setAttribute('src','img/menina.jpg')
            }
            else if(idade < 50){
                //adult
                img.setAttribute('src','img/mulher.jpg')
            }else{
                //old
                img.setAttribute('src','img/senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero } com ${idade} anos`
        res.appendChild(img)
        img.style.width = '300px';
    }
}