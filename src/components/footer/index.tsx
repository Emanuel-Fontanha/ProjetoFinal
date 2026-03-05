import styles from "./styles.module.css"
import Instagram from "../../assets/instagram.png"
import Facebook from "../../assets/facebook.png"
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/Logo 2.png"

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.mainFooter}>
                <section className={styles.textInfoSection}>

                    <div className={styles.addressDiv}>
                        <h1 className={styles.addressTitle}>Endereço</h1>
                        <div className={styles.textDiv}>
                            <p className={styles.text}>Av. Milton Tavares de Souza,</p>
                            <p className={styles.text}>s/n - Sala 115 B - Boa Viagem,</p>
                            <p className={styles.text}>Niterói - RJ</p>
                            <p className={styles.text}>CEP: 24210-315</p>
                        </div>
                    </div>

                    <div className={styles.contactUsDiv}>

                        <p className={styles.contactUs}>Fale conosco</p>
                        <p className={styles.email}>contato@injunior.com.br</p>

                        <div className={styles.linksDiv}>
                            <a
                                href="https://www.instagram.com/injunioruff/"
                                className={styles.instagramLink}
                                target="_blank">
                                <img
                                    src={Instagram}
                                    alt="Link para o Instagram da IN Júnior" />
                            </a>
                            <a
                                href="https://www.facebook.com/injunioruff/?locale=pt_BR"
                                className={styles.facebookLink}
                                target="_blank">
                                <img
                                    src={Facebook}
                                    alt="Link para o Facebook da IN Júnior" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/in-junior/?originalSubdomain=br"
                                className={styles.linkedinLink}
                                target="_blank">
                                <img
                                    src={Linkedin}
                                    alt="Link para o LinkedIn da IN Júnior" />
                            </a>
                        </div>

                    </div>
                </section>

                <img src={Logo} alt="Logo da loj{IN}ha" />

                <div className={styles.iframeDiv}>
                    <iframe
                        className={styles.iframe}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1935617540544!2d-43.13326180000001!3d-22.9062304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e444e692b%3A0xfd5e35fb577af2f5!2sUFF%20-%20Instituto%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1769706754810!5m2!1spt-BR!2sbr"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <p className={styles.copyrightText}>
                © Copyright 2025. IN Junior. Todos os direitos reservados. Niterói, Brasil.
            </p>

        </div>
    )
}