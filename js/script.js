// Vida saludable en la adolescencia · Álbum de láminas
// Guarda qué láminas ya pegaste y anima la lámina cuando aciertas el quiz.

const TEMAS = [
  {
    n: 1, id: "comer", nombre: "Comer bien", fuente: "OMS", dato: "400 g de frutas y verduras al día",
    fondo: "#FFE3DD",
    arte: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 18c-4-5-14-6-18 1s-2 21 6 30c4 5 8 6 12 3 4 3 8 2 12-3 8-9 10-23 6-30s-14-6-18-1Z" fill="#FF806F"/><path d="M32 18c0-6 3-10 8-12" fill="none" stroke="#164E45" stroke-width="4" stroke-linecap="round"/><path d="M34 14c6-6 14-5 16-2-4 5-11 6-16 2Z" fill="#55BFA6"/></svg>'
  },
  {
    n: 2, id: "moverse", nombre: "Moverse", fuente: "OMS", dato: "60 min de actividad al día",
    fondo: "#55BFA6",
    arte: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="#F5F8F2" stroke="#164E45" stroke-width="4"/><path d="M12 26c10 4 30 4 40 0M12 38c10-4 30-4 40 0M32 10c-7 12-7 32 0 44" fill="none" stroke="#164E45" stroke-width="3.5" stroke-linecap="round"/></svg>'
  },
  {
    n: 3, id: "dormir", nombre: "Dormir", fuente: "AASM", dato: "8 a 10 h de sueño",
    fondo: "#164E45",
    arte: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M40 50A20 20 0 1 1 30 12a16 16 0 0 0 10 38Z" fill="#F5F8F2"/><path d="M48 12l2.4 5 5.6.8-4 4 1 5.6-5-2.7-5 2.7 1-5.6-4-4 5.6-.8Z" fill="#FF806F"/></svg>'
  },
  {
    n: 4, id: "sentir", nombre: "Sentir", fuente: "OMS", dato: "Hablarlo ayuda",
    fondo: "#FF806F",
    arte: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 54C18 45 8 36 8 24c0-7 5-12 12-12 5 0 9 3 12 7 3-4 7-7 12-7 7 0 12 5 12 12 0 12-10 21-24 30Z" fill="#F5F8F2"/><path d="M22 30c3 4 6 6 10 6s7-2 10-6" fill="none" stroke="#164E45" stroke-width="4" stroke-linecap="round"/></svg>'
  },
  {
    n: 5, id: "pantallas", nombre: "Pantallas", fuente: "OMS", dato: "Celular fuera de la cama",
    fondo: "#DDF1EA",
    arte: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="18" y="6" width="28" height="52" rx="6" fill="#F5F8F2" stroke="#164E45" stroke-width="4"/><rect x="26" y="24" width="4.5" height="14" rx="1.5" fill="#FF806F"/><rect x="33.5" y="24" width="4.5" height="14" rx="1.5" fill="#FF806F"/><path d="M28 50h8" stroke="#164E45" stroke-width="3.5" stroke-linecap="round"/></svg>'
  }
];

const ESTRELLA = '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6l7.6 15.5 17 2.5-12.3 12 2.9 17L32 45l-15.2 8 2.9-17L7.4 24l17-2.5Z" fill="#FF806F" stroke="#F5F8F2" stroke-width="3" stroke-linejoin="round"/></svg>';
const ESTRELLA_CASILLA = '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 6l7.6 15.5 17 2.5-12.3 12 2.9 17L32 45l-15.2 8 2.9-17L7.4 24l17-2.5Z" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/></svg>';

const CLAVE = "album-vida-sana";

/* ---------- Estado guardado ---------- */
let pegadas = new Set();
try {
  const guardado = JSON.parse(localStorage.getItem(CLAVE));
  if (Array.isArray(guardado)) pegadas = new Set(guardado.filter((n) => n >= 1 && n <= 5));
} catch (e) { /* sin almacenamiento: el álbum empieza vacío */ }

function guardar() {
  try { localStorage.setItem(CLAVE, JSON.stringify([...pegadas])); } catch (e) {}
}

/* ---------- Plantillas ---------- */
function lamina(t, nueva) {
  return `<div class="lamina${nueva ? " is-nueva" : ""}" role="img" aria-label="Lámina ${t.n}, ${t.nombre}, pegada">
    <div class="lamina__arte" style="background:${t.fondo}">${t.arte}</div>
    <div class="lamina__pie"><b>${t.nombre}</b><span>${t.n}</span></div>
    <span class="lamina__fuente">${t.dato} · ${t.fuente}</span>
  </div>`;
}

function casilla(t) {
  return `<div class="casilla"><span class="casilla__fantasma">${t.arte}</span><b>${t.n}</b><small>${t.nombre}</small></div>`;
}

function laminaEspecial(nueva) {
  return `<div class="lamina lamina--especial${nueva ? " is-nueva" : ""}" role="img" aria-label="Lámina especial: álbum completo">
    <div class="lamina__arte" style="background:#164E45">${ESTRELLA}</div>
    <div class="lamina__pie"><b>Completo</b><span>5/5</span></div>
    <span class="lamina__fuente">5 hábitos, 5 láminas</span>
  </div>`;
}

function casillaEspecial() {
  return `<div class="casilla"><span class="casilla__fantasma">${ESTRELLA_CASILLA}</span><b>+</b><small>Especial</small></div>`;
}

/* ---------- Pintar el álbum ---------- */
const reiniciar = document.getElementById("reiniciar");
const casillas =
  TEMAS.map((t) => `<li class="slot" data-slot="${t.n}"><a href="#${t.id}" aria-label="Ir al tema ${t.n}: ${t.nombre}"></a></li>`).join("") +
  `<li class="slot" data-slot="especial"><a href="#t-cierre" aria-label="Lámina especial"></a></li>`;
document.querySelectorAll("[data-album]").forEach((ol) => (ol.innerHTML = casillas));

function pintar(nueva = null) {
  const completo = pegadas.size === 5;

  document.querySelectorAll("[data-slot]").forEach((slot) => {
    const destino = slot.querySelector("a") || slot;
    const clave = slot.dataset.slot;
    if (clave === "especial") {
      destino.innerHTML = completo ? laminaEspecial(nueva === "especial") : casillaEspecial();
      return;
    }
    const t = TEMAS[Number(clave) - 1];
    destino.innerHTML = pegadas.has(t.n) ? lamina(t, nueva === t.n) : casilla(t);
  });

  document.querySelectorAll("[data-count]").forEach((el) => (el.textContent = pegadas.size));

  document.querySelectorAll(".bar__nav a").forEach((a, i) => {
    a.classList.toggle("is-pegada", pegadas.has(i + 1));
  });

  reiniciar.disabled = pegadas.size === 0;

  const titulo = document.querySelector("[data-cierre-titulo]");
  const texto = document.querySelector("[data-cierre-texto]");
  if (completo) {
    titulo.textContent = "¡Álbum completo!";
    texto.textContent = "Pegaste las cinco láminas. Ahora el reto es el de verdad: llevar uno de estos hábitos a tu semana.";
  } else {
    titulo.innerHTML = `Tu álbum va en <span data-count>${pegadas.size}</span> de 5`;
    texto.textContent = "Cada lámina es un hábito. No tienes que cambiarlo todo hoy: elige uno y empieza esta semana.";
  }
}

/* ---------- Quiz ---------- */
function marcarHecho(form, mostrarMensaje) {
  const msg = form.querySelector(".quiz__msg");
  const correcta = form.querySelector(`input[value="${form.dataset.answer}"]`);
  correcta.checked = true;
  form.classList.add("is-hecho");
  form.querySelectorAll("input").forEach((i) => (i.disabled = true));
  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Lámina pegada";
  msg.className = "quiz__msg is-ok";
  if (mostrarMensaje) msg.textContent = msg.dataset.ok;
}

document.querySelectorAll(".quiz").forEach((form) => {
  const n = Number(form.dataset.quiz);
  const msg = form.querySelector(".quiz__msg");

  if (pegadas.has(n)) marcarHecho(form, true);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const elegida = form.querySelector("input:checked");
    if (!elegida) {
      msg.className = "quiz__msg is-ko";
      msg.textContent = "Elige una de las tres opciones primero.";
      return;
    }
    if (elegida.value === form.dataset.answer) {
      const yaEstabaCompleto = pegadas.size === 5;
      pegadas.add(n);
      guardar();
      marcarHecho(form, true);
      pintar(n);
      if (!yaEstabaCompleto && pegadas.size === 5) setTimeout(() => pintar("especial"), 900);
    } else {
      msg.className = "quiz__msg is-ko";
      msg.textContent = msg.dataset.ko;
      form.classList.remove("is-sacudir");
      void form.offsetWidth;
      form.classList.add("is-sacudir");
    }
  });
});

/* ---------- Vaciar el álbum (confirmación en dos toques) ---------- */
let armado = null;
reiniciar.addEventListener("click", () => {
  if (!armado) {
    reiniciar.textContent = "¿Segura/o? Toca otra vez";
    armado = setTimeout(() => { reiniciar.textContent = "Vaciar el álbum"; armado = null; }, 4000);
    return;
  }
  clearTimeout(armado);
  armado = null;
  pegadas.clear();
  guardar();
  document.querySelectorAll(".quiz").forEach((form) => {
    form.reset();
    form.classList.remove("is-hecho");
    form.querySelectorAll("input").forEach((i) => (i.disabled = false));
    const btn = form.querySelector("button");
    btn.disabled = false;
    btn.textContent = "Comprobar y pegar";
    const msg = form.querySelector(".quiz__msg");
    msg.className = "quiz__msg";
    msg.textContent = "";
  });
  reiniciar.textContent = "Vaciar el álbum";
  pintar();
});

/* ---------- Menú móvil ---------- */
const toggle = document.querySelector(".bar__toggle");
const nav = document.getElementById("temas-nav");
toggle.addEventListener("click", () => {
  const abierto = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!abierto));
  nav.classList.toggle("is-open", !abierto);
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

/* ---------- Tema actual en la barra ---------- */
const enlaces = [...document.querySelectorAll(".bar__nav a")];
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((en) => {
    if (!en.isIntersecting) return;
    enlaces.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + en.target.id)));
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll(".tema").forEach((t) => observador.observe(t));
document.querySelectorAll(".cover, .cierre").forEach((s) => {
  new IntersectionObserver(([en]) => {
    if (en.isIntersecting) enlaces.forEach((a) => a.setAttribute("aria-current", "false"));
  }, { rootMargin: "-40% 0px -55% 0px" }).observe(s);
});

pintar();
