 
const TRIPS = [

  {
    destino:"Puerto Madryn",
    titulo:"Puerto Madryn Aéreo · Península Valdés",
    hotel:"Hotel Rayentray ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    noches:4,
    precio:899990,
    priceNote:"+ $99.990 impuestos",
    incluye:"Aéreo desde Bs. As. con JetSmart · Bolso de mano + valija 23 kg · Asistencia médica y coordinación permanente",
    fecha:"2026-10-24",
    colors:["#0e4a6e","#0b1f3a"]
  },

  {
    destino:"Bariloche",
    titulo:"Bariloche Aéreo",
    hotel:"Hotel Cambria",
    pension:"Media pensión",
    transporte:"aereo",
    noches:4,
    precio:599990,
    priceNote:"+ $99.990 imp. aéreo",
    incluye:"Aéreo desde Bs. As. con JetSmart · Traslados in/out · Bolso de mano + valija a despachar 23 kg",
    fecha:"2026-10-15",
    colors:["#5e1f3a","#0b1f3a"]
  },

  {
    destino:"Cataratas del Iguazú",
    titulo:"Cataratas Aéreo · Lado argentino y brasileño",
    hotel:"Hotel Grand Crucero ★★★★",
    pension:"Media pensión",
    transporte:"aereo",
    noches:3,
    precio:599990,
    priceNote:"+ $99.990 imp. aéreo",
    incluye:"Aéreo desde Bs. As. con JetSmart · Excursión a ambos lados de las Cataratas · Pasajeros a compartir garantizado",
    fecha:"2026-10-27",
    colors:["#0f3d2a","#0b1f3a"]
  },

  {
    destino:"Noroeste Argentino",
    titulo:"Noroeste Arg. Full · Quebrada de Humahuaca",
    hotel:"Hotel Nuevo Premier",
    pension:"Media pensión",
    transporte:"bus",
    noches:5,
    precio:529990,
    priceNote:"Butaca cama $40.000",
    incluye:"Recorrido Salta, Jujuy, Cafayate y Tucumán · Pasajeros a compartir garantizado",
    fecha:"2026-10-26",
    colors:["#5a2a12","#0b1f3a"]
  },

  {
    destino:"Fiambalá y Catamarca",
    titulo:"Termas de Fiambalá, Catamarca y Ruta del Adobe",
    hotel:"Hotel Del Centro (Aimogasta)",
    pension:"Media pensión",
    transporte:"bus",
    noches:3,
    precio:449990,
    priceNote:"Butaca cama $50.000",
    incluye:"Recorrido Aimogasta · Fiambalá · Catamarca · Pasajeros a compartir garantizado",
    fecha:"2026-10-29",
    colors:["#8a4a12","#0b1f3a"]
  },

  {
    destino:"Rosario y San Nicolás",
    titulo:"Escapada a la Felicidad · Rosario + San Nicolás",
    hotel:"Nuevo Centro Apart & Suites (Marcos Juárez)",
    pension:"Media pensión",
    transporte:"bus",
    noches:1,
    precio:129990,
    priceNote:"Butaca cama $20.000",
    incluye:"Salida desde Buenos Aires · Visita a Rosario y a la Virgen de San Nicolás · Fiesta de Felicidad incluida",
    fecha:"2026-09-06",
    colors:["#5e1f4a","#0b1f3a"]
  }

];


/* ============================================================
   FUNCIONES GENERALES
   ============================================================ */

function money(value){

  return new Intl.NumberFormat(
    "es-AR",
    {
      style:"currency",
      currency:"ARS",
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
   SELECT DE DESTINOS
   ============================================================ */

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

  return "•";

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
      style="
        --trip-a:${trip.colors[0]};
        --trip-b:${trip.colors[1]};
      "
    >

      <div class="trip-top">

        <span class="trip-destination">
          ${trip.destino}
        </span>

        <h3 class="trip-title">
          ${trip.titulo}
        </h3>

      </div>


      <div class="trip-body">

        <div class="trip-meta">

          <span class="trip-badge">
            ${badgeIcon(trip.transporte)}
            &nbsp;
            ${trip.transporte === "aereo"
              ? "Aéreo"
              : "Bus"}
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
          ${money(trip.precio)}
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
          trip.incluye
        ]
        .join(" ")
        .toLowerCase()
        .includes(search);


      const matchesDestination =
        !destination ||
        trip.destino === destination;


      const matchesTransport =
        !transport ||
        trip.transporte === transport;


      return (
        matchesSearch &&
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
    src:"img/merlo.png",
    alt:"Promoción de viaje a Merlo",
    message:
      "Hola Richard, quiero consultar por el viaje a Merlo."
  },

  {
    src:"img/villa-carlos-paz.png",
    alt:"Oferta de Villa Carlos Paz",
    message:
      "Hola Richard, quiero consultar por Villa Carlos Paz."
  },

  {
    src:"img/octubre-multidestino.png",
    alt:"Promociones de viajes de octubre",
    message:
      "Hola Richard, quiero consultar por las promociones de octubre."
  },

  {
    src:"img/viajes-inolvidables.png",
    alt:"Viajes inolvidables",
    message:
      "Hola Richard, quiero consultar por los viajes disponibles."
  },

  {
    src:"img/ofertas-blanco-negro.png",
    alt:"Ofertas de viajes",
    message:
      "Hola Richard, quiero consultar por las ofertas de viajes."
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