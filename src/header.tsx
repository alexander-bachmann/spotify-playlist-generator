import * as React from 'react';

//defining type so that different types cant be injected in
type HeaderProps = {
    text: string
}

//use PascalCasing for components, pass in arguments via props
function Header(props: HeaderProps) {
    return (
        <h1 className="primary-header">{props.text}</h1>
    )
}

export {
    Header
}