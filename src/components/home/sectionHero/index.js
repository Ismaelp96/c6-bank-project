import { ContainerGrid } from "../../../styles/global";
import { ContentText, StyleSectionHero } from "./styles";

export function SectionHero() {
  return (
    <StyleSectionHero>
      <ContainerGrid>
        <ContentText>
          <div className="top">
            <div className="icon">Novo</div>
            <span>Conheça nosso Programa de Pontos Átomos</span>
          </div>
          <h1>Um banco transparente, completo e com a sua cara</h1>
          <p>
            Conta digital e cartão de crédito gratuitos. Saques e transferências
            sem tarifa.
          </p>
          <button>nossos produtos</button>
        </ContentText>
      </ContainerGrid>
    </StyleSectionHero>
  );
}
