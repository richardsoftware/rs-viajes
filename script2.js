let TRIPS = [];

/* ============================================================
   GOOGLE SHEETS
   Publicá la pestaña DESTINOS como CSV y pegá aquí la URL.
   Ejemplo:
   https://docs.google.com/spreadsheets/d/ID/export?format=csv&gid=0
   ============================================================ */
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1cISU9IFCh9jZuQddHArm9nlpRRJFth_o/edit?usp=drive_link&ouid=115257507678182760808&rtpof=true&sd=true";

function parseCSV(text){
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for(let i = 0; i < text.length; i++){
    const char = text[i];
    const next = text[i + 1];

    if(char === '"'){
      if(quoted && next === '"'){
        value += '"';
        i++;
      }else{
        quoted = !quoted;
      }
    }else if(char === ',' && !quoted){
      row.push(value);
      value = "";
    }else if((char === '\n' || char === '\r') && !quoted){
      if(char === '\r' && next === '\n') i++;
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    }else{
      value += char;
    }
  }

  if(value !== "" || row.length){
    row.push(value);
    rows.push(row);
  }

  return rows;
}

function normalizeHeader(header){
  return String(header || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function csvToTrips(csvText){
  const rows = parseCSV(csvText)
    .filter(row =>
      row.some(cell =>
        String(cell).trim() !== ""
      )
    );

  if(rows.length < 2) return [];

  const headers =
    rows[0].map(normalizeHeader);

  const index = name =>
    headers.indexOf(
      normalizeHeader(name)
    );

  const get = (row,name) => {
    const i = index(name);
    return i >= 0
      ? String(row[i] ?? "").trim()
      : "";
  };

  return rows.slice(1)
    .map((row,n) => {

      const transporte =
        get(row,"Transporte")
          .toLowerCase()
          .includes("aer")
          ? "aereo"
          : "bus";

      const precioTexto =
        get(row,"Precio")
          .replace(/[^0-9,.-]/g,"")
          .replace(/\./g,"")
          .replace(",", ".");

      const fechaRaw =
        get(row,"Fecha");

      let fecha = fechaRaw;

      const m =
        fechaRaw.match(
          /^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/
        );

      if(m){
        fecha =
          `${m[3]}-${m[2].padStart(2,"0")}-${m[1].padStart(2,"0")}`;
      }

      return {
        destino: get(row,"Destino"),
        titulo:
          get(row,"Título") ||
          get(row,"Titulo"),

        origen: get(row,"Origen"),
        empresa: get(row,"Empresa"),

        hotel: get(row,"Hotel"),

        pension:
          get(row,"Régimen") ||
          get(row,"Regimen"),

        transporte,

        noches:
          Number(get(row,"Noches")) || 0,

        precio:
          Number(precioTexto) || 0,

        priceNote:
          get(row,"Nota precio"),

        incluye:
          get(row,"Incluye"),

        fecha,

        imagen:
          get(row,"Imagen"),

        estado:
          get(row,"Estado") || "Activo",

        colors:[
          "#0e4a6e",
          "#0b1f3a"
        ],

        _row:n + 2
      };

    })
    .filter(trip =>
      trip.destino &&
      trip.titulo &&
      trip.estado
        .toLowerCase() === "activo"
    );
}

async function loadTripsFromSheet(){

  if(
    !SHEET_CSV_URL ||
    SHEET_CSV_URL.includes("PEGAR_AQUI")
  ){
    console.warn(
      "RS Viajes: falta configurar SHEET_CSV_URL."
    );

    return false;
  }

  try{

    const response =
      await fetch(
        `${SHEET_CSV_URL}${
          SHEET_CSV_URL.includes("?")
            ? "&"
            : "?"
        }_=${Date.now()}`,
        {
          cache:"no-store"
        }
      );

    if(!response.ok){
      throw new Error(
        `HTTP ${response.status}`
      );
    }

    const csvText =
      await response.text();

    const trips =
      csvToTrips(csvText);

    if(!trips.length){
      throw new Error(
        "La planilla no contiene destinos activos o las columnas no coinciden."
      );
    }

    TRIPS = trips;

    return true;

  }catch(error){

    console.error(
      "RS Viajes: no se pudo cargar Google Sheets.",
      error
    );

    return false;
  }
}


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

  const d =
    new Date(
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

function populateDestinationSelect(){

  if(!destSelect) return;

  destSelect.innerHTML =
    '<option value="">Todos los destinos</option>';

  const destinations =
    [...new Set(
      TRIPS.map(
        trip => trip.destino
      )
    )].sort();

  destinations.forEach(
    destination => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        destination;

      option.textContent =
        destination;

      destSelect.appendChild(
        option
      );

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

      ${trip.imagen ? `
      <div class="trip-image">
        <img
          src="${trip.imagen}"
          alt="${trip.titulo}"
          loading="lazy"
        >
      </div>` : ""}

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
            ${
              trip.transporte === "aereo"
                ? "Aéreo"
                : "Bus"
            }
          </span>

          <span class="trip-badge">
            ${trip.noches}
            ${
              trip.noches === 1
                ? " noche"
                : " noches"
            }
          </span>

          <span class="trip-badge">
            ${trip.pension}
          </span>

        </div>

        ${trip.origen || trip.empresa ? `
        <div class="trip-source">

          ${
            trip.origen
              ? `<span>📍 Salida: ${trip.origen}</span>`
              : ""
          }

          ${
            trip.empresa
              ? `<span>🏢 Empresa: ${trip.empresa}</span>`
              : ""
          }

        </div>` : ""}

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