Angular @Input @Output
Este proyecto es un ejemplo simple de interacción entre componentes. En el mismo, intercambiaremos datos entre un componente "Padre" y un componente "Hijo".

Input
Mediante los inputs podremos pasar información del componente "Padre" al componente "Hijo". Para ello en el componente "Hijo" se declara una propiedad mediante el decorador @Input

Output
Mediante los outputs podremos emitir un evento en el componente "Hijo" el cual podremos capturar con el "Padre" para obtener los datos emitidos. Con el decorador @Output definiremos el evento que emitirá el componente "Hijo".