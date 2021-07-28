import dummyChats from "../../fixture/chats";
import { Chat } from "../../types/schema";

class ChatAPIs {
	getChats = async () => {
		return new Promise<Chat[]>((resolve, reject) => {
			setTimeout(() => resolve(dummyChats), 1000);
		});
	};
	getChat = async (chatId: string) => {
		return new Promise<Chat>((resolve, reject) => {
			setTimeout(
				() => resolve(dummyChats.filter((chat) => chat.id === chatId)[0]),
				1000
			);
		});
	};
}

export default new ChatAPIs();
