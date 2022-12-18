import React, {useEffect, useState} from 'react'
const Accueil = () => {

    const [titre, setTitre] = useState("");
    const [oeuvres, setOeuvres] = useState([]);
    var tipit = {};
    const [uneOeuvre, setUneOeuvre] = useState({})

    const appelApi = () => {
        fetch('https://www.donneesquebec.ca/recherche/dataset/3b475449-f7e0-4f68-b9e8-933dda1916d0/resource/6e08aa19-4653-411a-ab80-d97d4feaeba5/download/oeuvres-mac.json')
            .then((response) => response.json())

            .then((data) => {
                console.log(data);
                setOeuvres(data)
            });
    }

    useEffect(() => {
        appelApi();
    }, []);

    return (
        <div>


        </div>)
}
export default Accueil
