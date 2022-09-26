import React, {MouseEvent} from 'react';
import {StateType} from './Reducer';



type AccordionPropsType = {
    titleValue: string
    state: any
    onChange: ()=>void
}






function Accordion(props: AccordionPropsType) {
    // console.log('MySelfControlledAccordion rendering')
    return (
        <div>
            <AccordionTitle onChange={props.onChange} title={props.titleValue}/>
            {props.state.collapsed && <AccordionBody/>}
        </div>
    )

}


type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onChange}>--- {props.title} ---</h3>
        </div>
    )
}

function AccordionBody() {
    // console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
        </div>
    )
}

export default Accordion