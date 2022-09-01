import React, {FC, MouseEvent, FocusEvent, useState} from 'react';

import './select.css';


type SelectType = {
    // value: any
    onChangeSelect: (title: string) => void
    selectData: Array<SelectDataType>
    actualValueTitle: string
}

export type SelectDataType = {
    id: string
    title: string
    isDone: boolean
}


export const MySelect: FC<SelectType> = (props) => {

    //
    //
    const [visibility, setVisibility] = useState(false)


    let selectItems = props.selectData.map(si => {
        const onClickChangeActualValueHandler = (e: MouseEvent<HTMLInputElement>) => {
            props.onChangeSelect(si.title)
        }
        return <div key={si.id} onClick={onClickChangeActualValueHandler}>{si.title}</div>
    })


    const onClickActualValueHandler = (e: MouseEvent<HTMLInputElement>) => {
        if (visibility === true) {
            setVisibility(false)
        } else {
            setVisibility(true)
        }

    }

    const onBlurActualValueHandler = (e: FocusEvent<HTMLInputElement>) => {
        setTimeout(() => {
            console.log('now')
            setVisibility(false)
        }, 100)
    }


    return (
        <div >
            <div>
                <input onClick={onClickActualValueHandler} autoFocus value={props.actualValueTitle} onBlur={onBlurActualValueHandler}  className={'title_actual'}/>
                <hr/>
                {visibility ? <div>{selectItems}</div> : ''}
            </div>
        </div>
    );
};