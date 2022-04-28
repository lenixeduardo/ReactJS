import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

interface Repository { 
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    // sempre começo um estado (useState) com um array vazio. e com uma variavel do mesmo tipo que sera armazenada.

    // usamos o generic para passar a typagem do nosso estado.
    const [repositories, setRepositories] = useState<Repository[]>([]);

    // sempre que precisamos aplicar uma alteracao de valor seja por uma chamada API ou por um click
    //precisamos colocar essa variavel no estado.

    // com useEffect toda vez que uma variavel mudar, ele executara a funcao que está sendo determinada no escopo.
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json())

            // entao usamos o useEffect para chamar via API os respositorios e passar para nossa variavel repositories. 
            .then(data => setRepositories(data))

    }, [repositories])

    return (

        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            {/*  podemos passar propriedades para nosso componente
e tanbem passaremos ele como argumento da funcao */}
            <ul>

                {/* chaves para usarmos javascript */}
                {/* essa propriedade key deve ser utilizada para saber qual a informacao entre cada um dos nossos respositorios. */}
                {repositories.map(repository => { 
                    return  < RepositoryItem key ={repository.name} repository={repository} /> }
                )}

                {/* Criamos então um componente externo, e encapsulamos o mesmo 
chamando o nome da funcao exportada */}
                {/* aqui entao em propriedades recebe o nome do repositorio, a descricao e o link do repositorio. */}
                {/* podemos armazenar estes 3 dados em uma variavel e passa-lo por chaves para o componente. */}
               
              
            </ul>
        </section>
    )


}