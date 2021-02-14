import React, {useState} from 'react';

const ArrMax = () => {

    const rand = (min = 7, max = 12) => {
        return Math.round(Math.random() * (max - min)) + min;
    };

    const [arr, setArr] = useState([]);

    const genArr = () => {
        const tempArr = [];
        for (let i = 0; i < rand(); i++) {
            tempArr.push(rand(-10, 20));
        }
        setArr(tempArr);
    };

    const arrElem = arr.map(
        p => <span key={p}>{p}  </span>
    )
    const findMax = () => {
        let indMn = 0;
        let indMx = 0;
        for (let i = 1; i < arr.length; i++) {
            if (arr[indMn] > arr[i]) indMn = i;
            if (arr[indMx] < arr[i]) indMx = i;

        }
        return <div>
            <div>Первый минимальный элемент - №{indMn + 1} = {arr[indMn]}</div>
            <div>Первый максимальный элемент - №{indMx + 1} = {arr[indMx]}</div>

        </div>
    }
    return (
        <div>
            <button onClick={genArr}>Сгенерировать массив</button>
            {arr.length > 0 ?
                <div>
                    Массив из {arrElem.length} элементов: [{arrElem}]
                    {findMax()}
                </div>
                : ""}
        </div>
    );
};

export default ArrMax;