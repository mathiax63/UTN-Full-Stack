import { useState, useEffect } from "react"
import axios from "axios"
import NovedadItem from "../components/novedades/Detalles"
import { useParams } from 'react-router-dom';




const Detalles = (props) => {
  const { id } = useParams();
    const [loading, setLoading] = useState(false)
  const [novedades, setNovedades] = useState([])
console.log("idd", id)
  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get(`http://localhost:3000/api/detalles/${id}`);
      setNovedades(response.data)
      console.log(response.data)
      setLoading(false)
    };
    cargarNovedades();
  }, []);
    
    return (
        <div>
            
                            {
            loading ? (
              <p>Cargando...</p>
            ) : (
              novedades.map(item => <NovedadItem key= {item.id}
                id={item.id} title={item.titulo}  sinopsis={item.sinopsis} 
                estreno={item.estreno}  etiquetas={item.etiquetas}
                trailer={item.trailer}  estrellas={item.estrellas}
                Plataformasparaver={item.Plataformasparaver}
                imagen={item.imagen}  body={item.cuerpo} />)
            )
           }
                    
                  
        </div>

    )
}
export default Detalles