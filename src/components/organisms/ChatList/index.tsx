import useChats from "../../../hooks/useChats";
import View from "./view";

const ChatList = () => {
	const { status, data: chats } = useChats();
	return (
		<>
			{status === "loading" ? (
				<div>loading...</div>
			) : status === "error" ? (
				<div>Error가 발생하였습니다.</div>
			) : (
				chats && <View chats={chats} />
			)}
		</>
	);
};

export default ChatList;
