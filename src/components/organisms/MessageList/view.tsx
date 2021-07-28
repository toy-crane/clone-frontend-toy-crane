import { memo } from "react";
import moment from "moment";
import styled from "styled-components";
import { Message as MessageType } from "../../../types/schema";
import { groupBy } from "lodash";
import MessageGroup from "../../molcules/MessageGroup";
import { useMemo } from "react";
import AttachmentImage from "../../molcules/AttachmentImage";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	& > div:not(:last-child) {
		margin-bottom: 16px;
	}
`;

interface Props {
	messages: MessageType[];
	uploadImage?: string;
	uploadCancelable?: boolean;
	uploadProgress?: number;
	handleCancelUpload?: () => void;
}

const StyledAttachmentImage = styled(AttachmentImage)`
	align-self: flex-end;
`;

const groupByMessages = (messages: MessageType[]) => {
	return groupBy(messages, (message) => moment(message.createdAt).format("LL"));
};

const MessageList = ({
	messages,
	uploadImage,
	uploadCancelable,
	uploadProgress,
	handleCancelUpload,
}: Props) => {
	const formattedMessage = useMemo(() => groupByMessages(messages), [messages]);
	return (
		<Wrapper>
			{Object.entries(formattedMessage).map(([date, messages]) => {
				return <MessageGroup messages={messages} chatDate={date} key={date} />;
			})}
			{uploadImage && (
				<StyledAttachmentImage
					src={uploadImage}
					alt="attachment Image"
					width="200px"
					cancelable={uploadCancelable}
					progress={uploadProgress}
					handleCancelUpload={handleCancelUpload}
				/>
			)}
		</Wrapper>
	);
};
export default memo(MessageList);
