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

enviarEmail("Olá mundo","luiz.victor100@hotmail").then((dados) => {

    console.log(`
        Assunto: ${dados.assunto}
        ------------------------
        To: ${dados.to}
    `);

}).catch(() => {
    console.log("Não foi dessa vez :(");
});

