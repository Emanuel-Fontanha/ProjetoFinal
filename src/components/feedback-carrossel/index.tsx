import { useRef } from 'react'
import styles from './styles.module.css'
import FeedbackCard from '../feedback-card'

interface FeedbackCard{
    nome: string
    feedback: string
    nota: number
}

interface Iprops{
    cards: FeedbackCard[]
}

export default function FeedbackCarrossel({ cards } : Iprops){
    const carrossel=useRef<HTMLDivElement>(null)

    const handleRightClick = () =>{
        if(carrossel.current) carrossel.current.scrollLeft += (448);
    }

    const handleLeftClick = () =>{
        if(carrossel.current) carrossel.current.scrollLeft -= (448);
    }

    return (
        <div className={styles.carrossel}>
            <button onClick={handleLeftClick} className={styles.button}>
                <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8273 0.78035C16.8661 -0.260116 18.5504 -0.260117 19.5893 0.780349C20.6281 1.82082 20.6281 3.50774 19.5893 4.54821L4.54117 19.6196C3.50231 20.6601 1.818 20.6601 0.779141 19.6197C-0.259714 18.5792 -0.259714 16.8923 0.779141 15.8518L15.8273 0.78035Z" fill="#274553"/>
                    <path d="M19.5893 30.9233C20.6281 31.9637 20.6281 33.6506 19.5893 34.6911C18.5504 35.7316 16.8661 35.7316 15.8273 34.6911L0.779141 19.6197C-0.259714 18.5792 -0.259714 16.8923 0.779141 15.8518C1.818 14.8113 3.50232 14.8113 4.54117 15.8518L19.5893 30.9233Z" fill="#274553"/>
                </svg>

            </button>
            <div className={styles.container} ref={carrossel}>
                {cards.map((element, index) => (
                    <ul key={index}>
                        <FeedbackCard feedback={element.feedback} nome={element.nome} nota={element.nota}/>
                    </ul>
                ))}
            </div>
            <button onClick={handleRightClick} className={styles.button}>
                <svg width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5414 34.6911C3.50255 35.7316 1.81823 35.7316 0.779373 34.6911C-0.259483 33.6506 -0.259483 31.9637 0.779374 30.9233L15.8275 15.8518C16.8663 14.8113 18.5507 14.8113 19.5895 15.8518C20.6284 16.8923 20.6284 18.5792 19.5895 19.6197L4.5414 34.6911Z" fill="#274553"/>
                    <path d="M0.779376 4.54821C-0.259481 3.50775 -0.25948 1.82082 0.779376 0.780352C1.81823 -0.260114 3.50255 -0.260114 4.5414 0.780352L19.5895 15.8518C20.6284 16.8923 20.6284 18.5792 19.5895 19.6197C18.5507 20.6601 16.8663 20.6601 15.8275 19.6197L0.779376 4.54821Z" fill="#274553"/>
                </svg>
            </button>
        </div>
    )
}