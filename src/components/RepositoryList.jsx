import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}
const repositoryName = 'unform2'

export function RepositoryList() {

    return (

        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            {/*  podemos passar propriedades para nosso componente
e tanbem passaremos ele como argumento da funcao */}
            <ul>

                {/* Criamos então um componente externo, e encapsulamos o mesmo 
chamando o nome da funcao exportada */}
                {/* aqui entao em propriedades recebe o nome do repositorio, a descricao e o link do repositorio. */}
                {/* podemos armazenar estes 3 dados em uma variavel e passa-lo por chaves para o componente. */}
                <RepositoryItem
                    repository={repository}

                />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )


}