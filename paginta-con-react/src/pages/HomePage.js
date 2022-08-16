import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"
// or less ideally
//import { Carousel } from 'react-bootstrap';
const HomePage = (props) => {
    return (
        <div>
            <main class="mainIndex">
   

<div class="contenedorCarrusel">
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/portada-encantojpeg.webp"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3  class="titulos">Encanto</h3>
      <p class="pDelCarrusel">En lo alto de las montañas de Colombia hay un lugar encantado llamado Encanto. Aquí,
                en una casa mágica, vive la extraordinaria familia Madrigal donde todos tienen habilidades fantásticas.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/F9-Poster.webp"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3  class="titulos">Rapido y Furioso 9</h3>
      <p  class="pDelCarrusel">Dom Toretto y su equipo se unen para detener un complot del asesino más hábil y el
                conductor más exitoso que jamás hayan conocido: el hermano abandonado de Dom.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/portada-para-la-caratula-de-el-hobbit-un-viaje-inesperado-original.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 class="titulos">El Hoobit</h3>
      <p  class="pDelCarrusel">Dentro de dicha ficción, el argumento de El hobbit se sitúa en el año 2941 de la
                Tercera Edad del Sol,​ y narra la historia del hobbit Bilbo Bolsón, que junto con el mago Gandalf y un
                grupo de enanos, vive una aventura en busca del tesoro custodiado por el dragón Smaug en la Montaña
                Solitaria.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>












    <div class="Destacados-Y-Novedades-General">

      <h2 class="DYN">Destacados</h2>


      <div class="card-deck">
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/spidermanNWH.jpg.webp" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">Spider man no way home</h5>
            <p class="card-text">Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del
              joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo
              sale mal y provoca una fractura en el multiverso.
            </p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">16 de diciembre de 2021</small></p>
          </div></Link>
        </div>
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"> <img src="img/PorqueSoyBatman.jpg" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">The Batman</h5>
            <p class="card-text">«Dos años de acechar las calles como Batman (Robert Pattinson), infundiendo miedo en
              los corazones de los criminales, han llevado a Bruce Wayne a las profundidades de las sombras de Gotham
              City. Con solo unos pocos aliados de confianza: Alfred Pennyworth (Andy Serkis) y el teniente James Gordon
              (Jeffrey Wright).
              .</p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">17 de abril de 2022 </small></p>
          </div></Link>
        </div>
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/venom.jpg" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">Venom</h5>
            <p class="card-text">El periodista Eddie Brock (Tom Hardy) comienza a investigar la Fundación Vida, dirigida
              por el científico Carlton Drake (Riz Ahmed). Al descubrir que realizan experimentos con seres humanos y
              formas de vida alienígena, hará todo lo posible por sacar a la luz este tipo de excesos.</p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">5 de octubre de 2018</small></p>
          </div></Link>
        </div>
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/proyecto rampage.jfif" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">Proyecto rampage</h5>
            <p class="card-text">La historia sigue al primatólogo Davis Okoye debiendo evitar una catástrofe mundial cuando el gorila albino George, el lobo gris Ralph y la cocodrila americana Lizzie son infectados por un extraño experimento genético, transformándose en agresivas y sanguinarias criaturas de gran tamaño.              .
            </p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">13 de abril de 2018</small></p>
          </div></Link>
        </div>
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/el 50 puntos para grifindor.jfif" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">Animales fantásticos: los secretos de dumbledore</h5>
            <p class="card-text">La historia tiene lugar en Río de Janeiro, Brasil y conduce a la participación del Mundo Mágico en la Segunda Guerra Mundial.
            </p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">14 de abril de 2022</small></p>
          </div></Link>
        </div>
      </div>
    </div>


    <div class="Destacados-Y-Novedades-General">

      <h2 class="DYN">Novedades</h2>

      <div class="card-deck">
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/Avatar 2.jfif" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">Avatar 2</h5>
            <p class="card-text">Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer
              juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua
              amenaza reaparece.
            </p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">16 de diciembre de 2022</small></p>
          </div></Link>
        </div>
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/Uncharted-pelicula.webp" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">Uncharted: Fuera del mapa</h5>
            <p class="card-text">Nathan Drake y su compañero Victor Sullivan se adentran en la peligrosa búsqueda del
              "mayor tesoro jamás encontrado". Al mismo tiempo, rastrean pistas que puedan conducir al hermano perdido
              de Drake.
            </p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">17 de febrero de 2022</small></p>
          </div></Link>
        </div>
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/El_hombre_del_norte-710039658-large.jpg" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">The Northman</h5>
            <p class="card-text">Del visionario director Robert Eggers llega EL HOMBRE DEL NORTE, una trepidante
              aventura épica que sigue la historia de un joven príncipe vikingo decidido a vengar la muerte de su padre.
              La película cuenta con un estelar reparto encabezado por Alexander Skarsgård, Nicole Kidman, Claes Bang,
              Anya Taylor-Joy, Ethan Hawke, Björk y Willem Dafoe.
            </p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">21 de abril de 2022</small></p>
          </div></Link>
        </div>
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/doctor strange in the multiverse of madness.jfif" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">Doctor strange in the multiverse of madness</h5>
            <p class="card-text">El Dr. Stephen Strange abre un portal al multiverso al utilizar un hechizo prohibido. Ahora su equipo debe enfrentarse a una amenaza enorme.

            </p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">5 de mayo de 2022</small></p>
          </div></Link>
        </div>
        <div class="card"><Link to="/detalle">
          <div class="ImgCard"><img src="img/El_Exorcismo_de_Dios_-_Poster.webp" class="card-img-top" alt="..." /></div>
          <div class="card-body">
            <h5 class="card-title">El exorcismo de Dios
            </h5>
            <p class="card-text">El padre Peter Williams, un exorcista estadounidense, es poseído por el demonio que intentaba expulsar de una joven y por el que se ve obligado, contra su voluntad, a cometer el más terrible sacrilegio.

            </p>
            <p>Estreno : </p>
            <p class="card-text"><small class="text-muted">17 de febrero de 2022</small></p>
          </div></Link>
        </div>
      </div>
    </div>

  </main>
        </div>
        )
}
export default HomePage