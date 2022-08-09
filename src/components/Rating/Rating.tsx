import React, {useState, MouseEvent} from 'react';

export type RatingValueType = 0 |1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value:  RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    // let [value, setValue] = useState(0)


    // const onClickStarHandler = (t: number) => {
    //     setValue(value = t)
    // }


    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
            <br/>
            <div>
                {/*<button onClick={() => onClickStarHandler(0)}>remove</button>*/}
            </div>
        </div>

    )
}

// function Title(props: any){
//     debugger
//     return(
//         <h5>{props.title}</h5>
//     )
// }

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
    // setValue: (value: 1 | 2 | 3 | 4 | 5 )=>void
}

function Star(props: StarPropsType) {
    const onClickSetValueHandler = (t: MouseEvent<HTMLSpanElement>) => {
       props.onClick(props.value)
    }
    // console.log('Star rendering')
    // return props.selected ? <span><b>star</b></span> : <span>star </span>
    return <span onClick={onClickSetValueHandler}>
        {props.selected ? <b>star </b> : 'star '}
    </span>


    // if (test) {
    //     return (
    //         <span><b>star</b> </span>
    //     )
    // } else {
    //     return (
    //         <span>star </span>
    //     )
    // }
}