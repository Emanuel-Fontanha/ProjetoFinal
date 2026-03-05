import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
import Logo from "../../assets/Logo.png"
import Carrinho from "../../assets/Compras.png"
import Favoritos from "../../assets/Favorito.png"
import Avatar from "../../assets/User.png"

export default function Header() {

    // const navigate = useNavigate() Usar quando handleClick for implementado

    function handleClick() {
        // Implementar lógica para verificar se o user está logado
        // Se estiver logado, redirecionar com "navigate("/carrinho")"
        // Se não estiver logado, bloquear redirecionamento
    }

    return (
        <header className={styles.header}>

            <div className={styles.divContainer}>
                <Link to={"/"} className={styles.linkLogo}>
                    <img src={Logo} alt="Logo da loj{IN}ha" />
                </Link>
            </div>

            <nav className={styles.linksNav}>
                <Link to={"/pijamas/todos"} className={styles.pijamaLink}>PIJAMAS</Link>
                <Link to={"/pijamas/feminino"} className={styles.pijamaLink}>FEMININO</Link>
                <Link to={"/pijamas/masculino"} className={styles.pijamaLink}>MASCULINO</Link>
                <Link to={"/pijamas/infantil"} className={styles.pijamaLink}>INFANTIL</Link>
            </nav>

            <div className={styles.containerIcons}>
                <div className={styles.divIcons}>
                    <button
                        onClick={() => handleClick()}
                        className={styles.iconButton}>
                        <img
                            className={styles.carrinho}
                            src={Carrinho}
                            alt="Ícone de carrinho de compras" />
                    </button>

                    <Link to={"/favoritos"} className={styles.iconlink}>
                        <img
                            className={styles.favoritos}
                            src={Favoritos}
                            alt="Ícone de favoritos" />
                    </Link>
                </div>

                <Link to={"/login"} className={styles.iconlink}>
                    <img
                        className={styles.user}
                        src={Avatar}
                        alt="Ícone de usuário" />
                </Link>
            </div>
        </header>
    )
}