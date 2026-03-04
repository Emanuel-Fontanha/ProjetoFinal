import { useState } from 'react';
import styles from './styles.module.css'

export default function Feedback() {
    const[nome, setNome] = useState("")
    const[descricao, setDescricao] = useState("")
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!nome.trim() || !descricao.trim()) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return; 
        }
    

        if (rating === 0) {
            alert("Por favor, selecione uma nota de estrelas.");
            return;
        }

        const dadosParaEnviar = {
            nome: nome, 
            comentario: descricao,
            estrelas: rating
        };

        console.log("Enviando para o Back", dadosParaEnviar);

        try {
            const response = await fetch('https://api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosParaEnviar),
            });

            if (response.ok) {
                alert("Feedback enviado!");
            }
        } catch (error) {
            console.error("Erro ao enviar:", error);
        }
    };

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.divTexto}>
                        <p className={styles.feedback}>FEEDBACK</p>
                        <p className={styles.texto}>&nbsp;&nbsp;Fale um pouco sobre a sua <br /> experiência com a nossa loja!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.divInput}>
                            <input value={nome} onChange={(e) => setNome(e.target.value)} className={styles.input1} type="text" placeholder='&nbsp;&nbsp;Nome completo' />
                            <input value={descricao} onChange={(e) => setDescricao(e.target.value)} className={styles.input2} type="text" placeholder='&nbsp;&nbsp;Descrição detalhada'/>
                        </div>
                        <div className={styles.estrelas}>
                        {[...Array(5)].map((_, index) => {
                            index += 1; 
                            return (
                            <button
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                style={{ 
                                backgroundColor: 'transparent', 
                                border: 'none', 
                                cursor: 'pointer',
                                color: index <= (hover || rating) ? '#fff' : '#74010B' 
                                }}
                            >
                                <span className={styles.estrela}>&#9733;</span>
                            </button>
                            );
                        })}
                        </div>
                        <div className={styles.divBotao}>
                            <button className={styles.botao} type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}