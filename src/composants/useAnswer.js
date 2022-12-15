import {useEffect, useState} from "react";

const useAnswer = () => {
	const [answer, setAnswer] = useState();

	const getAnswer = async () => {
		const res = await fetch("https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json");
		const answer = await res.json();
		setAnswer(answer);
	};

	useEffect(() => {
		getAnswer();
	}, []);
	return answer;
};
export default useAnswer;