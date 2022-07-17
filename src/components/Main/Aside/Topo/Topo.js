const Topo = (props) => {
    return (
        <div className="sidebar__topo">
            <img src={props.imagem} alt="" />

            <div className="sidebar__topo__textos">
                <p>{props.nome1}</p>
                <p>{props.nome2}</p>
            </div>
        </div>
    )
}

export default Topo;