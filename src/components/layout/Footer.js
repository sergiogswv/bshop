import Image from "next/image";
import styles from "../../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.apartado}>
        <p>Acerca de nosotros</p>
        <p>Aviso de Privacidad</p>
        <p>Colección</p>
      </div>
      <div>
        <h2 className={styles.titulo}>Nuestras Redes Sociales</h2>
        <div className={styles.redes}>
          <Image
            width={50}
            height={50}
            layout="intrinsic"
            alt="imagen facebook"
            src="/img/fb.png"
          />
          <p>Facebook</p>
        </div>

        <div className={styles.redes}>
          <Image
            width={50}
            height={50}
            layout="intrinsic"
            alt="imagen instagram"
            src="/img/instagram.png"
          />
          <p>Instagram</p>
        </div>
      </div>
      <div className={styles.mapa}>
        <h2 className={styles.titulo}>Visita nuestra tienda</h2>
        <Image
          width={300}
          height={250}
          layout="intrinsic"
          alt="mapa"
          src="/img/local.png"
        />
      </div>
    </div>
  );
};

export default Footer;
