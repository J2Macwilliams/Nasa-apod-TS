import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import nasaLogo from "../logo.png";
import { Container, Header, Logo, TitleBox, Img } from "./Styled";

interface NasaNode {
	title: string;
	photo: string;
	hdurl: string;
}

// interface DateProps {
// 	date: 
// }

const NasaPhoto: React.FC = () => {
	const [nasa, setNasa] = useState<NasaNode>({ title: "", photo: "", hdurl: "" });

	const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
	
	const handleDateChange = (date: any ) => {
        var choice = date?.toISOString().slice(0, 10)
		setSelectedDate(choice);
	};

	useEffect(() => {
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=juqFK0XMHkuJYbg0mJM66eF31hMsRNrxhU2Mjhfo&date=${selectedDate}`
			)
			.then(response => {
				console.log("response", response);
				setNasa(response.data);
			});
	}, [selectedDate]);

	return (
		<>
			<Container>
				<Header>
					
						<Logo src={nasaLogo} className="logo" alt="Nasa's logo" />
						
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								margin="normal"
								id="date-picker-dialog"
								className="mui-cal"
								label="Date picker dialog"
								format="MM/dd/yyyy"
								value={selectedDate}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									"aria-label": "change date",
								}}
							/>
						</MuiPickersUtilsProvider>{" "}
					
				</Header>
				<TitleBox>
					<h2>{nasa.title}</h2>
				</TitleBox>
				<Img src={nasa.hdurl} />
			</Container>
		</>
	);
};

export default NasaPhoto;
