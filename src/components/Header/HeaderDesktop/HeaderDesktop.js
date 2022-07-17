import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectionThree from "./SectionThree/SectionThree";

const HeaderDesktop = () => {
    return (
        <div className="cabecalho">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    )
}

export default HeaderDesktop;