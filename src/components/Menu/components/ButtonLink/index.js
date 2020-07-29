import React from 'react'

function ButtonLink(props) {
    // props = {classNmee: "valor passado"}  ---> é um objeto
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;