import {
  director,
  movieName,
  posterMovie,
  producer,
  realeseDate,
} from "../data/data";
import { AdditionalInformation } from "./AdditionalInformation";
import { ButtonNavigation } from "./ButtonNavigation";
import { Paragraph } from "./Paragraph";
import { Poster } from "./Poster";
import { TitleSection } from "./TitleSection";

export function DetailMovie() {
  return (
    <section>
      <ButtonNavigation text="Back" />
      <Poster imageURL={posterMovie.imageURL} name={posterMovie.name} />
      <TitleSection>{movieName}</TitleSection>
      <Paragraph>Grave of the Fireflies</Paragraph>
      <AdditionalInformation
        title={director.title}
        information={director.information}
      />
      <AdditionalInformation
        title={producer.title}
        information={producer.information}
      />
      <AdditionalInformation
        title={realeseDate.title}
        information={realeseDate.information}
      />
    </section>
  );
}