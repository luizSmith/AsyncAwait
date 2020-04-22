var emails = require("./functions");

emails.pegarId().then((id) => {
    emails.buscarEmailNoBanco(id).then((email) => {

        emails.enviarEmail("Olá, como você está ?",email).then(() => {

            console.log("Email enviado com sucesso para " + email);
        
        }).catch(err => {

            console.log("falha ao enviar email para " + email);
        
        })

    }).catch(erro => {
        console.log("Usuario não existe");
    })
})