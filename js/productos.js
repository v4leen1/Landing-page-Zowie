document.addEventListener('DOMContentLoaded', function() {
    fetch('productos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(productos => {
            const contenedor = document.getElementById('productosContainer');
            productos.forEach(producto => {
                // Crear la card
                const card = document.createElement('div');
                card.className = 'card';

                // Agregar la imagen
                const imagen = document.createElement('img');
                imagen.src = producto.imagen;
                imagen.alt = producto.nombre;
                card.appendChild(imagen);

                // Agregar el nombre
                const nombre = document.createElement('h3');
                nombre.textContent = producto.nombre;
                card.appendChild(nombre);

                // Agregar la descripción
                const descripcion = document.createElement('p');
                descripcion.textContent = producto.descripcion;
                card.appendChild(descripcion);

                // Agregar el precio
                const precio = document.createElement('p');
                precio.className = 'precio';
                precio.textContent = `$${producto.precio}`;
                card.appendChild(precio);

                // Agregar el stock
                const stock = document.createElement('p');
                stock.className = 'stock';
                stock.textContent = `Stock: ${producto.stock}`;
                card.appendChild(stock);

                // Agregar la card al contenedor
                contenedor.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
});
