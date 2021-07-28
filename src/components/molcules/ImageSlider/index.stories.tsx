import ImageSlider from "./view";
import dummyImages from "../../../fixture/images";
import Container from "../../container";

export default {
	title: "Molcules/ImageSlider",
	component: [ImageSlider],
};

export const ChatListHeaderDefault = () => (
	<Container>
		<ImageSlider
			images={dummyImages}
			width="46px"
			handleClick={() => console.log("hello")}
		/>
	</Container>
);
