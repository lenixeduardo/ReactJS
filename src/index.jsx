// importaremos modulos com dependencias usando o webpack, estipulando
//loaders, configurações que ensinaram para nossa aplicacao como tratar estes modulos.
// exemplo: .png, .sass, e transformar em .png .jpg .css .js que o browser consiga 
//renderizar.


import {createRoot} from 'react-dom/client';
import {App} from './App'


// essa funcao recebe dois parametros, o primeiro e o que quero renderizar 
// e  o segundo é dentro de qual elemento quero renderizar este elemento.
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />)
