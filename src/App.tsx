import React, {MouseEvent} from 'react';
import './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/onOff/OnOff';
import styles from './App.module.css'
import SelfControlledAccordion from './components/SelfControlledAccordion/SelfControlledAccordion';



function App() {
    // console.log('App rendering')
    return (
        <div className={styles.wrapper}>
            <OnOff />
            <OnOff />
            <SelfControlledAccordion titleValue={'Menu 1'}/>
            <SelfControlledAccordion titleValue={'Users 2'}/>


            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<PageTitle title={'How are you?'}/>*/}
        </div>
    ); 
}

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     // console.log('PageTitle rendering')
//     return (
//         <div>
//             <h1>{props.title}</h1>
//         </div>
//     )
// }


export default App;
