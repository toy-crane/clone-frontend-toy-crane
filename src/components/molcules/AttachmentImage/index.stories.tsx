import AttachmentImage from ".";
import SampleImage from "../../../assets/attachmentImage/1.png";

export default {
	title: "Molcules/Attachment Image",
	component: [AttachmentImage],
};

export const DefaultAttachmentImage = () => (
	<AttachmentImage
		src={SampleImage}
		alt="샘플 이미지"
		width="200px"
		progress={50}
		cancelable={true}
	/>
);

export const AfterUploadedImage = () => (
	<AttachmentImage
		src={SampleImage}
		alt="샘플 이미지"
		width="200px"
		progress={100}
		cancelable={false}
	/>
);
