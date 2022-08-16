import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => {
    return (
      <div>
      <footer>
    <div class="DivFooter">
      <div class="contact">
    <h3>Quienes somos</h3>
    <p>Somos una pagina que recopila peliculas para que pueda obtener mas informacion de las mismas tanto en critica como en donde ouede verlas</p>
    </div>
    <div class="contact">
      <h3>Contactos</h3>
      <section>
        <article>
          <p class="pDeFooter"> Email : PeliMax@hotmai.com</p>
        </article>
        <article>
          <p class="pDeFooter">Numero De Telefono : 23456122</p>
        </article>
        <article > <FontAwesomeIcon icon={faInstagram} style={{lineHeight: 2  , color: "rgb(219, 149, 221)"}}/>
          <p class="pDeFooter">Instagram : PeliMax007</p>
        </article>
        <article><FontAwesomeIcon icon={faFacebookSquare}style={{lineHeight: 2, color: "blue"}}/>
      

          <p class="pDeFooter">facebook : PeliMax</p>
        </article>
        <article>
          
        <FontAwesomeIcon icon={faTwitter}  style={{lineHeight: 2, color: "rgb(84, 184, 230)"}} />
          <p class="pDeFooter">Twitter : PeliMaxima</p>
        </article>
      </section>
    </div>
      <form class="formPP"action="">
        <h3>¿No encuentra su pelicula?</h3>
        <p>Envienos un email con el nombre d la pelicula y envrebe la estaremos añadiendo</p>
        <div class="contenedorDePedirPeliculas">
        <div class="divPedirPeliculas">
          <label class="labelDePedirPelicula" for="">Su Email :</label>
        <input class="inputPedirPeli" type="email" name="Email" />
        

      </div>
      <div class="divPedirPeliculas">
        <label class="labelDePedirPelicula" for="">pelicula a añadir :</label>
        <input class="inputPedirPeli" type="text" name="pedido" />
        
        
    </div>

    <button type="submit" class="btn-btn-primary" className="margin: 0px;">Enviar</button>
  </div>

    </form>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
    crossorigin="anonymous"></script>
    </div>
  </footer>
  </div>
  
       
    )
}
export default Footer