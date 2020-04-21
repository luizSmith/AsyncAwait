function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        },2500);
    });
}

function buscarEmailNoBanco(id) {
    let user = [
        "huguinho@gmail.com",
        "zezinho@gmail.com",
        "luizinho@gmail.com"     
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.indexOf(id) != -1) {
                resolve(user[id]);
            } else {
                reject(null);
            }
            
        },1000);
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //Arrow function
            var deuErro = false;

            // Os dois retornos "resolve" e "reject" só podem ter um unico parametro

            if (!deuErro) {
                resolve({ass: corpo, to: para}) // Promessa OK!
            } else {
                reject() // não foi cumprida
            }
        },4000)
    });
}

module.exports = {
    pegarId,
    buscarEmailNoBanco,
    enviarEmail
};