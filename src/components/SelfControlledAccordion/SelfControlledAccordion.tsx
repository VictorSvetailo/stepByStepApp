import React, {useState} from 'react';


type AccordionType = {
    items: Array<AccordionItemsType>
    titleValue: string
    onClick: (value: any) => void
}


type AccordionItemsType = {
    item: string
    id: number
    value: any
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


function SelfControlledAccordion(props: AccordionType) {
    console.log('MySelfControlledAccordion rendering')

    let [collapsed, setCollapsed] = useState(false)

    const onClickCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={onClickCollapsedHandler}/>
            <p>{collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }</p>
        </div>
    )

}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log('AccordionTitle rendering')
    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
            }}> --- {props.title} ---</h3>
        </div>
    )
}


type AccordionItemsPropsType = {
    items: Array<AccordionItemsType>
    onClick: (value: any) => void
}


function AccordionBody(props: AccordionItemsPropsType) {
    return (
        <div>
            <ul>
                {
                    props.items.map((i) => {
                        return <li onClick={() => { props.onClick(i.value)
                        }} key={i.id}>{i.item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default SelfControlledAccordion