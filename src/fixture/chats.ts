import Message from "../api/Message";
import { Chat } from "../types/schema";
import dummyMessages from "./messages";

const dummyChats: Chat[] = [
	{
		id: "1",
		name: "장만월 사장님",
		pictureId: "1",
		unreadMessageCount: 2,
		lastMessage: dummyMessages.filter((message) => message.chatId === "1")[0],
	},
	{
		id: "2",
		name: "신정근 바텐더",
		pictureId: "2",
		unreadMessageCount: 0,
		lastMessage: dummyMessages.filter((message) => message.chatId === "2")[0],
	},
	{
		id: "3",
		name: "이미라 의사",
		pictureId: "3",
		unreadMessageCount: 0,
		lastMessage: dummyMessages.filter((message) => message.chatId === "3")[0],
	},
	{
		id: "4",
		name: "구찬성 지배인",
		pictureId: "4",
		unreadMessageCount: 0,
		lastMessage: dummyMessages.filter((message) => message.chatId === "4")[0],
	},
	{
		id: "5",
		name: "노준성 총지배인",
		pictureId: "5",
		unreadMessageCount: 0,
		lastMessage: dummyMessages.filter((message) => message.chatId === "5")[0],
	},
	{
		id: "6",
		name: "김유나 인턴",
		pictureId: "6",
		unreadMessageCount: 0,
		lastMessage: dummyMessages.filter((message) => message.chatId === "6")[0],
	},
	{
		id: "7",
		name: "구현모",
		pictureId: "7",
		unreadMessageCount: 0,
		lastMessage: dummyMessages.filter((message) => message.chatId === "7")[0],
	},
];

export default dummyChats;
