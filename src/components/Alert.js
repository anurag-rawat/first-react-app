import React from 'react'

function Alert(props) {
    const capitalize = (text) => {
        const newText = text.toUpperCase();
        return newText;
    }

    return (
        <div style={{height:'50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{height:'50px'}}>
                <b>{capitalize(props.alert.type)}</b> : {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert
