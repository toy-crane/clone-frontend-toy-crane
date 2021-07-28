import dummyChats from "../../../fixture/chats";
import ChatList from "./view";

export default {
	title: "organisms/ChatList",
	component: [ChatList],
};

export const ChatListDefault = () => <ChatList chats={dummyChats} />;
