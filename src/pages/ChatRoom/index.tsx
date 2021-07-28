import { useParams } from "react-router-dom";
import {
	ChatRoomHeader,
	ChatRoomPageTemplate,
	MessageList,
	MessageInput,
} from "../../components";

const ChatRoom = () => {
	const { room_id: chatId } = useParams<{ room_id: string }>();
	return (
		<ChatRoomPageTemplate
			chatRoomHeader={<ChatRoomHeader chatId={chatId} />}
			messageList={<MessageList chatId={chatId} />}
			messageInput={<MessageInput submitMessage={() => console.log()} />}
		/>
	);
};
export default ChatRoom;
