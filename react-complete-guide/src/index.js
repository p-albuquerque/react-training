import ReactDOM from 'react-dom';

import './index.css';
import App from './App'; // quando se trata de um arquivo .js, podemos omitir a extensao

ReactDOM.render(<App />, document.getElementById('root'));
// O objeto "reactDOM" possui o metodo render, que recebe dois argumentos: componente jsx a ser exibido e o elemento do "index.html", onde esse componente sera exibido

