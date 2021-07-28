import { memo } from "react";
import useChatRoomHeader from "./hooks";
import View from "./view";

interface Props {
	chatId: string;
}

const ChatRoomHeader = ({ chatId }: Props) => {
	const { chat, goBack, slider, handleSlider, uploadImage } = useChatRoomHeader(
		chatId
	);
	return (
		<>
			{
				<View
					chatTitle={chat?.name}
					goBack={goBack}
					slider={slider}
					handleSlider={handleSlider}
					uploadImage={uploadImage}
				/>
			}
		</>
	);
};
export default memo(ChatRoomHeader);
