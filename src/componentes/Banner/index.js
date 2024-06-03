import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/LeneBarbosa.jpg';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá Pessoal!
                </h1>
                <p className={styles.paragrafo}>
                    Sejam bem-vindos, sou a Lene Barbosa. E aqui vou mostrar um pouco do que sei =D. Espero que gostem.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}

                />



            </div>

        </div>
    )
}