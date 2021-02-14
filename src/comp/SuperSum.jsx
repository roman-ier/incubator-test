import React, {useState} from 'react';

const SuperSum = () => {
    const [s1, setS1] = useState(0);
    const [s2, setS2] = useState(0);

    const superSum = (a, b) => {
        return a + b;
    }
    const inputChange = (props) => {
        let e = props.target;
        if (e.id === "s1")
            setS1(Number(e.value));
        else if (e.id === "s2")
            setS2(Number(e.value));
    }
    return (
        <div>
            <div>
                <span>слагаемое 1: </span>
                <input type={"number"} id={"s1"} onChange={inputChange}/>
            </div>
            <div>
                <span>слагаемое 2: </span>
                <input type={"number"} id={"s2"} onChange={inputChange}/>
            </div>
            <div>
                <span>сумма: {superSum(s1, s2)}</span>
            </div>
        </div>
    );
};

export default SuperSum;