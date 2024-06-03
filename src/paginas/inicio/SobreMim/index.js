import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/foto_sobre_mim.jpg";


export default function SobreMim() {
    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Oi, eu sou a Lene!
            </h3>

            <img
                src={fotoSobreMim}
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Minha história como programadora começou em 2021, assim que meu filho Cadu nasceu. Eu não queria voltar para a profissão que eu exercia antigamente, pois teria que ficar muito tempo longe dele.
            </p>
            <p className={styles.paragrafo}>
                Foi então que resolvi, juntamente com meu marido, Carlos, que é programador há mais de 10 anos, a cursar uma faculdade. Na verdade costumo a dizer que ele foi e é meu maior incentivador, desde sempre ele gostaria que eu tivesse uma formação, então se hoje sei o que sei, é graças ao apoio dele também.
            </p>
            <p className={styles.paragrafo}>
                Cursar uma faculdade com filho pequeno, não foi fácil, mas aqui estou eu. Sei que estou apenas no começo, mas me sinto muito feliz a cada etapa ou algo que aprendo.
            </p>

        </PostModelo>

    )
}