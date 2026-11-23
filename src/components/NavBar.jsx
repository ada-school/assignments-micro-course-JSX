import { icon } from "../data/data";
import { ButtonNavigation } from "./ButtonNavigation";
import { Icon } from "./Icon";

export function NavBar() {
  return (
    <nav>
      <Icon imageURL={icon.imageURL} name={icon.name} />
      <ButtonNavigation text="Home" />
      <ButtonNavigation text="Characters" />
    </nav>
  );
}