import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from "react";
import MyContext from "../Context";

export default function Home() {
  const {api, setApi} = useContext(MyContext)



  const setFavorito = (id) => {
    //Crea una variable que retorna un indice
    const apiIndex = api.findIndex((e) => e.id === id );
    api[apiIndex].favorito = !api[apiIndex].favorito;
    setApi([...api]);
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        api.map((e, i ) => (
          <div
          onClick={() => setFavorito(e.id)}
          className="foto"
          style={{ backgroundImage: `url(${e.src})`}}
          key= {i}
          >
          <Heart corazon={e.favorito} />
          <p> {e.desc} </p>
          </div>
        ))
      }

    </div>
  );
}
