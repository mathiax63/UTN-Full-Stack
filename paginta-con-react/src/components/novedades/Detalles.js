import React from "react"

const detalles = (props => {
    const { id, title, sinopsi, imagen, estrellas, etiquetas, categoria, fecha, body} = props;
    return (
        <div className="divCompTodasP"><a className="aDelCT" href="/detalles/:id">
            
            
            <img className="imgTp" src={imagen} />
            <h5>{title}</h5>
            <div dangerouslySetInnerHTML={{__html:body}} />
            <hr /></a>
        </div>
    )
})

export default detalles