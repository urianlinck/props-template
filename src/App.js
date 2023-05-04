import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Urian"
  function apresentaGaragem(nome){
    alert(`Boas vindas à garagem de ${nome}`)
  }

  const carro = {
    nome: "Golf",
    cor: "prata",
    ano: 2007,
    flex: "sim"
  }

  const carro2 = {
    nome: "Fusca",
    cor: "preto",
    ano: 1978,
    flex: "não"
  }

  const carro3 = {
    nome: "Uno",
    cor: "azul",
    ano: 2000,
    flex: "não"
  }

  const carro4 = {
    ...carro,
    ano:1990,
    cor: "verde"
  }

  const nome2 = "Labiru"
  
  const carro5 = {
    nome: "Jeep",
    cor: "musgo",
    ano: 2010,
    flex: "sim"
  }
  const carro6 = {
    nome: "Chevete",
    cor: "azul metálico",
    ano: 1978,
    flex: "não"
  }
  const carro7 = {
    nome: "Meriva",
    cor: "branco",
    ano: 2003,
    flex: "não"
  }
  const carro8 = {
    ...carro5,
    cor: "camuflado",
    flex: "não"
  }

  return (
    <div className="App">
      <Garagem nomeGaragem={nome} apresentaGaragem={apresentaGaragem}
      carro={carro}
      carro2={carro2}
      carro3={carro3}
      carro4={carro4}/>
      
      <Garagem nomeGaragem={nome2} apresentaGaragem={apresentaGaragem}
      carro={carro5}
      carro2={carro6}
      carro3={carro7}
      carro4={carro8}/>
    </div>
  );
}
