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
import { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";
import CardDetails from "./CardDetails";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

// card slider component
function CardSlider({ cards }) {
  const [modal, setModal] = useState(false);
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [details, setDetails] = useState("");
  const [form, setForm] = useState(false);
  const [price, setPrice] = useState("");

  // Render modal of card details
  const handleCardClick = ({ id, title, src, details, price } = {}) => {
    setForm(false);
    setModal(!modal);
    setID(id);
    setTitle(title);
    setSrc(src);
    setDetails(details);
    setPrice(price);
  };

  // Render modal of form
  const formTrigger = (e, { title } = {}) => {
    console.log(title);
    e.stopPropagation();
    setForm(true);
    setModal(true);
    setTitle(title);
    console.log("btn clicked");
  };

  const sliders = cards.map((card) => {
    return (
      <SwiperSlide key={card.id} onClick={() => handleCardClick(card)}>
        <img src={card.src} alt="img" />
        <h3>{card.title}</h3>
        <button
          className="btn detials"
          onClick={(e) => formTrigger(e, card)}
        >
          Request now
        </button>
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
        <Modal
          id={id}
          title={title}
          form={form}
          src={src}
          show={modal}
          close={handleCardClick}
        >
          {form ? (
            <Form />
          ) : (
            <CardDetails header={title} price={price} openForm={formTrigger}>
              <div>
                <img src={src} alt="img details" />
              </div>
              <div>
                <p>{details}</p>
              </div>
            </CardDetails>
          )}
        </Modal>
      </Swiper>
    </>
  );
}

//  full screen Slider component.
function Slider({ sliders }) {
  const slidersFul = sliders.map((slider, idx) => {
    const style = {
      backgroundImage: `linear-gradient(to bottom ,rgba(81, 144, 81, 0.3), rgba(81, 144, 81, 0.5)), 
      url(/imgs/${slider})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    };

    return <SwiperSlide key={idx} style={style} />;
  });

  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        className="swiperFullSc"
      >
        {slidersFul}
        <h3>we satisfy your need</h3>
      </Swiper>
    </>
  );
}

export { Slider as default, CardSlider };
