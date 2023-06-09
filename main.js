const usuario = document.getElementById('usuario')
const contraseña = document.getElementById('contraseña')
const boton = document.getElementById('boton')

boton.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        usuario: usuario.value,
        contraseña: contraseña.value
    }
window.location="fuck.html";
}
)