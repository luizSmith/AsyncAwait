# Async Await
 - Este código tem como objetivo melhorar minhas habilidade com Node.js

## Promise
 - Promise ou promessa é uma função que recebe dois parâmetros (**resolve** e **reject**) que são chamados de acordo com o que acontece na promessa, se ela for bem sucedida deve retornar resolve(), do contrário reject()

## Promise Hell
 - Ao trabalhar com promises temos a possibilidade de fazer uma promise chamar outra dentro do seu processo, e assim criar uma sequência de execução, o problema é que dependendo da complexidade ou do número de processos executados, isso pode fazer o código ficar muito poluído.

```
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
 ```

## Async && Await
- Para evitar a criação de uma Promise Hell podemos fazer uso do comando **await** antes de chamarmos a função, isso fará com que o JS espere a função terminar de ser executada para executar a próxima linha. O comportamento de esperar um processo terminar para executar outro é chamado de síncrono, e vai contra o funcionamento comum da linguagem, portanto para que isso seja possível devemos passar o comando **async** antes de declarar a função especificando que ela terá um comportamento síncrono.
```
async function mandaEmail(to,mensagem) {

    var id = await emails.pegarId(to);
    var email = await emails.buscarEmailNoBanco(id);

    emails.enviarEmail(mensagem,email).then(() => {

        console.log("Email enviado com sucesso para " + email);

    }).catch(err => {

        console.log("falha ao enviar email para " + email);

    })
}
```

Desta forma temos um código muito mais limpo do que o anterior e a Promise Hell não é formada.

Se necessário é possível não utilizar o then()/catch para tratamento do erro, ao invés disso pode fazer uso do try/catch

```
async function mandaEmail(to,mensagem) {

    var id = await emails.pegarId(to);
    var email = await emails.buscarEmailNoBanco(id);

    //Caso não queira usar await no enviarEmail()
    try {

        await emails.enviarEmail(mensagem,email);
        console.log("Email enviado com sucesso para " + email);
        
    } catch(erro) {
        
        console.log("falha ao enviar email para " + email);

    }
}
```

O resultado será o mesmo.


### Conclusão 
  - O funcionamento do JS naturalmente é **assíncrono** e o **Await** permite que possamos fazer certos pedaços de código funcionarem de forma **síncrona**, mas isso só é possível quando estamos trabalhando com funções Async, no caso, **síncronas**.