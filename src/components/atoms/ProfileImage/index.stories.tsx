import Avatar from ".";
import SampleImage1 from "../../../assets/chatPicture/1.png";
import SampleImage2 from "../../../assets/chatPicture/2.png";
import SampleImage3 from "../../../assets/chatPicture/3.png";
import SampleImage4 from "../../../assets/chatPicture/4.png";

export default {
	title: "Atoms/Avatar",
	component: [Avatar],
};

export const AvatarWithImage = () => (
	<div style={{ display: "flex" }}>
		<Avatar src={SampleImage1} />
		<Avatar src={SampleImage2} />
		<Avatar src={SampleImage3} />
		<Avatar src={SampleImage4} />
	</div>
);
