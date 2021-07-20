import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  /* 
    Note que, quando aplicamos um style na chamada desse componente (pelo pai), essa informacao tambem eh passada atraves do "props"
   utilizando o atributo "className", podemos capturar esse style e concatena-lo com o style proprio da definicao do componente
  */

  return <div className="card">{props.children}</div>;
  // children eh uma palavra reservada que referencia todo conteudo presente dentro das tags do componente (codigo html), passado pelo pai
}

export default Card;
