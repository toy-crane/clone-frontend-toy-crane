import { useQuery } from "react-query";
import { MessageAPIs } from "../api";
import { Message } from "../types/schema";

const useMessages = (chatId: string) => {
	return useQuery<Message[]>(["getMessages", chatId], () =>
		MessageAPIs.getMessages(chatId)
	);
};

export default useMessages;
