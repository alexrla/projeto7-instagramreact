import Topo from './Topo/Topo';
import Meio from './Meio/Meio';
import Final from './Final/Final';

import imagem from '../../../assets/img/catanacomics 1.png';


const Aside = () => {
    return (
        <aside className="sidebar">
            <Topo imagem={imagem} nome1="catanacomics" nome2="Catana" />
            <Meio />
            <Final />
        </aside>
    )
}

export default Aside;