import {Clock} from '../Clock';
import {WatchDial} from '../WatchDial/WatchDial';
import {useState} from 'react';


export default {
    title: 'Clock',
    component: Clock, WatchDial,
}


export const CombinedHours = () => {

    const [switcher, setSwitcher] = useState(true)

    return (
        <div>
            <button onClick={()=>{setSwitcher(!switcher)}}>switcher</button>
            <br/>
            <hr/>
            {switcher  && <Clock/>}
            {!switcher  && <WatchDial/>}

        </div>
    )
}