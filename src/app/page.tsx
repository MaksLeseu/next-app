import s from "./page.module.css";
import CharactersLink from "@/components/CharactersLink";
import LocationsLink from "@/components/LocationsLink";
import EpisodesLink from "@/components/EpisodesLink";

export default function Home() {
  return (
    <main className={s.main}>
      <div className={s.title}>
          The main page
      </div>
        <div className={s.linkContainer}>
            <CharactersLink />
            <LocationsLink />
            <EpisodesLink />
        </div>
    </main>
  );
}
