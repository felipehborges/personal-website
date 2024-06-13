import { useState } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
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
    <nav
      className={`${
        darkMode && "dark"
      } fixed justify-between text-black h-20 flex items-center px-10 top-0 left-0 right-0 dark:bg-zinc-600 bg-zinc-200`}
    >
      <a href="">Home</a>
      <a href="">About me</a>
      <a href="">Portfolio</a>
      <a href="">Contact</a>

      <div className="flex gap-2">
        <button onClick={toggleLanguage}>
          {language === "en" ? (
            <img
              src="/images/flag-brazil.png"
              alt="English"
              style={{ width: "30px", height: "30px" }}
            />
          ) : (
            <img
              src="/images/flag-uk.png"
              alt="English"
              style={{ width: "30px", height: "30px" }}
            />
          )}
        </button>

        <Button size={"icon"} onClick={toggleDarkMode}>
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </Button>

        <Button>{t("header.hireMe")}</Button>
      </div>
    </nav>
  );
}
