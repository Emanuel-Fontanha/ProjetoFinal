import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import img from '../../assets/pijama.jpg'

export default function Pijama () {

  const estoquePorTamanho: Record<string, number> = {
    'PP': 2,
    'P': 5,
    'M': 8,
    'G': 3,
    'GG': 0 
  };

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const sizes = Object.keys(estoquePorTamanho);

 
  useEffect(() => {
    const estoqueDisponivel = estoquePorTamanho[selectedSize];
    
   
    if (estoqueDisponivel === 0) {
      
      setQuantity(0);
    } else if (quantity > estoqueDisponivel) {
      setQuantity(estoqueDisponivel);
    } else if (quantity === 0 && estoqueDisponivel > 0) {
      setQuantity(1);
    }
  }, [selectedSize]);

  const increment = () => {
    if (quantity < estoquePorTamanho[selectedSize]) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  return (
    <section className={styles.section}>

        <div className={styles.container}>
        {/* Lado Esquerdo: Imagem */}
        <div className={styles.imageSection}>
            <img 
            src={img}
            alt="Pijama Feminino Longo" 
            className={styles.productImage}
            />
        </div>

        {/* Lado Direito: Informações */}
        <div className={styles.infoSection}>
            <h1 className={styles.title}>PIJAMA FEMININO LONGO – ESTAMPA POÁ</h1>
            <p className={styles.ref}>Ref: #123456</p>

            <div className={styles.priceContainer}>
            <span className={styles.price}>R$ 78,90</span>
            <span className={styles.installments}>6x de R$13,15</span>
            </div>
            
            <p className={styles.pixPrice}>Ou por <strong>R$67,06</strong> no PIX</p>

            <div className={styles.sizeSection}>
            <label>Tamanhos:</label>
            <div className={styles.sizeOptions}>
                {sizes.map((size) => (
                <button
                    key={size}
                    className={`${styles.sizeButton} ${selectedSize === size ? styles.active : ''}`}
                    onClick={() => setSelectedSize(size)}
                >
                    {size}
                </button>
                ))}
            </div>
            <p className={styles.stockInfo}>
                {estoquePorTamanho[selectedSize] > 0 
                ? `Ainda temos ${estoquePorTamanho[selectedSize]} peças do tamanho escolhido!` 
                : "Tamanho esgotado no momento."}
            </p>
            </div>

            <div className={styles.quantitySection}>
            <label>Quantidade:</label>
            <div className={styles.quantitySelector}>
                <button 
                onClick={decrement} 
                disabled={quantity <= 1}
                >
                -
                </button>
                <span>{quantity}</span>
                <button 
                onClick={increment} 
                disabled={quantity >= estoquePorTamanho[selectedSize]}
                >
                +
                </button>
            </div>
            </div>

            <div className={styles.actions}>
            <button 
                className={styles.addToCart} 
                disabled={estoquePorTamanho[selectedSize] === 0}
            >
                {estoquePorTamanho[selectedSize] === 0 ? 'ESGOTADO' : 'ADICIONAR AO CARRINHO'}
            </button>
            <button>/*importar botao favoritos*/</button>
            </div>
        </div>
        </div>
    </section>
  );
};