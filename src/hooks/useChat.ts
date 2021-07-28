import { useQuery } from "react-query";
import { ChatAPIs } from "../api";
import { Chat } from "../types/schema";

const useChat = (chatId: string) => {
	return useQuery<Chat>(["getChat", chatId], () => ChatAPIs.getChat(chatId));
};

export default useChat;
