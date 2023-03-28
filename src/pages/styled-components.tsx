import { type NextPage } from "next";
import styled from "styled-components";
import ContactFormSC from "~/components/styled-components/contact-form/contact-form";

const Home: NextPage = () => {

  const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, red, darkblue);
  `

  return (
    <MainStyled>
        <ContactFormSC />
    </MainStyled>
  );
};

export default Home;