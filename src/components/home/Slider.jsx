import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";

//  IMPORT IMAGE
import imageOne from "../../img/house1.jpg";
import imageTwo from "../../img/house2.jpg";

function SliderComponent() {
  var settings = {
    // dots: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <GrNext />,
    // prevArrow: <GrPrevious />,
  };

  return (
    <>
      <SliderSection {...settings}>
        <SliderContent>
          <Image src={imageOne} />
          <SliderOverlay>
            <h4>Radisson blue Hotel Niamey</h4>
            <p>2900$</p>
            <Button>
              <BtnLink to="">View Home</BtnLink>
            </Button>
          </SliderOverlay>
        </SliderContent>
      </SliderSection>
    </>
  );
}

const SliderSection = styled(Slider)`
  width: 100%;
  height: 100vh;
  /* background: red; */
  /* display: flex; */
  /* background-image: url(); */
`;

const SliderContent = styled.div`
  width: 100%;

  /* display: flex;
    justify-content: center;
    align-items: center; */
`;
const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const SliderOverlay = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;

  h4 {
    color: #fff;
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 6px 1px 0px #000000;
  }
  p {
    color: #fff;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    text-shadow: 6px 1px 0px #000000;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`;

const Button = styled.div`
  
`;

const BtnLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    border-radius: 0.5rem;
  background: #000;
  padding: 0.8rem 1rem;
`

export default SliderComponent;
