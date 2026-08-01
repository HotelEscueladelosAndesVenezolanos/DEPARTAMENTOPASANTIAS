const DEFAULT_ESTADOS_VENEZUELA = [
  "Amazonas", "Anzoátegui", "Apure", "Aragua", "Barinas", "Bolívar",
  "Carabobo", "Cojedes", "Delta Amacuro", "Distrito Capital", "Falcón",
  "Guárico", "Lara", "Mérida", "Miranda", "Monagas", "Nueva Esparta",
  "Portuguesa", "Sucre", "Táchira", "Trujillo", "La Guaira", "Yaracuy", "Zulia"
];

const DEFAULT_PROGRAMAS = ["Hotelería", "PNFT"];

const DEFAULT_TRAYECTOS = [
  { programa: "Hotelería", trayecto: "3er Semestre - Hotelería" },
  { programa: "Hotelería", trayecto: "6to Semestre - Hotelería" },
  { programa: "PNFT", trayecto: "2do Trayecto - PNFT" },
  { programa: "PNFT", trayecto: "4to Trayecto - PNFT" }
];

const DEFAULT_TIPOS_SANGRE = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const DEFAULT_TIPOS_PASANTIA = ["Operativa", "Administrativa"];

const ESTADOS_PROCESO = [
  "Registrado",
  "En revisión",
  "Aprobado",
  "En pasantías",
  "Culminado",
  "Rechazado",
  "Con observación"
];

const OPCIONES_EMPRESA_APROBADA = ["En revisión", "SI", "NO"];
const OPCIONES_RESULTADO_FINAL = ["Pendiente", "Aprobado", "No aprobado"];
const STORAGE_KEY = "hotelEscuelaPasantias_v5";
const DOCENTE_AUTH_KEY = "hotelEscuelaDocenteAuth_v1";
const DOCENTE_PASSWORD_KEY = "hotelEscuelaDocentePassword_v1";

const CONTROL_DOCENTE_FIELDS = [
  "estadoProceso",
  "tutorAcademico",
  "empresaAprobada",
  "fechaRevision",
  "revisadoPor",
  "observacionesDocentes",
  "horasRequeridas",
  "horasCumplidas",
  "resultadoFinal",
  "observacionesEventualidades"
];

const GESTION_DATOS_PERSONALES_FIELDS = [
  "nombres",
  "cedula",
  "fechaNacimiento",
  "edad",
  "nacionalidad",
  "sexo",
  "estadoCivil",
  "direccionEstudiante",
  "telefono",
  "telefonoCantv",
  "correo",
  "correoInstitucional",
  "instagram"
];

const GESTION_PASANTIA_EMPRESA_FIELDS = [
  "carrera",
  "trayecto",
  "tipo",
  "tieneUnidadEmpresa",
  "estado",
  "ciudad",
  "empresa",
  "tutorEmpresarial",
  "telefonoEmpresa",
  "correoEmpresa",
  "fechaInicio",
  "fechaFin"
];

const GESTION_EDITABLE_FIELDS = [
  ...GESTION_DATOS_PERSONALES_FIELDS,
  ...GESTION_PASANTIA_EMPRESA_FIELDS,
  ...CONTROL_DOCENTE_FIELDS
];

const CHART_COLORS = [
  "#991922",
  "#c99e2d",
  "#bb852f",
  "#6f1118",
  "#d8b84a",
  "#8a4b22",
  "#b63b45",
  "#e7c66a",
  "#5f5f5f",
  "#3d3d3d"
];

const FIELD_LABELS = {
  fotoUrl: "Foto",
  nombres: "Apellidos y nombres completos",
  cedula: "Cédula de identidad",
  fechaNacimiento: "Fecha de nacimiento",
  edad: "Edad",
  nacionalidad: "Nacionalidad",
  sexo: "Sexo",
  estadoCivil: "Estado civil",
  direccionEstudiante: "Dirección del estudiante",
  telefono: "Teléfono móvil",
  telefonoCantv: "Teléfono CANTV",
  correo: "E-mail personal",
  correoInstitucional: "E-mail institucional",
  instagram: "Instagram",
  contactoNombre: "Nombre del contacto",
  contactoTelefono: "Teléfono del contacto",
  contactoCorreo: "E-mail del contacto",
  contactoParentesco: "Parentesco con usted",
  carrera: "Programa",
  trayecto: "Semestre / trayecto",
  otrosEstudios: "Otros estudios realizados",
  estudiosInstitucion: "Institución de estudios",
  estudiosSemestreEgreso: "Semestre cursante o fecha de egreso",
  estudiosTitulo: "Título alcanzado / por alcanzar",
  cursosRealizados: "Cursos realizados",
  cursosInstitucion: "Institución del curso",
  cursosFechaEgreso: "Fecha de egreso del curso",
  cursosCertificado: "Certificado otorgado",
  cursosCertificadoDetalle: "Detalle del certificado",
  tipoSangre: "Tipo de sangre",
  alergico: "¿Es alérgico?",
  alergiaDetalle: "Detalle de alergia",
  enfermedad: "¿Padece alguna enfermedad?",
  enfermedadDetalle: "Detalle de enfermedad",
  seguroVida: "¿Posee seguro de vida?",
  hcm: "¿Posee HCM?",
  aseguradoraPoliza: "Empresa aseguradora y número de póliza",
  telefonoSeguro: "Teléfono / celular del seguro",
  correoSeguro: "Correo electrónico del seguro",
  madreNombres: "Apellidos y nombres de la madre",
  madreTelefonoMovil: "Teléfono móvil de la madre",
  madreTelefonoCantv: "Teléfono CANTV de la madre",
  madreCorreo: "E-mail de la madre",
  madreDireccion: "Dirección de la madre",
  padreNombres: "Apellidos y nombres del padre",
  padreTelefonoMovil: "Teléfono móvil del padre",
  padreTelefonoCantv: "Teléfono CANTV del padre",
  padreCorreo: "E-mail del padre",
  padreDireccion: "Dirección del padre",
  inglesLee: "Inglés - Lee",
  inglesEscribe: "Inglés - Escribe",
  inglesHabla: "Inglés - Habla",
  francesLee: "Francés - Lee",
  francesEscribe: "Francés - Escribe",
  francesHabla: "Francés - Habla",
  otroIdioma: "Otro idioma",
  otroIdiomaLee: "Otro idioma - Lee",
  otroIdiomaEscribe: "Otro idioma - Escribe",
  otroIdiomaHabla: "Otro idioma - Habla",
  tipo: "Tipo de pasantía",
  tieneUnidadEmpresa: "¿Ya tiene unidad o empresa?",
  estado: "Estado",
  ciudad: "Ciudad",
  empresa: "Unidad o empresa de pasantías",
  tutorEmpresarial: "Tutor empresarial",
  telefonoEmpresa: "Teléfono del tutor empresarial",
  correoEmpresa: "Correo empresa",
  fechaInicio: "Fecha de inicio",
  fechaFin: "Fecha de culminación",
  fechaRegistro: "Fecha de registro",
  estadoProceso: "Estado del proceso",
  tutorAcademico: "Tutor académico",
  empresaAprobada: "Empresa aprobada",
  fechaRevision: "Fecha de revisión",
  revisadoPor: "Revisado por",
  observacionesDocentes: "Observaciones docentes",
  horasRequeridas: "Horas requeridas",
  horasCumplidas: "Horas cumplidas",
  resultadoFinal: "Resultado final",
  observacionesEventualidades: "Observaciones / eventualidades"
};

const ALL_FIELDS = Object.keys(FIELD_LABELS);

const DEMO_ESTUDIANTES = [
  {
    id: "demo-1",
    fechaRegistro: "2025-01-10T10:00:00",
    fotoUrl: "",
    nombres: "María González",
    cedula: "V-12.345.678",
    fechaNacimiento: "2004-04-12",
    edad: "21",
    nacionalidad: "Venezolana",
    sexo: "Femenino",
    estadoCivil: "Soltero/a",
    direccionEstudiante: "Mérida, Venezuela",
    telefono: "0414-0000000",
    telefonoCantv: "0274-0000000",
    correo: "maria.demo@email.com",
    correoInstitucional: "maria@unatur.edu.ve",
    instagram: "@mariademo",
    contactoNombre: "Laura Pérez",
    contactoTelefono: "0412-1111111",
    contactoCorreo: "laura@email.com",
    contactoParentesco: "Tía",
    carrera: "Hotelería",
    trayecto: "3er Semestre - Hotelería",
    tipoSangre: "O+",
    alergico: "NO",
    enfermedad: "NO",
    seguroVida: "NO",
    hcm: "NO",
    madreNombres: "Carmen González",
    madreTelefonoMovil: "0414-2222222",
    madreTelefonoCantv: "0274-2222222",
    madreCorreo: "carmen@email.com",
    madreDireccion: "Mérida",
    padreNombres: "José González",
    padreTelefonoMovil: "0414-3333333",
    padreTelefonoCantv: "0274-3333333",
    padreCorreo: "jose@email.com",
    padreDireccion: "Mérida",
    inglesLee: "SI",
    inglesEscribe: "SI",
    inglesHabla: "SI",
    tipo: "Administrativa",
    tieneUnidadEmpresa: "SI",
    estado: "Mérida",
    ciudad: "Mérida",
    empresa: "Hotel Mérida Plaza",
    tutorEmpresarial: "Laura Pérez",
    telefonoEmpresa: "0274-0000000",
    correoEmpresa: "contacto@hotelmerida.com",
    fechaInicio: "2025-02-01",
    fechaFin: "2025-04-30",
    estadoProceso: "Registrado",
    empresaAprobada: "En revisión",
    horasRequeridas: "320",
    horasCumplidas: "0",
    resultadoFinal: "Pendiente"
  }
];

let estudiantes = [];
let estadoSeleccionado = "";
let estudianteGestionSeleccionadoId = "";
let dashboardUnlocked = false;
let registroPendiente = null;

let opcionesSistema = {
  configuracion: {},
  programas: [...DEFAULT_PROGRAMAS],
  trayectos: [...DEFAULT_TRAYECTOS],
  tiposSangre: [...DEFAULT_TIPOS_SANGRE],
  tiposPasantia: [...DEFAULT_TIPOS_PASANTIA],
  estados: [...DEFAULT_ESTADOS_VENEZUELA]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

document.addEventListener("DOMContentLoaded", iniciarApp);

async function iniciarApp() {
  dashboardUnlocked =
    sessionStorage.getItem(DOCENTE_AUTH_KEY) === "true" &&
    Boolean(sessionStorage.getItem(DOCENTE_PASSWORD_KEY));

  await cargarOpcionesSistema();

  aplicarTextosConfiguracion();
  poblarOpcionesFormulario();
  configurarProgramaTrayecto();
  configurarTabs();
  configurarFormulario();
  configurarFiltros();
  configurarLoginDocente();
  configurarConfirmacion();
  configurarCamposCondicionales();
  configurarGestionDocente();
  configurarLimpiezaProceso();

  if (dashboardUnlocked || !apiConfigurada()) {
    await cargarEstudiantes();
  } else {
    estudiantes = [];
    renderizarTodo();
  }
}

function apiConfigurada() {
  return (
    typeof CONFIG !== "undefined" &&
    CONFIG.APPS_SCRIPT_URL &&
    !CONFIG.APPS_SCRIPT_URL.includes("PEGA_AQUI")
  );
}

async function cargarOpcionesSistema() {
  if (!apiConfigurada()) return;

  try {
    const respuesta = await cargarJSONP(CONFIG.APPS_SCRIPT_URL, { action: "options" });

    if (!respuesta.ok || !respuesta.opciones) {
      throw new Error(respuesta.message || "No se pudieron cargar las opciones.");
    }

    opcionesSistema = normalizarOpciones(respuesta.opciones);
  } catch (error) {
    console.error(error);
    mostrarToast("No se pudieron cargar las opciones desde Sheets. Se usarán opciones locales.");
  }
}

function normalizarOpciones(opciones) {
  const trayectos = Array.isArray(opciones.trayectos)
    ? opciones.trayectos.map((item) => ({
        programa: item.programa || "",
        trayecto: item.trayecto || item.value || ""
      }))
    : [...DEFAULT_TRAYECTOS];

  return {
    configuracion: opciones.configuracion || {},
    programas: arrayNoVacio(opciones.programas, DEFAULT_PROGRAMAS),
    trayectos: trayectos.length ? trayectos : [...DEFAULT_TRAYECTOS],
    tiposSangre: arrayNoVacio(opciones.tiposSangre, DEFAULT_TIPOS_SANGRE),
    tiposPasantia: arrayNoVacio(opciones.tiposPasantia, DEFAULT_TIPOS_PASANTIA),
    estados: arrayNoVacio(opciones.estados, DEFAULT_ESTADOS_VENEZUELA)
  };
}

function arrayNoVacio(valor, respaldo) {
  return Array.isArray(valor) && valor.length ? valor : [...respaldo];
}

function aplicarTextosConfiguracion() {
  const config = opcionesSistema.configuracion || {};

  if (config.tituloSistema && $(".brand h1")) $(".brand h1").textContent = config.tituloSistema;
  if (config.institucion && $(".brand p")) $(".brand p").textContent = config.institucion;

  const textoFormulario = document.querySelector("#registro .hero-card p");
  if (config.textoFormulario && textoFormulario) textoFormulario.textContent = config.textoFormulario;

  const textoPanel = document.querySelector("#dashboard .dashboard-header p");
  if (config.textoPanel && textoPanel) textoPanel.textContent = config.textoPanel;
}

function poblarOpcionesFormulario() {
  poblarProgramas();
  poblarTiposSangre();
  poblarTiposPasantia();
  poblarEstados();
  poblarEstadoProcesoFiltro();
  poblarSelectSimple("editEstadoProceso", ESTADOS_PROCESO, "Seleccione");
  poblarSelectSimple("editEmpresaAprobada", OPCIONES_EMPRESA_APROBADA, "Seleccione");
  poblarSelectSimple("editResultadoFinal", OPCIONES_RESULTADO_FINAL, "Seleccione");
  poblarSelectSimple("editCarrera", opcionesSistema.programas, "Seleccione un programa");
  poblarSelectSimple("editTipo", opcionesSistema.tiposPasantia, "Seleccione");
  poblarSelectSimple("editEstado", opcionesSistema.estados, "Seleccione un estado");
  poblarSelectSimple("editTieneUnidadEmpresa", ["SI", "NO", "En espera"], "Seleccione");
  poblarTrayectosPorPrograma($("#carrera")?.value || "");
  poblarTrayectosGestionPorPrograma($("#editCarrera")?.value || "");
}

function poblarProgramas() {
  const carreraSelect = $("#carrera");
  if (!carreraSelect) return;
  limpiarSelect(carreraSelect, "Seleccione un programa");
  opcionesSistema.programas.forEach((programa) => agregarOption(carreraSelect, programa, programa));
}

function poblarTiposSangre() {
  const tipoSangreSelect = $("#tipoSangre");
  if (!tipoSangreSelect) return;
  limpiarSelect(tipoSangreSelect, "Seleccione");
  opcionesSistema.tiposSangre.forEach((tipoSangre) => agregarOption(tipoSangreSelect, tipoSangre, tipoSangre));
}

function poblarTiposPasantia() {
  const tipoSelect = $("#tipo");
  const filterTipo = $("#filterTipo");

  if (tipoSelect) {
    limpiarSelect(tipoSelect, "Seleccione");
    opcionesSistema.tiposPasantia.forEach((tipo) => agregarOption(tipoSelect, tipo, tipo));
  }

  if (filterTipo) {
    limpiarSelect(filterTipo, "Todos");
    opcionesSistema.tiposPasantia.forEach((tipo) => agregarOption(filterTipo, tipo, tipo));
  }
}

function poblarEstados() {
  const estadoSelect = $("#estado");
  const filterEstado = $("#filterEstado");

  if (estadoSelect) {
    limpiarSelect(estadoSelect, "Seleccione un estado");
    opcionesSistema.estados.forEach((estado) => agregarOption(estadoSelect, estado, estado));
  }

  if (filterEstado) {
    limpiarSelect(filterEstado, "Todos los estados");
    opcionesSistema.estados.forEach((estado) => agregarOption(filterEstado, estado, estado));
  }
}

function poblarEstadoProcesoFiltro() {
  const filterEstadoProceso = $("#filterEstadoProceso");
  if (!filterEstadoProceso) return;
  limpiarSelect(filterEstadoProceso, "Todos");
  ESTADOS_PROCESO.forEach((estado) => agregarOption(filterEstadoProceso, estado, estado));
}

function poblarSelectSimple(id, opciones, placeholder = "Seleccione") {
  const select = document.getElementById(id);
  if (!select) return;
  limpiarSelect(select, placeholder);
  opciones.forEach((opcion) => agregarOption(select, opcion, opcion));
}

function limpiarSelect(select, placeholder) {
  select.innerHTML = "";
  const option = document.createElement("option");
  option.value = "";
  option.textContent = placeholder;
  select.appendChild(option);
}

function agregarOption(select, value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  select.appendChild(option);
}

function configurarProgramaTrayecto() {
  const carreraSelect = $("#carrera");
  if (carreraSelect) {
    carreraSelect.addEventListener("change", () => {
      poblarTrayectosPorPrograma(carreraSelect.value);
    });
  }

  const editCarreraSelect = $("#editCarrera");
  if (editCarreraSelect) {
    editCarreraSelect.addEventListener("change", () => {
      poblarTrayectosGestionPorPrograma(editCarreraSelect.value);
    });
  }
}

function poblarTrayectosPorPrograma(programa) {
  const trayectoSelect = $("#trayecto");
  if (!trayectoSelect) return;

  limpiarSelect(
    trayectoSelect,
    programa ? "Seleccione semestre / trayecto" : "Seleccione primero un programa"
  );

  if (!programa) return;

  opcionesSistema.trayectos
    .filter((opcion) => opcion.programa === programa)
    .forEach((opcion) => agregarOption(trayectoSelect, opcion.trayecto, opcion.trayecto));
}

function poblarTrayectosGestionPorPrograma(programa, selectedValue = "") {
  const trayectoSelect = $("#editTrayecto");
  if (!trayectoSelect) return;

  limpiarSelect(
    trayectoSelect,
    programa ? "Seleccione semestre / trayecto" : "Seleccione primero un programa"
  );

  if (!programa) return;

  opcionesSistema.trayectos
    .filter((opcion) => opcion.programa === programa)
    .forEach((opcion) => agregarOption(trayectoSelect, opcion.trayecto, opcion.trayecto));

  if (selectedValue) {
    trayectoSelect.value = selectedValue;
  }
}

function campoGestionId(field) {
  return `edit${field.charAt(0).toUpperCase()}${field.slice(1)}`;
}

function valorParaInputGestion(estudiante, field) {
  if (["fechaNacimiento", "fechaInicio", "fechaFin", "fechaRevision"].includes(field)) {
    return normalizarFechaInput(estudiante[field]);
  }
  return estudiante[field] || "";
}

function configurarTabs() {
  $$(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;

      if (tab === "dashboard" && !dashboardUnlocked) {
        abrirLoginDocente();
        return;
      }

      activarTab(tab);
    });
  });
}

function activarTab(tab) {
  $$(".tab-btn").forEach((b) => b.classList.remove("active"));
  $$(".tab-panel").forEach((panel) => panel.classList.remove("active"));

  const btn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  const panel = document.getElementById(tab);

  if (btn) btn.classList.add("active");
  if (panel) panel.classList.add("active");
}

function configurarFormulario() {
  const form = $("#studentForm");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      mostrarToast("Preparando vista previa...");

      const fotoInput = $("#fotoInput");
      const fotoBase64 = await convertirImagenABase64Reducida(fotoInput.files[0]);

      $("#fotoBase64").value = fotoBase64 || "";
      $("#fotoFileName").value = fotoInput.files[0]?.name || "";

      const datos = obtenerDatosFormulario(form);
      datos.id = generarId();
      datos.fechaRegistro = new Date().toISOString();
      datos.fotoUrl = fotoBase64 || "";

      registroPendiente = normalizarEstudiante(datos);
      abrirConfirmacion(registroPendiente);
    } catch (error) {
      console.error(error);
      mostrarToast("Ocurrió un error al preparar la información.");
    }
  });

  $("#btnActualizar")?.addEventListener("click", cargarEstudiantes);

  form.addEventListener("reset", () => {
    setTimeout(() => {
      poblarTrayectosPorPrograma("");
      configurarCamposCondicionales();
    }, 0);
  });
}

function configurarConfirmacion() {
  $("#btnEditarRegistro")?.addEventListener("click", cerrarConfirmacion);
  $("#btnCerrarConfirmacion")?.addEventListener("click", cerrarConfirmacion);
  $("#btnEnviarConfirmado")?.addEventListener("click", enviarRegistroConfirmado);

  $("#confirmModal")?.addEventListener("click", (event) => {
    if (event.target.id === "confirmModal") cerrarConfirmacion();
  });
}

function abrirConfirmacion(estudiante) {
  const tieneEmpresa = estudiante.tieneUnidadEmpresa === "SI";
  const camposEmpresa = tieneEmpresa
    ? ["estado", "ciudad", "empresa", "tutorEmpresarial", "telefonoEmpresa", "correoEmpresa"]
    : [];

  $("#confirmContent").innerHTML = `
    <div class="confirm-summary">
      <img class="confirm-photo" src="${obtenerFoto(estudiante)}" alt="Foto de ${escapeHTML(estudiante.nombres)}" />
      <div>
        <h3>${escapeHTML(estudiante.nombres || "Sin nombre")}</h3>
        <p><strong>Cédula:</strong> ${escapeHTML(estudiante.cedula || "No registrada")}</p>
        <p><strong>Programa:</strong> ${escapeHTML(estudiante.carrera || "No registrado")}</p>
        <p><strong>Semestre / trayecto:</strong> ${escapeHTML(estudiante.trayecto || "No registrado")}</p>
        <p><strong>Empresa:</strong> ${escapeHTML(estudiante.empresa || "No registrada")}</p>
      </div>
    </div>
    ${crearSeccionConfirmacion("Datos personales", ["nombres", "cedula", "fechaNacimiento", "edad", "nacionalidad", "sexo", "estadoCivil", "direccionEstudiante", "telefono", "telefonoCantv", "correo", "correoInstitucional", "instagram"])}
    ${crearSeccionConfirmacion("Otro contacto", ["contactoNombre", "contactoTelefono", "contactoCorreo", "contactoParentesco"])}
    ${crearSeccionConfirmacion("Datos académicos complementarios", ["otrosEstudios", "estudiosInstitucion", "estudiosSemestreEgreso", "estudiosTitulo"])}
    ${crearSeccionConfirmacion("Cursos realizados", ["cursosRealizados", "cursosInstitucion", "cursosFechaEgreso", "cursosCertificado", "cursosCertificadoDetalle"])}
    ${crearSeccionConfirmacion("Salud / seguro", ["tipoSangre", "alergico", "alergiaDetalle", "enfermedad", "enfermedadDetalle", "seguroVida", "hcm", "aseguradoraPoliza", "telefonoSeguro", "correoSeguro"])}
    ${crearSeccionConfirmacion("Datos de los padres", ["madreNombres", "madreTelefonoMovil", "madreTelefonoCantv", "madreCorreo", "madreDireccion", "padreNombres", "padreTelefonoMovil", "padreTelefonoCantv", "padreCorreo", "padreDireccion"])}
    ${crearSeccionIdiomas(estudiante)}
    ${crearSeccionConfirmacion("Opción de pasantías", ["carrera", "trayecto", "tipo", "tieneUnidadEmpresa", ...camposEmpresa, "fechaInicio", "fechaFin"])}
  `;

  $("#confirmModal").classList.remove("hidden");

  function crearSeccionConfirmacion(titulo, campos) {
    return `
      <section class="confirm-section">
        <h3>${escapeHTML(titulo)}</h3>
        <div class="confirm-grid">
          ${campos.map((campo) => itemConfirmacion(FIELD_LABELS[campo], valorMostrar(estudiante[campo], campo))).join("")}
        </div>
      </section>
    `;
  }
}

function cerrarConfirmacion() {
  $("#confirmModal").classList.add("hidden");
}

function itemConfirmacion(label, value) {
  return `
    <div class="confirm-item">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value || "No registrado")}</strong>
    </div>
  `;
}

function enviarRegistroConfirmado() {
  const form = $("#studentForm");

  if (!registroPendiente) {
    mostrarToast("No hay información pendiente por enviar.");
    return;
  }

  try {
    if (apiConfigurada()) {
      form.action = CONFIG.APPS_SCRIPT_URL;
      HTMLFormElement.prototype.submit.call(form);

      cerrarConfirmacion();
      mostrarToast("Registro enviado correctamente.");
      form.reset();
      poblarTrayectosPorPrograma("");
      registroPendiente = null;

      if (dashboardUnlocked) {
        setTimeout(() => cargarEstudiantes(), 1800);
      }
    } else {
      estudiantes = obtenerEstudiantesLocales();
      if (estudiantes.length === 0) estudiantes = [...DEMO_ESTUDIANTES];

      estudiantes.unshift(registroPendiente);
      guardarEstudiantesLocales(estudiantes);

      cerrarConfirmacion();
      form.reset();
      poblarTrayectosPorPrograma("");
      registroPendiente = null;
      renderizarTodo();
      mostrarToast("Registro guardado en modo local.");
    }
  } catch (error) {
    console.error(error);
    mostrarToast("Ocurrió un error al enviar el registro.");
  }
}

function configurarCamposCondicionales() {
  configurarDetalleSiNo("alergico", "grupoAlergiaDetalle", ["alergiaDetalle"]);
  configurarDetalleSiNo("enfermedad", "grupoEnfermedadDetalle", ["enfermedadDetalle"]);
  configurarDetalleSiNo("cursosCertificado", "grupoCursosCertificadoDetalle", ["cursosCertificadoDetalle"]);
  configurarUnidadEmpresa();

  ["seguroVida", "hcm"].forEach((id) => {
    const select = document.getElementById(id);
    if (select && !select.dataset.listenerSeguro) {
      select.addEventListener("change", actualizarDetalleSeguro);
      select.dataset.listenerSeguro = "true";
    }
  });

  actualizarDetalleSeguro();
}

function configurarDetalleSiNo(selectId, groupId, inputIds) {
  const select = document.getElementById(selectId);
  const group = document.getElementById(groupId);

  if (!select || !group) return;

  const actualizar = () => {
    const mostrar = select.value === "SI";
    group.classList.toggle("hidden", !mostrar);

    inputIds.forEach((inputId) => {
      const input = document.getElementById(inputId);
      if (!input) return;
      input.required = mostrar;
      if (!mostrar) input.value = "";
    });
  };

  if (!select.dataset.listenerDetalle) {
    select.addEventListener("change", actualizar);
    select.dataset.listenerDetalle = "true";
  }

  actualizar();
}

function configurarUnidadEmpresa() {
  const select = document.getElementById("tieneUnidadEmpresa");
  const group = document.getElementById("grupoDatosEmpresa");
  const campos = ["estado", "ciudad", "empresa", "tutorEmpresarial", "telefonoEmpresa", "correoEmpresa"];

  if (!select || !group) return;

  const actualizar = () => {
    const mostrar = select.value === "SI";
    group.classList.toggle("hidden", !mostrar);

    campos.forEach((campo) => {
      const input = document.getElementById(campo);
      if (!input) return;
      input.required = mostrar;
      if (!mostrar) input.value = "";
    });
  };

  if (!select.dataset.listenerUnidad) {
    select.addEventListener("change", actualizar);
    select.dataset.listenerUnidad = "true";
  }

  actualizar();
}

function actualizarDetalleSeguro() {
  const seguroVida = document.getElementById("seguroVida")?.value || "";
  const hcm = document.getElementById("hcm")?.value || "";
  const group = document.getElementById("grupoSeguroDetalle");

  if (!group) return;

  const mostrar = seguroVida === "SI" || hcm === "SI";
  group.classList.toggle("hidden", !mostrar);

  ["aseguradoraPoliza", "telefonoSeguro", "correoSeguro"].forEach((inputId) => {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.required = mostrar;
    if (!mostrar) input.value = "";
  });
}

function configurarFiltros() {
  $("#filterEstado")?.addEventListener("change", (event) => {
    estadoSeleccionado = event.target.value;
    renderizarTodo();
  });

  $("#filterTipo")?.addEventListener("change", renderizarTodo);
  $("#filterEstadoProceso")?.addEventListener("change", renderizarTodo);
  $("#filterTexto")?.addEventListener("input", renderizarTodo);

  $("#btnLimpiarFiltros")?.addEventListener("click", () => {
    estadoSeleccionado = "";
    if ($("#filterEstado")) $("#filterEstado").value = "";
    if ($("#filterTipo")) $("#filterTipo").value = "";
    if ($("#filterEstadoProceso")) $("#filterEstadoProceso").value = "";
    if ($("#filterTexto")) $("#filterTexto").value = "";
    renderizarTodo();
  });

  $("#btnCerrarModal")?.addEventListener("click", cerrarModal);

  $("#studentModal")?.addEventListener("click", (event) => {
    if (event.target.id === "studentModal") cerrarModal();
  });
}

function configurarLoginDocente() {
  $("#btnIngresarLogin")?.addEventListener("click", validarPasswordDocente);
  $("#btnCancelarLogin")?.addEventListener("click", cerrarLoginDocente);
  $("#btnCerrarLogin")?.addEventListener("click", cerrarLoginDocente);

  $("#loginModal")?.addEventListener("click", (event) => {
    if (event.target.id === "loginModal") cerrarLoginDocente();
  });

  $("#docentePassword")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") validarPasswordDocente();
  });

  $("#btnCerrarSesionDocente")?.addEventListener("click", cerrarSesionDocente);
}

function abrirLoginDocente() {
  $("#loginModal").classList.remove("hidden");
  $("#loginError").classList.add("hidden");
  $("#docentePassword").value = "";
  setTimeout(() => $("#docentePassword").focus(), 100);
}

function cerrarLoginDocente() {
  $("#loginModal").classList.add("hidden");
}

async function validarPasswordDocente() {
  const password = $("#docentePassword").value.trim();

  if (!apiConfigurada()) {
    if (password === "1234") {
      dashboardUnlocked = true;
      sessionStorage.setItem(DOCENTE_AUTH_KEY, "true");
      sessionStorage.setItem(DOCENTE_PASSWORD_KEY, password);
      cerrarLoginDocente();
      activarTab("dashboard");
      await cargarEstudiantes();
      mostrarToast("Acceso concedido al panel docente en modo local.");
    } else {
      $("#loginError").classList.remove("hidden");
    }
    return;
  }

  try {
    const respuesta = await cargarJSONP(CONFIG.APPS_SCRIPT_URL, {
      action: "login",
      password
    });

    if (respuesta.ok && respuesta.autorizado) {
      dashboardUnlocked = true;
      sessionStorage.setItem(DOCENTE_AUTH_KEY, "true");
      sessionStorage.setItem(DOCENTE_PASSWORD_KEY, password);
      cerrarLoginDocente();
      activarTab("dashboard");
      await cargarEstudiantes();
      mostrarToast("Acceso concedido al panel docente.");
    } else {
      $("#loginError").classList.remove("hidden");
    }
  } catch (error) {
    console.error(error);
    mostrarToast("No se pudo validar la contraseña.");
  }
}

function cerrarSesionDocente() {
  dashboardUnlocked = false;
  sessionStorage.removeItem(DOCENTE_AUTH_KEY);
  sessionStorage.removeItem(DOCENTE_PASSWORD_KEY);
  estudiantes = [];
  renderizarTodo();
  activarTab("registro");
  mostrarToast("Acceso docente cerrado.");
}

async function cargarEstudiantes() {
  try {
    if (apiConfigurada()) {
      const passwordDocente = sessionStorage.getItem(DOCENTE_PASSWORD_KEY) || "";

      if (!passwordDocente) {
        estudiantes = [];
        renderizarTodo();
        return;
      }

      mostrarToast("Cargando datos desde Google Sheets...");

      const respuesta = await cargarJSONP(CONFIG.APPS_SCRIPT_URL, {
        action: "list",
        password: passwordDocente
      });

      if (!respuesta.ok) {
        throw new Error(respuesta.message || "No se pudieron cargar los datos.");
      }

      estudiantes = respuesta.estudiantes.map(normalizarEstudiante);
      guardarEstudiantesLocales(estudiantes);
    } else {
      estudiantes = obtenerEstudiantesLocales();
      if (estudiantes.length === 0) estudiantes = [...DEMO_ESTUDIANTES];
    }

    renderizarTodo();
    renderizarGestionLista();
  } catch (error) {
    console.error(error);
    estudiantes = obtenerEstudiantesLocales();
    if (estudiantes.length === 0 && !apiConfigurada()) estudiantes = [...DEMO_ESTUDIANTES];
    renderizarTodo();
    renderizarGestionLista();
    mostrarToast("No se pudo cargar el panel. Verifica la contraseña o Apps Script.");
  }
}

function cargarJSONP(url, params = {}) {
  return new Promise((resolve, reject) => {
    const callbackName = `jsonpCallback_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    const query = new URLSearchParams({ ...params, callback: callbackName });
    const script = document.createElement("script");

    window[callbackName] = (data) => {
      resolve(data);
      delete window[callbackName];
      script.remove();
    };

    script.onerror = () => {
      delete window[callbackName];
      script.remove();
      reject(new Error("Error al cargar JSONP"));
    };

    script.src = `${url}?${query.toString()}`;
    document.body.appendChild(script);
  });
}

function obtenerDatosFormulario(form) {
  const formData = new FormData(form);
  const datos = {};

  for (const [key, value] of formData.entries()) {
    datos[key] = typeof value === "string" ? value.trim() : value;
  }

  return datos;
}

function obtenerEstudiantesLocales() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data).map(normalizarEstudiante) : [];
  } catch {
    return [];
  }
}

function guardarEstudiantesLocales(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function normalizarEstudiante(item) {
  const base = {
    id: item.id || generarId(),
    fechaRegistro: item.fechaRegistro || ""
  };

  ALL_FIELDS.forEach((field) => {
    base[field] = item[field] || "";
  });

  base.fotoUrl = item.fotoUrl || item.foto || "";
  base.estadoProceso = base.estadoProceso || "Registrado";
  base.empresaAprobada = base.empresaAprobada || "En revisión";
  base.horasRequeridas = base.horasRequeridas || "320";
  base.horasCumplidas = base.horasCumplidas || "0";
  base.resultadoFinal = base.resultadoFinal || "Pendiente";

  return base;
}

function renderizarTodo() {
  renderizarEstadisticas();
  renderizarEstados();
  renderizarLista();
  renderizarGraficos();
}

function obtenerFiltrados() {
  const estado = $("#filterEstado")?.value || "";
  const tipo = $("#filterTipo")?.value || "";
  const estadoProceso = $("#filterEstadoProceso")?.value || "";
  const texto = ($("#filterTexto")?.value || "").toLowerCase().trim();

  return estudiantes.filter((estudiante) => {
    const coincideEstado = !estado || estudiante.estado === estado;
    const coincideTipo = !tipo || estudiante.tipo === tipo;
    const coincideEstadoProceso = !estadoProceso || estudiante.estadoProceso === estadoProceso;
    const cadena = ALL_FIELDS.map((campo) => estudiante[campo]).join(" ").toLowerCase();
    const coincideTexto = !texto || cadena.includes(texto);

    return coincideEstado && coincideTipo && coincideEstadoProceso && coincideTexto;
  });
}

function renderizarEstadisticas() {
  const total = estudiantes.length;
  const operativas = estudiantes.filter((e) => e.tipo === "Operativa").length;
  const administrativas = estudiantes.filter((e) => e.tipo === "Administrativa").length;
  const estadosActivos = new Set(estudiantes.map((e) => e.estado).filter(Boolean)).size;

  if ($("#statTotal")) $("#statTotal").textContent = total;
  if ($("#statOperativas")) $("#statOperativas").textContent = operativas;
  if ($("#statAdministrativas")) $("#statAdministrativas").textContent = administrativas;
  if ($("#statEstados")) $("#statEstados").textContent = estadosActivos;
}

function renderizarGraficos() {
  const filtrados = obtenerFiltrados();
  renderizarGraficoCircular(
    "chartEstadosPie",
    "chartEstadosLegend",
    contarPorCampo(filtrados, "estado"),
    "Sin estado"
  );
  renderizarGraficoCircular(
    "chartProgramasPie",
    "chartProgramasLegend",
    contarPorCampo(filtrados, "carrera"),
    "Sin programa"
  );
}

function contarPorCampo(lista, campo) {
  return lista.reduce((acc, item) => {
    const key = item[campo] || `Sin ${campo}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function renderizarGraficoCircular(chartId, legendId, conteos) {
  const chart = document.getElementById(chartId);
  const legend = document.getElementById(legendId);

  if (!chart || !legend) return;

  const entradas = Object.entries(conteos)
    .filter(([, total]) => total > 0)
    .sort((a, b) => b[1] - a[1]);

  const total = entradas.reduce((sum, [, value]) => sum + value, 0);

  if (!total) {
    chart.style.background = "#f4f4f4";
    chart.innerHTML = `<span>0</span>`;
    legend.innerHTML = `<div class="empty-chart">No hay datos para graficar.</div>`;
    return;
  }

  let acumulado = 0;
  const segmentos = entradas.map(([label, value], index) => {
    const inicio = (acumulado / total) * 360;
    acumulado += value;
    const fin = (acumulado / total) * 360;
    const color = CHART_COLORS[index % CHART_COLORS.length];
    return `${color} ${inicio.toFixed(2)}deg ${fin.toFixed(2)}deg`;
  });

  chart.style.background = `conic-gradient(${segmentos.join(", ")})`;
  chart.innerHTML = `<span>${total}</span>`;

  legend.innerHTML = entradas
    .map(([label, value], index) => {
      const color = CHART_COLORS[index % CHART_COLORS.length];
      const porcentaje = Math.round((value / total) * 100);
      return `
        <div class="chart-legend-item">
          <i style="background:${color}"></i>
          <span>${escapeHTML(label)}</span>
          <strong>${value} (${porcentaje}%)</strong>
        </div>
      `;
    })
    .join("");
}

function renderizarEstados() {
  const contenedor = $("#estadoGrid");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  const conteos = contarPorEstado();
  const maximo = Math.max(...Object.values(conteos), 1);

  opcionesSistema.estados.forEach((estado) => {
    const total = conteos[estado] || 0;
    const nivel = calcularNivelCalor(total, maximo);

    const card = document.createElement("button");
    card.className = `estado-card calor-${nivel} ${estadoSeleccionado === estado ? "active" : ""}`;

    card.innerHTML = `
      <strong>${escapeHTML(estado)}</strong>
      <span>${total} estudiante${total === 1 ? "" : "s"}</span>
    `;

    card.addEventListener("click", () => {
      estadoSeleccionado = estado;
      $("#filterEstado").value = estado;
      renderizarTodo();
    });

    contenedor.appendChild(card);
  });
}

function contarPorEstado() {
  return estudiantes.reduce((acc, estudiante) => {
    if (!estudiante.estado) return acc;
    acc[estudiante.estado] = (acc[estudiante.estado] || 0) + 1;
    return acc;
  }, {});
}

function calcularNivelCalor(total, maximo) {
  if (total === 0) return 0;
  const porcentaje = total / maximo;
  if (porcentaje <= 0.25) return 1;
  if (porcentaje <= 0.5) return 2;
  if (porcentaje <= 0.75) return 3;
  return 4;
}

function renderizarLista() {
  const lista = $("#studentList");
  if (!lista) return;

  const filtrados = obtenerFiltrados();
  lista.innerHTML = "";

  const estado = $("#filterEstado")?.value || "";
  $("#listaTitulo").textContent = estado ? `Estudiantes en ${estado}` : "Estudiantes registrados";
  $("#contadorLista").textContent = `${filtrados.length} estudiante${filtrados.length === 1 ? "" : "s"}`;

  if (filtrados.length === 0) {
    lista.innerHTML = `<div class="empty-state">No hay estudiantes que coincidan con los filtros seleccionados.</div>`;
    return;
  }

  filtrados.forEach((estudiante) => {
    const card = document.createElement("article");
    card.className = "student-card";

    card.innerHTML = `
      <img class="student-photo" src="${obtenerFoto(estudiante)}" alt="Foto de ${escapeHTML(estudiante.nombres)}" />
      <div class="student-info">
        <h4>${escapeHTML(estudiante.nombres || "Sin nombre")}</h4>
        <p><strong>Cédula:</strong> ${escapeHTML(estudiante.cedula || "No registrada")}</p>
        <p><strong>Empresa:</strong> ${escapeHTML(estudiante.empresa || "No registrada")}</p>
        <p><strong>Estado / ciudad:</strong> ${escapeHTML(estudiante.estado || "No registrado")} ${estudiante.ciudad ? "- " + escapeHTML(estudiante.ciudad) : ""}</p>
        <p><strong>Programa:</strong> ${escapeHTML(estudiante.carrera || "No registrado")}</p>
        <p><strong>Semestre / trayecto:</strong> ${escapeHTML(estudiante.trayecto || "No registrado")}</p>
        <p><strong>Estado del proceso:</strong> ${escapeHTML(estudiante.estadoProceso || "Registrado")}</p>
      </div>
      <div class="badges">
        <span class="badge">${escapeHTML(estudiante.tipo || "Sin tipo")}</span>
        <span class="badge dark">${escapeHTML(estudiante.resultadoFinal || "Pendiente")}</span>
      </div>
    `;

    card.addEventListener("click", () => abrirFicha(estudiante.id));
    lista.appendChild(card);
  });
}

function abrirFicha(id) {
  const estudiante = estudiantes.find((item) => item.id === id);
  if (!estudiante) return;

  const camposEmpresa = estudiante.tieneUnidadEmpresa === "SI"
    ? ["estado", "ciudad", "empresa", "tutorEmpresarial", "telefonoEmpresa", "correoEmpresa"]
    : [];

  $("#modalContent").innerHTML = `
    <div class="profile-head">
      <img src="${obtenerFoto(estudiante)}" alt="Foto de ${escapeHTML(estudiante.nombres)}" />
      <div>
        <h2>${escapeHTML(estudiante.nombres || "Sin nombre")}</h2>
        <p><strong>Cédula:</strong> ${escapeHTML(estudiante.cedula || "No registrada")}</p>
        <p><strong>Tipo de sangre:</strong> ${escapeHTML(estudiante.tipoSangre || "No registrado")}</p>
        <p><strong>Programa:</strong> ${escapeHTML(estudiante.carrera || "No registrado")}</p>
        <p><strong>Empresa:</strong> ${escapeHTML(estudiante.empresa || "No registrada")}</p>
        <div class="profile-section-tools">
          <button type="button" class="btn-primary btn-small" onclick="abrirGestionDocente('${escapeHTML(estudiante.id)}')">Editar control docente</button>
        </div>
      </div>
    </div>

    ${crearSeccionFicha("Datos personales", ["nombres", "cedula", "fechaNacimiento", "edad", "nacionalidad", "sexo", "estadoCivil", "direccionEstudiante", "telefono", "telefonoCantv", "correo", "correoInstitucional", "instagram", "fechaRegistro"])}
    ${crearSeccionFicha("Otro contacto", ["contactoNombre", "contactoTelefono", "contactoCorreo", "contactoParentesco"])}
    ${crearSeccionFicha("Datos académicos complementarios", ["otrosEstudios", "estudiosInstitucion", "estudiosSemestreEgreso", "estudiosTitulo"])}
    ${crearSeccionFicha("Cursos realizados", ["cursosRealizados", "cursosInstitucion", "cursosFechaEgreso", "cursosCertificado", "cursosCertificadoDetalle"])}
    ${crearSeccionFicha("Salud / seguro", ["tipoSangre", "alergico", "alergiaDetalle", "enfermedad", "enfermedadDetalle", "seguroVida", "hcm", "aseguradoraPoliza", "telefonoSeguro", "correoSeguro"])}
    ${crearSeccionFicha("Datos personales de los padres", ["madreNombres", "madreTelefonoMovil", "madreTelefonoCantv", "madreCorreo", "madreDireccion", "padreNombres", "padreTelefonoMovil", "padreTelefonoCantv", "padreCorreo", "padreDireccion"])}
    ${crearSeccionIdiomas(estudiante)}
    ${crearSeccionFicha("Opción de pasantías", ["carrera", "trayecto", "tipo", "tieneUnidadEmpresa", ...camposEmpresa, "fechaInicio", "fechaFin"])}
    ${crearSeccionFicha("Control docente", ["estadoProceso", "tutorAcademico", "empresaAprobada", "fechaRevision", "revisadoPor", "observacionesDocentes", "horasRequeridas", "horasCumplidas", "resultadoFinal"])}
    ${crearSeccionFicha("Observaciones / eventualidades", ["observacionesEventualidades"])}
  `;

  $("#studentModal").classList.remove("hidden");

  function crearSeccionFicha(titulo, campos) {
    return `
      <section class="ficha-seccion">
        <h3>${escapeHTML(titulo)}</h3>
        <div class="profile-grid">
          ${campos.map((campo) => itemFicha(FIELD_LABELS[campo], valorMostrar(estudiante[campo], campo))).join("")}
        </div>
      </section>
    `;
  }
}

function crearSeccionIdiomas(estudiante) {
  const filas = [
    { idioma: "Inglés", lee: estudiante.inglesLee, escribe: estudiante.inglesEscribe, habla: estudiante.inglesHabla },
    { idioma: "Francés", lee: estudiante.francesLee, escribe: estudiante.francesEscribe, habla: estudiante.francesHabla },
    { idioma: estudiante.otroIdioma || "Otro idioma", lee: estudiante.otroIdiomaLee, escribe: estudiante.otroIdiomaEscribe, habla: estudiante.otroIdiomaHabla }
  ];

  return `
    <section class="ficha-seccion">
      <h3>Idiomas</h3>
      <div class="language-summary-grid">
        ${filas.map((fila) => `
          <article class="language-summary-card">
            <strong>${escapeHTML(fila.idioma)}</strong>
            <div><span>Lee:</span> ${escapeHTML(fila.lee || "NO")}</div>
            <div><span>Escribe:</span> ${escapeHTML(fila.escribe || "NO")}</div>
            <div><span>Habla:</span> ${escapeHTML(fila.habla || "NO")}</div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}


function cerrarModal() {
  $("#studentModal").classList.add("hidden");
}

function itemFicha(label, value) {
  return `
    <div class="profile-item">
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value || "No registrado")}</strong>
    </div>
  `;
}

function valorMostrar(value, campo = "") {
  if (!value) return "No registrado";

  if (["fechaNacimiento", "fechaInicio", "fechaFin", "fechaRegistro", "fechaRevision"].includes(campo)) {
    return formatearFecha(value);
  }

  return value;
}


function configurarLimpiezaProceso() {
  $("#btnAbrirLimpiarProceso")?.addEventListener("click", abrirLimpiarProceso);
  $("#btnCerrarLimpiarProceso")?.addEventListener("click", cerrarLimpiarProceso);
  $("#btnCancelarLimpiarProceso")?.addEventListener("click", cerrarLimpiarProceso);
  $("#btnConfirmarLimpiarProceso")?.addEventListener("click", limpiarProcesoCompleto);

  $("#limpiarProcesoModal")?.addEventListener("click", (event) => {
    if (event.target.id === "limpiarProcesoModal") cerrarLimpiarProceso();
  });

  $("#confirmarLimpiarProceso")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") limpiarProcesoCompleto();
  });
}

function abrirLimpiarProceso() {
  if (!dashboardUnlocked) {
    abrirLoginDocente();
    return;
  }

  $("#limpiarProcesoModal")?.classList.remove("hidden");
  $("#limpiarProcesoError")?.classList.add("hidden");
  const input = $("#confirmarLimpiarProceso");
  if (input) input.value = "";
  setTimeout(() => input?.focus(), 100);
}

function cerrarLimpiarProceso() {
  $("#limpiarProcesoModal")?.classList.add("hidden");
}

async function limpiarProcesoCompleto() {
  const confirmacion = ($("#confirmarLimpiarProceso")?.value || "").trim().toUpperCase();

  if (confirmacion !== "LIMPIAR") {
    $("#limpiarProcesoError")?.classList.remove("hidden");
    return;
  }

  try {
    if (apiConfigurada()) {
      const password = sessionStorage.getItem(DOCENTE_PASSWORD_KEY) || "";

      if (!password) {
        mostrarToast("Debes iniciar sesión como docente antes de limpiar el proceso.");
        return;
      }

      mostrarToast("Limpiando proceso en Google Sheets...");

      const respuesta = await cargarJSONP(CONFIG.APPS_SCRIPT_URL, {
        action: "limpiarProceso",
        password,
        confirmacion: "LIMPIAR"
      });

      if (!respuesta.ok) {
        throw new Error(respuesta.message || "No se pudo limpiar el proceso.");
      }
    }

    estudiantes = [];
    estudianteGestionSeleccionadoId = "";
    estadoSeleccionado = "";
    guardarEstudiantesLocales([]);

    if ($("#filterEstado")) $("#filterEstado").value = "";
    if ($("#filterTipo")) $("#filterTipo").value = "";
    if ($("#filterEstadoProceso")) $("#filterEstadoProceso").value = "";
    if ($("#filterTexto")) $("#filterTexto").value = "";

    renderizarTodo();
    renderizarGestionLista();
    cerrarLimpiarProceso();
    mostrarToast("Proceso limpiado correctamente. Ya puedes iniciar un nuevo registro.");
  } catch (error) {
    console.error(error);
    mostrarToast("No se pudo limpiar el proceso. Verifica Apps Script o la contraseña.");
  }
}

function configurarGestionDocente() {
  $("#btnAbrirGestionDocente")?.addEventListener("click", () => abrirGestionDocente());
  $("#btnCerrarGestion")?.addEventListener("click", cerrarGestionDocente);
  $("#btnCancelarGestion")?.addEventListener("click", () => {
    if (estudianteGestionSeleccionadoId) cargarFormularioGestion(estudianteGestionSeleccionadoId);
  });
  $("#gestionBuscar")?.addEventListener("input", renderizarGestionLista);
  $("#gestionForm")?.addEventListener("submit", guardarGestionDocente);
  $("#btnAgregarObservacion")?.addEventListener("click", agregarObservacionGestion);

  $("#gestionModal")?.addEventListener("click", (event) => {
    if (event.target.id === "gestionModal") cerrarGestionDocente();
  });
}

function abrirGestionDocente(id = "") {
  if (!dashboardUnlocked) {
    abrirLoginDocente();
    return;
  }

  $("#gestionModal")?.classList.remove("hidden");
  renderizarGestionLista();

  if (id) {
    seleccionarEstudianteGestion(id);
  } else if (estudianteGestionSeleccionadoId) {
    seleccionarEstudianteGestion(estudianteGestionSeleccionadoId);
  }
}

function cerrarGestionDocente() {
  $("#gestionModal")?.classList.add("hidden");
}

function renderizarGestionLista() {
  const lista = $("#gestionLista");
  if (!lista) return;

  const texto = ($("#gestionBuscar")?.value || "").toLowerCase().trim();
  const filtrados = estudiantes.filter((estudiante) => {
    const cadena = `${estudiante.nombres} ${estudiante.cedula} ${estudiante.empresa} ${estudiante.estadoProceso}`.toLowerCase();
    return !texto || cadena.includes(texto);
  });

  lista.innerHTML = "";

  if (filtrados.length === 0) {
    lista.innerHTML = `<div class="empty-state">No hay estudiantes disponibles.</div>`;
    return;
  }

  filtrados.forEach((estudiante) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `gestion-student-item ${estudiante.id === estudianteGestionSeleccionadoId ? "active" : ""}`;
    button.innerHTML = `
      <strong>${escapeHTML(estudiante.nombres || "Sin nombre")}</strong>
      <span>${escapeHTML(estudiante.cedula || "Sin cédula")}</span>
      <small>${escapeHTML(estudiante.estadoProceso || "Registrado")}</small>
    `;
    button.addEventListener("click", () => seleccionarEstudianteGestion(estudiante.id));
    lista.appendChild(button);
  });
}

function seleccionarEstudianteGestion(id) {
  estudianteGestionSeleccionadoId = id;
  renderizarGestionLista();
  cargarFormularioGestion(id);
}

function cargarFormularioGestion(id) {
  const estudiante = estudiantes.find((item) => item.id === id);
  if (!estudiante) return;

  $("#gestionEditorVacio")?.classList.add("hidden");
  $("#gestionForm")?.classList.remove("hidden");
  $("#gestionEstudianteId").value = estudiante.id;

  $("#gestionEstudianteResumen").innerHTML = `
    <img src="${obtenerFoto(estudiante)}" alt="Foto de ${escapeHTML(estudiante.nombres)}" />
    <div>
      <h3>${escapeHTML(estudiante.nombres || "Sin nombre")}</h3>
      <p><strong>Cédula:</strong> ${escapeHTML(estudiante.cedula || "No registrada")}</p>
      <p><strong>Programa:</strong> ${escapeHTML(estudiante.carrera || "No registrado")}</p>
      <p><strong>Semestre / trayecto:</strong> ${escapeHTML(estudiante.trayecto || "No registrado")}</p>
      <p><strong>Empresa:</strong> ${escapeHTML(estudiante.empresa || "No registrada")}</p>
    </div>
  `;

  GESTION_DATOS_PERSONALES_FIELDS.forEach((field) => {
    setGestionValue(campoGestionId(field), valorParaInputGestion(estudiante, field));
  });

  setGestionValue("editCarrera", estudiante.carrera);
  poblarTrayectosGestionPorPrograma(estudiante.carrera || "", estudiante.trayecto || "");
  GESTION_PASANTIA_EMPRESA_FIELDS
    .filter((field) => field !== "carrera" && field !== "trayecto")
    .forEach((field) => {
      setGestionValue(campoGestionId(field), valorParaInputGestion(estudiante, field));
    });

  setGestionValue("editEstadoProceso", estudiante.estadoProceso || "Registrado");
  setGestionValue("editTutorAcademico", estudiante.tutorAcademico);
  setGestionValue("editEmpresaAprobada", estudiante.empresaAprobada || "En revisión");
  setGestionValue("editResultadoFinal", estudiante.resultadoFinal || "Pendiente");
  setGestionValue("editFechaRevision", normalizarFechaInput(estudiante.fechaRevision));
  setGestionValue("editRevisadoPor", estudiante.revisadoPor);
  setGestionValue("editHorasRequeridas", estudiante.horasRequeridas || "320");
  setGestionValue("editHorasCumplidas", estudiante.horasCumplidas || "0");
  setGestionValue("editObservacionesDocentes", estudiante.observacionesDocentes);
  setGestionValue("editObservacionesEventualidades", estudiante.observacionesEventualidades);
}

function setGestionValue(id, value) {
  const input = document.getElementById(id);
  if (input) input.value = value || "";
}

async function guardarGestionDocente(event) {
  event.preventDefault();

  const id = $("#gestionEstudianteId")?.value || "";
  const estudiante = estudiantes.find((item) => item.id === id);

  if (!id || !estudiante) {
    mostrarToast("Selecciona un estudiante antes de guardar.");
    return;
  }

  const data = obtenerDatosGestion();

  try {
    if (apiConfigurada()) {
      const password = sessionStorage.getItem(DOCENTE_PASSWORD_KEY) || "";
      const respuesta = await cargarJSONP(CONFIG.APPS_SCRIPT_URL, {
        action: "updateDocente",
        password,
        id,
        cedulaOriginal: estudiante.cedula || "",
        ...data
      });

      if (!respuesta.ok) {
        throw new Error(respuesta.message || "No se pudo guardar el control docente.");
      }
    }

    Object.assign(estudiante, data);
    guardarEstudiantesLocales(estudiantes);
    renderizarTodo();
    renderizarGestionLista();
    cargarFormularioGestion(id);
    if ($("#studentModal") && !$("#studentModal").classList.contains("hidden")) {
      abrirFicha(id);
    }
    mostrarToast("Cambios guardados correctamente.");
  } catch (error) {
    console.error(error);
    mostrarToast(error.message || "No se pudieron guardar los cambios.");
  }
}

function agregarObservacionGestion() {
  const fechaInput = document.getElementById("editNuevaObservacionFecha");
  const textoInput = document.getElementById("editNuevaObservacionTexto");
  const historialInput = document.getElementById("editObservacionesEventualidades");

  if (!fechaInput || !textoInput || !historialInput) return;

  const fecha = fechaInput.value || new Date().toISOString().slice(0, 10);
  const texto = textoInput.value.trim();

  if (!texto) {
    mostrarToast("Escribe la observación antes de agregarla.");
    textoInput.focus();
    return;
  }

  const fechaMostrar = formatearFecha(fecha);
  const nuevaLinea = `${fechaMostrar} - ${texto}`;
  historialInput.value = historialInput.value.trim()
    ? `${historialInput.value.trim()}\n${nuevaLinea}`
    : nuevaLinea;

  fechaInput.value = "";
  textoInput.value = "";
  mostrarToast("Observación agregada al historial. Recuerda guardar los cambios.");
}

function obtenerDatosGestion() {
  const data = {};

  GESTION_EDITABLE_FIELDS.forEach((field) => {
    const input = document.getElementById(campoGestionId(field));
    if (!input) return;
    data[field] = typeof input.value === "string" ? input.value.trim() : input.value;
  });

  return data;
}

function obtenerFoto(estudiante) {
  if (estudiante.fotoUrl) return estudiante.fotoUrl;
  const nombre = encodeURIComponent(estudiante.nombres || "Estudiante");
  return `https://ui-avatars.com/api/?name=${nombre}&background=991922&color=fff&bold=true`;
}

function generarId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

async function convertirImagenABase64Reducida(file) {
  if (!file) return "";

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        const targetWidth = 600;
        const targetHeight = 800;
        const targetRatio = targetWidth / targetHeight;

        let sourceX = 0;
        let sourceY = 0;
        let sourceWidth = img.width;
        let sourceHeight = img.height;

        const sourceRatio = img.width / img.height;

        if (sourceRatio > targetRatio) {
          sourceWidth = img.height * targetRatio;
          sourceX = (img.width - sourceWidth) / 2;
        } else {
          sourceHeight = img.width / targetRatio;
          sourceY = (img.height - sourceHeight) / 2;
        }

        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, targetWidth, targetHeight);

        ctx.drawImage(
          img,
          sourceX,
          sourceY,
          sourceWidth,
          sourceHeight,
          0,
          0,
          targetWidth,
          targetHeight
        );

        const base64 = canvas.toDataURL("image/jpeg", 0.85);
        resolve(base64);
      };

      img.onerror = reject;
      img.src = reader.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatearFecha(valor) {
  if (!valor) return "No registrado";

  if (/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
    const [year, month, day] = valor.split("-");
    return `${day}/${month}/${year}`;
  }

  const fecha = new Date(valor);
  if (Number.isNaN(fecha.getTime())) return valor;
  return fecha.toLocaleDateString("es-VE");
}

function normalizarFechaInput(valor) {
  if (!valor) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(valor)) return valor;

  if (/^\d{2}\/\d{2}\/\d{4}$/.test(valor)) {
    const [day, month, year] = valor.split("/");
    return `${year}-${month}-${day}`;
  }

  const fecha = new Date(valor);
  if (Number.isNaN(fecha.getTime())) return "";
  return fecha.toISOString().slice(0, 10);
}

function mostrarToast(mensaje) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = mensaje;
  toast.classList.remove("hidden");
  clearTimeout(mostrarToast.timeout);
  mostrarToast.timeout = setTimeout(() => toast.classList.add("hidden"), 4200);
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

window.abrirGestionDocente = abrirGestionDocente;

// ==========================================
// BLOQUE FINAL - PEGAR AL FINAL DE app.js
// ==========================================

// 1. Sobrescribe la compresión de imagen (0.4 = ~50KB, sube rápido)
async function convertirImagenABase64Reducida(file) {
  if (!file) return "";
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const targetWidth = 600;
        const targetHeight = 800;
        const targetRatio = targetWidth / targetHeight;
        let sourceX = 0, sourceY = 0, sourceWidth = img.width, sourceHeight = img.height;
        const sourceRatio = img.width / img.height;
        if (sourceRatio > targetRatio) { sourceWidth = img.height * targetRatio; sourceX = (img.width - sourceWidth) / 2; }
        else { sourceHeight = img.width / targetRatio; sourceY = (img.height - sourceHeight) / 2; }
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, targetWidth, targetHeight);
        ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, targetWidth, targetHeight);
        const base64 = canvas.toDataURL("image/jpeg", 0.4);
        resolve(base64);
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// 2. Sobrescribe el envío: usa fetch con reintentos y envía fotoBase64 al backend
function enviarRegistroConfirmado() {
  const form = document.getElementById("studentForm");
  if (!registroPendiente) {
    if (typeof mostrarToast === "function") mostrarToast("No hay información pendiente por enviar.");
    return;
  }

  if (typeof CONFIG !== "undefined" && CONFIG.APPS_SCRIPT_URL && !CONFIG.APPS_SCRIPT_URL.includes("PEGA_AQUI")) {
    const btnEnviar = document.getElementById("btnEnviarConfirmado");
    const textoOriginal = btnEnviar ? btnEnviar.textContent : "Enviar";

    if (btnEnviar) {
      btnEnviar.disabled = true;
      btnEnviar.textContent = "Enviando...";
      btnEnviar.style.opacity = "0.7";
    }

    (async () => {
      try {
        // CLAVE: enviar fotoBase64 (el backend lo espera con ese nombre)
        const datosEnvio = {
          ...registroPendiente,
          action: "register",
          fotoBase64: registroPendiente.fotoUrl || "",
          fotoFileName: document.getElementById("fotoFileName")?.value || "",
          timestamp: new Date().toISOString()
        };

        let exito = false;

        for (let intento = 1; intento <= 3; intento++) {
          try {
            if (!navigator.onLine) throw new Error("Sin internet");
            const response = await fetch(CONFIG.APPS_SCRIPT_URL, {
              method: "POST",
              body: JSON.stringify(datosEnvio),
              headers: { "Content-Type": "text/plain;charset=utf-8" },
              signal: AbortSignal.timeout(60000)
            });
            if (!response.ok) throw new Error("Error HTTP: " + response.status);
            exito = true;
            break;
          } catch (error) {
            if (intento < 3) await new Promise((r) => setTimeout(r, 2000));
          }
        }

        if (exito) {
          document.getElementById("confirmModal").classList.add("hidden");
          if (typeof mostrarToast === "function") mostrarToast("✅ Registro enviado correctamente.");
          form.reset();
          if (typeof poblarTrayectosPorPrograma === "function") poblarTrayectosPorPrograma("");
          registroPendiente = null;
          if (dashboardUnlocked && typeof cargarEstudiantes === "function") {
            setTimeout(() => cargarEstudiantes(), 1800);
          }
        } else {
          if (typeof mostrarToast === "function") mostrarToast("❌ Error al enviar. Verifica tu internet e intenta de nuevo.");
        }
      } catch (error) {
        console.error(error);
        if (typeof mostrarToast === "function") mostrarToast(" Ocurrió un error al enviar el registro.");
      } finally {
        if (btnEnviar) {
          btnEnviar.disabled = false;
          btnEnviar.textContent = textoOriginal;
          btnEnviar.style.opacity = "1";
        }
      }
    })();
  } else {
    // Modo local
    estudiantes = typeof obtenerEstudiantesLocales === "function" ? obtenerEstudiantesLocales() : [];
    if (estudiantes.length === 0) estudiantes = [...DEMO_ESTUDIANTES];
    estudiantes.unshift(registroPendiente);
    if (typeof guardarEstudiantesLocales === "function") guardarEstudiantesLocales(estudiantes);
    document.getElementById("confirmModal").classList.add("hidden");
    form.reset();
    if (typeof poblarTrayectosPorPrograma === "function") poblarTrayectosPorPrograma("");
    registroPendiente = null;
    if (typeof renderizarTodo === "function") renderizarTodo();
    if (typeof mostrarToast === "function") mostrarToast("Registro guardado en modo local.");
  }
}

// 3. Quitar required de los campos de padres al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const camposPadres = [
    "madreNombres", "madreTelefonoMovil", "madreTelefonoCantv", "madreCorreo", "madreDireccion",
    "padreNombres", "padreTelefonoMovil", "padreTelefonoCantv", "padreCorreo", "padreDireccion"
  ];
  camposPadres.forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.required = false;
  });
});