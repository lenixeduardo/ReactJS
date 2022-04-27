
import {useState} from 'react';

//useState retorna em array dois dados.
//a posicao inicial 0, e a 1 que é a proxima posicao. entao usamos a desestruturacao, criando duas variaveis para cada um dos retornos.
// entao a setCounter vai ser a que usamos para alterar o valor da counter.
export function Counter() {

    const [counter, setCounter] = useState(0);
    function Increment() {
        setCounter(counter +1)
    }
    // teremos que usar entao o estado para monitorar as variaveis
    // para validar que quando alterado, seja exibido novamente no HTML.
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>
                Increment
            </button>
        </div>
    )
}