import Logo from '../../../assets/img/logo.png';

const HeaderMobile = () => {
    return (
        <div className="cabecalho__mobile">
            <ion-icon name="logo-instagram" />

            <img src={Logo} alt="Logo | Instagram" className="cabecalho__logo" />

            <ion-icon name="paper-plane-outline" />
        </div>
    )
}

export default HeaderMobile;