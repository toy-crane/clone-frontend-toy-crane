import MessageInput from ".";

export default {
	title: "Molcules/MessageInput",
	component: [MessageInput],
};

export const MessageInputDefault = () => (
	<MessageInput
		submitMessage={(message) => console.log("메시지를 전송합니다", message)}
	></MessageInput>
);
