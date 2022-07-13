import React, {useState} from 'react'
import {ReactComponent as Light} from '../../icons/sun.svg'
import {ReactComponent as Dark} from '../../icons/moon.svg'


function DarkModeToggle() {

    const [theme, toggleTheme]  = useState(true)

    const changetheme = () => {
        toggleTheme(!theme)
        const className = 'dark';
        const bodyClass = window.document.body.classList;
        theme ? bodyClass.add(className) : bodyClass.remove(className);
        console.log(theme);
    }

    return (
        <div>
             <div onClick = {changetheme} className="cursor-pointer pr-4">
                {theme ? <Dark className = "fill-current" /> :  <Light className = "fill-current" /> }
            </div>
        </div>
    )
}

export default DarkModeToggle