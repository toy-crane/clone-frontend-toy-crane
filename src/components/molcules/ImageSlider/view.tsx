import { Image as ImageType } from "../../../types/schema";
import Image from "../../atoms/Image";
import { memo } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-slider.css";

interface Props {
	images: ImageType[];
	width: string;
	handleClick: (src: string) => void;
}

const StyledImageSlider = styled(Slider)`
	margin-left: 16px;
	margin-bottom: 10px;
	z-index: 1;
`;

const ImageSlider = ({ images, width, handleClick, ...props }: Props) => {
	const settings = {
		className: "slider variable-width",
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		swipeToSlide: true,
		variableWidth: true,
	};
	return (
		<StyledImageSlider {...props} {...settings}>
			{images.map((image) => (
				<div style={{ width: 40 }}>
					<Image {...image} onClick={() => handleClick(image.src)}></Image>
				</div>
			))}
		</StyledImageSlider>
	);
};

export default memo(ImageSlider);
