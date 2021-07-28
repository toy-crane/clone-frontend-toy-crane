import useMessages from "../../../hooks/useMessages";
import { useRecoilState } from "recoil";
import { uploadImageState } from "../../../store/atoms";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { MessageAPIs } from "../../../api";

interface IArgs {
	file: File;
}

const useMessageList = (chatId: string) => {
	// API를 통해서 받아온 데이터
	const { data: messages, status } = useMessages(chatId);

	// 업로드할 이미지 URL
	const [uploadImage, setUploadImage] = useRecoilState(uploadImageState);
	// 업로드 상태
	const [progress, setProgress] = useState<number>(0);
	const [cancelable, setCancelable] = useState<boolean>(true);

	const handleCancelUpload = () => setUploadImage(undefined);

	// Image upload mocking API
	const { mutate: uploadImageMutate } = useMutation<
		AxiosResponse<any>,
		AxiosError,
		IArgs
	>("uploadImage", (args) =>
		MessageAPIs.uploadImage(args.file, (progressEvent) => {
			const percentCompleted = Math.round(
				(progressEvent.loaded * 100) / progressEvent.total
			);
			if (percentCompleted <= 100) {
				setProgress(percentCompleted);
			}
			if (percentCompleted === 100) {
				setCancelable(false);
			}
		})
	);

	useEffect(() => {
		if (uploadImage) {
			setCancelable(true);
			uploadImageMutate({
				file: new File(["foo"], "123.jpg", {
					type: "image/png, image/jpeg",
				}),
			});
		}
		// 페이지 이동 시, upload 초기화
		return () => {
			if (uploadImage) {
				setUploadImage(undefined);
			}
		};
	}, [setUploadImage, uploadImage, uploadImageMutate]);

	return {
		messages,
		progress,
		cancelable,
		uploadImage,
		status,
		handleCancelUpload,
	};
};

export default useMessageList;
