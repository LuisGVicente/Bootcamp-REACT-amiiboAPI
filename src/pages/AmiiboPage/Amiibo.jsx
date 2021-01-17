import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AmiibosGallery from './AmiibosGallery/AmiibosGallery';
import Search from './Search/Search';

let allAmiibos = [];

export default function Amiibo(){
    const [amiibos,setAmiibos] = useState([]);
    

    useEffect(() => {
        axios.get('https://www.amiiboapi.com/api/amiibo/').then(res => {
            setAmiibos(res.data.amiibo);
            allAmiibos = res.data.amiibo;

            }
        )
    },[]);

    const filterAmiibos = (filterValues) => {
        console.log(filterValues);
        const newAmiibos = allAmiibos.filter((cha) => cha.name.toLowerCase().includes(filterValues.name.toLowerCase()));
        setAmiibos(newAmiibos);
    }
    return (
        <>
        <Search fnFilterAmiibos={filterAmiibos}></Search>
        <AmiibosGallery amiibos={amiibos}></AmiibosGallery>
        </>
    )
}