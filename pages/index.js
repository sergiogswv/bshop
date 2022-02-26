import Image from "next/image";
import Link from "next/link";
import Layout from "../src/components/layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* Layout */}
      <Layout>
        {/* Flyer con nombre y eslogan */}
        <div>
          <img
            className={styles.flyer}
            src="/img/globos.png"
            alt="Flyer bshop"
          />
          <div className={styles.contenido}>
            <h1>Bshop</h1>
            <p>Tu mejor opción para comprar globos</p>
            <Link href="/coleccion">
              <input
                type="submit"
                value="Ver colección"
                className={styles.boton}
              />
            </Link>
          </div>
        </div>
        {/* Colecciones */}
        <div className={styles.coleccion}>
          <h1>Nuestras colecciones</h1>
          {/* Items - cards */}
          <div className={styles.contenedor}>
            <div className={styles.item}>
              <Image
                width={400}
                height={400}
                layout="responsive"
                al="Item"
                src={"/img/cumpleaños.png"}
              />
              <h2>Cumpleaños</h2>
              <input type="submit" value="Ver más" className={styles.boton} />
            </div>
            <div className={styles.item}>
              <Image
                width={400}
                height={400}
                layout="responsive"
                al="Item"
                src={"/img/estrellas.png"}
              />
              <h2>Estrellas</h2>
              <input type="submit" value="Ver más" className={styles.boton} />
            </div>
            <div className={styles.item}>
              <Image
                width={400}
                height={400}
                layout="responsive"
                al="Item"
                src={"/img/numero.png"}
              />
              <h2>Números</h2>
              <input type="submit" value="Ver más" className={styles.boton} />
            </div>
          </div>
          {/* Flyer 2 - Eslogan 2 */}
          <div className={styles.arreglo}>
            <img al="Item" src="/img/decoracion.jpg" />
            <div className={styles.eslogan}>
              <p>
                Soprende a esa persona especial con un bonito arreglo lleno de
                nuestros globos
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
