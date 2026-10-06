// Raíz del sitio calculada desde la ubicación de este script (funciona en GitHub Pages, en subcarpetas y en local)
var RAIZ_SITIO = (typeof RAIZ_SITIO !== "undefined") ? RAIZ_SITIO : new URL("../", document.currentScript.src).href;


// inicia lista de datos
const productosBuscables = [
  { nombre: "Arroz con leche", categoria: "Postre", url: "html/postre-1.html" },
  { nombre: "Cupcake de Frutos Rojos", categoria: "Postre", url: "html/postre-2.html" },
  { nombre: "Waffle", categoria: "Postre", url: "html/postre-3.html" },
  { nombre: "Brownie Especial", categoria: "Postre", url: "html/postre-4.html" },
  { nombre: "Cheesecake de Frutos Rojos", categoria: "Postre", url: "html/postre-5.html" },
  { nombre: "Pastel Cremoso de Chocolate", categoria: "Postre", url: "html/postre-6.html" },
  { nombre: "Tiramisú de Chocolate", categoria: "Postre", url: "html/postre-7.html" },
  { nombre: "Panna Cotta de Fresa", categoria: "Postre", url: "html/postre-8.html" },
  { nombre: "El Bufón", categoria: "Hamburguesa de Res", url: "html/elbufon.html" },
  { nombre: "Duquesa", categoria: "Hamburguesa de Res", url: "html/duquesa.html" },
  { nombre: "Emperatriz", categoria: "Hamburguesa de Res", url: "html/emperatriz.html" },
  { nombre: "La Caprichosa", categoria: "Hamburguesa de Res", url: "html/lacaprichosa.html" },
  { nombre: "La Marquesa", categoria: "Hamburguesa de Pollo", url: "html/pollo1.html" },
  { nombre: "El Ilustrado Smoky", categoria: "Hamburguesa de Pollo", url: "html/pollo2.html" },
  { nombre: "El Conde", categoria: "Hamburguesa de Pollo", url: "html/pollo3.html" },
  { nombre: "La Nueva Duquesa", categoria: "Hamburguesa de Pollo", url: "html/pollo4.html" },
  { nombre: "Big Ben", categoria: "Hamburguesa de Pescado", url: "html/pez1.html" },
  { nombre: "El Vizconde", categoria: "Hamburguesa de Pescado", url: "html/pez2.html" },
  { nombre: "Lord Kensington", categoria: "Hamburguesa de Pescado", url: "html/pez3.html" },
  { nombre: "El Virrey", categoria: "Hamburguesa de Pescado", url: "html/pez4.html" },
  { nombre: "Combo Clásico", categoria: "Combo de Res", url: "html/combo-1.html" },
  { nombre: "Combo Triple", categoria: "Combo de Res", url: "html/combo-2.html" },
  { nombre: "Combo Triple", categoria: "Combo de Res", url: "html/combo-3.html" },
  { nombre: "Combo Supremo", categoria: "Combo de Res", url: "html/combo-4.html" },
  { nombre: "La Clásica Crunch", categoria: "Combo de Pollo", url: "html/combo-5.html" },
  { nombre: "Dueto Crispy Chicken", categoria: "Combo de Pollo", url: "html/combo-6.html" },
  { nombre: "Cone Street", categoria: "Combo de Pollo", url: "html/combo-7.html" },
  { nombre: "Double Crunch", categoria: "Combo de Pollo", url: "html/combo-8.html" },
  { nombre: "Gran Gala", categoria: "Banquete", url: "html/banquete-1.html" },
  { nombre: "Banquete Imperial", categoria: "Banquete", url: "html/banquete-2.html" },
  { nombre: "El Polka", categoria: "Banquete", url: "html/banquete-3.html" },
  { nombre: "Combo Supremo", categoria: "Banquete", url: "html/banquete-4.html" },
  { nombre: "Postres", categoria: "Categoría", url: "html/pagina1.html" },
  { nombre: "Platillos", categoria: "Categoría", url: "html/pagina2.html" },
  { nombre: "Banquetes", categoria: "Categoría", url: "html/pagina3.html" },
  { nombre: "Combos", categoria: "Categoría", url: "html/pagina4.html" },
];

// se ejecuta al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  // guarda un valor en btnBuscar
  const btnBuscar = document.getElementById("btnBuscar");
  const cajaBusqueda = document.getElementById("cajaBusqueda");
  const inputBusqueda = document.getElementById("inputBusqueda");
  const resultadosBusqueda = document.getElementById("resultadosBusqueda");

  // revisa una condición
  if (!btnBuscar || !cajaBusqueda || !inputBusqueda || !resultadosBusqueda) {
    // sale de la función
    return;
  }

  // guarda un valor en base
  const base = RAIZ_SITIO;

  // define la función normalizar
  function normalizar(texto) {
    // devuelve el resultado
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // define la función cerrarBusqueda
  function cerrarBusqueda() {
    // quita una clase
    cajaBusqueda.classList.remove("activo");
    resultadosBusqueda.classList.remove("activo");
  }

  // define la función mostrarResultados
  function mostrarResultados(lista) {
    // cambia el contenido html
    resultadosBusqueda.innerHTML = "";

    // revisa una condición
    if (lista.length === 0) {
      // cambia el contenido html
      resultadosBusqueda.innerHTML =
        '<p class="sin-resultados">No se encontraron resultados</p>';
      resultadosBusqueda.classList.add("activo");
      return;
    }

    // recorre cada elemento
    lista.forEach(function (item) {
      // guarda un valor en enlace
      const enlace = document.createElement("a");
      enlace.href = base + item.url;
      enlace.className = "resultado-item";

      // guarda un valor en nombre
      const nombre = document.createElement("span");
      nombre.className = "resultado-nombre";
      nombre.textContent = item.nombre;

      // guarda un valor en categoria
      const categoria = document.createElement("span");
      categoria.className = "resultado-categoria";
      categoria.textContent = item.categoria;

      // agrega el elemento al contenedor
      enlace.appendChild(nombre);
      enlace.appendChild(categoria);
      resultadosBusqueda.appendChild(enlace);
    });

    // agrega una clase
    resultadosBusqueda.classList.add("activo");
  }

  // escucha el evento click
  btnBuscar.addEventListener("click", function (e) {
    // evita la acción por defecto
    e.preventDefault();
    e.stopPropagation();
    cajaBusqueda.classList.toggle("activo");
    if (cajaBusqueda.classList.contains("activo")) {
      inputBusqueda.focus();
    } else {
      // quita una clase
      resultadosBusqueda.classList.remove("activo");
    }
  });


  // escucha el evento input
  inputBusqueda.addEventListener("input", function () {
    // guarda un valor en texto
    const texto = normalizar(inputBusqueda.value.trim());

    // revisa una condición
    if (texto === "") {
      resultadosBusqueda.classList.remove("activo");
      resultadosBusqueda.innerHTML = "";
      return;
    }

    // guarda un valor en coincidencias
    const coincidencias = productosBuscables.filter(function (item) {
      // devuelve el resultado
      return normalizar(item.nombre).includes(texto);
    });

    mostrarResultados(coincidencias);
  });

  // escucha el evento click
  cajaBusqueda.addEventListener("click", function (e) {
    // evita que el evento se propague
    e.stopPropagation();
  });


  // escucha el evento click
  document.addEventListener("click", function (e) {
    // revisa una condición
    if (!cajaBusqueda.contains(e.target) && e.target !== btnBuscar && !btnBuscar.contains(e.target)) {
      cerrarBusqueda();
    }
  });


  // escucha el evento keydown
  document.addEventListener("keydown", function (e) {
    // revisa una condición
    if (e.key === "Escape") {
      cerrarBusqueda();
    }
  });
});
