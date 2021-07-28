import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import { useState } from "react";
import useChat from "../../../hooks/useChat";
import { useSetRecoilState } from "recoil";
import { uploadImageState } from "../../../store/atoms";

const useChatRoomHeader = (chatId: string) => {
	// chat 정보
	const { data: chat } = useChat(chatId);

	// slider on,off
	const [slider, showSlider] = useState<boolean>(false);
	const handleSlider = useCallback(() => showSlider((slider) => !slider), [
		showSlider,
	]);

	// 업로드할 이미지 선택하기
	const setUploadImage = useSetRecoilState(uploadImageState);
	const uploadImage = useCallback(
		(src: string) => {
			showSlider((slider) => !slider);
			setUploadImage(src);
		},
		[setUploadImage]
	);

	// history 관리
	const history = useHistory();
	// 페이지 이동 시, 이미지 파일 초기화
	const goBack = useCallback(() => {
		history.goBack();
	}, [history]);

	return { goBack, slider, chat, handleSlider, uploadImage };
};

export default useChatRoomHeader;
