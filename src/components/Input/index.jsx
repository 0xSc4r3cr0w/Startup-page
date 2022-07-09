import React from 'react';

function Input(props) {
    return (
        <form class="container" method="GET" action={props.link}>
            <input class="form-control" type="text" name="q" placeholder={props.engineName} />
        </form>
    );
}

export default Input;