import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	background: lightblue;
	
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	
	h1 {
		color: #023b92;
		font-size: 2rem;
	}
	.mui-cal {
		color: #023b92;
		font-size: 1rem;
		border-radius: 12px;
		margin: 1.6%;
	}
`;

export const Logo = styled.img`
	width: 10%;

	@media (max-width: 400px) {
		width: 25%
  }
`;

export const TitleBox = styled.div`
	background: #023b92;
	display: flex;
	align-items: center;
	padding-left: 1% ;

	h2 {
		color: white;
		font-size: 1rem;
	}
`;

export const Img = styled.img`
	height: 100%;
	width: 100%;
	object-position: center;
	object-fit: cover;
	box-sizing: border-box;
`;


