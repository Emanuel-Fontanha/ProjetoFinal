import styles from './styles.module.css'
import banner1 from '../../assets/banner-1.png'
import banner2 from '../../assets/banner-2.png'
import banner3 from '../../assets/banner-3.png'

const banners = [banner1, banner2, banner3]

export default function Carrossel() {
  return (
    <div className={styles.carrossel}>
      <div className={styles.grupo}>
        {banners.map((item, index) => (
          <div className={styles.item} key={index}>
            <figure>
              <img src={item} className={styles.image}/>
            </figure>
          </div>
        ))}
      </div>
    </div>
  )
}
