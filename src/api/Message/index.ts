import dummyMessages from "../../fixture/messages";
import { Message } from "../../types/schema";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const sleep = (value: number) =>
	new Promise((resolve) => setTimeout(resolve, value));

class MessageAPIs {
	getMessages = async (chatId: string) => {
		return new Promise<Message[]>((resolve, reject) => {
			setTimeout(
				() =>
					resolve(dummyMessages.filter((message) => message.chatId === chatId)),
				1000
			);
		});
	};
	uploadImage = async (
		file: File,
		onUploadProgress: ({
			loaded,
			total,
		}: {
			loaded: number;
			total: number;
		}) => void
	) => {
		// axios mocking
		let mock = new MockAdapter(axios);
		mock.onPost("/uploadImage").reply(async (config) => {
			const total = 1024; // mocked file size
			// 0.2ms당 10%씩 진행
			for (const progress of [
				0,
				0.1,
				0.2,
				0.3,
				0.4,
				0.5,
				0.6,
				0.7,
				0.8,
				0.9,
				1,
			]) {
				await sleep(200);
				if (config.onUploadProgress) {
					config.onUploadProgress({ loaded: total * progress, total });
				}
			}
			return [200, null];
		});

		const config = {
			onUploadProgress: onUploadProgress,
		};

		const data = await axios.post("/uploadImage", file, config);
		return data;
	};
}

export default new MessageAPIs();
