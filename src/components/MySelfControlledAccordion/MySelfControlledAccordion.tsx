import React, {useState} from 'react';


type AccordionPropsType = {
    titleValue: string
}

function MySelfControlledAccordion(props: AccordionPropsType) {
    // console.log('MySelfControlledAccordion rendering')



    let [collapsed, setCollapsed] = useState(false)



    const onClickToggleHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={onClickToggleHandler}>ToggleMy</button>
            <p>{collapsed && <AccordionBody/>}</p>
        </div>
    )

}

// function Accordion2(props: AccordionPropsType) {
//
//     console.log('MySelfControlledAccordion rendering')
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

export default MySelfControlledAccordion