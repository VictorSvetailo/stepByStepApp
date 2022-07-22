import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./Rating/Rating";


function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Accordion title={'Меню номер 1'}/>
            <Accordion title={'Меню номер 2'}/>
            <Rating title={'Article #0'} value={0}/>
            <Rating title={'Article #1'} value={1}/>
            <Rating title={'Article #2'} value={2}/>
            <Rating title={'Article #3'} value={3}/>
            <Rating title={'Article #4'} value={4}/>
            <Rating title={'Article #5'} value={5}/>
            <PageTitle title={'How are you?'}/>
        </div>
    ); 
}

function PageTitle(props: any) {
    console.log('PageTitle rendering')
    debugger
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}


export default App;
