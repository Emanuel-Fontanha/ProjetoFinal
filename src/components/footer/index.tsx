import styles from './styles.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container1}>
                <div className={styles.divInfo}>
                    <p className={styles.p1}>Endereço</p>
                    <p className={styles.p2}>Av. Milton Tavares de Souza,<br /> s/n - Sala 115 B - Boa Viagem,<br /> Niterói - RJ <br />
                    CEP: 24210-315 </p>

                    <p className={styles.p3}>Fale conosco</p>
                    <p className={styles.p4}>contato@injunior.com.br</p>
                    <ul className={styles.lista}>
                        <li><a href="https://www.instagram.com/injunioruff/"><img src="src\assets\instagram.png" alt="" /></a></li>
                        <li><a href="https://www.facebook.com/injunioruff/?locale=pt_BR"><img src="src\assets\facebook.png" alt="" /></a></li>
                        <li><a href="https://br.linkedin.com/company/in-junior"><img src="src\assets\in.png" alt="" /> </a></li>
                    </ul>
                </div>
                <div>
                    <img className={styles.logo} src="src\assets\Logo 2.png" alt="" />
                </div>
                <div>
                    <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1935617540544!2d-43.13326180000001!3d-22.9062304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e444e692b%3A0xfd5e35fb577af2f5!2sUFF%20-%20Instituto%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1769706754810!5m2!1spt-BR!2sbr" width="325px" height="240" style={{border: "0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className={styles.container2}>
                <p>© Copyright 2025. IN Junior. Todos os direitos reservados. Niterói, Brasil.</p>
            </div>
        </footer>
    )
}