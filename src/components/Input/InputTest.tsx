import React, {useState, MouseEvent, useRef, ChangeEvent} from 'react';

export const InputTest = () => {

    let [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        let elem = inputRef.current as HTMLInputElement
        setValue(elem.value)
    }


    let [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    let [checkedStatus, setCheckedStatus] = useState(false)
    const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedStatus(e.currentTarget.checked)
    }

    let [selectStatus, setSelectStatus] = useState<string>('2')
    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectStatus(e.currentTarget.value)
    }
    return (
        <div>
            <hr/>
            <h1>Hello im Input</h1>
            <hr/>
            <br/>
            <div>
                <input ref={inputRef}/>
                <button onClick={onClickHandler}>save</button>
                <span> - actual value - {value} </span>
            </div>
            <hr/>
            <div>
                <h5>Lesson 13</h5>
                <input value={parentValue} onChange={onChangeHandler}/>
            </div>
            <br/>
            <hr/>
              <div className={'CheckBox'}>
                  <input type={'checkbox'} checked={checkedStatus} onChange={onChangeCheckBoxHandler}/>
              </div>
            <hr/>
            <hr/>
            <div className={'select'}>
                <select value={selectStatus} onChange={onChangeSelectHandler}>
                    <option>none</option>
                    <option value={'1'}>Moscow</option>
                    <option value={'2'}>Essentuky</option>
                    <option value={'3'}>Kiev</option>
                    <option value={'4'}>Minsk</option>
                </select>
            </div>
            <hr/>
        </div>
    );
};

