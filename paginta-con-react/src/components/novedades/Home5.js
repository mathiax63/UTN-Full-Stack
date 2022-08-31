import React from "react"
import { Link } from "react-router-dom"

const laspeliculasi = (props => {
    const { id, title, imagen,estrellas,estreno,sinopsis, body} = props;
    return (
        <div className="card" style={{flex: "initial", height:"800px"}}>
            <Link className="aDelCT" to={"/detalles/"+ id}>
             <div className="ImgCard">
           <img className="card-img-top" src={imagen} />
            </div>
            <div className="card-body">
           <h5 className="card-title">{title}</h5>
           <p className="card-text">{sinopsis}</p>
           <p className="card-text">{estrellas}</p>
           <p>Estreno : {estreno}</p>
            <div dangerouslySetInnerHTML={{__html:body}} />
            <hr /></div></Link>
        </div>
        
        
       
    
    )
})

export default laspeliculasi