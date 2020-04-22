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

principal();