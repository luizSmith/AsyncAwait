var emails = require("./functions");

//evniando email Async Await
async function mandaEmail(to,mensagem) {
    var id = await emails.pegarId(to);
    var email = await emails.buscarEmailNoBanco(id);

    emails.enviarEmail(mensagem,email).then(() => {
        console.log("Email enviado com sucesso para " + email);
    }).catch(err => {
        console.log("falha ao enviar email para " + email);
    })
}

// OU

async function mandaEmail2(to,mensagem) {
    var id = await emails.pegarId(to);
    var email = await emails.buscarEmailNoBanco(id);

    //Caso não queira usar await no enviarEmail()
    try {
        await emails.enviarEmail(mensagem,email);
        console.log("Email 2 enviado com sucesso para " + email);
    } catch(erro) {
        console.log("falha ao enviar email 2 para " + email);
    }
}

mandaEmail(5,"Como vai você ?");

mandaEmail2(7,"Como vai você ?");