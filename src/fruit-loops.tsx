import * as React from 'react';

type FruitLoopsProps = {
    fruit: Array<string>
}

//using props allows us to separate out data from components
function FruitLoops(props: FruitLoopsProps) {
    return (
        <ul>
            {props.fruit.map((value, index) => {
                //if it were an object, it'd be value.title or something like that
                return <li key={index} style={{ color: value }}>{value}</li>
            })}
        </ul>
    )
}

FruitLoops.displayName = "FruitLoops";

export {
    FruitLoops
}