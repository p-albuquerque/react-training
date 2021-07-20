import ExpenseDate from "./ExpenseDate";
import Card from "./Card"
import "./ExpenseItem.css";

function ExpenseItem(props) {
  /* Os parametros que um componente recebe, chegam no formato de Obj (unico), que contem em suas propriedades, todas as informacoes que foram passadas na chamada do componente
    OBS: podemos dar qualquer nome para esse parametro, comumente usa-se "props" */

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />{" "}
      {/* Repassando o props para o filho, especificamente a data (segundo nivel da arvore) */}
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div>$ {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
