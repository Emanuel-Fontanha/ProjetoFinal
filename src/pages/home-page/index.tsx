import styles from './styles.module.css'
import Carrossel from "../../components/carrossel";
import logo from '../../assets/Logo 3.png'
import pijamaicone from '../../assets/pijama-icone.png'
import contatosicone from '../../assets/people.png'
import entregaicone from '../../assets/delivery.png'
import PijamaCard from '../../components/pijama-card';

export default function HomePage() {
    return (
        <>
        <div className={styles.apresentacao}>
            <figure>
                <img src={logo} className={styles.logo}/>
            </figure>
            <p className={styles.text1}>
                Se os lobos soubessem desse conforto, nem sopravam casas, iam dormir!
            </p>
        </div>
        <Carrossel/>
        <div className={styles.propaganda}>
            <div className={styles.publicidade}>
                <figure>
                    <img src={pijamaicone} className={styles.icon}/>
                </figure>
                <p className={styles.text2}>Pijamas confortáveis e com tecnologia</p>
            </div>
            <div className={styles.publicidade}>
                <figure>
                    <img src={contatosicone} className={styles.icon}/>
                </figure>
                <p className={styles.text2}>Modelos para todas as idades e tamanhos</p>
            </div>
            <div className={styles.publicidade}>
                <figure>
                    <img src={entregaicone} className={styles.icon}/>
                </figure>
                <p className={styles.text2}>Frete grátis em todo o Brasil e exterior</p>
            </div>
        </div>
        <div className={styles.promocoes}>
            <h1 className={styles.text3}>Nossas últimas promoções!</h1>
            <div className={styles.cards}>
                <PijamaCard/>
                <PijamaCard/>
                <PijamaCard/>
                <PijamaCard/>
            </div>       
        </div>
        <div className={styles.feedbacks}>
            <h1 className={styles.text3}>Feedbacks</h1>
            <button className={styles.button}>Também quero dar um feedback!</button>
        </div>
        </>
    )
}