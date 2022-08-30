import React, {MouseEvent, useState} from 'react';
import './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import styles from './App.module.css'
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';
import SelfControlledAccordion from './components/SelfControlledAccordion/SelfControlledAccordion';
import {InputTest} from './components/Input/InputTest';



function App() {
    // console.log('App rendering')


    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className={styles.wrapper}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <br/>
            <InputTest/>
            {/*<Accordion titleValue={'Lesson Dmitriy'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}

            {/*<OnOffMy on={switchOn} onChange={setSwitchOn}/>*/}

            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            {/*<SelfControlledAccordion titleValue={'Lesson Dmitriy'}/>*/}

            {/*<SelfControlledAccordion titleValue={'Users 2'}/>*/}
            {/*<MySelfControlledAccordion titleValue={'My homework'}/>*/}
            {/*<UncontrolledRating/>*/}


            {/*<OnOffMy on={true}/>*/}
            {/*<OnOffMy on={false}/>*/}
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
