import dummyMessages from "../../../fixture/messages";
import MessageGroup from ".";

export default {
	title: "Molcules/MessageGroup",
	component: [MessageGroup],
};

export const MessageListDefault = () => (
	<MessageGroup
		messages={dummyMessages.filter((message) => message.chatId === "2")}
		chatDate="2020년 1월 1일"
	/>
);
