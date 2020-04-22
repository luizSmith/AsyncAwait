function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        },2500);
    });
}

function buscarEmailNoBanco(id) {   
    return new Promise((resolve, reject) => {
        var user = [
            'huguinho@gmail.com',
            'zezinho@gmail.com',
            'luizinho@gmail.com'     
        ];

        setTimeout(() => {
            if (Math.abs(id) < user.length) {
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
            //define o erro para teste
            var deuErro = true;

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