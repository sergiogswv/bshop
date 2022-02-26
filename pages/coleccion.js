import { useState } from "react";
import Item from "../src/components/Item";
import Layout from "../src/components/layout/Layout";
import styles from "../styles/Coleccion.module.css";

const coleccion = () => {
  const [contador, setContador] = useState(0);

  const tipos = [
    { nombre: "Númericos", id: 1 },
    { nombre: "Estrellas", id: 2 },
    { nombre: "Cumpleaños", id: 3 },
  ];
  const imagenes = [
    { imagen: "cumpleaños.png", id: 1 },
    { imagen: "estrella2.png", id: 2 },
    { imagen: "hb1.png", id: 3 },
    { imagen: "hb2.png", id: 4 },
    { imagen: "numero0.png", id: 5 },
  ];

  return (
    <Layout>
      {/* Fyler de globos */}
      <img className={styles.flyer} src="/img/flyers.jpg" alt="Flyer bshop" />
      <h1 className={styles.titulo}>
        Nuestra colección actual en...{" "}
        <span className={styles.marca}>Bshop</span>
      </h1>
      {/* contenido */}
      <div className={styles.contenido}>
        {/* Filtros */}
        <div className={styles.filtro}>
          <h1>Filtros</h1>
          <h3>Tipos:</h3>
          <form>
            {tipos.map((tipo) => (
              <div key={tipo.id} className={styles.campos}>
                <input name={tipo.nombre} type="checkbox" />
                <label>{tipo.nombre}</label>
              </div>
            ))}
          </form>
        </div>
        {/* Items */}
        <div className={styles.cards}>
          {imagenes.map((imagen) => (
            <Item key={imagen.id} imagen={imagen} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default coleccion;
