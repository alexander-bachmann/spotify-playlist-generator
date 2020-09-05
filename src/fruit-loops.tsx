import * as React from 'react';

function FruitLoops() {
    let fruit: Array<string> = [
        "red",
        "green",
        "blue",
        "yellow"
    ]

    return (
        <ul>
            {fruit.map((value, index) => {
                //if it were an object, it'd be value.title or something like that
                return <li key={index}>{value}</li>
            })}
        </ul>
    )
}

export {
    FruitLoops
}