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
            var deuErro = true;

            // Os dois retornos "resolve" e "reject" só podem ter um unico parametro

            if (!deuErro) {
                resolve({ass: 7, to: para}) // Promessa OK!
            } else {
                reject() // não foi cumprida
            }
        },4000)
    });
}

//evniando email
// enviarEmail("Olá mundo","luiz.victor100@hotmail").then( ({ass, to}) => { //.then((dados) => { 

//     console.log(`
//         Assunto: ${ass}
//         ------------------------
//         To: ${to}
//     `);

// }).catch(() => {
//     console.log("Não foi dessa vez :(");
// });

// pegarId().then((id) => {
//     buscarEmailNoBanco(id).then((email) => {

//         enviarEmail("Olá, como você está ?",email).then(() => {
//             console.log("Email enviado com sucesso para " + email);
//         }).catch(err => {
//             console.log(err);
//         })

//     })
// })

function pegarUsuarios() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve([
                {name:"Smith", lang:"PHP"},
                {name:"Gabbi", lang:"JS"},
                {name:"Lucas", lang:"Python"}
            ])
        }, 1500);
        
    })
}

// await : fazo JS esperar a função ser concluida;
// mas ele só funciona em funlçoes async (assíncrona)

async function principal() {
    var usuarios = await pegarUsuarios();
    console.log(usuarios)
}

//principal();

//evniando email Async Await
async function mandaEmail(to) {
    var id = await pegarId(to)
    var email = await buscarEmailNoBanco(id);

    // enviarEmail("Como vai você ?",email).then(() => {
    //     console.log("Email enviado com sucesso para " + email);
    // }).catch(err => {
    //     console.log("falha ao enviar email para " + email);
    // })

    //Caso não queira usar await  no enviarEmail()
    try {
        await enviarEmail("Como vai você ?",email);
        console.log("Email enviado com sucesso para " + email);
    } catch(erro) {
        console.log("falha ao enviar email para " + email);
        console.log(erro);
    }    

}

mandaEmail(5);
