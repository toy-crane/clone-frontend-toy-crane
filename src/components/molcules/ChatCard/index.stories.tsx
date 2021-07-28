import ChatCard from ".";

export default {
	title: "Molcules/ChatCard",
	component: [ChatCard],
};

export const ChatCardDefault = () => (
	<ChatCard
		id="1"
		pictureId="1"
		name="장만월 사장님"
		unreadMessageCount={2}
		lastMessage={{
			content: "어딘데 출근 안하니?",
			createdAt: new Date(),
		}}
	/>
);

export const AllMessageRead = () => (
	<ChatCard
		id="1"
		pictureId="2"
		name="신정근 바텐더"
		unreadMessageCount={0}
		lastMessage={{
			content: "오시는 길에 와인 몇병만 사다주세요.",
			createdAt: new Date(),
		}}
	/>
);

export const SentMessageYesterDay = () => (
	<ChatCard
		id="3"
		pictureId="3"
		name="신정근 바텐더"
		unreadMessageCount={0}
		lastMessage={{
			content: "오시는 길에 와인 몇병만 사다주세요.",
			createdAt: new Date("2020-01-02"),
		}}
	/>
);
