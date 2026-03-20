const precio = document.getElementById("precio");
const iva = document.getElementById("iva");
const total = document.getElementById("total");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  iva.textContent = "el IVA es " + parseInt(precio.value) * 0.21;
total.textContent = "El total es " + parseInt (precio.value) * 1.21;
});
