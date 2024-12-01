import { useState } from "react";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { Footer } from "../../components/Footer";
import heroMobileBanner from "../../assets/hero-mobile-banner.png";
import heroDesktopBanner from "../../assets/hero-desktop-banner.png";
import { Container, HeroSection, HeroContent } from "./styles";

export function Home() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsSideMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <Container>
      <Header onOpenMenu={handleOpenMenu} />
      <SideMenu isOpen={isSideMenuOpen} onClose={handleCloseMenu} />

      <HeroSection>
        <img
          src={heroMobileBanner}
          alt="Macarons coloridos empilhados com frutas e folhas ao redor"
          className="mobile-only"
        />
        <img
          src={heroDesktopBanner}
          alt="Macarons coloridos empilhados com frutas e folhas ao redor"
          className="desktop-only"
        />
        <HeroContent>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </HeroContent>
      </HeroSection>

      <Footer />
    </Container>
  );
}
