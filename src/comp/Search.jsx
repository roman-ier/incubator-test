import React, {useState} from 'react';

const GOOGLE = "google";
const Search = () => {
    const [input, setInput] = useState("");
    const inputChange = (props) => {
        setInput(props.target.value);
    };
    const newArr = [
        {
            name: "name1",
            age: 30
        },
        {
            name: "n2",
            age: 32
        },
        {
            name: "n3",
            age: 33
        },
        {
            name: "n4",
            age: 34
        },

    ];
    const submit = () => {
        switch (input.toLowerCase()) {
            case "пщщпду":
            case GOOGLE:
                setTimeout(() => alert(` ${newArr[0].name} Yandex круче. Но это не точно`), 1000);
                break;
            default:
                setTimeout(() => alert(newArr[0].name + "  " + input), 1000);
                break;
        }


    };
    return (
        <form action="#" onSubmit={submit}>
            <input type={"search"} onChange={inputChange} className={"searchInput"}/>
            <input type={"submit"} className={"searchButton"} value={"Поиск!"}/>
        </form>
    );
};

export default Search;