import React, {useState} from 'react';
import styles from './OnOff.module.css'

type PropsType = {
    ///on: boolean
}


export function OnOff(props: PropsType){
    // console.log('OnOff rendering')

         let [on, setOn] = useState(false) // hook with init value

    // console.log('on:' + on)






    const onStyle = {
        width: '40px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        color: '#333',
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        color: '#333',
        fontWeight: 700,
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'red',
    }

    // const onClickBtnOnHandler =()=>{
    //     console.log('ON')
    // }
    // const onClickBtnOffHandler =()=>{
    //     console.log('OFF')
    // }

    // let [green, setGreen] = useState('styles.btn_on')


    return (
        <div className={styles.block}>

            <button onClick={()=>{setOn(true)}} style={onStyle}>On</button>
            <button onClick={()=>{setOn(false)}} style={offStyle}>Off</button>

            <div style={indicatorStyle}></div>
            {/*<div className={styles.sensor_off}></div>*/}
        </div>
    );
};

