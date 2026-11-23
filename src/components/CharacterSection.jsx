import { currentTitles } from "../data/data";
import { CharacterList } from "./CharacterList";
import { CustomButton } from "./CustomButton";
import { InputSearch } from "./InputSearch";
import { Paragraph } from "./Paragraph";
import { TitleSection } from "./TitleSection";

export function CharacterSection() {
  return (
    <section>
      <TitleSection>Characters</TitleSection>
      <Paragraph>{`Showing ${currentTitles} titles`}</Paragraph>
      <InputSearch placeholder="Search character..." />
      <CustomButton>Search</CustomButton>
      <CustomButton>Previous</CustomButton>
      <CustomButton>Next</CustomButton>
      <CharacterList />
    </section>
  );
}