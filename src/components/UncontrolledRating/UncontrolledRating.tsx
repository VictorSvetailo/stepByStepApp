import React, {useState} from 'react';

type RatingPropsType = {
    // value: number
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')

    let [value, setValue] = useState(0)


    const onClickStarHandler = ()=>{

        setValue(value = 1)
    }


    return (
        <div>
            <Star selected={value > 0}/> <button onClick={onClickStarHandler}>1</button>
            <Star selected={value > 1}/><button>2</button>
            <Star selected={value > 2}/><button>3</button>
            <Star selected={value > 3}/><button>4</button>
            <Star selected={value > 4}/><button>5</button>
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

    if (props.selected) {
        return (
            <span><b>star</b> </span>
        )
    } else {
        return (
            <span>star </span>
        )
    }
}