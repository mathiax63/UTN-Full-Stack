import React from "react"

const novedadItem = (props => {
    const { title, sinopsi, imagen, estrellas, etiquetas, categoria, fecha, body} = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{sinopsi}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{__html:body}} />
            <hr />
        </div>
    )
})

export default novedadItem