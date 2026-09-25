const TRIPS = [
/* ============================================================
   DESTINOS
   Cargado desde la planilla de Google Sheets de RS Viajes
   (solo salidas activas/planificadas, con fecha vigente)
   'imagen' apunta a img/destinos/<archivo> -- subi ahi las fotos
   con el mismo nombre que indica la planilla y se muestran solas
   ============================================================ */
  {
    destino:"Tucumán",
    titulo:"Circuito Tucumano · Cuna de la Historia",
    origenes:["Córdoba", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Hotel Garden Plaza ★★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:4,
    precio:340000,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Mix · Tafí del Valle · Ruinas de Quilmes · Amaicha del Valle · Coordinador permanente",
    fecha:"2026-09-28",
    estado:"Activo",
    imagen:"circuito-tucumano.png",
    colors:["#0e4a6e","#0b1f3a"]
  },

  {
    destino:"Mendoza / San Rafael / Merlo",
    titulo:"Cuyo Total · Mendoza, San Rafael y Merlo",
    origenes:["Córdoba", "Paraná", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Hotel Nuevo Centro ★★★ / Hotel Bonito ★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:5,
    precio:399990,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama · 2n Mendoza + 2n San Rafael + 1n Merlo · Visita a Bodegas, Valle de Uco y Cañón del Atuel",
    fecha:"2026-10-02",
    estado:"Activo",
    imagen:"cuyo-total.png",
    colors:["#5e1f3a","#0b1f3a"]
  },

  {
    destino:"Mendoza",
    titulo:"Mendoza Tradicional · Alta Montaña y Bodegas",
    origenes:["Córdoba", "Paraná", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Hotel Nuevo Centro Mendoza ★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:4,
    precio:350000,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Mix · City Tour y visita a bodegas y olivícolas · Excursión a Alta Montaña (Potrerillos, Uspallata)",
    fecha:"2026-10-08",
    estado:"Activo",
    imagen:"mendoza.png",
    colors:["#0f3d2a","#0b1f3a"]
  },

  {
    destino:"Puerto Madryn / El Calafate",
    titulo:"Ballenas y Glaciares · Patagonia Austral",
    origenes:["Buenos Aires"],
    empresa:"Aerolíneas Argentinas",
    hotel:"Hotel Rayentray ★★★★ / Posada Los Álamos ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Aéreo + Terrestre",
    noches:6,
    precio:1250000,
    moneda:"ARS",
    priceNote:"+ $120.000 impuestos",
    incluye:"Aéreo Bs. As. - Trelew / El Calafate · Avistaje de Ballenas · Excursión Glaciar Perito Moreno · Asistencia médica",
    fecha:"2026-10-10",
    estado:"Activo",
    imagen:"ballenas-glaciares.png",
    colors:["#5a2a12","#0b1f3a"]
  },

  {
    destino:"Buenos Aires",
    titulo:"Buenos Aires Escapada · Cultura y Tango",
    origenes:["Córdoba", "Paraná", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Hotel Abasto ★★★★",
    pension:"Desayuno",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:3,
    precio:240000,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama · City Tour Panorámico · Navegación Delta del Tigre · Coordinador y guía local",
    fecha:"2026-10-10",
    estado:"Activo",
    imagen:"buenos-aires.png",
    colors:["#3a2a5e","#0b1f3a"]
  },

  {
    destino:"La Falda",
    titulo:"La Falda y Serranías de Córdoba",
    origenes:["Buenos Aires", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Hotel San Jorge ★★",
    pension:"Pensión Completa",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:3,
    precio:199990,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Mix · Hotel en el centro de La Falda · Pensión Completa · Excursión a La Cumbre y Capilla del Monte",
    fecha:"2026-10-10",
    estado:"Activo",
    imagen:"la-falda.png",
    colors:["#1f4a5e","#0b1f3a"]
  },

  {
    destino:"Cusco / Machu Picchu",
    titulo:"Perú Imperial Aéreo · El Imperio Inca",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"ORIGEN / LATAM",
    hotel:"Hotel Jose Antonio Cusco ★★★★",
    pension:"Desayuno + Almuerzo",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:7,
    precio:1890,
    moneda:"USD",
    priceNote:"+ USD 195 impuestos",
    incluye:"Vuelos internacionales y domésticos · Tren Expedition a Machu Picchu · Excursión Valle Sagrado",
    fecha:"2026-10-10",
    estado:"Activo",
    imagen:"peru-aereo.png",
    colors:["#6e3a0e","#0b1f3a"]
  },

  {
    destino:"Bariloche / Calafate / Ushuaia",
    titulo:"Patagonia Combinada Bus/Jet · De los Lagos al Fin del Mundo",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"ROLSOL / Aerolíneas Argentinas",
    hotel:"Cambria / Costa Calafate / Costa Ushuaia ★★★",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:8,
    precio:1450000,
    moneda:"ARS",
    priceNote:"+ $135.000 impuestos",
    incluye:"Vuelos conectando 3 destinos · Excursiones Circuito Chico, Perito Moreno y Parque Nacional Tierra del Fuego",
    fecha:"2026-10-14",
    estado:"Activo",
    imagen:"patagonia-combinada.png",
    colors:["#2a5e3a","#0b1f3a"]
  },

  {
    destino:"Bariloche",
    titulo:"Bariloche Aéreo",
    origenes:["Buenos Aires"],
    empresa:"JetSmart",
    hotel:"Hotel Cambria",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:4,
    precio:599990,
    moneda:"ARS",
    priceNote:"+ $99.990 imp. aéreo",
    incluye:"Aéreo desde Bs. As. con JetSmart · Traslados in/out · Bolso de mano + valija a despachar 23 kg",
    fecha:"2026-10-15",
    estado:"Activo",
    imagen:"bariloche.png",
    colors:["#5e0e2a","#0b1f3a"]
  },

  {
    destino:"Bariloche / Trevelin",
    titulo:"Bariloche y Tulipanes · Ruta de las Flores",
    origenes:["Córdoba", "Rosario"],
    empresa:"ROLSOL",
    hotel:"Hotel Cambria ★★★ / Hostería Trevelin ★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:5,
    precio:520000,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama · Campo de Tulipanes Trevelin · El Bolsón y Bariloche · Coordinación y guía",
    fecha:"2026-10-18",
    estado:"Activo",
    imagen:"bariloche-tulipanes.png",
    colors:["#0e2a5e","#0b1f3a"]
  },

  {
    destino:"Juan Dolio",
    titulo:"Juan Dolio Caribe · Playa y Relax",
    origenes:["Buenos Aires", "Rosario"],
    empresa:"NOCHE Y DIA",
    hotel:"Emotions by Hodelpa ★★★★",
    pension:"All Inclusive",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:7,
    precio:1480,
    moneda:"USD",
    priceNote:"+ USD 160 impuestos",
    incluye:"Vuelo internacional con equipaje · Resort frente al mar All Inclusive · Traslados incluidos",
    fecha:"2026-10-18",
    estado:"Activo",
    imagen:"juan-dolio.png",
    colors:["#0e4a6e","#0b1f3a"]
  },

  {
    destino:"Mendoza / Valle de Uco",
    titulo:"Mendoza Valle de Uco Premium · Ruta del Vino",
    origenes:["Buenos Aires", "Córdoba", "Rosario"],
    empresa:"ROLSOL",
    hotel:"Hotel Valle de Uco Resort ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Terrestre / Aéreo",
    noches:3,
    precio:480000,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama o Vuelo · Degustación en bodegas boutique de alta gama · Almuerzo de pasos maridado",
    fecha:"2026-10-18",
    estado:"Activo",
    imagen:"mendoza-valle-uco.png",
    colors:["#5e1f3a","#0b1f3a"]
  },

  {
    destino:"Italia / Grecia / Croacia",
    titulo:"Maravillas del Mediterráneo · Crucero e Historia",
    origenes:["Buenos Aires"],
    empresa:"NOCHE Y DIA / Costa Cruceros",
    hotel:"Cabina Balcón Costa Deliziosa",
    pension:"Pensión Completa",
    transporte:"crucero",
    transporteLabel:"Aéreo + Crucero",
    noches:11,
    precio:2950,
    moneda:"USD",
    priceNote:"+ USD 310 impuestos",
    incluye:"Vuelos internacionales a Venecia/Roma · 2n hotel céntrico + 9n crucero · Recorrido islas griegas",
    fecha:"2026-10-20",
    estado:"Activo",
    imagen:"mediterraneo.png",
    colors:["#0f3d2a","#0b1f3a"]
  },

  {
    destino:"Cataratas del Iguazú",
    titulo:"Cataratas del Iguazú Aéreo · Maravilla Natural",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"ROLSOL / Flybondi",
    hotel:"Hotel Saint George ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:4,
    precio:510000,
    moneda:"ARS",
    priceNote:"+ $55.000 impuestos",
    incluye:"Vuelo directo con equipaje · Traslados in/out · Excursión Cataratas Argentina y Brasil",
    fecha:"2026-10-22",
    estado:"Activo",
    imagen:"cataratas-aereo.png",
    colors:["#5a2a12","#0b1f3a"]
  },

  {
    destino:"Puerto Madryn",
    titulo:"Puerto Madryn Aéreo · Península Valdés",
    origenes:["Buenos Aires"],
    empresa:"JetSmart",
    hotel:"Hotel Rayentray ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:4,
    precio:899990,
    moneda:"ARS",
    priceNote:"+ $99.990 impuestos",
    incluye:"Aéreo desde Bs. As. con JetSmart · Bolso de mano + valija 23 kg · Asistencia médica y coordinación permanente",
    fecha:"2026-10-24",
    estado:"Activo",
    imagen:"puerto-madryn.png",
    colors:["#3a2a5e","#0b1f3a"]
  },

  {
    destino:"Puerto Madryn",
    titulo:"Puerto Madryn Aéreo · Península Valdés",
    origenes:["Buenos Aires"],
    empresa:"JetSmart",
    hotel:"Hotel Rayentray ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:4,
    precio:899990,
    moneda:"ARS",
    priceNote:"+ $99.990 impuestos",
    incluye:"Aéreo desde Bs. As. con JetSmart · Bolso de mano + valija 23 kg · Asistencia médica y coordinación permanente",
    fecha:"2026-10-24",
    estado:"Activo",
    imagen:"puerto-madryn.png",
    colors:["#1f4a5e","#0b1f3a"]
  },

  {
    destino:"Puerto Madryn / Bariloche / Esquel",
    titulo:"Patagonia Soñada · Ruta de Siete Lagos y Fauna",
    origenes:["Córdoba", "Paraná", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Rayentray / Cambria / Cumbres del Sur ★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:7,
    precio:690000,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama superior · Península Valdés, Avistaje de Fauna, Bariloche y San Martín de los Andes",
    fecha:"2026-10-25",
    estado:"Activo",
    imagen:"patagonia-sonada.png",
    colors:["#6e3a0e","#0b1f3a"]
  },

  {
    destino:"Noroeste Argentino",
    titulo:"Noroeste Arg. Full · Quebrada de Humahuaca",
    origenes:["Buenos Aires"],
    empresa:"Empresa de bus",
    hotel:"Hotel Nuevo Premier",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Bus",
    noches:5,
    precio:529990,
    moneda:"ARS",
    priceNote:"Butaca cama $40.000",
    incluye:"Recorrido Salta, Jujuy, Cafayate y Tucumán · Pasajeros a compartir garantizado",
    fecha:"2026-10-26",
    estado:"Activo",
    imagen:"noroeste-argentino.png",
    colors:["#2a5e3a","#0b1f3a"]
  },

  {
    destino:"Cataratas del Iguazú",
    titulo:"Cataratas Aéreo · Lado argentino y brasileño",
    origenes:["Buenos Aires"],
    empresa:"JetSmart",
    hotel:"Hotel Grand Crucero ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:3,
    precio:599990,
    moneda:"ARS",
    priceNote:"+ $99.990 imp. aéreo",
    incluye:"Aéreo desde Bs. As. con JetSmart · Excursión a ambos lados de las Cataratas · Pasajeros a compartir garantizado",
    fecha:"2026-10-27",
    estado:"Activo",
    imagen:"cataratas.png",
    colors:["#5e0e2a","#0b1f3a"]
  },

  {
    destino:"Fiambalá y Catamarca",
    titulo:"Termas de Fiambalá, Catamarca y Ruta del Adobe",
    origenes:["Buenos Aires"],
    empresa:"Empresa de bus",
    hotel:"Hotel Del Centro (Aimogasta)",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Bus",
    noches:3,
    precio:449990,
    moneda:"ARS",
    priceNote:"Butaca cama $50.000",
    incluye:"Recorrido Aimogasta · Fiambalá · Catamarca · Pasajeros a compartir garantizado",
    fecha:"2026-10-29",
    estado:"Activo",
    imagen:"fiambala-catamarca.png",
    colors:["#0e2a5e","#0b1f3a"]
  },

  {
    destino:"El Calafate",
    titulo:"El Calafate Aéreo · Tierra de Glaciares",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"Aerolíneas Argentinas",
    hotel:"Hotel Costa Calafate ★★★★",
    pension:"Desayuno",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:4,
    precio:820000,
    moneda:"ARS",
    priceNote:"+ $88.000 impuestos",
    incluye:"Vuelo directo con equipaje · Excursión Pasarelas Glaciar Perito Moreno · Safari Náutico opcional",
    fecha:"2026-11-01",
    estado:"Activo",
    imagen:"calafate-aereo.png",
    colors:["#0e4a6e","#0b1f3a"]
  },

  {
    destino:"Puerto Montt / Chiloé",
    titulo:"Maravillas del Sur Chileno · Lagos y Fjordos",
    origenes:["Córdoba", "Mendoza", "Neuquén"],
    empresa:"ROLSOL",
    hotel:"Hotel Vicente Costero ★★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:7,
    precio:799,
    moneda:"USD",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama · Cruce Paso Cardenal Samoré · Excursión Isla de Chiloé y Castro · Valdivia y Frutillar",
    fecha:"2026-11-04",
    estado:"Activo",
    imagen:"sur-chileno.png",
    colors:["#5e1f3a","#0b1f3a"]
  },

  {
    destino:"Bayahibe",
    titulo:"Bayahibe All Inclusive · Caribe Paradisíaco",
    origenes:["Buenos Aires"],
    empresa:"NOCHE Y DIA",
    hotel:"Viva Wyndham Dominicus Beach ★★★★",
    pension:"All Inclusive",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:7,
    precio:1650,
    moneda:"USD",
    priceNote:"+ USD 180 impuestos",
    incluye:"Vuelo directo con equipaje en bodega · Traslados in/out · Excursión opcional Isla Saona · Asistencia internacional",
    fecha:"2026-11-05",
    estado:"Activo",
    imagen:"bayahibe.png",
    colors:["#0f3d2a","#0b1f3a"]
  },

  {
    destino:"San Pablo (Brasil)",
    titulo:"GP de Fórmula 1 San Pablo · Interlagos",
    origenes:["Buenos Aires"],
    empresa:"ROLSOL / LATAM",
    hotel:"Hotel Transamerica Executive ★★★★",
    pension:"Desayuno",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:3,
    precio:1850,
    moneda:"USD",
    priceNote:"+ USD 150 impuestos",
    incluye:"Vuelo directo a San Pablo · Entrada para entrenamientos y carrera GP F1 · Traslados in/out al circuito",
    fecha:"2026-11-06",
    estado:"Activo",
    imagen:"formula-1.png",
    colors:["#5a2a12","#0b1f3a"]
  },

  {
    destino:"Tilcara / Iruya",
    titulo:"Escapada Mística a Tilcara e Iruya",
    origenes:["Córdoba", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Posada del Sol Tilcara ★★★",
    pension:"Desayuno",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:4,
    precio:380000,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama · Excursión en minibús 4x4 a Iruya · Pucará de Tilcara y Humahuaca",
    fecha:"2026-11-08",
    estado:"Activo",
    imagen:"tilcara-iruya.png",
    colors:["#3a2a5e","#0b1f3a"]
  },

  {
    destino:"Maceió",
    titulo:"Maceió y Piscinas Naturales de Maragogi",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"ROLSOL / GOL",
    hotel:"Hotel Maceió Atlantic Suites ★★★★",
    pension:"Desayuno",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:7,
    precio:1290,
    moneda:"USD",
    priceNote:"+ USD 140 impuestos",
    incluye:"Vuelo directo con equipaje · Traslados in/out · Excursión a Praia do Francés y Maragogi",
    fecha:"2026-11-10",
    estado:"Activo",
    imagen:"maceio.png",
    colors:["#1f4a5e","#0b1f3a"]
  },

  {
    destino:"Bariloche",
    titulo:"Bariloche Aéreo · Escapada Andina",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"ROLSOL / Flybondi",
    hotel:"Hotel Tierra Gaucha ★★★",
    pension:"Desayuno",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:4,
    precio:590000,
    moneda:"ARS",
    priceNote:"+ $65.000 impuestos",
    incluye:"Vuelo directo con bolso de mano · Traslados aeropuerto/hotel · Circuito Chico · Asistencia médica",
    fecha:"2026-11-12",
    estado:"Activo",
    imagen:"bariloche-aereo.png",
    colors:["#6e3a0e","#0b1f3a"]
  },

  {
    destino:"Caribe Sur / Antillas",
    titulo:"Crucero por el Caribe · Islas Paradisíacas",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"NOCHE Y DIA / Royal Caribbean",
    hotel:"Cabina Externa Vista al Mar",
    pension:"Pensión Completa",
    transporte:"crucero",
    transporteLabel:"Aéreo + Crucero",
    noches:7,
    precio:2150,
    moneda:"USD",
    priceNote:"+ USD 280 impuestos",
    incluye:"Vuelo a Miami/Panamá · Traslados al puerto · 7 noches a bordo · Visitas a islas privadas del Caribe",
    fecha:"2026-11-14",
    estado:"Activo",
    imagen:"crucero-caribe.png",
    colors:["#2a5e3a","#0b1f3a"]
  },

  {
    destino:"Mar del Plata",
    titulo:"Mar del Plata y Costa Atlántica",
    origenes:["Córdoba", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Hotel Cosmos ★★★",
    pension:"Pensión Completa",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:5,
    precio:399990,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama · Hotel a 2 cuadras de la playa · Pensión completa con menú a elección · Coordinador",
    fecha:"2026-11-15",
    estado:"Activo",
    imagen:"mar-del-plata.png",
    colors:["#5e0e2a","#0b1f3a"]
  },

  {
    destino:"Punta Cana",
    titulo:"Punta Cana Paradisíaca · Sol y Playa All Inclusive",
    origenes:["Buenos Aires"],
    empresa:"NOCHE Y DIA / Arajet",
    hotel:"Impressive Punta Cana Resort ★★★★",
    pension:"All Inclusive",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:7,
    precio:1590,
    moneda:"USD",
    priceNote:"+ USD 175 impuestos",
    incluye:"Vuelo directo con equipaje en bodega · Resort frente a Playa Bávaro · Bebidas e hidromasajes libres",
    fecha:"2026-11-15",
    estado:"Activo",
    imagen:"punta-cana.png",
    colors:["#0e2a5e","#0b1f3a"]
  },

  {
    destino:"Porto de Galinhas",
    titulo:"Porto de Galinhas All-Inclusive · Piscinas Turquesas",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"ROLSOL / Azul",
    hotel:"Enotel Porto de Galinhas Resort ★★★★★",
    pension:"All Inclusive",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:7,
    precio:1850,
    moneda:"USD",
    priceNote:"+ USD 170 impuestos",
    incluye:"Vuelo directo a Recife con equipaje · Resort de lujo All Inclusive · Traslados in/out",
    fecha:"2026-11-18",
    estado:"Activo",
    imagen:"porto-de-galinhas.png",
    colors:["#0e4a6e","#0b1f3a"]
  },

  {
    destino:"Bariloche / Puerto Varas",
    titulo:"Circuito Andino · Cruce de Lagos",
    origenes:["Córdoba", "Mendoza", "Rosario"],
    empresa:"ROLSOL",
    hotel:"Hotel Cambria ★★★ / Solace ★★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Mixto (Bus + Barco)",
    noches:6,
    precio:850,
    moneda:"USD",
    priceNote:"+ USD 75 impuestos",
    incluye:"Bus Cama · Navegación Cruce Andino de los Lagos · Excursiones en Puerto Varas y Frutillar",
    fecha:"2026-11-20",
    estado:"Activo",
    imagen:"circuito-andino.png",
    colors:["#5e1f3a","#0b1f3a"]
  },

  {
    destino:"Miches",
    titulo:"Miches Ecoturismo All Inclusive · Caribe Virgen",
    origenes:["Buenos Aires", "Córdoba"],
    empresa:"NOCHE Y DIA",
    hotel:"Viva Miches by Wyndham ★★★★",
    pension:"All Inclusive",
    transporte:"aereo",
    transporteLabel:"Aéreo",
    noches:7,
    precio:1720,
    moneda:"USD",
    priceNote:"+ USD 190 impuestos",
    incluye:"Vuelo internacional · Resort sustentable frente al mar · Excursión a Montaña Redonda · Traslados",
    fecha:"2026-11-22",
    estado:"Activo",
    imagen:"miches.png",
    colors:["#0f3d2a","#0b1f3a"]
  },

  {
    destino:"Punta del Este",
    titulo:"Punta del Este Escapada · Playas y Glamour",
    origenes:["Buenos Aires", "Córdoba", "Rosario"],
    empresa:"ROLSOL",
    hotel:"Hotel Jean Clevers ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    transporteLabel:"Bus + Buque o Aéreo",
    noches:4,
    precio:650,
    moneda:"USD",
    priceNote:"Impuestos incluidos",
    incluye:"Traslado Buquebus / Bus · Hotel céntrico · Visita a Casapueblo, La Barra y José Ignacio",
    fecha:"2026-11-28",
    estado:"Activo",
    imagen:"punta-del-este.png",
    colors:["#5a2a12","#0b1f3a"]
  },

  {
    destino:"Camboriú",
    titulo:"Balneario Camboriú · Playa y Diversión",
    origenes:["Córdoba", "Paraná", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Hotel Platamar ★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:7,
    precio:620000,
    moneda:"ARS",
    priceNote:"Impuestos incluidos",
    incluye:"Bus Cama servicio a bordo · 7 noches frente al mar · Visita a Parque Unipraias y Beto Carrero",
    fecha:"2026-12-05",
    estado:"Activo",
    imagen:"camboriu.png",
    colors:["#3a2a5e","#0b1f3a"]
  },

  {
    destino:"Brasil / Uruguay",
    titulo:"Crucero Costa / MSC · Costa de Sudamérica",
    origenes:["Buenos Aires"],
    empresa:"ROLSOL / MSC Cruceros",
    hotel:"Cabina Externa Balcón",
    pension:"Pensión Completa",
    transporte:"crucero",
    transporteLabel:"Marítimo (Crucero)",
    noches:8,
    precio:1420,
    moneda:"USD",
    priceNote:"+ USD 210 tasas",
    incluye:"Pensión completa a bordo · Paradas en Ilhabela, Río de Janeiro y Camboriú · Shows nocturnos",
    fecha:"2026-12-18",
    estado:"Activo",
    imagen:"crucero-sudamerica.png",
    colors:["#1f4a5e","#0b1f3a"]
  },

  {
    destino:"Camboriú / Florianópolis",
    titulo:"Verano Brasil 2027 · Playas del Sur",
    origenes:["Córdoba", "Rosario", "Santa Fe"],
    empresa:"ROLSOL",
    hotel:"Hotel Vieiras ★★★",
    pension:"Media pensión",
    transporte:"bus",
    transporteLabel:"Terrestre (Bus)",
    noches:7,
    precio:680000,
    moneda:"ARS",
    priceNote:"Preventa exclusiva",
    incluye:"Bus Cama de última generación · 7 noches en Camboriú · Traslados a playas · Coordinador permanente",
    fecha:"2027-01-10",
    estado:"Planificado",
    imagen:"brasil-2027.png",
    colors:["#6e3a0e","#0b1f3a"]
  },

];


/* ============================================================
   FUNCIONES GENERALES
   ============================================================ */

function money(value, currency){

  const cur = currency || "ARS";

  return new Intl.NumberFormat(
    "es-AR",
    {
      style:"currency",
      currency:cur,
      maximumFractionDigits:0
    }
  ).format(value);

}


function dateLabel(date){

  if(!date){
    return "";
  }

  const d = new Date(
    `${date}T12:00:00`
  );

  return new Intl.DateTimeFormat(
    "es-AR",
    {
      day:"numeric",
      month:"long",
      year:"numeric"
    }
  ).format(d);

}


/* ============================================================
   WHATSAPP
   ============================================================ */

const WA_NUMBER = "5491165756000";


/* ============================================================
   ELEMENTOS DEL CATÁLOGO
   ============================================================ */

const gridEl =
  document.getElementById("grid");

const emptyEl =
  document.getElementById("empty");

const countEl =
  document.getElementById("count");

const pagerEl =
  document.getElementById("pager");

const origenSelect =
  document.getElementById("f-origen");

const destSelect =
  document.getElementById("f-dest");

const transpSelect =
  document.getElementById("f-transp");

const searchInput =
  document.getElementById("f-search");

const clearBtn =
  document.getElementById("f-clear");


/* ============================================================
   PAGINACIÓN
   ============================================================ */

const PAGE_SIZE = 6;

let currentPage = 1;


/* ============================================================
   SELECT DE ORÍGENES Y DESTINOS
   ============================================================ */

if(origenSelect){

  const origins = [
    ...new Set(
      TRIPS.flatMap(
        trip => trip.origenes
      )
    )
  ].sort();

  origins.forEach(
    origin => {

      const option =
        document.createElement("option");

      option.value = origin;

      option.textContent = origin;

      origenSelect.appendChild(option);

    }
  );

}


if(destSelect){

  const destinations = [
    ...new Set(
      TRIPS.map(
        trip => trip.destino
      )
    )
  ].sort();

  destinations.forEach(
    destination => {

      const option =
        document.createElement("option");

      option.value = destination;

      option.textContent = destination;

      destSelect.appendChild(option);

    }
  );

}


/* ============================================================
   ICONOS
   ============================================================ */

function badgeIcon(type){

  if(type === "aereo"){
    return "✈";
  }

  if(type === "bus"){
    return "🚌";
  }

  if(type === "crucero"){
    return "🚢";
  }

  return "•";

}


function transportLabel(trip){

  if(trip.transporte === "aereo"){
    return "Aéreo";
  }

  if(trip.transporte === "bus"){
    return "Bus";
  }

  if(trip.transporte === "crucero"){
    return "Crucero";
  }

  return trip.transporteLabel || "";

}


/* ============================================================
   TARJETA DE VIAJE
   ============================================================ */

function tripCard(trip){

  const message =
    `Hola Richard, quiero consultar por ${trip.titulo}.`;

  const encodedMessage =
    encodeURIComponent(message);

  return `

    <article
      class="trip-card"
    >

      <div
        class="trip-top"
        style="
          --trip-a:${trip.colors[0]};
          --trip-b:${trip.colors[1]};
        "
      >

        <img
          class="trip-photo"
          src="img/destinos/${trip.imagen}"
          alt="${trip.destino}"
          loading="lazy"
          onerror="this.remove()"
        >

        <span class="trip-destination">
          ${trip.destino}
        </span>

        <h3 class="trip-title">
          ${trip.titulo}
        </h3>

        <span class="trip-origin">
          Salidas desde: ${trip.origenes.join(" · ")}
        </span>

      </div>


      <div class="trip-body">

        <div class="trip-meta">

          <span class="trip-badge">
            ${badgeIcon(trip.transporte)}
            &nbsp;
            ${transportLabel(trip)}
          </span>

          <span class="trip-badge">
            ${trip.noches}
            ${trip.noches === 1
              ? " noche"
              : " noches"}
          </span>

          <span class="trip-badge">
            ${trip.pension}
          </span>

        </div>


        <div class="trip-hotel">
          ${trip.hotel}
        </div>


        <div class="trip-date">
          Salida:
          ${dateLabel(trip.fecha)}
        </div>


        <div class="trip-incluye">
          ${trip.incluye}
        </div>


        <div class="trip-price">
          ${money(trip.precio, trip.moneda)}
        </div>


        <div class="trip-price-note">
          ${trip.priceNote}
        </div>


        <a
          class="btn btn-wa"
          href="https://wa.me/${WA_NUMBER}?text=${encodedMessage}"
          target="_blank"
          rel="noopener"
        >
          Consultar por WhatsApp
        </a>

      </div>

    </article>

  `;

}


/* ============================================================
   FILTROS
   ============================================================ */

function getFiltered(){

  const search =
    searchInput
      ? searchInput.value
          .trim()
          .toLowerCase()
      : "";

  const origin =
    origenSelect
      ? origenSelect.value
      : "";

  const destination =
    destSelect
      ? destSelect.value
      : "";

  const transport =
    transpSelect
      ? transpSelect.value
      : "";


  return TRIPS.filter(
    trip => {

      const matchesSearch =
        !search ||
        [
          trip.destino,
          trip.titulo,
          trip.hotel,
          trip.pension,
          trip.incluye,
          trip.origenes.join(" ")
        ]
        .join(" ")
        .toLowerCase()
        .includes(search);


      const matchesOrigin =
        !origin ||
        trip.origenes.includes(origin);


      const matchesDestination =
        !destination ||
        trip.destino === destination;


      const matchesTransport =
        !transport ||
        trip.transporte === transport;


      return (
        matchesSearch &&
        matchesOrigin &&
        matchesDestination &&
        matchesTransport
      );

    }
  );

}


/* ============================================================
   PAGINADOR
   ============================================================ */

function renderPager(total){

  if(!pagerEl){
    return;
  }

  pagerEl.innerHTML = "";

  const totalPages =
    Math.ceil(total / PAGE_SIZE);


  if(totalPages <= 1){
    return;
  }


  const previous =
    document.createElement("button");

  previous.type = "button";

  previous.textContent = "‹";

  previous.disabled =
    currentPage === 1;

  previous.addEventListener(
    "click",
    () => {

      currentPage--;

      render();

    }
  );

  pagerEl.appendChild(previous);


  for(
    let page = 1;
    page <= totalPages;
    page++
  ){

    const button =
      document.createElement("button");

    button.type = "button";

    button.textContent = page;

    button.classList.toggle(
      "active",
      page === currentPage
    );

    button.addEventListener(
      "click",
      () => {

        currentPage = page;

        render();

      }
    );

    pagerEl.appendChild(button);

  }


  const next =
    document.createElement("button");

  next.type = "button";

  next.textContent = "›";

  next.disabled =
    currentPage === totalPages;

  next.addEventListener(
    "click",
    () => {

      currentPage++;

      render();

    }
  );

  pagerEl.appendChild(next);

}


/* ============================================================
   RENDER CATÁLOGO
   ============================================================ */

function render(){

  const filtered =
    getFiltered();


  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filtered.length / PAGE_SIZE
      )
    );


  if(currentPage > totalPages){
    currentPage = totalPages;
  }


  const start =
    (currentPage - 1) *
    PAGE_SIZE;

  const visible =
    filtered.slice(
      start,
      start + PAGE_SIZE
    );


  if(gridEl){

    gridEl.innerHTML =
      visible
        .map(tripCard)
        .join("");

  }


  if(countEl){

    countEl.textContent =
      `${filtered.length} ${
        filtered.length === 1
          ? "propuesta"
          : "propuestas"
      }`;

  }


  if(emptyEl){

    emptyEl.hidden =
      filtered.length !== 0;

  }


  renderPager(
    filtered.length
  );

}


/* ============================================================
   EVENTOS FILTROS
   ============================================================ */

if(searchInput){

  searchInput.addEventListener(
    "input",
    () => {

      currentPage = 1;

      render();

    }
  );

}


if(origenSelect){

  origenSelect.addEventListener(
    "change",
    () => {

      currentPage = 1;

      render();

    }
  );

}


if(destSelect){

  destSelect.addEventListener(
    "change",
    () => {

      currentPage = 1;

      render();

    }
  );

}


if(transpSelect){

  transpSelect.addEventListener(
    "change",
    () => {

      currentPage = 1;

      render();

    }
  );

}


if(clearBtn){

  clearBtn.addEventListener(
    "click",
    () => {

      if(searchInput){
        searchInput.value = "";
      }

      if(origenSelect){
        origenSelect.value = "";
      }

      if(destSelect){
        destSelect.value = "";
      }

      if(transpSelect){
        transpSelect.value = "";
      }

      currentPage = 1;

      render();

    }
  );

}


/* ============================================================
   AÑO
   ============================================================ */

const yearEl =
  document.getElementById("year");

if(yearEl){

  yearEl.textContent =
    new Date().getFullYear();

}


/* ============================================================
   CANTIDAD DE PROPUESTAS
   ============================================================ */

const statCountEl =
  document.getElementById(
    "stat-count"
  );

if(statCountEl){

  statCountEl.textContent =
    TRIPS.length;

}


/* ============================================================
   CARRUSEL DE FLYERS
   ============================================================ */

const FLYERS = [

  {
    src:"img/08O_VALLE VCP PROMO copia.jpg",
    alt:"Promoción de viaje a Merlo",
    message:
      "Hola Richard, quiero consultar por el viaje a Oktoberfest."
  },

  {
    src:"img/peninsula.jpeg",
    alt:"Oferta de Villa Carlos Paz",
    message:
      "Hola Richard, quiero consultar por Peninsula Valdez."
  },

  {
    src:"img/AMCABI/octubre-multidestino.png",
    alt:"Promociones de viajes de octubre",
    message:
      "Hola Richard, quiero consultar por las promociones de octubre."
  },

  {
    src:"img/RSNORTE/viajes-inolvidables.png",
    alt:"Viajes inolvidables",
    message:
      "Hola Richard, quiero consultar por los viajes disponibles."
  },

  {
    src:"img/sanber.jpeg",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por San Bernardo."
  },

  {
    src:"img/reservas.jpeg",
    alt:"Resrvas de Hoteles",
    message:
      "Hola Richard, quiero consultar por Hoteles."
  },

  {
    src:"img/ORIGEN/tulipanes.jpeg",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por Bariloche + Tulipanes."
  },

    {
    src:"img/ORIGEN/HOSTAL.jpeg",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por San Bernardo."
  },

    {
    src:"img/NOCHE/FERIADO_OCTUBRE.jpeg",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por FERIADO DE OCTUBRE."
  },

      {
    src:"img/TO/MDQ.jpeg",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por MAR DEL PLATA."
  },

      {
    src:"img/TO/MADRYN.jpeg",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por MADRYN."
  },

      {
    src:"img/TO/MERLO.jpeg",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por MERLO."
  },

  {
    src:"img/RSAMBA/LACOSTA.jpeg",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por Caviahue."
  }

];


const flyerTrack =
  document.getElementById(
    "flyer-track"
  );

const flyerDots =
  document.getElementById(
    "flyer-dots"
  );

const flyerPrev =
  document.getElementById(
    "flyer-prev"
  );

const flyerNext =
  document.getElementById(
    "flyer-next"
  );


let flyerIndex = 0;

let flyerTimer;


/* ============================================================
   CREAR FLYERS
   ============================================================ */

function createFlyers(){

  if(
    !flyerTrack ||
    !flyerDots
  ){
    return;
  }


  flyerTrack.innerHTML = "";

  flyerDots.innerHTML = "";


  FLYERS.forEach(
    (flyer,index) => {

      const slide =
        document.createElement(
          "div"
        );

      slide.className =
        "flyer-slide";


      const message =
        encodeURIComponent(
          flyer.message
        );


      slide.innerHTML = `

        <img
          src="${flyer.src}"
          alt="${flyer.alt}"
          loading="${
            index === 0
              ? "eager"
              : "lazy"
          }"
        >

        <div class="flyer-overlay">

          <a
            class="btn btn-wa"
            href="https://wa.me/${WA_NUMBER}?text=${message}"
            target="_blank"
            rel="noopener"
          >
            Consultar por WhatsApp
          </a>

        </div>

      `;


      flyerTrack.appendChild(
        slide
      );


      const dot =
        document.createElement(
          "button"
        );


      dot.type = "button";

      dot.className =
        "flyer-dot";


      dot.setAttribute(
        "aria-label",
        `Mostrar flyer ${index + 1}`
      );


      dot.addEventListener(
        "click",
        () => {

          flyerIndex = index;

          updateFlyer();

          restartFlyerTimer();

        }
      );


      flyerDots.appendChild(
        dot
      );

    }
  );


  updateFlyer();

}


/* ============================================================
   ACTUALIZAR FLYER
   ============================================================ */

function updateFlyer(){

  if(!flyerTrack){
    return;
  }


  flyerTrack.style.transform =
    `translateX(-${flyerIndex * 100}%)`;


  const dots =
    document.querySelectorAll(
      ".flyer-dot"
    );


  dots.forEach(
    (dot,index) => {

      dot.classList.toggle(
        "active",
        index === flyerIndex
      );

    }
  );

}


/* ============================================================
   SIGUIENTE
   ============================================================ */

function nextFlyer(){

  flyerIndex++;


  if(
    flyerIndex >= FLYERS.length
  ){

    flyerIndex = 0;

  }


  updateFlyer();

}


/* ============================================================
   ANTERIOR
   ============================================================ */

function previousFlyer(){

  flyerIndex--;


  if(flyerIndex < 0){

    flyerIndex =
      FLYERS.length - 1;

  }


  updateFlyer();

}


/* ============================================================
   TIMER
   ============================================================ */

function startFlyerTimer(){

  clearInterval(
    flyerTimer
  );


  flyerTimer =
    setInterval(
      () => {

        nextFlyer();

      },
      5000
    );

}


function restartFlyerTimer(){

  clearInterval(
    flyerTimer
  );

  startFlyerTimer();

}


/* ============================================================
   BOTONES DEL CARRUSEL
   ============================================================ */

if(flyerNext){

  flyerNext.addEventListener(
    "click",
    () => {

      nextFlyer();

      restartFlyerTimer();

    }
  );

}


if(flyerPrev){

  flyerPrev.addEventListener(
    "click",
    () => {

      previousFlyer();

      restartFlyerTimer();

    }
  );

}


/* ============================================================
   PAUSAR AL PASAR EL MOUSE
   ============================================================ */

const carousel =
  document.querySelector(
    ".flyer-carousel"
  );


if(carousel){

  carousel.addEventListener(
    "mouseenter",
    () => {

      clearInterval(
        flyerTimer
      );

    }
  );


  carousel.addEventListener(
    "mouseleave",
    () => {

      startFlyerTimer();

    }
  );

}


/* ============================================================
   TECLADO
   ============================================================ */

if(carousel){

  document.addEventListener(
    "keydown",
    event => {

      if(
        event.key === "ArrowRight"
      ){

        nextFlyer();

        restartFlyerTimer();

      }


      if(
        event.key === "ArrowLeft"
      ){

        previousFlyer();

        restartFlyerTimer();

      }

    }
  );

}


/* ============================================================
   INICIAR
   ============================================================ */

render();

createFlyers();

startFlyerTimer();
