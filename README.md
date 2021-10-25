# E-commerce guitarras

## Instrucciones para correr el proyecto de manera local.

1. Clonar repositorio `git clone https://github.com/MateoMagnasco/coder-app.git`
2. Setear las siguientes variables de entorno:

- `REACT_APP_apiKey`
- `REACT_APP_authDomain`
- `REACT_APP_projectId`
- `REACT_APP_storageBucket`
- `REACT_APP_messagingSenderId`
- `REACT_APP_appId`

3. Cambiar directorio `cd coder-app`
4. Instalar dependencias `npm install`
5. Levantar proyecto `npm start`

## Tech stack

### React

Librería para desarrollo de interfaces gráficas.

### Firestore

Base de datos no relacional del ecosistema Firebase.

### ESLint

Extensión para formateo de código.

### Bootstrap

Librería de estilos.

### Node

Entorno de ejecución de Javascript.

## Organización proyecto

### Components

Decidí dividir cada uno de los componentes involucrados en una carpeta a parte dentro de la carpeta "Components" de manera de poder reutilzarlos. Cada uno conteniendo su código fuente y su hoja de estilos.

### NavBar

Contiene las distintas categorias del E-commerce y un link hacia el carrito.

### Brand

Contiene el logo de la marca.

### Cart

Contiene la información del carrito

### CartWidget

Contiene el logo del carrito y la cantidad de items agregados al mismo.

### CheckoutButton

Contiene botón que nos permite redirigirnos al carrito.

### ContactForm

Contiene un formulario para que el usuario introduzca sus datos, previo a confirmar la compra.

### Counter

Contiene un contador donde el usuario puede incrementar o decrecer la cantidad de items agregados.

### Item

Contiene información sobre el item (nombre, precio, stock, descripción e imagen del item) y un botón para remover el mismo.

### ItemDetail

Contiene información sobre el item (nombre, precio, stock, descripción e imagen del item)

### ItemDetailContainer

Obtiene el Item y llama al componente del ItemDetail con su información necesaria.

### ItemList

Renderiza listado de Items.

### ItemListContainer

Obtengo los items y realizo el filtrado mediante su id.

### Context

Cree contexto para el carrito, de manera que varios componentes pudieran interactuar con el mismo sin tener que recibir la información por props. Dentro del contexto definí funciones tanto para la obtención de los productos, como para su filtrado, adición y remoción.

### Services

Para la interacción con servicios externos.
Firestore es una base de datos no relacional.
Dentro del archivo `src/services/firebase.js` definí las siguientes funciones:

#### getCategories()

Obtiene las categorías.

#### getProducts()

Obtiene los productos.

#### getProductsByID(id)

Obtiene un producto mediante su id.

#### createOrder(order)

Crea la orden con sus productos y datos del usuario.
