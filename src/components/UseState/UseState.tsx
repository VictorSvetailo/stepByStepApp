import React, {useState} from 'react';



function generateData(){
    console.log('generate')
    return 342235235200
}


export const UseState = () => {
    console.log('Rerender UseState')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return (
        <div>
            <h2>counter</h2>

            <button onClick={()=>setCounter(changer)}>+</button>

            <span> --- {counter}</span>
        </div>
    );
};

export default UseState;