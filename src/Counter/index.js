import { useEffect, useState } from 'react';

export default function Counter(props) {
    const [stateValue, setStateValue] = useState(0);

    // componentDidMount
    useEffect(() => {
        console.log("Mounted");
        // return () => console.log("Unmounted"); // componentWillUnmount
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log("Count is updated");
    }, [props.count])

    useEffect(() => {
        console.log("stateValue is updated");
    }, [stateValue])

    // componentWillUnmount
    useEffect(() => {
        return () => console.log("Unmounted");
    }, [])

    return(
        <div>
            <div>Counter: {props.count}</div>
            <div>State value: {stateValue}</div>
            <button onClick={() => setStateValue(stateValue + 1)}>Change state</button>
        </div>
    )
}