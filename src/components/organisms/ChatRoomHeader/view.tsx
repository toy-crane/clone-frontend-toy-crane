import { memo } from "react";
import styled from "styled-components";
import Icon from "../../atoms/Icon";
import ImageSlider from "../../molcules/ImageSlider";
import dummyImages from "../../../fixture/images";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.palette.primary};
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 44px;
	padding: 0px 12px;
`;

const Title = styled.div`
	font-weight: bold;
	color: ${({ theme }) => theme.palette.white};
	font-size: 17px;
	letter-spacing: -0.12px;
`;

const Navigation = styled.div`
	display: flex;
	& > img:not(:last-child) {
		margin-right: 17px;
	}
`;

const StyledImageSlider = styled(ImageSlider)`
	margin: 11px 0px 11px 16px;
	overflow-x: hidden;
`;

interface Props {
	chatTitle?: string;
	goBack: () => void;
	handleSlider: () => void;
	uploadImage: (src: string) => void;
	slider: boolean;
}

const ChatRoomHeader = ({
	chatTitle,
	goBack,
	handleSlider,
	slider,
	uploadImage,
}: Props) => {
	return (
		<Wrapper>
			<Header>
				<Icon name="chevronLeft" onClick={goBack} />
				<Title>{chatTitle}</Title>
				<Navigation>
					<Icon name="picture" onClick={handleSlider} />
					<Icon name="search" />
				</Navigation>
			</Header>
			{slider && (
				<StyledImageSlider
					images={dummyImages}
					width="46px"
					uploadImage={uploadImage}
				/>
			)}
		</Wrapper>
	);
};
export default memo(ChatRoomHeader);
