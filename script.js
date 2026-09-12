const botones = document.querySelectorAll('.filtro-btn');
const productos = document.querySelectorAll('.producto');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');

        const categoria = boton.dataset.categoria;

        productos.forEach(producto => {
            if (categoria === 'todos' || producto.dataset.categoria === categoria) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});