import {
    imagemMeio1,
    imagemMeio2,
    imagemMeio3,
    imagemMeio4, 
    imagemMeio5
} from './imagens';

const Meio = () => {
    const informacoes = [
        {
            imagem: imagemMeio1,
            user: "bad.vibes.memes"
        },
        {
            imagem: imagemMeio2,
            user: "chibirdart"
        },
        {
            imagem: imagemMeio3,
            user: "razoesparaacreditar"
        },
        {
            imagem: imagemMeio4,
            user: "adorable_animals"
        },
        {
            imagem: imagemMeio5,
            user: "smallcutecats"
        }
    ];

    return (
        <div className="sidebar__meio">
            <div className="sidebar__meio__topo">
                <p>Sugestões para você</p>

                <p>Ver tudo</p>
            </div>

            {informacoes.map((informacao, index) => {
                return ( 
                    <div className="sidebar__meio__secao" key={index}>
                        <div className="sidebar__meio__secaoEsquerda">
                            <img src={informacao.imagem} className="sidebar__meio__secaoEsquerda__imagem" alt="" />

                            <div className="sidebar__meio__secaoEsquerda__textos">
                                <p>{informacao.user}</p>

                                <p>Segue você</p>
                            </div>
                        </div>

                        <div className="sidebar__meio__secaoDireita">
                            <p>Seguir</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Meio;