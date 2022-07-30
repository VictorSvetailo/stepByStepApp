import React, {useState} from 'react';
import styles from './OnOff.module.css'

// type BtnSwitcherType = {
//     btnOn: string
//     onClickOnHandler:(btnOn: string)=>void
// }


export const OnOff = () => {

    // let green = ''

    let [green, setGreen] = useState('styles.btn_on')

    const onClickOnHandler =()=>{
        setGreen(styles.btn_on)
    }

    return (
        <div className={styles.block}>
            <button onClick={onClickOnHandler}>On</button>
            <button className={styles.btn_off}>Off</button>
            <div className={styles.sensor_on}></div>
            <div className={styles.sensor_off}></div>
        </div>
    );
};

