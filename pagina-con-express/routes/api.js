var express = require('express');
var router = express.Router();
let todasLasPeliculasModel= require("../models/zonaAdmin")
const cloudinary = require("cloudinary").v2;


router.get('/', async function(req, res, next) {

    let titulosYSinopsis = await todasLasPeliculasModel.todasLasPeliculas()
    
    titulosYSinopsis = titulosYSinopsis.map(peliculas =>{
      if(peliculas.imagenes){
        const imagen = cloudinary.url(peliculas.imagenes,{
          width:960,
          height:200,
          crop:"fill"
        });
        return {
          ...peliculas,
          imagen
        }
      }else{
        return {
          ...peliculas,
          imagen:" "
        }
      }
    })
    res.json(titulosYSinopsis)
      });
    
    module.exports = router