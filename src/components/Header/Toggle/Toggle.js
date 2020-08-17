import React from 'react';
import { ToggleDiv } from './ToggleStyles';
import ToggleButton from './ToggleButton/ToggleButton'
import dark from '../../../styles/themes/dark'


const Toggle = ({setTheme, toggleTheme}) => {
    return (
        <ToggleDiv>
            <span>Dark Mode</span>
            <ToggleButton setTheme={setTheme} toggleTheme={toggleTheme} />
        </ToggleDiv>
    )
}

export default Toggle