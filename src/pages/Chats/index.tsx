import {
	ChatList,
	ChatListHeader,
	ChatListPageTemplate,
} from "../../components";

const Chats = () => (
	<ChatListPageTemplate
		chatList={<ChatList />}
		chatListHeader={<ChatListHeader />}
	/>
);
export default Chats;
