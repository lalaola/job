import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
            <div className="card mb-4">
                <div className="card-header">
                    {props.title}
                </div>
                <div className="card-body d-flex">
                    <div className="col-md-6">
                        <blockquote className="blockquote mb-0">
                            <p>{props.company}.</p>
                            <p>{props.type}.</p>
                            <footer className="blockquote-footer"><NavLink to={`/detail/${props.id}`} >Information Detail</NavLink> || <a>Goto Job</a></footer>
                        </blockquote>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        {props.location}

                    </div>
                </div>
            </div>
    );
}

export default Card;
