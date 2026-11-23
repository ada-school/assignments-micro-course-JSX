import { charactersInformation } from "../data/charactersInformation";
import { CharacterCard } from "./CharacterCard";

export function CharacterList() {
  return (
    <div>
      {charactersInformation.map((character, index) => (
        <CharacterCard
          key={character.name ?? index}
          name={character.name}
          imageURL={character.imageURL}
        />
      ))}
    </div>
  );
}