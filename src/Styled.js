import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background-image: url(${(props) => props.img});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const Header = styled.div`
	background: lightblue;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;

	h2 {
		color: #023b92;
		font-size: 2rem;

		@media (max-width: 415px) {
			font-size: 0;
		}
	}
	.mui-cal {
		color: white;
		font-size: 1rem;
		border-radius: 12px;
		margin: 1.6%;
	}
`;

export const Logo = styled.img`
	width: 5%;

	@media (max-width: 415px) {
		width: 25%;
	}
`;

export const TitleBox = styled.div`
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background: white;
	display: flex;
	align-items: center;
	padding-left: 1%;

	h2 {
		color: #023b92;
		font-size: 1rem;
	}
`;
export const ImgBox = styled.div`
	height: 100%;
`;
export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-position: center;
	object-fit: cover;
	box-sizing: border-box;
`;
