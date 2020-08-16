import React from 'react';
import { ToggleDiv } from './ToggleStyles';
import ToggleButton from './ToggleButton/ToggleButton'


const Toggle = () => {
    return (
        <ToggleDiv>
            <span>Dark Mode</span>
            <ToggleButton />
        </ToggleDiv>
    )
}

export default Toggle