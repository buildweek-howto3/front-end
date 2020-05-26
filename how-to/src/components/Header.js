import React, {useState} from 'react';
import styled from 'styled-components';

import SearchHowTo from './SearchHowTo'

// STYLING ************


// CODE *********

const Header = () => {

    return (
        <div>
            <div>Title</div>
            <SearchHowTo />
            <div> Nav </div>
        </div>
    )
}

export default Header