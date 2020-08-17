import React, { useState } from 'react';
import { ToggleButtonDiv, ToggleCircleDiv } from './ToggleButtonStyles';

const ToggleButton = ({setTheme, toggleTheme}) => {
    const [state, setState] = useState(false)
    const lightActive = state ? "0" : "24px"

    return (
        <ToggleButtonDiv onClick={() => {setState(!state); setTheme(toggleTheme)}}>
            <ToggleCircleDiv rightMovement={lightActive}/>
        </ToggleButtonDiv>
    )
}

export default ToggleButton


