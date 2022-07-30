import React, {MouseEvent} from 'react';
import './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/onOff/OnOff';
import styles from './App.module.css'



function App() {
    // console.log('App rendering')
    return (
        <div className={styles.wrapper}>
            <OnOff/>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Accordion titleValue={'Menu 1'} collapsed={false}/>
            <Accordion titleValue={'Users 2'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            {/*<PageTitle title={'How are you?'}/>*/}
        </div>
    ); 
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    // console.log('PageTitle rendering')
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}


export default App;
