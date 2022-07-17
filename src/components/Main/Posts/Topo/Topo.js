const Topo = (props) => {
  return (
    <div className="topo">
        <div className="topo__secao_1">
          <img src={props.imagem} alt="" className="topo__imagem" />
        
          <p className="topo__legenda">
            {props.legenda}
          </p>
        </div>

        <div className="topo__secao_2">
          <ion-icon name="ellipsis-horizontal-sharp" />
        </div>
    </div>
  )
}

export default Topo;