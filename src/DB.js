const data = [
    {
        id: 1, title: "Incepción",
        description: "Un ladrón que roba secretos corporativos a través del uso de tecnología de compartición de sueños.",
        director: "Christopher Nolan",
        releaseDate: "16 julio 2010",
        image: "/images/PELICULAS/Incepción.jpg",
        rating: 5
    },

    {
        id: 2, title: "Interstellar",
        description: "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio para asegurar la supervivencia de la humanidad.",
        director: "Christopher Nolan",
        releaseDate: "07 noviembre 2014",
        image: "/images/PELICULAS/Interstellar.jpg",
        rating: 5
    },

    {
        id: 3, title: "El Caballero de la Noche",
        description: "Cuando el peligro conocido como el Joker emerge de su misterioso pasado, desata caos en Gotham.",
        director: "Christopher Nolan",
        releaseDate: "18 julio 2008",
        image: "/images/PELICULAS/caballero de la noche.jpg",
        rating: 5
    },

    {
        id: 4, title: "El Club de la Pelea",
        description: "Un trabajador de oficina insomne forma un club de pelea subterráneo con un vendedor de jabón.",
        director: "David Fincher",
        releaseDate: "15 octubre 1999",
        image: "/images/PELICULAS/El_club_de_la_pelea.jpg",
        rating: 4
    },

    {
        id: 5, title: "Forrest Gump",
        description: "Las presidencias de Kennedy y Johnson, la guerra de Vietnam y otros eventos históricos se desarrollan a través de la perspectiva de un hombre de Alabama.",
        director: "Robert Zemeckis",
        releaseDate: "06 julio 1994",
        image: "/images/PELICULAS/forest gump.jpg",
        rating: 5
    },

    {
        id: 6, title: "Matrix",
        description: "Un hacker informático aprende sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseDate: "31 marzo 1999",
        image: "/images/PELICULAS/matrix.jpg",
        rating: 5
    },

    {
        id: 7, title: "Pulp Fiction",
        description: "Las vidas de dos matones, un boxeador, la esposa de un gánster y una pareja de bandidos se entrelazan en cuatro historias de violencia y redención.",
        director: "Quentin Tarantino",
        releaseDate: "14 octubre 1994",
        image: "/images/PELICULAS/pulp.jpg",
        rating: 4
    },

    {
        id: 8, title: "Sueños de Libertad",
        description: "Dos hombres encarcelados forjan una amistad a lo largo de los años, encontrando consuelo y eventual redención a través de actos de bondad común.",
        director: "Frank Darabont",
        releaseDate: "23 septiembre 1994",
        image: "/images/PELICULAS/sueños de libertad.jpg",
        rating: 5
    },

    {
        id: 9, title: "El Padrino",
        description: "La dinastía del crimen organizada del patriarca anciano transfiere el control de su imperio clandestino a su reacio hijo.",
        director: 'Francis Ford Coppola',
        releaseDate: '24 marzo 1972',
        image: '/images/PELICULAS/el padrino.jpg',
        rating: 5
    },

    {
        id: 10, title: "El Silencio de los Corderos",
        description: 'Una joven cadete del FBI debe confiar en un asesino en serie encarcelado para recibir su ayuda en la captura de otro asesino.',
        director: 'Jonathan Demme',
        releaseDate: '14 febrero 1991',
        image: '/images/PELICULAS/silencio de los corderos.jpg',
        rating: 5
    },

    {
        id: 11, title: "Gladiador",
        description: 'Un exgeneral romano busca venganza contra el emperador corrupto que asesinó a su familia y lo convirtió en esclavo.',
        director: 'Ridley Scott',
        releaseDate: '05 mayo 2000',
        image: '/images/PELICULAS/gladiador.jpg',
        rating: 4
    },

    {
        id: 12, title: "Titanic",
        description: 'Una aristócrata de diecisiete años se enamora de un amable pero pobre artista a bordo del lujoso e infortunado R.M.S. Titanic.',
        director: 'James Cameron',
        releaseDate: '19 diciembre 1997',
        image: '/images/PELICULAS/titanic.jpg',
        rating: 5
    },

    {
        id: 13, title: "Avatar",
        description: 'Un marine parapléjico enviado a la luna Pandora en una misión única se siente dividido entre seguir sus órdenes y proteger el mundo que siente como su hogar.',
        director: 'James Cameron',
        releaseDate: '18 diciembre 2009',
        image: '/images/PELICULAS/avatar.jpg',
        rating: 4
    },

    {
        id: 14, title: "Parque Jurásico",
        description: 'Durante un tour previo, un parque temático sufre un gran apagón que permite que sus dinosaurios clonados se descontrolen.',
        director: 'Steven Spielberg',
        releaseDate: '11 junio 1993',
        image: '/images/PELICULAS/parque jurasico.jpg',
        rating: 4
    },

    {
        id: 15, title: "El Rey León",
        description: 'El príncipe león Simba huye de su reino tras la muerte de su padre. Pero regresa como adulto para reclamar su trono.',
        director: 'Roger Allers',
        releaseDate: '15 junio 1994',
        image: '/images/PELICULAS/rey-leon.jpg',
        rating: 5
    },

    {
        id: 16, title: "Star Wars",
        description: 'El joven Luke Skywalker se une a fuerzas con un caballero Jedi, un piloto arrogante, la Princesa Leia y rebeldes contra el malvado Imperio Galáctico.',
        director: 'George Lucas',
        releaseDate: '25 mayo 1977',
        image: '/images/PELICULAS/star-wars.jpg',
        rating: 5
    },

    {
        id: 17, title: "Regreso al Futuro",
        description: 'Marty McFly es accidentalmente enviado treinta años al pasado en una DeLorean que viaja en el tiempo inventada por su amigo Doc Brown.',
        director: 'Robert Zemeckis',
        releaseDate: '03 julio 1985',
        image: '/images/PELICULAS/regreso al futuro.jpg',
        rating: 5
    },

    {
        id: 18, title: "Los Vengadores",
        description: 'Los héroes más poderosos de la Tierra deben unirse y aprender a luchar como equipo si van a detener al travieso Loki y su ejército alienígena.',
        director: 'Joss Whedon',
        releaseDate: '04 mayo 2012',
        image: '/images/PELICULAS/vengadores.jpg',
        rating: 5
    },

    {
        id: 19, title: "Spider-Man",
        description: 'Cuando es mordido por una araña genéticamente alterada, el nerd adolescente Peter Parker obtiene poderes asombrosos.',
        director: 'Sam Raimi',
        releaseDate: '03 mayo 2002',
        image: '/images/PELICULAS/spider man.jpg',
        rating: 4
    },

    {
        id: 20, title: "Buscando a Nemo",
        description: 'Después de que su hijo es capturado en la Gran Barrera de Coral y llevado a Sídney, un tímido pez payaso emprende un viaje para traerlo a casa.',
        director: 'Andrew Stanton',
        releaseDate: '30 mayo 2003',
        image: '/images/PELICULAS/nemo.jpg',
        rating: 4
    },

    {
        id: 21, title: "Frozen",
        description: 'Cuando su reino queda atrapado en un invierno eterno, Anna se embarca en una peligrosa aventura junto a un rudo heladero y su leal reno.',
        director: 'Chris Buck',
        releaseDate: '27 noviembre 2013',
        image: '/images/PELICULAS/frozen.jpg',
        rating: 5
    },

    {
        id: 22, title: "Shrek",
        description: 'La tranquila vida de un ogro se ve interrumpida cuando numerosos personajes de cuentos de hadas son desterrados a su pantano por el corrupto Lord Farquaad.',
        director: 'Andrew Adamson',
        releaseDate: '22 abril 2001',
        image: '/images/PELICULAS/shrek.jpg',
        rating: 5
    },

    {
        id: 23, title: "Zootopia",
        description: 'En una ciudad de animales antropomórficos, una coneja policía y un astuto zorro estafador deben trabajar juntos para descubrir una conspiración.',
        director: 'Byron Howard',
        releaseDate: '17 marzo 2016',
        image: '/images/PELICULAS/zootopia.jpg',
        rating: 4
    },

    {
        id: 24, title: "Coco",
        description: 'El aspirante a músico Miguel enfrenta la prohibición ancestral familiar sobre la música en su viaje por la Tierra de los Muertos.',
        director: 'Lee Unkrich',
        releaseDate: '22 noviembre 2017',
        image: '/images/PELICULAS/coco.jpg',
        rating: 5
    },

    {
        id: 25, title: "Intensamente",
        description: 'Después de que Riley es trasladada desde el Medio Oeste a San Francisco, sus emociones—Alegría, Miedo, Ira, Desagrado y Tristeza—conflictan sobre cómo navegar por una nueva ciudad.',
        director: 'Pete Docter',
        releaseDate: '19 junio 2015',
        image: '/images/PELICULAS/intensamente.jpg',
        rating: 5
    },

    {
        id: 26, title: "Toy Story",
        description: "Un muñeco vaquero se siente profundamente amenazado y celoso cuando una nueva figura espacial lo suplanta como el mejor juguete en la habitación del niño.",
        director: "John Lasseter",
        releaseDate: "22 noviembre 1995",
        image: "/images/PELICULAS/toy.jpg",
        rating: 5
    },

    {
        id: 27, title: "Los Increíbles",
        description: "Mientras intenta llevar una vida suburbana tranquila, una familia secreta debe entrar en acción para salvar al mundo。",
        director: "Brad Bird",
        releaseDate: "05 noviembre 2004",
        image: "/images/PELICULAS/los increibles.jpg",
        rating: 5
    },

    {
        id: 28, title: "Monstruos S.A.",
        description: "Para alimentar la ciudad, los monstruos tienen que asustar a los niños para que griten. Sin embargo, pronto descubren que asustar niños es malo para los negocios。",
        director: "Pete Docter",
        releaseDate: "02 noviembre 2001",
        image: "/images/PELICULAS/monstrous.jpg",
        rating: 4
    },

    {
        id: 29, title: "Kung Fu Panda",
        description: "Un panda perezoso llamado Po es inesperadamente elegido como el Guerrero Dragón profetizado por el Maestro Oogway。",
        director: "Mark Osborne",
        releaseDate: "06 junio 2008",
        image: "/images/PELICULAS/kung fu panda.jpg",
        rating: 4
    },

    {
        id: 30, title: "Mi Villano Favorito",
        description: "Cuando Gru planea robar la luna con ayuda de tres niñas huérfanas, él inesperadamente las adopta。",
        director: "Pierre Coffin",
        releaseDate: "09 julio 2010",
        image: "/images/PELICULAS/villano.jpg",
        rating: 4
    },

    {
        id: 31, title: "Cómo Entrenar a tu Dragón",
        description: "Un adolescente vikingo llamado Hiccup hace amistad con un dragón herido llamado Toothless en lugar de matarlo。",
        director: "Dean DeBlois",
        releaseDate: "26 marzo 2010",
        image: "/images/PELICULAS/dragon.jpg",
        rating: 5
    },

    {
        id: 32, title: "Ratatouille",
        description: "Remy es una rata que sueña con convertirse en chef en París a pesar del desprecio hacia los humanos。",
        director: "Brad Bird",
        releaseDate: "29 junio 2007",
        image: "/images/PELICULAS/rata.jpg",
        rating:5
    },

    {
        id:33, title:"WALL-E",
        description:"En un futuro distante donde la humanidad ha abandonado la Tierra debido a la contaminación.",
        director:"Andrew Stanton",
        releaseDate:"17 junio 2008",
        image:"/images/PELICULAS/wall(1).jpg",
        rating:5
    },

    {
        id:34, title:"Buscando a Dory",
        description:"Dory emprende una aventura por todo el océano para encontrar a sus padres perdidos.",
        director:"Andrew Stanton",
        releaseDate:"23 noviembre 2016",
        image:"/images/PELICULAS/dori.jpg",
        rating:4
    },

    {
        id:35, title:"Lluvia De Hamburguesas",
        description:"Flint Lockwood inventa una máquina que hace caer comida del cielo.",
        director:"Phil Lord",
        releaseDate:"18 septiembre 2009",
        image:"/images/PELICULAS/lluvia de.jpg",
        rating:4
    },

    {
        id:36, title:"Enredados",
        description:"Cuando su princesa perdida es secuestrada por un forajido.",
        director:"Nathan Greno",
        releaseDate:"24 noviembre 2010",
        image:"/images/PELICULAS/enrredados.jpg",
        rating:4
    },

    {
        id:37, title:"Valiente",
        description:"Decidida a cambiar su destino Merida se enfrenta a la tradición.",
        director:"Mark Andrews",
        releaseDate:"22 junio 2012",
        image:"/images/PELICULAS/valiente.jpg",
        rating:4
    },

    {
        id:38, title:"The Lego Movie",
        description:"Un trabajador de la construcción LEGO común y corriente es identificado erróneamente como el Especial.",
        director:"Phil Lord",
        releaseDate:"07 febrero 2014",
        image:"/images/PELICULAS/lego.jpg",
        rating:4
    },

    {
        id:39, title:"Moana",
        description:"En la antigua Polinesia, Moana zarpa en una misión atrevida.",
        director:"Ron Clements",
        releaseDate:"23 noviembre 2016",
        image:"/images/Pelicula/moana(1).jpg ",
        rating:4
    },

    {
        id:40, title:"Big Hero 6 ",
        description:"Un joven prodigio de la robótica descubre un complot criminal.",
        director:"Don Hall ",
        releaseDate:"07 noviembre 2014 ",
        image:"/images/Pelicula/heroe 6(1).jpg ",
        rating:4
    },

    {
        id:41, title:"Mortal Kombat ",
        description:"MMA fighter Cole Young busca a los mejores campeones de la Tierra para enfrentarse a los enemigos de Outworld en una batalla de alto riesgo por el universo.",
        director:"Simon McQuuoid ",
        releaseDate:"23 abril 2021 ",
        image:"/images/mortal.jpeg ",
        rating:3
    }
];

export default data;
