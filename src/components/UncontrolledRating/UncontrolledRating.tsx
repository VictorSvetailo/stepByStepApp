import React, {useState, MouseEvent} from 'react';

type RatingPropsType = {
    // value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [value, setValue] = useState(0)


    const onClickStarHandler = (t: number) => {
        setValue(value = t)
    }


    return (
        <div>
            <Star selected={value > 0} setValue={()=>{setValue(1)}}/>
            <Star selected={value > 1} setValue={()=>{setValue(2)}}/>
            <Star selected={value > 2} setValue={()=>{setValue(3)}}/>
            <Star selected={value > 3} setValue={()=>{setValue(4)}}/>
            <Star selected={value > 4} setValue={()=>{setValue(5)}}/>
            <br/>
            <div>
                <button onClick={() => onClickStarHandler(0)}>remove</button>
            </div>
        </div>

    )
}

// function Title(props: any){
//     debugger
//     return(
//         <h5>{props.title}</h5>
type StarPropsType = {
    selected: boolean
    setValue: ()=>void
}

function Star(props: StarPropsType) {
    const onClickSetValueHandler = (t: MouseEvent<HTMLSpanElement>) => {
        props.setValue()
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