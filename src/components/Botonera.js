import Image from "next/image";
import styles from "../../styles/Botonera.module.css";

const Botonera = ({ id }) => {
  const quitar = () => {
    console.log(id);
  };

  return (
    <div className={styles.botonera}>
      <div className={styles.menos}>
        <span onClick={quitar}>
          <Image
            alt="restar"
            layout="intrinsic"
            width={35}
            height={35}
            src={"/img/remove.svg"}
          />
        </span>
      </div>
      <div>
        <input type="submit" value="0" className={styles.cantidad} />
      </div>
      <div className={styles.mas}>
        <span>
          <Image
            alt="agregar"
            layout="intrinsic"
            width={35}
            height={35}
            src={"/img/plus.svg"}
          />
        </span>
      </div>
    </div>
  );
};

export default Botonera;
