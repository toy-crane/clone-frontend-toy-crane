import dummyMessages from "../../../fixture/messages";
import MessageList from "./view";
import SampleImage from "../../../assets/attachmentImage/1.png";

export default {
	title: "organisms/MessageList",
	component: [MessageList],
};

export const MessageListDefault = () => (
	<MessageList messages={dummyMessages} />
);

export const MessageListinUploadProgress = () => (
	<MessageList messages={dummyMessages} uploadImage={SampleImage} />
);
