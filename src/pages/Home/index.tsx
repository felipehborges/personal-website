import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      className={
        "h-screen overflow-x-hidden snap-y snap-mandatory overflow-scroll"
      }
    >
      <Navbar />

      <section className="snap-start h-screen flex flex-col gap-4 justify-center items-center dark:bg-zinc-900">
        <h1 className="font-bold text-2xl dark:text-zinc-100">LOREM IPSUM</h1>
        <p className="dark:text-zinc-100">{t("body.message")}</p>
      </section>

      <section className="snap-start h-screen flex flex-col gap-4 justify-center items-center dark:bg-zinc-900">
        <h1 className="font-bold text-2xl dark:text-zinc-100">LOREM IPSUM</h1>
        <p className="dark:text-zinc-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          officia alias voluptatem praesentium dicta mollitia adipisci ab quod
          ullam unde numquam incidunt dolorum veniam, quis reprehenderit
          voluptatibus esse itaque similique.
        </p>
      </section>

      <section className="snap-start h-screen flex flex-col gap-4 justify-center items-center dark:bg-zinc-900">
        <h1 className="font-bold text-2xl dark:text-zinc-100">LOREM IPSUM</h1>
        <p className="dark:text-zinc-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          officia alias voluptatem praesentium dicta mollitia adipisci ab quod
          ullam unde numquam incidunt dolorum veniam, quis reprehenderit
          voluptatibus esse itaque similique.
        </p>
      </section>
    </div>
  );
}
