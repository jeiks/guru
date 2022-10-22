var guru = false,
    msgPadrao = 'Olá Guru, que tudo sabe! Por favor, me responda a essa humilde pergunta: ',
    resposta = '',
    pos = 0;
function detectspecialkeys(e)
{
    var evt=window.event?event:e;
    //if (evt.altKey || evt.ctrlKey || evt.shiftKey)
    if (evt.ctrlKey && evt.shiftKey) {
        e.preventDefault();
        guru = !guru;
        console.log('Guru: '+guru);
    } else if (evt.key == 'Enter') {
        e.preventDefault();
        chamarGuru();
    }else if (evt.key == 'Backspace' && guru) {
        var q = question.value+'';
        e.preventDefault();
        if (resposta.length > 0)
            resposta = resposta.substr(0, resposta.length-1);
        if (q.length > 0)
            question.value = question.value.substr(0, q.length-1);
    }
}
function controlGuru(e)
{
    var text, aux;
    if (guru) {
        resposta += e.key;
        e.preventDefault();
        question.value = question.value+msgPadrao[question.value.length];
    }
    visibilidadeResposta(false);
}
function chamarGuru()
{
    guru = false;
    console.log('resposta: '+resposta);
    if (resposta == '')
    {
        answer.textContent = 'Eu só respondo o meu mestre!';
    }else{
        answer.textContent = resposta;
        resposta = '';
    }
    question.value = '';
    visibilidadeResposta(true);
}
function visibilidadeResposta(aparecer)
{
    if (aparecer)
    {
        answer.style.backgroundColor = '#ffffffe0';
        answer.style.color = '#000';
    }else{
        answer.style.backgroundColor = 'transparent';
        answer.style.color = 'transparent';
    }
}
