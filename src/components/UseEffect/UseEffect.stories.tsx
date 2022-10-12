import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo',
}

export const UseEffect = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('Rerender UseEffect')


    useEffect(() => {
        console.log('useEffect - VS')

        document.title = counter.toString()

    }, [counter])


    return (
        <div>
            <h2>Hello , {counter} - {fake}</h2>
            <button onClick={() => setFake(fake + 1)}>+</button>
        </div>
    );
};


export const MyWatch = () => {

    const [dateNow, setDate] = useState(getTime())

    console.log('Rerender SetTimeoutExample')

    useEffect(() => {
        console.log('tick')
        setInterval(() => {
            setDate(getTime())
        }, 1000)

    }, [])


    function getTime() {
        let date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();
        // hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        // minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        // seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        return {hours, minutes, seconds}
    }


    return (
        <div>
            <p>{`${dateNow.hours}:${dateNow.minutes}:${dateNow.seconds}`}</p>
            <hr/>
        </div>
    );
};


export const ResetEffectExample = () => {
    // const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('Rerender component + VS')


    useEffect(() => {
        console.log('Effect - occurred')

        return () => {
            console.log('RESET EFFECT ' + counter)
        }
    }, [counter])


    return (
        <div>
            <h2>Hello , {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};


export const OnKeyTrackerExample = () => {
    const [text, setText] = useState('')

    // console.log('Rerender component + VS')


    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText(text + e.key)
            }

        // const handler = (e: KeyboardEvent) => {
        //     console.log(e.key)
        //     setText((state) => text + e.key)
        // }

        console.log('Effect - occurred')
        window.addEventListener('keypress', handler)
        return () => {
            //console.log('RESET addEventListener ')
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return (
        <div>
            <h2>Typed text ,{text}</h2>
        </div>
    );
};


export const SetTimeoutExample = () => {
    const [text, setText] = useState('')



    useEffect(() => {
        console.log('tick')
       const timeoutID = setTimeout(() => {
           console.log('отрисовка')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutID)
        }
    }, [text])


    return (
        <div>
            <h2>Typed text ,{text}</h2>
        </div>
    );
};


export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1)

    useEffect(() => {
       const intervalID =  setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }

    }, [])


    return (
        <div>
            Hello, counter: {counter}
        </div>
    );
};
