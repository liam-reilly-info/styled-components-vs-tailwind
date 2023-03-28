import { type NextPage } from "next";
import ContactFormTW from "~/components/tailwind/contact-form/contact-form";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[yellow] to-[darkblue]">
          <ContactFormTW />
      </main>
    </>
  );
};

export default Home;