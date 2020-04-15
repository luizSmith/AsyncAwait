function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        },2500);
    });
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("luiz.victor100@hotmail.com")
        },1000);
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //Arrow function
            var deuErro = false;

            // Os dois retornos "resolve" e "reject" só podem ter um unico parametro

            if (!deuErro) {
                resolve({assunto:7, to: para}) // Promessa OK!
            } else {
                reject() // não foi cumprida
            }
        },4000)
    });
}

// enviarEmail("Olá mundo","luiz.victor100@hotmail").then( ({ ass, to}) => { //.then((dados) => { 

//     console.log(`
//         Assunto: ${ass}
//         ------------------------
//         To: ${to}
//     `);

// }).catch(() => {
//     console.log("Não foi dessa vez :(");
// });

pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {

        enviarEmail("Olá, como você está ?",email).then(() => {
            console.log("Email enviado com sucesso para " + email);
        }).catch(err => {
            console.log(err);
        })

    })
})
