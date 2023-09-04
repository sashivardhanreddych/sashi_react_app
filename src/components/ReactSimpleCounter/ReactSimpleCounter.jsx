
const SimpleCounter = () => {
    const [value, setValue] = useState(10);
    const [counter, setCounter] =useState(0);
    const handleIncrement = () =>{
        setCounter(prevCounter => prevCounter + value);
    }
    const handleDecrement = () =>{
        setCounter(prevCounter => prevCounter - value);
    }
    return(
        <div className="card">
            <h2>Simple Counter</h2>
            <div className="contentCard">
                <div className="counterValue">{counter}</div>
                <button onClick={handleIncrement()}>Increment by {value}</button>
                <button onClick={handleDecrement()}>Decrement by {value}</button>
            </div>
        </div>
    );
}