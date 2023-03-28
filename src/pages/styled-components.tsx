import { type NextPage } from "next";
import ContactFormSC from "~/components/styled-components/contact-form/contact-form";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <ContactFormSC />
      </main>
    </>
  );
};

export default Home;
