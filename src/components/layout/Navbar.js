import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/img/Logo.png"
            width={250}
            height={100}
            layout="intrinsic"
          />
        </Link>
      </div>

      <div className={styles.login}>
        <Image src="/img/login.svg" width={75} height={50} layout="intrinsic" />
      </div>
    </nav>
  );
};

export default Navbar;
