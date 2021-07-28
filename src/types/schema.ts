interface Message {
	id: string;
	createdAt: Date;
	content?: string;
	src?: string;
	isMine: boolean;
	chatId: string;
}

interface Image {
	id: string;
	src: string;
	alt: string;
}

interface Chat {
	id: string;
	name: string;
	pictureId: string;
	unreadMessageCount: number;
	lastMessage: Omit<Message, "chatId" | "isMine" | "id" | "src">;
}

export type { Message, Chat, Image };
