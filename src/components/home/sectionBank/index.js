import Image from "next/image";

import { ContainerGrid } from "../../../styles/global";
import { ButtonTop } from "./buttonTop";
import {
  StyleBottomContent,
  StyleSectionBank,
  StyleTopContent,
} from "./styles";

import IconPay from "../../../assets/aproxime-icon.svg";
import WhitePhone from "../../../assets/white-phone.png";
import BlackCard from "../../../assets/black-card.png";
import C6Business from "../../../assets/csbussiness.svg";

export function SectionBank() {
  return (
    <StyleSectionBank>
      <ContainerGrid>
        <StyleTopContent>
          <div className="left">
            <h2>Um banco completo</h2>
            <h3>com produtos exclusivos</h3>
          </div>
          <div className="right">
            <ButtonTop />
          </div>
        </StyleTopContent>
        <StyleBottomContent>
          <div className="text">
            <h2>Conta com cartão C6 Business</h2>
            <p>
              A conta MEI é completa e não tem tarifa de manutenção. Além disso,
              você pode ter um cartão de crédito sem anuidade.
            </p>
            <div className="pay">
              <div className="icon">
                <Image
                  src={IconPay}
                  title="icone baseado no estilo de transferência aproximação"
                  alt="icone baseado no estilo de transferência aproximação"
                />
              </div>
              <span>Aproxime e pague</span>
            </div>
          </div>
          <div className="images">
            <Image
              src={WhitePhone}
              title="Imagem telefone grande"
              alt="Imagem telefone grande"
              className="phone"
            />
            <Image
              src={BlackCard}
              title="Cartão Preto c6BANK"
              alt="Cartão Preto c6BANK"
              className="card"
            />
            <Image
              src={C6Business}
              title="Logo C6Business"
              alt="Logo C6Business"
              className="c6B"
            />
          </div>
        </StyleBottomContent>
      </ContainerGrid>
    </StyleSectionBank>
  );
}
