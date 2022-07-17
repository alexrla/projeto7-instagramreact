import storiesBackground from '../../../../assets/img/stories_background2.png';

import { 
    imagem1, 
    imagem2, 
    imagem3, 
    imagem4, 
    imagem5, 
    imagem6, 
    imagem7, 
    imagem8 
} from './imagens';

const Stories = () => {

    const informacoesStory = [
        {
            imagem: imagem1,
            usuario: "9gag"
        },
        {
            imagem: imagem2,
            usuario: "meowed"
        },
        {
            imagem: imagem3,
            usuario: "barked"
        },
        {
            imagem: imagem4,
            usuario: "nathanwpyle..."
        },
        {
            imagem: imagem5,
            usuario: "wawawiwac..."
        },
        {
            imagem: imagem6,
            usuario: "respondeai"
        },
        {
            imagem: imagem7,
            usuario: "filomoderna"
        },
        {
            imagem: imagem8,
            usuario: "memeriago."
        },
    ];

    return (
        <section className="stories">
            {informacoesStory.map((informacao, index) => {
                return (
                    <div className="story" key={index}>
                        <div className="story__background">
                            <img src={storiesBackground} alt="" />

                            <div className="story__imagem">
                                <img src={informacao.imagem} alt="" />
                            </div>
                        </div>

                        <p className="story__user">
                            {informacao.usuario}
                        </p>
                    </div>
                )
            })}

            <ion-icon name="chevron-forward-circle"></ion-icon>
        </section>
    )
}

export default Stories;