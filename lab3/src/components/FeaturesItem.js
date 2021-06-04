import React from 'react';
import {Link} from 'react-router-dom';
function FeaturesItem(props){
    return(
        <>
            <li className="features__item">
                <Link className="features__item__link" to={props.path}>
                    <figure className="features__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Apartments" className="features__item__img"/>
                    </figure>
                    <div className="features__item__info">
                        <h5 className="features__item__text">
                            {props.text}
                        </h5>
                        <p>{props.info}</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default FeaturesItem;