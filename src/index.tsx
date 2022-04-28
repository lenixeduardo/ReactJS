// importaremos modulos com dependencias usando o webpack, estipulando
//loaders, configurações que ensinaram para nossa aplicacao como tratar estes modulos.
// exemplo: .png, .sass, e transformar em .png .jpg .css .js que o browser consiga 
//renderizar.


import {render } from 'react-dom';
import {App} from './App'


// essa funcao recebe dois parametros, o primeiro e o que quero renderizar 
// e  o segundo é dentro de qual elemento quero renderizar este elemento.
render(<App />, document.getElementById('root'))
