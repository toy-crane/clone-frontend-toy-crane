import View from "./view";
import useMessageList from "./hooks";

interface Props {
	chatId: string;
}

const MessageList = ({ chatId }: Props) => {
	const {
		messages,
		cancelable: uploadCancelable,
		progress: uploadProgress,
		uploadImage,
		status,
		handleCancelUpload,
	} = useMessageList(chatId);
	return (
		<>
			{status === "loading" ? (
				<div>Loading...</div>
			) : status === "error" ? (
				<div>에러가 발생하였습니다.</div>
			) : (
				<>
					{messages && (
						<View
							messages={messages}
							uploadImage={uploadImage}
							uploadCancelable={uploadCancelable}
							uploadProgress={uploadProgress}
							handleCancelUpload={handleCancelUpload}
						/>
					)}
				</>
			)}
		</>
	);
};
export default MessageList;
