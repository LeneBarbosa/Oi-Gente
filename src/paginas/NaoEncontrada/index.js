import styles from './NaoEncontrada.module.css';
import erro404 from '../../assets/erro_404.png';
import BotaoPrincipal from 'componentes/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>
                    Ops! Não encontramos nada aqui.
                </h1>

                <p className={styles.paragrafo}>
                    Era isso mesmo que queria fazer?
                </p>

                <p className={styles.paragrafo}>
                    Que tal recarregar a página? Ou tente voltar ao Inicio.
                </p>

                <div
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}

                />

            </div>

            <div className={styles.espacoEmBranco}>

            </div>
        </>
    )
}