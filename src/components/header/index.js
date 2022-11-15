import Image from "next/image";
import Link from "next/link";

import { ContainerGrid } from "../../styles/global";
import { StyleHeader } from "./styles";

import LogoHeader from "../../assets/logo-header.svg";
import ArrowNav from "../../assets/nav-item.svg";

export function Header() {
  return (
    <StyleHeader>
      <ContainerGrid>
        <div className="logo">
          <Link href="/">
            <Image src={LogoHeader} alt="Logo C6Bank" title="Logo C6Bank" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <span>Para você</span>
                <Image
                  src={ArrowNav}
                  alt="seta para dropdown"
                  title="seta para dropdown"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <span>Para seu negócio</span>
                <Image
                  src={ArrowNav}
                  alt="seta para dropdown"
                  title="seta para dropdown"
                />
              </a>
            </li>
          </ul>
          <button>abra sua conta</button>
        </nav>
      </ContainerGrid>
    </StyleHeader>
  );
}
