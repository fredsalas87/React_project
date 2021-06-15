import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function CardItem(props) {
  return (
    <div className="card_item">
      <h2>{props.nome}</h2>
      <img src={props.imagem} alt="Imagem da personagem" width="300px" />
    </div>
  );
}

function ListarItens() {
  return (
    <div className="lista_itens">
      <CardItem
        nome="Mario Bros"
        imagem="https://i.pinimg.com/474x/b4/ab/d7/b4abd78a2e58557bea252a50c48a746b.jpg"
      />
      <CardItem
        nome="Luigi Bros"
        imagem="https://www.imagenspng.com.br/wp-content/uploads/2015/02/super-mario-luigi-03.png"
      />
    </div>
  );
}

function App() {
  return <ListarItens />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
