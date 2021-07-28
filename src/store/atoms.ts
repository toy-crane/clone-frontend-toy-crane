import { atom } from "recoil";

const uploadImageState = atom<string | undefined>({
	key: "uploadImage",
	default: undefined,
});

export { uploadImageState };
