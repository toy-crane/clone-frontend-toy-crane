import Message from ".";
import SampleImage from "../../../assets/attachmentImage/1.png";

export default {
	title: "Molcules/Message",
	component: [Message],
};

export const MessageIsNotMine = () => (
	<Message
		id="1"
		chatId="1"
		createdAt={new Date()}
		content="어딘데 출근 안하니?"
		isMine={false}
	></Message>
);

export const MessageIsMine = () => (
	<Message
		id="1"
		chatId="1"
		createdAt={new Date()}
		content="해외 출장중입니다."
		isMine={true}
	></Message>
);

export const MessageWithImage = () => {
	return (
		<Message
			id="1"
			chatId="1"
			createdAt={new Date()}
			src={SampleImage}
			isMine={true}
		></Message>
	);
};
