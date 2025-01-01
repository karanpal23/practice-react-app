import React from 'react';

const Alert = (props) => {
    const capitalized=(word)=>{
        const newWord=word.toLowerCase();
        return newWord.charAt(0).toUpperCase()+newWord.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.type)}</strong> {props.alert.msg} 
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" /> */}
        </div>
    );
}

export default Alert;
