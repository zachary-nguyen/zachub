import React from 'react';
import {Link} from 'react-router-dom';

const GoBack = () =>{

    return (
        <Link className={'goBack fa fa-arrow-left'} to={'/'}> Back </Link>
    )
};

export default GoBack;