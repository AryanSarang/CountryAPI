import React from "react";


const Card = ({ props }) => {

    return (
        <div className="m-3 col-md-3  col-12 countryCard px-2 py-2 shadow">
            <img className="my-2 h-50" alt="country-flag" src={props.flags.svg} />
            <h3 className="my-2 fs-4 fw-bolder">{props.name.common}</h3>
            <h5 className="my-2 fs-5">Region: {props.region}</h5>
            <h5 className="my-2 fs-6">Languages: {props.languages && Object.values(props.languages).join(",")}</h5>
        </div>
    )
};

export default Card;
