import { useQuery } from "react-query";
import { ChatAPIs } from "../api";
import { Chat } from "../types/schema";

const useChats = () => {
	return useQuery<Chat[]>("getChats", () => ChatAPIs.getChats());
};

export default useChats;
