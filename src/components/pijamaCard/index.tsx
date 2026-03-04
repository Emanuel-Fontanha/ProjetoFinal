import styles from "./styles.module.css";
import icone from '../../assets/iconeDisconto.png'

export default function PijamaCard() {
  const disconto = true;

  return (
    <div className={styles.pijamaCard}>
      <div className={styles.fotoCard}>
        <div className={styles.header}>
          <div>
            <input type="checkbox" id="checkbox" className={styles.check} />
            <label htmlFor="checkbox" className={styles.label}>
              <svg
                width="67"
                height="70"
                viewBox="0 0 67 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3705 23.8838C16.0979 17.8879 25.3838 17.8879 31.1112 23.8838L53.926 47.768L33.1853 69.481L10.3705 45.5967C4.64308 39.6009 4.64308 29.8796 10.3705 23.8838V23.8838Z"
                  fill="#A4A8B0"
                  className={styles.coracao}
                />
                <path
                  d="M55.9999 23.884C61.7273 29.8799 61.7273 39.6011 55.9999 45.597L33.1851 69.4812L12.4443 47.7683L35.2591 23.884C40.9865 17.8881 50.2725 17.8881 55.9999 23.884V23.884Z"
                  fill="#A4A8B0"
                  className={styles.coracao}
                />
              </svg>
            </label>
          </div>
          {disconto && <img src={icone} className={styles.discountIcon}/>}
        </div>
        <img /*src={props}*/ className={styles.image} />
      </div>
      <div className={styles.info}>
        <p>Pijama feminino Longo - Estampa Poá</p>
        <div className={styles.price}>
          <div>
            <div className={styles.disconto}>
              {disconto && <span>R$ 78.06</span>}
            </div>
            <h1 className={styles.mainPrice}>R$ 67.06</h1>
          </div>
          <h2 className={styles.parcelado}>6x de R$13.15</h2>
        </div>
      </div>
    </div>
  );
}