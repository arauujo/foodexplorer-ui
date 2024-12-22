import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MealCard } from "@components";
import { StyledSwiper } from "./styles";

export function MenuSwiper({ items }) {
  return (
    <StyledSwiper
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: "auto",
          spaceBetween: 16,
          loop: false,
        },
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 27,
        },
      }}
      navigation={true}
      modules={[Navigation]}
    >
      {items.map(item => (
        <SwiperSlide key={String(item.id)}>
          <MealCard
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}
