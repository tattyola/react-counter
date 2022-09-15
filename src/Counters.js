import {useState} from "react";

function Counters() {

    const [counters, setCounters] = useState([1, 2, 3])

    const minus = (index) => {
        const newCounters = counters.map((el, ind) =>
            index === ind ? el - 1 : el)
        setCounters(newCounters)
    }

    const plus = (index) => {
        const newCounters = counters.map((el, ind) =>
            index === ind ? el + 1 : el)
        setCounters(newCounters)
    }

    const deleteCounter = (index) => {
        const newCounters = counters.filter((el, ind) =>
            index !== ind
        )
        setCounters(newCounters)
    }

    const addCounter = () => {
        const newCounters = [...counters, 10];
        setCounters(newCounters)
    }

    return (
        <div>

            <button onClick={addCounter}>Add</button>
            {counters.map((el, index) => <li key={index}>
                <button onClick={() => minus(index)}>-</button>
                {' '}
                {el}
                {' '}
                <button onClick={() => plus(index)}>+</button>
                <button onClick={() => deleteCounter(index)}>delete</button>
            </li>)}

        </div>
    )
}

export default Counters;