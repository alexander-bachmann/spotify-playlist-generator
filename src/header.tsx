import * as React from 'react';

//defining type so that different types cant be injected in
type HeaderProps = {
    text: string
}

//use PascalCasing for components, pass in arguments via props
function Header(props: HeaderProps) {
    
    //useEffect() - function passed to useEffect will run after the render
    //is committed to the screen
    /*
    React.useEffect(() => {
        alert(document.querySelector('#myHeader'));
    })
    */ 

    return (
        <h1 id="myHeader" className="primary-header">{props.text}</h1>
    )
}

//to be able to see it in the react chrome extension
Header.displayName = "Header";

export {
    Header
}