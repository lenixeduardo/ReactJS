
import { useState } from 'react';

//useState retorna em array dois dados.
//a posicao inicial 0, e a 1 que é a proxima posicao. entao usamos a desestruturacao, criando duas variaveis para cada um dos retornos.
// entao a setCounter vai ser a que usamos para alterar o valor da counter.


// imutabilidade- garante que a variavel nunca tenha seu valor alterado. Mas sim dar um novo valor a ela.

// em JS adicionariamos um item ao array da seguinte forma:

// usuarios  = ['diego3g','danileao','diegoegosf']
// usuarios.push('rafacamarda')   

// no react não usamos esse metodo. Seria da seguinte forma:

// novoUsuarios = [...usuarios,'rafacamarda']

export function Counter() {

    const [counter, setCounter] = useState(0);
    // na function increment, usamos entao o conceito da imutabilidade.
    function Increment() {
        setCounter(counter + 1)
    }
    // teremos que usar entao o estado para monitorar as variaveis
    // para validar que quando alterado, seja exibido novamente no HTML.
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={Increment}>
                Increment +1
            </button>
        </div>
    )
}