import { Image as ImageType } from "../../../types/schema";
import { memo } from "react";
import View from "./view";
interface Props {
	images: ImageType[];
	width: string;
	uploadImage: (src: string) => void;
}

const ImageSlider = ({ images, width, uploadImage, ...props }: Props) => {
	return (
		<View images={images} width={width} {...props} handleClick={uploadImage} />
	);
};

export default memo(ImageSlider);
