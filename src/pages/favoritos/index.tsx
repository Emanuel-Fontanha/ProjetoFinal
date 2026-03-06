import FavoritosCarrossel from "../../components/favoritos-carrossel";
import styles from "./styles.module.css";

export default function Favoritos() {
  return (
    <div className={styles.favoritosPage}>
      <div className={styles.container}>
        <div className={styles.carrinho}>
            <svg width="49" height="41" viewBox="0 0 49 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="40.2696" cy="34.5255" rx="4.30769" ry="4.30769" stroke="#A4A8B0" strokeWidth="3"/>
                <ellipse cx="17.295" cy="34.5255" rx="4.30769" ry="4.30769" stroke="#A4A8B0" strokeWidth="3"/>
                <path d="M44.2798 27.3462H13.7608C13.5374 27.3462 13.3411 27.1979 13.2799 26.983L12.3324 23.6538M7.3339 6.09186L6.13032 1.86313C6.06916 1.64823 5.87285 1.5 5.64942 1.5H3.08444H1.5M7.3339 6.09186L46.8588 7.02454C47.1676 7.03183 47.396 7.31463 47.3382 7.61807L44.3573 23.2475C44.3124 23.4833 44.1062 23.6538 43.8662 23.6538H12.3324M7.3339 6.09186L12.3324 23.6538" stroke="#A4A8B0" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          <h1 className={styles.texto1}>Carinho</h1>
        </div>
        <div className={styles.favoritos}>
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.72239 21.3886C15.0918 16.0192 23.7974 16.0192 29.1668 21.3886L50.5557 42.7775L31.1113 62.2219L9.72238 40.833C4.35295 35.4636 4.35295 26.758 9.72239 21.3886V21.3886Z" fill="#A31621"/>
                <path d="M52.4997 21.3886C57.8692 26.758 57.8692 35.4636 52.4997 40.833L31.1108 62.2219L11.6664 42.7774L33.0553 21.3886C38.4247 16.0191 47.1303 16.0191 52.4997 21.3886V21.3886Z" fill="#A31621"/>
            </svg>
          <h1 className={styles.texto2}>Favoritos</h1>
        </div>
      </div>
      <div className={styles.carrossel}>
        <FavoritosCarrossel/>
      </div>
    </div>
  );
}
