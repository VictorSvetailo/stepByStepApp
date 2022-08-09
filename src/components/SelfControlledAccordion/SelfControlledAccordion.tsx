import React, {useState} from 'react';


type AccordionPropsType = {
    titleValue: string
}

function SelfControlledAccordion(props: AccordionPropsType) {
    console.log('MySelfControlledAccordion rendering')

    let [collapsed, setCollapsed] = useState(false)

    const onClickCollapsedHandler = () =>{
        setCollapsed(!collapsed)
    }


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickCollapsedHandler}/>
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
    onClick: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log('AccordionTitle rendering')
    return (
        <div>
            <h3 onClick={()=>{props.onClick()}}> --- {props.title} ---</h3>
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

export default SelfControlledAccordion