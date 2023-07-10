import React, { useState } from 'react';
function ColorTheme() {
    const [DarkMode, setDarkMode] = useState(false);
    const DarkModeToggle = () => {
        let titleJob = document.getElementById('title-job');
        if (DarkMode) {
            setDarkMode(false);
            document.getElementById('root').classList.remove('dark');
            if (titleJob) {
                titleJob.classList.remove('dark-title-job');
            }

            let button = document.querySelectorAll('.button-link a');
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove('dark');
            }
        } else {
            setDarkMode(true);
            document.getElementById('root').classList.add('dark');
            if (titleJob) {
                titleJob.classList.add('dark-title-job');
            }
            let button = document.querySelectorAll('.button-link a');
            for (let i = 0; i < button.length; i++) {
                button[i].classList.add('dark');
            }
        }
    };
    return (
        <>
            <button id="toggle" onClick={DarkModeToggle}>
                DarkMode
            </button>
        </>
    );
}
export default ColorTheme;
