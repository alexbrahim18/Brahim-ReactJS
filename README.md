Cerveceria THE NORTHMAN
Primer entrega final:
añadi dos categorias a los productos, promociones y cervezas, para poder cumplir con la consigna y aplicar url dinamicas utilizando react-router-dom.
Tambien en cada producto, clikeando en el boton "Ver Mas" o en la imagen, te lleva a su ItemDetail correspondiente, en el logo clickeando te lleva ItemListContainer y en la navbar linkee cada li con su respectivo destino.

Desafio Context : Tuve en cuenta las correcciones del desafio anterior y las realize. Cree mi componente Context.jsx donde estan las funciones que uso de forma global.
Reemplaze el addItem por onAdd, ademas de agregar la funcion removeItem y clear, que de momento estan en el itemCount y el CardWidget respectivamente hasta que cree el componente que muestre el cart.

Desafio CartView : Cree el componente Cart y CartDetail, el primero a traves de un condicional renderiza un mensaje y un boton hacia el landing si el carrito esta vacio, y si tiene productos, renderiza los detalles de la compra con todos los requisitos de la entrega, en CartWidget tambien con un condicional defino si se renderiza o no.
Ademas en Context defini las funciones de sumaTotal y cartTotal, que devuelven el total de la compra y la cantidad de productos en el carrito respectivamente.