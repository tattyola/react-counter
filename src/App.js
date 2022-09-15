import './App.css';
import {useState} from "react";
import Counters from "./Counters";

function App() {
    // обычная переменная
    let counter = 1;

    const plus = () => {
        counter = counter + 1;
        console.log(counter)
        return counter;
    };
// переменная состояния
    const [counter1, setCounter1] = useState(1)

    const plus1 = () => {
        setCounter1(counter1 + 1)
    };
    const minus1 = () => {
        setCounter1(counter1 - 1)
    };
    return (
        <div className="App">

            <h1>Counter </h1>
            <button onClick={minus1}>-</button>
            {counter1}
            <button onClick={plus1}>+</button>

            <hr/>

            <button onClick={minus1}>-</button>
            {counter1}
            <button onClick={plus1}>+</button>

            <hr/>

            <Counters/>
        </div>
    );
}

export default App;