'use client'

import './index.scss'
import {useState, useEffect} from 'react';

export default function TypingEffect({text = ''})
{
    const [value, setValue] = useState('')
    
    function nextText(textsIndex= 0, letterIndex = 1, growing = true)
    {
        setValue(text.substring(0, letterIndex))

        if (growing)
        {
            growing = text.length > letterIndex
            setTimeout(() => nextText(textsIndex, letterIndex + 1, growing), growing? 200: 500)
        }
        else if(letterIndex == 0)
        {
            growing = true
            text.length > textsIndex? textsIndex = 0: textsIndex++
            setTimeout(nextText(textsIndex, letterIndex, growing), 500)
        }
        else setTimeout(() => nextText(textsIndex, letterIndex - 1, growing), 100)
    }

    useEffect(() => {if (text) setTimeout(nextText)}, [])
    
    return (
        <div>
            <div>{value}<div className="cursor"> </div></div>
        </div>
    )
}