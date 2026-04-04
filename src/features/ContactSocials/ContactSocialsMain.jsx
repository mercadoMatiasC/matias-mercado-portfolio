import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";
import { Networks } from "./components/Networks";

export default function ContactSocialsMain() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
      <div className="mt-[6vh] flex flex-col w-[87%] space-y-5 h-full justify-center mb-0 lg:mt-[15vh] 2xl:mt-[8vh]">
        <h1 className="text-3xl font-bold text-white/80">
          {t('contactsocials.title')} <span className="blink-text">_</span>
        </h1>
        <div className="mt-[2vh] flex flex-col justify-center items-center xl:flex-row 2xl:mt-[5vh]">
          <Networks />
        </div>
      </div>

      <Footer />
    </div>
  );
}