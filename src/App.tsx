import React, {MouseEvent} from 'react';
import './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from './components/onOff/OnOff';
import styles from './App.module.css'
import SelfControlledAccordion from './components/SelfControlledAccordion/SelfControlledAccordion';
import MySelfControlledAccordion from './components/MySelfControlledAccordion/MySelfControlledAccordion';
import {OnOffMy} from './components/OnOffMy/OnOffMy';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';



function App() {
    // console.log('App rendering')
    return (
        <div className={styles.wrapper}>
            <OnOff />
            <br/>
            <OnOffMy />
            <SelfControlledAccordion titleValue={'Lesson Dmitriy'}/>
            {/*<SelfControlledAccordion titleValue={'Users 2'}/>*/}
            <MySelfControlledAccordion titleValue={'My homework'}/>
            <UncontrolledRating/>

            {/*<OnOffMy on={true}/>*/}
            {/*<OnOffMy on={false}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            {/*<UncontrolledRating value={0}/>*/}
            {/*<UncontrolledRating value={1}/>*/}
            {/*<UncontrolledRating value={2}/>*/}
            {/*<UncontrolledRating value={3}/>*/}
            {/*<UncontrolledRating value={4}/>*/}
            {/*<UncontrolledRating value={5}/>*/}
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
