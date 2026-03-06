import styles from "./styles.module.css"

export default function Registro() {
    return (
        <div className={styles.registerContainer}>
            <section className={styles.mainRegisterDiv}>
                <p className={styles.registerTitle}>Registre-se</p>
                <form className={styles.formDiv}>
                    <input
                        className={styles.inputTag}
                        id="nameInput"
                        type="text"
                        placeholder="Nome"/>
                    <input
                        className={styles.inputTag}
                        id="usernameInput"
                        type="text"
                        placeholder="Nome de Usuário"/>
                    <input
                        className={styles.inputTag}
                        id="emailInput"
                        type="email"
                        placeholder="E-mail"/>
                    <input
                        className={styles.inputTag}
                        id="passwordInput"
                        type="password"
                        placeholder="Senha"/>
                    <input
                        className={styles.inputTag}
                        id="confirmPasswordInput"
                        type="password"
                        placeholder="Confirmar senha"/>

                    <button className={styles.registerButton}>REGISTRAR</button>
                </form>
            </section>
        </div>
    )
}