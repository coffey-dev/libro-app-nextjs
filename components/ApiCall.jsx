import styles from "./styles.module.css"


async function getData() {
  const res = await fetch('https://coffey-dev.github.io/json-textos/paginas.json')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main>
    <h1 className={styles.hoja}>{data.hoja}</h1>
    <h2 className={styles.texto}>{data.texto}</h2>
  </main>
}