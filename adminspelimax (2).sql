-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-08-2022 a las 21:39:15
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `adminspelimax`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

DROP TABLE IF EXISTS `administradores`;
CREATE TABLE IF NOT EXISTS `administradores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id`, `nombre`, `email`, `password`) VALUES
(1, 'Mathias', 'mat@hotmail.com', 'e10adc3949ba59abbe56e057f20f883e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
CREATE TABLE IF NOT EXISTS `peliculas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `sinopsis` varchar(1000) NOT NULL,
  `imagenes` varchar(50) DEFAULT NULL,
  `trailer` varchar(70) NOT NULL,
  `etiquetas` varchar(80) NOT NULL,
  `estrellas` int(5) NOT NULL,
  `estreno` date NOT NULL,
  `Plataformasparaver` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `sinopsis`, `imagenes`, `trailer`, `etiquetas`, `estrellas`, `estreno`, `Plataformasparaver`) VALUES
(24, 'prueba detalles', 'pruebo detalles', 'twgp3h78y2u6vrnnef7g', 'https://youtu.be/ZOgBVR21pWg', 'aventura,accion,misterio', 5, '2000-10-30', 'hbo_max,disney_plus,amazon_prime'),
(23, 'Programacion Web Full Stack', 'wada', 'joxgafgdkpyxuj6mveue', 'adw', 'accion', 50, '2222-02-20', 'hbo_max'),
(2, 'Rapido y furioso 9', 'Dom Toretto vive una vida tranquila junto a Letty y su hijo, pero el peligro siempre regresa a su vida. En esta ocasión, el equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo: el hermano de Dom.', 'n0cepv7u2yrnfe1njf4l', 'https://youtu.be/fV7gg929uDU', 'accion', 4, '2021-06-25', 'hbo_max'),
(5, 'spider man no way home', 'Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.', 'euod6drbglbmhqccquzu', 'https://youtu.be/SkmRT3M4Vx4', 'accion', 5, '2021-12-17', 'hbo_max'),
(17, 'nueva', 'holas', 'mvpbsyekemfdvhf2dzeo', '23aw', 'accion', 2, '2000-10-20', 'hbo_max'),
(18, 'prueba', 'alguna', 'td0ujun0lwari9boxak7', 'prueba', 'accion', 2, '2000-10-30', 'hbo_max'),
(22, 'sad', 'asd', 'awthfoimzcfto14ekfey', 'asd', 'misterio,terror', 5, '2000-10-20', 'hbo_max,disney_plus'),
(20, 'prueba4', 'nueva', 'lursrgwlckm4kljl88eo', 'prueba4', 'accion,misterio,terror', 23, '2000-10-20', 'hbo_max'),
(21, 'prueba', 'wq', 'g5bgfbxz30fbp99iztnq', 'adw', 'accion', 6, '2000-02-20', 'hbo_max'),
(25, 'pruebo detalles 2', 'prueba de deatlles 2', 'toqgvvqj2qxh1qcdjg9n', 'https://www.youtube.com/embed/QC5eaMNaHLs', 'misterio,terror,suspenso', 3, '2500-10-30', 'hbo_max,disney_plus,netflix,cuevana');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
