import React from 'react';
import { ToggleDiv } from './ToggleStyles';
import ToggleButton from './ToggleButton/ToggleButton'
import dark from '../../../styles/themes/dark'


const Toggle = ({setTheme, toggleTheme}) => {
    return (
        <ToggleDiv onClick={() => setTheme(toggleTheme)}>
            <span>Dark Mode</span>
            <ToggleButton />
        </ToggleDiv>
    )
}

export default Toggle