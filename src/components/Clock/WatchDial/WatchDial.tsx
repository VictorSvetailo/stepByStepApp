import React, {FC, useEffect, useState} from 'react';


import {WatchDialInterFace} from './WatchDialInterFace';


type PropsType = {}

export const WatchDial: FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            // console.log('tick + 1')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])
    const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    const hourRatio = get2digitsString(date.getHours() / 12)
    const minuteRatio = get2digitsString(date.getMinutes() / 60)
    const secondRatio = get2digitsString(date.getSeconds() / 60)
    return (
        <WatchDialInterFace secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
    );
}


// export class ClockTwo extends Component {
//
//     state = {
//         secondRatio: 0,
//         minuteRatio: 0,
//         hourRatio: 0
//     }
//
//
//
//     componentDidMount () {
//         setInterval(() => {
//             this.setClock()
//         }, 1000);
//     }
//
//     setClock = () =>{
//         const currentDate = new Date;
//         let secondRatio = currentDate.getSeconds() / 60;
//         let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
//         let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
//         this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60})
//         this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60})
//         this.setState({hourRatio: hourRatio = (minuteRatio + currentDate.getHours()) / 12});
//
//
//     }
//
//
//     render(){
//         const {secondRatio, minuteRatio, hourRatio} = this.state
//         return (
//             <ClockTwoTwo secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
//         );
//     }
//
// }

