import Image from "next/image";
import { ContainerGrid } from "../../../styles/global";
import { ContentList, StyleCardRight, StyleSectionCards } from "./styles";

import Cards from "../../../assets/cards.png";
import { List } from "./listBank";

export function SectionCards() {
  return (
    <StyleSectionCards>
      <ContainerGrid>
        <ContentList>
          <div className="top">
            <h2>Sem tarifas:</h2>
            <h3>economize seu dinheiro</h3>
          </div>
          <div className="contentBank"></div>
          <List />
        </ContentList>
        <StyleCardRight>
          <Image
            src={Cards}
            alt="Conjunto de cartões"
            title="Conjunto de cartões"
          />
        </StyleCardRight>
      </ContainerGrid>
    </StyleSectionCards>
  );
}
