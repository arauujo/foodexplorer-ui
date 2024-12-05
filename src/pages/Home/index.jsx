import { useState } from "react";
import { Header, SideMenu, MealCard, Footer } from "@components";
import heroMobileBanner from "@assets/hero-mobile-banner.png";
import heroDesktopBanner from "@assets/hero-desktop-banner.png";
import { Container, HeroSection, HeroContent, MealsSection } from "./styles";
import {  
  saladaMolla,
  saladaRavanello,
  spaguettiGambe,
  torradasParma,
} from "@assets/mealsTemp";

export function Home() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsSideMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsSideMenuOpen(false);
  };

  const meals = [
    {
      id: 1,
      name: "Salada Ravanello",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price: "49.97",
      imageUrl: saladaRavanello,
    },
    {
      id: 2,
      name: "Spaguetti Gambe",
      description: "Massa fresca com camarões e pesto",
      price: "79,97",
      imageUrl: spaguettiGambe,
    },
    {
      id: 3,
      name: "Torradas de Parma",
      description:
        "Presunto de parma e rúcula em um pão com fermentação natural",
      price: "25,97",
      imageUrl: torradasParma,
    },
    {
      id: 4,
      name: "Salada Molla",
      description: "Massa fresca com camarões e pesto.",
      price: "79,97",
      imageUrl: saladaMolla,
    },
  ];

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

      <MealsSection>
        <h2>Refeições</h2>
        <div className="meals-grid">
          {meals.map(meal => (
            <MealCard
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              imageUrl={meal.imageUrl}
            />
          ))}
        </div>
      </MealsSection>

      <Footer />
    </Container>
  );
}
