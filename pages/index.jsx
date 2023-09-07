import React, { useEffect, useState } from 'react';

async function getData() {
  const res = await fetch('https://coffey-dev.github.io/json-textos/paginas.json');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data; // Devuelve el objeto JSON completo
}

export default function Page() {
  const [data, setData] = useState({}); // Inicializa data como un objeto vacío

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>Contenido de paginas.json</h1>
      <div>
        <p>Hoja: {data.hoja}</p>
        <p>Texto: {data.texto}</p>
      </div>
    </main>
  );
}
