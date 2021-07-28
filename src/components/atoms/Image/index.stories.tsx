import Image from ".";
import sampleImage1 from "../../../assets/attachmentImage/1.png";
import sampleImage2 from "../../../assets/attachmentImage/2.png";

export default {
	title: "Atoms/Image",
	component: [Image],
};

export const DefaultImage = () => (
	<>
		<Image src={sampleImage2} alt="샘플 이미지2" />
		<Image src={sampleImage1} alt="샘플 이미지1" width="200px" />
	</>
);

export const ImageWithOnClick = () => {
	const onClick = (e: any) => {
		console.log(e.target?.src);
	};
	return <Image src={sampleImage1} onClick={onClick} alt="샘플 이미지2" />;
};
