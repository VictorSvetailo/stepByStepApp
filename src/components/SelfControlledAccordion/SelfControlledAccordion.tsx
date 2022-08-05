import React, {useState} from 'react';


type AccordionPropsType = {
    titleValue: string
}

function SelfControlledAccordion(props: AccordionPropsType) {
    console.log('SelfControlledAccordion rendering')

    // let test = ''

    // if (test) {
    //     console.log('remove')
    //     console.log(test)
    // }
    // if (test === false) {
    //     console.log('add')
    //     console.log(test)
    // }

    let [test, setTest] = useState('')



    const add = () => {
        console.log('add')
        let test = 'hello'
        setTest(test)

    }
    const remove = () => {
        console.log('remove')
        let test = ''
        setTest(test)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={add}>toggle</button>
            <button onClick={remove}>remove</button>
            <p>{test && <AccordionBody/>}</p>
        </div>
    )

}

// function Accordion2(props: AccordionPropsType) {
//
//     console.log('SelfControlledAccordion rendering')
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

export default SelfControlledAccordion