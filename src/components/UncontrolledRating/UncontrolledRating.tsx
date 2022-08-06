import React, {useState} from 'react';

type RatingPropsType = {
    // value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')

    let [value, setValue] = useState(0)


    const onClickStarHandler = (t: number)=>{
        setValue(value = t)
    }


    return (
        <div>
            <Star selected={value > 0}/> <button onClick={()=>onClickStarHandler(1)}>1</button>
            <Star selected={value > 1}/><button onClick={()=>onClickStarHandler(2)}>2</button>
            <Star selected={value > 2}/><button onClick={()=>onClickStarHandler(3)}>3</button>
            <Star selected={value > 3}/><button onClick={()=>onClickStarHandler(4)}>4</button>
            <Star selected={value > 4}/><button onClick={()=>onClickStarHandler(5)}>5</button>
            <br/>
            <div>
                <button onClick={()=>onClickStarHandler(0)}>remove</button>
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
}

function Star(props: StarPropsType) {
    // console.log('Star rendering')
    return(
        <span>{props.selected ? <span><b>star</b></span> : <span>star </span>}</span>
    )

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