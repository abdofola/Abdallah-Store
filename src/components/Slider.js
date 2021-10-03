import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

function CardSlider({ products }) {
  
  const sliders = products?.map((product) => {
    return (
      <SwiperSlide key={product.id}>
        <Link to={`/products/${product.id}`}>
          <h4>
            {product.name.length > 15
              ? product.name.substring(0, 15).trim() + "..."
              : product.name}
          </h4>
          <img src={product.image_path} alt="img" />
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={{ clickable: true }}
        className="swiperCard"
      >
        {sliders}
      </Swiper>
    </>
  );
}

export default CardSlider;
