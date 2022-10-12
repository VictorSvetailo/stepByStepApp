import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';

type PropsType = {
    mode: 'digital' | 'analog'
}


export const ClockTeacher: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())


    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick + 1')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
           view = <DigitalClockView date={date}/>

    }

    return (
        <div>
            {view}
        </div>
    )
}


export type ClockViewPropsType = {
    date: Date
}

