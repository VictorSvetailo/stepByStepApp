import React, {useState} from 'react';
import styles from './UnControlledOnOff.module.css'

type PropsType = {
    onChange: (on: boolean) => void
}


export function UnControlledOnOff(props: PropsType) {
    let [on, setOn] = useState(false) // hook with init value

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }


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

    return (
        <div className={styles.block}>

            <button onClick={onClicked} style={onStyle}>On</button>
            <button onClick={offClicked} style={offStyle}>Off</button>

            <div style={indicatorStyle}></div>
        </div>
    );
};

