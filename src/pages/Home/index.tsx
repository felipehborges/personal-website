import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Home() {
  const [t, i18n] = useTranslation("global");

  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center dark:bg-zinc-900">
        <h1 className="font-bold text-2xl dark:text-zinc-100">
          {t("header.message")}
        </h1>
        <p className="dark:text-zinc-100">{t("body.message")}</p>

        <Button variant={"default"} onClick={toggleLanguage}>
          {language === "en" ? "PT-BR" : "EN"}
        </Button>

        <Button size={"icon"} onClick={toggleDarkMode}>
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </Button>
      </div>
    </div>
  );
}
