import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="font-bold text-2xl">{t("header.message")}</h1>
      <p>{t("body.message")}</p>

      <button onClick={() => handleChangeLanguage("en")}>EN-US</button>

      <button onClick={() => handleChangeLanguage("pt")}>PT-BR</button>
    </div>
  );
}
