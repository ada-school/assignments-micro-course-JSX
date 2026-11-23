import "./App.css";
import { CharacterSection } from "./components/CharacterSection";
import { DetailMovie } from "./components/DetailMovie";
import { NavBar } from "./components/NavBar";

export function App() {
  return (
    <>
      <NavBar />
      <DetailMovie />
      <CharacterSection />
    </>
  );
}