import { useState } from "react";

const MeioFinal = (props) => {
    const [ curtir, setCurtir ] = useState(props.curtido);

    function pegarPassarInformacao()    {
        if(!curtir)   {
            setCurtir(!curtir);
        }
    }

    return (
        <>
            <div className="meio">
                <img src={props.imagemPost} className="meio__foto" alt="" onDoubleClick={() => pegarPassarInformacao()} />
            </div>

            <div className="final">
                <div className="final__secao_1">
                    <div className="secao_1_1">
                        <ion-icon name={curtir ? "heart-sharp" : "heart-outline"} color={curtir ? 'danger' : ""} style={{cursor: "pointer"}} onClick={() => setCurtir(!curtir)} />

                        <ion-icon name="chatbubble-outline" />

                        <ion-icon name="paper-plane-outline" />
                    </div>

                    <div className="secao_1_2">
                        <ion-icon name="bookmark-outline" />
                    </div>
                </div>

                <div className="final__secao_2">
                    <img src={props.imagem} className="final__imagem" alt="" />

                    <p className="final__texto">
                        Curtido por <span className="negrito">{props.user}</span> e <span className="negrito">outras {props.curtidasQtd} pessoas</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default MeioFinal;