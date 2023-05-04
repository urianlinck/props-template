import Carro from "./Carro";

function Garagem(props) {
  console.log("e na garamgem", props)
  return (
    <div>
      <h1>Garagem de {props.nomeGaragem}</h1>
      <button onClick={()=>props.apresentaGaragem(props.nomeGaragem)}>Apresentar a garagem</button>
      <Carro carro={props.carro}/>
      <Carro carro={props.carro2} />
      <Carro carro={props.carro3}/>
      <Carro carro={props.carro4}/>
    </div>
  );
}

export default Garagem;
