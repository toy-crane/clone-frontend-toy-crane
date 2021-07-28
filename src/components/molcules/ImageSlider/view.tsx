import { Image as ImageType } from "../../../types/schema";
import Image from "../../atoms/Image";
import { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	& > img:not(:last-child) {
		margin-right: 10px;
	}
	overflow-x: hidden;
`;

interface Props {
	images: ImageType[];
	width: string;
	handleClick: (src: string) => void;
}

const ImageSlider = ({ images, width, handleClick, ...props }: Props) => {
	return (
		<Wrapper {...props}>
			{images.map((image) => (
				<Image
					width={width}
					onClick={() => handleClick(image.src)}
					{...image}
				></Image>
			))}
		</Wrapper>
	);
};

export default memo(ImageSlider);
