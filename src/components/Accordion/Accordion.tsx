import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    // console.log('Accordion rendering')

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    )

}

// function Accordion2(props: AccordionPropsType) {
//
//     console.log('Accordion rendering')
//     if (props.collapsed) {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         )
//     }else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         )
//     }
//
// }


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log('AccordionTitle rendering')
    return (
        <div>
            <h3>--- {props.title} ---</h3>
        </div>
    )
}

function AccordionBody() {
    // console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default Accordion