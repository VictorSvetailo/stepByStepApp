import React, {useState} from 'react';
import styles from './OnOffMy.module.css'

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export function OnOffMy(props: PropsType) {
    // console.log('OnOffMy rendering')


    console.log('on:' + props.on)


    const onStyle = {
        width: '40px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white',
        color: '#333',
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        color: '#333',
        fontWeight: 700,
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'red',
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

            <button onClick={() => {
                props.onChange(true)
            }} style={onStyle}>On
            </button>
            <button onClick={() => {
                props.onChange(false)
            }} style={offStyle}>Off
            </button>

            <div style={indicatorStyle}></div>
            {/*<div className={styles.sensor_off}></div>*/}
        </div>
    );
};

