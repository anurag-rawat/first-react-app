import React from 'react'

function Alert(props) {
    const capitalize = (text) =>{
        const newText = text.toUpperCase();
        return newText;
    }

    return (
        props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <b>{capitalize(props.alert.type)}</b> : {props.alert.message}
        </div>
    )
}

export default Alert
