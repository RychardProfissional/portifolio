'use client'

import './index.scss'
import {useState, useEffect} from 'react';

export default function TypingEffect({texts = [''], speeds = {writing: 0, respire: 0}, className = ""})
{
    const [value, setValue] = useState('')
    const [animation, setAnimation] = useState('')
    
    function nextText(textsIndex= 0, letterIndex = 1, growing = true)
    {
        let text = texts[textsIndex];
        setValue(text.substring(0, letterIndex))
        if (growing)
        {
            growing = text.length > letterIndex
            setTimeout(() => nextText(textsIndex, letterIndex + 1, growing), growing? speeds.writing || 200: speeds.respire || 1000)
            setAnimation(growing? "":"blink")
        }
        else if(letterIndex == 0)
        {
            growing = true
            textsIndex = texts.length -1 <= textsIndex? 0: textsIndex + 1

            setTimeout(nextText(textsIndex, letterIndex, growing), 500)
        }
        else 
        {
            setAnimation("")
            setTimeout(() => nextText(textsIndex, letterIndex - 1, growing), 100)
        }
    }

    useEffect(() => { if (texts.length) setTimeout(nextText)}, [])
    
    return (
        <div className={className + " typed-text " + animation}>{value}</div>
    )
}