import { useContext } from "react";
import MyContext from "../Context";


export default function Favoritos() {
  const {api , setApi} = useContext(MyContext)


  
  return (
    <div className="galeriaFavoritos">
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeriaFavoritos grid-columns-4  ">
        {
          api.filter((e) => e.favorito)
          .map((e, i) => (
            <>
            <div className="fotoFavorita">
            <img
            className="imagenFavorita"
           
            src={e.src}
            alt= ""
            key={i}
            />
            </div>

            </>

          
          ))
          
        }
       
      </div>
    </div>
  );
}
