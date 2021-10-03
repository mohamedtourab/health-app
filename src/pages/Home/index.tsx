import {lazy} from "react";
import IntroContent from "../../content/IntroContent.json";
import FoodContent from "../../content/FoodContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import BodyContent from "../../content/BodyContent.json";
import MindContent from "../../content/MindContent.json";
import PreventionContent from "../../content/PreventionContent.json";

lazy(() => import("../../components/ContactForm"));
lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
    return (
        <Container>
            <ScrollToTop/>
            <ContentBlock
                type="right"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="heart.svg"
                id="intro"
            />
            <ContentBlock
                type="left"
                title={FoodContent.title}
                content={FoodContent.text}
                section={FoodContent.section}
                icon="graphs.svg"
                id="pillars"
            />
            <ContentBlock
                type="right"
                title={BodyContent.title}
                content={BodyContent.text}
                icon="body.svg"
                id="intro"
            />
            <ContentBlock
                type="left"
                title={MindContent.title}
                content={MindContent.text}
                icon="mind.svg"
                id="pillars"
            />
            <ContentBlock
                type="right"
                title={PreventionContent.title}
                content={PreventionContent.text}
                icon="prevention.svg"
                id="intro"
            />
            <ContentBlock
                type="right"
                title={MissionContent.title}
                content={MissionContent.text}
                icon="product-launch.svg"
                id="indicators"
            />
        </Container>
    );
};

export default Home;
