import React from "react";

export function Rating(props: any) {
    debugger
    console.log('Rating rendering')
    if (props.value === 1) {
        return (
            <div>
                <Title title={props.title}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>

        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Title title={props.title}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>

        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Title title={props.title}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>

        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Title title={props.title}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>

        )
    }
    if (props.value === 5) {
        return (
            <div>
                <Title title={props.title}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>

        )
    }
    return (
        <div>
            <Title title={props.title}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>

    )
}

function Title(props: any){
    debugger
    return(
        <h5>{props.title}</h5>
    )
}

function Star(props: any) {
    console.log('Star rendering')
    if (props.selected === true) {
        return (
            <span><b>star</b> </span>
        )
    } else {
        return (
            <span>star </span>
        )
    }
}