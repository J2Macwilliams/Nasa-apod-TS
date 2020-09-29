import React, { useState, useEffect } from "react";
import axios from "axios";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import nasaLogo from "../logo.png";
import { Container, Header, Logo, TitleBox } from "../Styled";

interface NasaNode {
	title: string;
	photo: string;
	hdurl: string;
}

const NasaPhoto: React.FC = () => {
	const [nasa, setNasa] = useState<NasaNode>({ title: "", photo: "", hdurl: "" });
	const [selectedDate, setSelectedDate] = useState<any>(new Date());
	var chosen = selectedDate.toISOString().slice(0,10);
	
	const handleDateChange = (date: any) => {
		setSelectedDate(date);
	};

	useEffect(() => {
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=juqFK0XMHkuJYbg0mJM66eF31hMsRNrxhU2Mjhfo&date=${chosen}`
			)
			.then((response) => {
				setNasa(response.data);
			});
	}, [chosen]);

	return (
		<>
			<Container img={nasa.hdurl}>
				<Header>
					<Logo src={nasaLogo} className='logo' alt="Nasa's logo" />
					<h2>Photo of the Day</h2>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							margin='normal'
							id='date-picker-dialog'
							className='mui-cal'
							label='Date picker dialog'
							format='MM/dd/yyyy'
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</MuiPickersUtilsProvider>
				</Header>
				<TitleBox>
					<h2>{nasa.title}</h2>
				</TitleBox>
			</Container>
		</>
	);
};

export default NasaPhoto;
