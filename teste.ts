type User = {
    name: String,
    email: string
    adress: {
        city: string
        state?: string
    }
}


function showWelcomeMessage(user: User) {

    return `Welcome ${user.name}, your e-mail is ${user.email}. 
    Your city is ${user.adress.city} and your state is ${user.adress.state}`;
}

showWelcomeMessage({
    name: 'John Doe',
    email: 'john@doe.com',
    adress: {
        city: ' New York',
        state: 'NY'
    }
})

// temos de usar o typescript para passar o tipo que a pessoa pode escrever o usuario, evitando possiveis falhas nessa funcao declarada.

 // entao passaremos essa variavel para limitar o usuario que possa ser passado dentro do parenteses de showWelcomeMessage

 // entao o typescript nos auxilia atraves de uma inteligencia artifical a typar corretamente as nossas funcoes.