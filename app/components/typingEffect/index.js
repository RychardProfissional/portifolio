'use client'

import './index.scss'
import React from 'react';

export default function typingEffect({text = ''})
{
    const [value, setValue] = React.useState('')

    function nextText(textsIndex= 0, letterIndex = 1, growing = true)
    {
        setValue(text.substring(0, letterIndex))

        if (growing)
        {
            if (text.length < letterIndex) growing = false
            setTimeout(() => nextText(textsIndex, letterIndex + 1, growing), 200)
        }
        else if(letterIndex == 0)
        {
            growing = true
            text.length > textsIndex? textsIndex = 0: textsIndex++
            setTimeout(nextText(textsIndex, letterIndex, growing), 400)
        }
        else setTimeout(() => nextText(textsIndex, letterIndex - 1, growing), 100)
    }

    React.useEffect(() => {if (text) setTimeout(()=> nextText(), 1000)}, [])
    
    return (
        <div>
            <div>{value}<div className="cursor"> </div></div>
        </div>
    )
}