import Image from "next/image";
import { StyleListBank } from "./styles";
import IconSaque from "../../../../assets/saque-icon.svg";
import IconDeposito from "../../../../assets/deposito-icon.svg";
import IconTransf from "../../../../assets/transferencia-icon.svg";
import IconAtendimento from "../../../../assets/atendimento-icon.svg";

const listBank = [
  {
    icon: IconSaque,
    name: "Saques nos caixas da rede Banco24Horas",
    description:
      "São mais de 23 mil caixas em 680 municípios do Brasil. Saques ilimitados sem cobrança de tarifa.",
  },
  {
    icon: IconTransf,
    name: "Transferências e TEDs ilimitadas",
    description:
      "Movimente seu dinheiro para qualquer conta em qualquer banco sem pagar nada por isso.",
  },
  {
    icon: IconDeposito,
    name: "Depósito por boleto",
    description:
      "Emita boletos grátis e traga dinheiro para a sua conta C6 sem pagar tarifas.",
  },
  {
    icon: IconAtendimento,
    name: "Atendimento 24h",
    description:
      "Conte com a gente 24h por dia, 7 dias por semana pelo chat do app.",
  },
];

export function List() {
  return (
    <StyleListBank>
      {listBank.map(({ name, icon, description }) => {
        return (
          <li key={`social-${name}`}>
            <Image src={icon} alt={description} title={name} className="icon" />
            <span>{name}</span>
            <p>{description}</p>
          </li>
        );
      })}
    </StyleListBank>
  );
}
