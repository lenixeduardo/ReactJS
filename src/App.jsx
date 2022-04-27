import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

//essa e a funcao que sera exportada para o index.jsx

// o App no caso é um componente do react.
export function App() {


    return (
        //fragment e uma tag html que nao produz nada visual no HTML.
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}