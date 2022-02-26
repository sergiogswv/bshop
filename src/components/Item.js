import { useState } from "react";
import styles from "../../styles/Items.module.css";
import Botonera from "./Botonera";

const Item = ({ imagen }) => {
  //console.log(imagen);
  const [carrito, setCarrito] = useState({
    cantidad: 0,
    item: "",
  });
  return (
    <div className={styles.item}>
      <img className={styles.imagen} al="Item" src={`/img/${imagen.imagen}`} />
      {/* Botones para agregar */}
      <div>
        <Botonera id={imagen.id} />
      </div>
      <input type="submit" value="Ver más" className={styles.agregar} />
    </div>
  );
};

export default Item;
