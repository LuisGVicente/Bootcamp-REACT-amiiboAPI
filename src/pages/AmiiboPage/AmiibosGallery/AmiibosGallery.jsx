import React from 'react';
import './AmiibosGallery.scss';

export default function AmiibosGallery(props){



    return (
        <div className="c-amiibos-gallery">
        <div className="row">
            {props.amiibos.map((amiibo,index) => 
            <div className="col-4" key={index}>
                <figure className="c-amiibos-gallery_figure" >
                    <img className="c-amiibos-gallery_img" src={amiibo.image} alt=""/>
                <figcaption>{amiibo.name}</figcaption>
                </figure>
                </div>
            )}
            </div>
        </div>
    )
}