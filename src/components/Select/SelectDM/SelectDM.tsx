import React, {FC, useState, KeyboardEvent, useEffect} from 'react';
import './SelectDM.module.css'
import styles from './SelectDM.module.css'


export type ItemsDMType = {
    title: string
    value: any
}
export type SelectItemsDMType = {
    onChange: (value: any) => void
    itemsDM: ItemsDMType[]
    valueNew: number
}

export const SelectDM: FC<SelectItemsDMType> = (props) => {
    const [active, setActive] = useState(false)

    const [hoveredElement, setHoveredElement] = useState(props.valueNew)

    const onClickSwitchHandler = () => setActive(!active)


    useEffect(() => {
        setHoveredElement(props.valueNew);
    }, [props.valueNew])

    const selectedItem = props.itemsDM.find(i => i.value === props.valueNew)
    const hoveredItem = props.itemsDM.find(i => i.value === hoveredElement)
    console.log(selectedItem)

    const onItemClick = (value: any) => {

        props.onChange(value)

        onClickSwitchHandler()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.itemsDM.length; i++) {
                if (props.itemsDM[i].value === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.itemsDM[i + 1]
                        : props.itemsDM[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return

                    }
                    // setHoveredElement(props.itemsDM[i+1].value);
                }
            }
            if (!selectedItem) {
                props.onChange(props.itemsDM[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }


        console.log('press')
    }

    return (
        <div>
            <h2>Selected for Dimych</h2>
            <div className={styles.select}>
                <div tabIndex={0}
                     onKeyUp={onKeyUp}
                     className={styles.actual}
                     onClick={onClickSwitchHandler}>{selectedItem && selectedItem.title}</div>

                {
                    active &&
                    <div className={styles.items}>
                        {
                            props.itemsDM.map(i => <div
                                onMouseEnter={() => {
                                    setHoveredElement(i.value)
                                }}
                                className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                key={i.value}
                                onClick={() => {
                                    onItemClick(i.value)
                                    console.log(i.value)
                                }}>
                                {i.title}
                            </div>)}

                    </div>

                }

            </div>
        </div>
    );
};
