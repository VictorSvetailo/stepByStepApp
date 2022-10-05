import React, {useReducer, useState} from 'react';
import './App.module.css';
import Accordion from './components/Accordion/Accordion';
import styles from './App.module.css'
import {RatingValueType} from './components/Rating/Rating';
import {MySelect, SelectDataType} from './components/Select/MySelect/MySelect';
import {v1} from 'uuid';
import {ItemsDMType, SelectDM} from './components/Select/SelectDM/SelectDM';
import {reducer, TOGGLE_COLLAPSED} from './components/Accordion/Reducer';
import {UseMemoTest} from './components/UseMemo/UseMemo';


function App() {

    console.log('Render App')

    // let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    console.log(state)


    const selectData: Array<SelectDataType> = [
        {id: v1(), title: 'none', isDone: false},
        {id: v1(), title: 'Moscow', isDone: false},
        {id: v1(), title: 'Essentuky', isDone: false},
        {id: v1(), title: 'Kiev', isDone: false},
        {id: v1(), title: 'Minsk', isDone: false},
    ]

    const [actualValueTitle, setActualValueTitle] = useState(selectData[0].title)
    const onChangeSelect = (title: string) => {
        setActualValueTitle(title)
    }


    const [valueNew, setValueNew] = useState(1)

    const onChange = (value: any) => {
        setValueNew(value)
    }

    const itemsDM: ItemsDMType[] = [
        {value: 1, title: 'none'},
        {value: 2, title: 'Moscow'},
        {value: 3, title: 'Essentuky'},
        {value: 4, title: 'Kiev'},
        {value: 5, title: 'Minsk'},
    ]

    // console.log('App rendering')


    let [ratingValue, setRatingValue] = useState<RatingValueType>(1)

    let [switchOn, setSwitchOn] = useState<boolean>(false)


    // const items = [
    //     {id: 1, item: 'Victor', value: ''},
    //     {id: 2, item: 'Dima', value: ''},
    //     {id: 3, item: 'Sveta', value: ''},
    // ]

    const onClick = () => {

    }


    return (

        <div className={styles.wrapper}>
            <UseMemoTest/>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            <br/>

            <MySelect onChangeSelect={onChangeSelect} actualValueTitle={actualValueTitle} selectData={selectData}/>
            <SelectDM valueNew={valueNew} onChange={onChange} itemsDM={itemsDM}/>
            {/*<InputTest/>*/}
            {/*<Accordion titleValue={'Lesson Dmitriy'} collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            <Accordion titleValue={'Lesson Dmitriy'}
                       state={state}
                       onChange={() => {
                           dispatch({type: TOGGLE_COLLAPSED})
                       }}/>

            {/*<OnOffMy on={switchOn} onChange={setSwitchOn}/>*/}

            {/*<UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            {/*<SelfControlledAccordion titleValue={'Lesson Dmitriy'} items={items}  onClick={onClick}/>*/}

            {/*<SelfControlledAccordion titleValue={'Users 2'}/>*/}
            {/*<MySelfControlledAccordion titleValue={'My homework'}/>*/}
            {/*<UncontrolledRating/>*/}


            {/*<OnOffMy on={true}/>*/}
            {/*<OnOffMy on={false}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<PageTitle title={'How are you?'}/>*/}
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     // console.log('PageTitle rendering')
//     return (
//         <div>
//             <h1>{props.title}</h1>
//         </div>
//     )
// }


export default App;
