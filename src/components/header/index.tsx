import styles from "./styles.module.css"

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.divImg1}>   
                <img className={styles.img1} src="src\assets\Logo.png" alt="" />
            </div>
            <div className={styles.divLista}>
                <ul className={styles.lista}>
                    <li className={styles.li}>PIJAMAS</li>
                    <li className={styles.li}>FEMININO</li>
                    <li className={styles.li}>MASCULINO</li>
                    <li className={styles.li}>INFANTIL</li>
                </ul>
            </div>
            <div>
                <div className={styles.containerIcons}>
                    <div className={styles.divIcons}>
                        <img className={styles.img2} src="src\assets\Compras.png" alt="" />
                        <img src="src\assets\Favorito.png" alt="" />
                    </div>
                    <div className={styles.divUser}>
                        <img src="src\assets\User.png" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}