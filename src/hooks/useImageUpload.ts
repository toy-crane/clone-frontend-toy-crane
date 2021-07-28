import { useState } from "react";
import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { MessageAPIs } from "../api";

interface IArgs {
	file: File;
}

const useImageUpload = (src: string) => {
	const [progress, setProgress] = useState<number | undefined>(undefined);
	const [cancelable, setCancelable] = useState<boolean>(false);

	const mutation = useMutation<AxiosResponse<any>, AxiosError, IArgs>(
		"uploadImage",
		(args) =>
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
	return { ...mutation, progress, cancelable };
};

export default useImageUpload;
