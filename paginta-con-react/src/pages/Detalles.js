const Detalles = (props) => {
    return (
        <div>
            <div class="productoDetalle">
                <h3>Avatar 2</h3>
                <div class="imgDeDetail"><img src="img/Avatar 2.jfif" alt="" /></div>
                <div class="datosDetail">
                    <div class="pDeDetail">
                        <h6>Sinopsis: </h6>
                        <p> Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer
                            juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua
                            amenaza reaparece. Las últimas novedades, dichas también por el propio Landau, revelan que la familia de
                            Sully llega a un arrecife donde habrá un nuevo clan, llamado Metkayina. El cambio de lugar hará que los
                            Sully no estarán en un ambiente seguro, será un cambio tanto cultural como ambiental.

                            A su nueva familia pertenece Miles Socorro, alias Spider, un niño humano interpretado por Jack Champion</p>
                    </div>
                    <div class="pDeDetailInferior">
                        <p class="pDeDetailP">Etiquetas: Ficción, Accion, Aventura</p>
                        <p class="pDeDetailP">Estreno: 16 de diciembre de 2022</p>
                        <p class="pDeDetailP">Disponible en: <a href="https://ww3.cuevana.pro/">Cuevana</a> y <a href="https://www.hbomax.com/ar/es?utm_id=sa%7c71700000084767084%7c58700007214361776%7cp64690578728&gclid=CjwKCAjw7IeUBhBbEiwADhiEMXsEG77KGopufXdZwhRZWTlGRKoxQXYS2tvQcTmxisCDy6ohXGcNKhoCh9YQAvD_BwE&gclsrc=aw.ds">Hbo Max</a></p>
                        <form class="formDetail">
                            <p class="clasificacion">
                                <input id="radio1" type="radio" name="estrellas" value="5" />
                                <label class="lableDeDitail" for="radio1">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4" />
                                <label class="lableDeDitail" for="radio2">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3" />
                                <label class="lableDeDitail" for="radio3">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2" />
                                <label class="lableDeDitail" for="radio4">★</label>
                                <input id="radio5" type="radio" name="estrellas" value="1" />
                                <label class="lableDeDitail" for="radio5">★</label>
                            </p>
                        </form>
                    </div>
                    <div class="video"><h3>Trailer</h3><iframe width="560" height="315" src="https://www.youtube.com/embed/QC5eaMNaHLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="text-align: center ;"></iframe>
                        <h3>Imagenes</h3>
                        <div class="imgDeImgDetail">
                            <div class="card1"><img class="imgDeDetail" src="img/avatar-2.3imagenes.webp" alt="" /></div>
                            <div class="card1"><img class="imgDeDetail" src="img/avatar2.1.jpg" alt="" /></div>
                        </div>
                        <div class="imgDeImgDetail">
                            <div class="card1"><img class="imgDeDetail" src="img/Avatar 2.jfif" alt="" /></div>
                            <div class="card1"><img class="imgDeDetail" src="img/avatar 2.5.jpeg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Detalles