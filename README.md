Este proyecto forma parte del trabajo final de la cursada del bootcamp de NextJs de Código Facilito.
Se trata de una web app realizada en React y NextJs que simula lo más cercanamente posible la lectura de un libro del estilo "Elige tu propia aventura". Para ello se decidió descargar un archivo PDF disponible en la red con el contenido escaneado del libro "La cueva del tiempo" de Packard y Granger (Editorial Timun Mas, Barcelona, España, cuarta edición: setiembre de 1984). 
Se aclara que la utilización de su contenido es puramente a los fines de realizar el referido trabajo final y no conlleva ninguna intención de lucro económico a través del mismo.
1- Una vez que se descargó el archivo pdf del libro se volvió necesario probar la utilidad de la página onlineocr.net para convertir la página introductoria desde una imagen jpeg a un archivo de texto en formato word.
2- Se decide que cada página virtual del libro no se va a convertir en una página web separada del resto sino que cada página será un objeto en un archivo json que será consumido y transformado desde la app cuando sea necesario.
3- Se crea un archivo json con sólo dos propiedades: "página" y "texto". Debido a que cada página del libro contiene párrafos separados por puntos aparte, se prueba de colocar "/n" cuando corresponda que se realice un salto de espacio, detectable por la función de CSS "white space" con el valor "pre-wrap". La dirección del archivo json es: "https://coffey-dev.github.io/json-textos/paginas.json".


