import ChatRoomHeader from "./view";

export default {
	title: "Organisms/ChatRoomHeader",
	component: [ChatRoomHeader],
};

export const ChatListHeaderDefault = () => (
	<ChatRoomHeader
		chatTitle="장만월 사장님"
		goBack={() => console.log("hello")}
		handleSlider={() => console.log("hello")}
		uploadImage={() => console.log("hello")}
		slider={false}
	/>
);
