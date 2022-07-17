import Stories from "./Sections/Stories/Stories";
import Posts from './Sections/Posts/Posts';
import Aside from "./Aside/Aside";

const Main = () => {
    return (
        <main>
            <Stories />
            <Posts />
            <Aside />
        </main>
    )
}

export default Main;