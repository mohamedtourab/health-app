import {Row, Col} from "antd";
import {withTranslation} from "react-i18next";
import {SvgIcon} from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
    FooterSection,
    Title,
    Para,
    Large,
    Chat,
    Empty,
    Language,
    Label,
    LanguageSwitch,
    LanguageSwitchContainer,
} from "./styles";
const Footer = ({t}: any) => {
    const handleChange = (language: string) => {
        i18n.changeLanguage(language);
    };
    return (
        <>
            <FooterSection>
                <Container>
                    <Row justify="space-between">
                        <Col lg={10} md={10} sm={12} xs={12}>
                            <Language>{t("Contact")}</Language>
                            <Large to="/">{t("Tell us everything")}</Large>
                            <Para>
                                {t(`Do you have any question? Feel free to reach out.`)}
                            </Para>
                            <a href="mailto:health@gmail.com">
                                <Chat>{t(`Let's Chat`)}</Chat>
                            </a>
                        </Col>
                        <Col lg={8} md={8} sm={12} xs={12}>
                            <Title>{t("Policy")}</Title>
                            <Large to="/" left="true">
                                {t("Application Security")}
                            </Large>
                            <Large left="true" to="/">
                                {t("Software Principles")}
                            </Large>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Empty/>
                            <Large left="true" to="/">
                                {t("Support Center")}
                            </Large>
                            <Large left="true" to="/">
                                {t("Customer Support")}
                            </Large>
                        </Col>
                    </Row>
                    <Row justify="space-between">
                        <Col lg={10} md={10} sm={12} xs={12}>
                            <Empty/>
                            <Language>{t("Address")}</Language>
                            <Para>Politecnico di Torino</Para>
                            <Para>Corso Duca degli Abruzzi, 24</Para>
                            <Para>Torino, Italy</Para>
                        </Col>
                        <Col lg={8} md={8} sm={12} xs={12}>
                            <Title>{t("Company")}</Title>
                            <Large left="true" to="/">
                                {t("About")}
                            </Large>
                            <Large left="true" to="/">
                                {t("Blog")}
                            </Large>
                            <Large left="true" to="/">
                                {t("Press")}
                            </Large>
                            <Large left="true" to="/">
                                {t("Careers & Culture")}
                            </Large>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Label htmlFor="select-lang">{t("Language")}</Label>
                            <LanguageSwitchContainer>
                                <LanguageSwitch onClick={() => handleChange("en")}>
                                    <SvgIcon
                                        src="united-states.svg"
                                        aria-label="homepage"
                                        width="30px"
                                        height="30px"
                                    />
                                </LanguageSwitch>
                                <LanguageSwitch onClick={() => handleChange("es")}>
                                    <SvgIcon
                                        src="spain.svg"
                                        aria-label="homepage"
                                        width="30px"
                                        height="30px"
                                    />
                                </LanguageSwitch>
                            </LanguageSwitchContainer>
                        </Col>
                    </Row>
                </Container>
            </FooterSection>
        </>
    );
};

export default withTranslation()(Footer);
