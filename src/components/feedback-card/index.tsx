import styles from "./styles.module.css";

interface Iprops{
    nome: string
    feedback: string
    nota: number
}

export default function FeedbackCard(props : Iprops) {

    return (
        <div className={styles.container}>
            <h1 className={styles.nome}>{props.nome}</h1>

            <div className={styles.estrelas}>
                <div>
                    {[...Array(props.nota)].map((_,index) => (
                        <span key={index} className={styles.estrela}>&#9733;</span>
                    ))}
                </div>
                <div>
                    {[...Array(5-(props.nota))].map((_,index) => (
                        <span key={index} className={styles.estrela}>&#9734;</span>
                    ))}
                </div>
            </div>
            
            <p className={styles.feedback}>{props.feedback}</p>

        </div>
    );
}