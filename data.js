const provincias = [
    { nombre: 'Azua', desc: 'Tierra de historia y playas escondidas como Playa Blanca.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { nombre: 'Bahoruco', desc: 'Montañas, café y el impresionante Lago Enriquillo.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80' },
    { nombre: 'Barahona', desc: 'Paraíso ecológico con playas vírgenes y el Polo Magnético.', img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80' },
    { nombre: 'Dajabón', desc: 'Frontera norte, mercado binacional y el río Masacre.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { nombre: 'Distrito Nacional', desc: 'Corazón de Santo Domingo, vida urbana y cultura.', img: 'https://images.unsplash.com/photo-1577042935519-4d75e5e1b8a6?w=400&q=80' },
    { nombre: 'Duarte', desc: 'San Francisco de Macorís, tierra de cacao y tradición.', img: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=400&q=80' },
    { nombre: 'El Seibo', desc: 'Cuna del horseback riding y tradiciones ganaderas.', img: 'https://images.unsplash.com/photo-1544550581-1ccabf842a6d?w=400&q=80' },
    { nombre: 'Elías Piña', desc: 'Comendador, paisajes montañosos en la frontera.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80' },
    { nombre: 'Espaillat', desc: 'Moca, capital del café y la artesanía dominicana.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { nombre: 'Hato Mayor', desc: 'Naturaleza exuberante, ríos y el Parque Los Haitises.', img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80' },
    { nombre: 'Hermanas Mirabal', desc: 'Salcedo, historia de las heroínas y ecoturismo.', img: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=400&q=80' },
    { nombre: 'Independencia', desc: 'Jimaní, puerta al Lago Enriquillo y reservas naturales.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { nombre: 'La Altagracia', desc: 'Higuey y Punta Cana, el epicentro turístico del Caribe.', img: 'https://images.unsplash.com/photo-1589971225455-3a4e8c8d6d5c?w=400&q=80' },
    { nombre: 'La Romana', desc: 'Altos de Chavón, Isla Catalina y resorts de lujo.', img: 'https://images.unsplash.com/photo-1544550581-1ccabf842a6d?w=400&q=80' },
    { nombre: 'La Vega', desc: 'Carnaval más famoso del país y montañas de Constanza.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80' },
    { nombre: 'María Trinidad Sánchez', desc: 'Nagua, playas extensas y manglares costeros.', img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80' },
    { nombre: 'Monseñor Nouel', desc: 'Bonao, tierra del arroz y puerta al Valle Nuevo.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { nombre: 'Monte Cristi', desc: 'El Morro, playas de ensueño y el Parque Nacional.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { nombre: 'Monte Plata', desc: 'Naturaleza virgen y el Parque Nacional Los Haitises.', img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80' },
    { nombre: 'Pedernales', desc: 'Bahía de las Águilas, la playa más prístina del país.', img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&q=80' },
    { nombre: 'Peravia', desc: 'Baní, dunas de Las Calderas y producción de sal.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80' },
    { nombre: 'Puerto Plata', desc: 'Teleférico, playas doradas y el Malecón histórico.', img: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=400&q=80' },
    { nombre: 'Samaná', desc: 'Ballenas jorobadas, cascadas y playas paradisíacas.', img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80' },
    { nombre: 'San Cristóbal', desc: 'Cuna de la Constitución, cuevas y balnearios.', img: 'https://images.unsplash.com/photo-1544550581-1ccabf842a6d?w=400&q=80' },
    { nombre: 'San José de Ocoa', desc: 'Montañas frescas y el Parque Nacional Valle Nuevo.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80' },
    { nombre: 'San Juan', desc: 'Valle del Yaque, agricultura y tradiciones profundas.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { nombre: 'San Pedro de Macorís', desc: 'Capital del béisbol y arquitectura victoriana.', img: 'https://images.unsplash.com/photo-1577042935519-4d75e5e1b8a6?w=400&q=80' },
    { nombre: 'Sánchez Ramírez', desc: 'Cotuí, minas de oro y el embalse de Hatillo.', img: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=400&q=80' },
    { nombre: 'Santiago', desc: 'Corazón del Cibao, cultura, tabaco y el Monumento.', img: 'https://images.unsplash.com/photo-1577042935519-4d75e5e1b8a6?w=400&q=80' },
    { nombre: 'Santiago Rodríguez', desc: 'Sabaneta, naturaleza agreste y el río Yaque del Norte.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
    { nombre: 'Santo Domingo', desc: 'Provincia metropolitana, historia y modernidad.', img: 'https://images.unsplash.com/photo-1577042935519-4d75e5e1b8a6?w=400&q=80' },
    { nombre: 'Valverde', desc: 'Mao, tierra agrícola y el río Yaque del Norte.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80' },
];

const destinosInfo = {
    'punta-cana': {
        title: '🏖️ Punta Cana',
        desc: 'Famosa mundialmente por sus playas de arena blanca y resorts todo incluido. Ideal para snorkel, buceo y relajación total.',
        act: 'Actividades: Buceo en arrecifes, paseos en catamarán, nado con delfines, excursiones a Isla Saona.',
        img: 'https://images.unsplash.com/photo-1589971225455-3a4e8c8d6d5c?w=800&q=80'
    },
    'santo-domingo': {
        title: '🏛️ Santo Domingo Colonial',
        desc: 'La Zona Colonial es Patrimonio de la Humanidad por la UNESCO. Calles adoquinadas, la primera catedral de América y museos fascinantes.',
        act: 'Actividades: Tour histórico, visita al Alcázar de Colón, paseo por la Calle El Conde, gastronomía criolla.',
        img: 'https://images.unsplash.com/photo-1577042935519-4d75e5e1b8a6?w=800&q=80'
    },
    'samana': {
        title: '🐋 Samaná',
        desc: 'Un paraíso natural donde las ballenas jorobadas migran cada año. Cascadas como El Limón y playas como Rincón son imperdibles.',
        act: 'Actividades: Avistamiento de ballenas (enero-marzo), senderismo a cascadas, playas vírgenes, kayak.',
        img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'
    },
    'puerto-plata': {
        title: '🏔️ Puerto Plata',
        desc: 'Ciudad costera con el famoso Teleférico al Pico Isabel de Torres, playas doradas y una vibrante vida nocturna en el Malecón.',
        act: 'Actividades: Teleférico, surf en Playa Encuentro, visita a las 27 Charcas de Damajagua, exploración de la Fortaleza San Felipe.',
        img: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800&q=80'
    },
    'jarabacoa': {
        title: '⛰️ Jarabacoa',
        desc: 'Capital del ecoturismo dominicano. Montañas frescas, ríos caudalosos y el mejor clima para aventuras al aire libre.',
        act: 'Actividades: Rafting en el Yaque del Norte, cascadas Jimenoa y Baiguate, senderismo, parapente.',
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    'la-romana': {
        title: '🎨 La Romana',
        desc: 'Hogar de Altos de Chavón, una réplica de un pueblo mediterráneo del siglo XVI con vistas impresionantes al río Chavón.',
        act: 'Actividades: Visita a Altos de Chavón, excursión a Isla Catalina, campos de golf de clase mundial.',
        img: 'https://images.unsplash.com/photo-1544550581-1ccabf842a6d?w=800&q=80'
    },
};

const chatbotKnowledge = {
    'santiago': 'En Santiago puedes visitar el Monumento a los Héroes de la Restauración, el Centro León, el Parque Duarte, y disfrutar de la mejor gastronomía cibaeña. Actividades: tour del tabaco, visita a fábricas de cigarros, y vida nocturna en la Calle del Sol.',
    'punta cana': 'Punta Cana es ideal para playas paradisíacas como Bávaro y Macao. Actividades: buceo, nado con delfines, paseos en catamarán, excursiones a Isla Saona, y campos de golf de clase mundial.',
    'santo domingo': 'La Zona Colonial es imperdible: Catedral Primada de América, Alcázar de Colón, Calle El Conde. También visita el Malecón, el Parque Mirador Sur y los Tres Ojos.',
    'samana': 'Samaná ofrece avistamiento de ballenas jorobadas (enero-marzo), la Cascada El Limón, Playa Rincón, Cayo Levantado y el Parque Nacional Los Haitises.',
    'puerto plata': 'Visita el Teleférico al Pico Isabel, las 27 Charcas de Damajagua, Playa Dorada, el Malecón y la Fortaleza San Felipe. Ideal para surf en Playa Encuentro.',
    'jarabacoa': 'Aventura en las montañas: rafting en el Yaque del Norte, cascadas Jimenoa y Baiguate, senderismo en Valle Nuevo, y parapente para los más atrevidos.',
    'la romana': 'Altos de Chavón es una joya arquitectónica. También visita Isla Catalina para snorkel, y los resorts de lujo en Casa de Campo.',
    'bahia de las aguilas': 'Bahía de las Águilas está en Pedernales. Es la playa más virgen y espectacular de RD, parte del Parque Nacional Jaragua. Aguas cristalinas y arena blanca inmaculada.',
    'lago enriquillo': 'El Lago Enriquillo es el lago más grande del Caribe, hogar de cocodrilos americanos y flamencos. Está entre las provincias Bahoruco e Independencia.',
    'constanza': 'Constanza, en La Vega, es el valle intramontano más alto del Caribe. Ideal para agroturismo, fresas, flores y el Parque Nacional Valle Nuevo.',
    'default': '¡Excelente pregunta! En República Dominicana hay mucho por descubrir. Te recomiendo explorar nuestras 32 provincias, cada una con su encanto único. ¿Sobre qué provincia o actividad específica quieres saber más?'
};
