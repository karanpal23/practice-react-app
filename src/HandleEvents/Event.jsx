import { useState } from "react";

export function ConvertToUpperCase(heading){
    const [Text,settext]=useState("Enter The Text here");
    const[Text2,converttext] =useState("");

    // settext(){

    // }
    

    const handleOnChange=(event)=>{
        settext(event.target.value);
        // let newText=event.target.value.toUpperCase();
        // converttext(newText);
    }

    const handleOnClick=()=>{
        let newText=Text.toUpperCase();
        
        converttext(newText);
    }

    const handleOnClear =()=>{
        settext("Enter Text to convert to upper case");
        converttext("");
    }

    return (
        <div className={`container `}>
            <h3>{heading.heading}</h3>
            <div className="mb-3">
                <textarea type="text"  value={Text} onChange={handleOnChange} className={`form-control  bg-${heading.mode==='dark'?'dark':'whitesmoke'} text-${heading.mode==='light'?'dark':'light'}`} id="convertText" rows={7}  />
                <br />
                <h4>Upper case text {heading.mode} </h4>
                <textarea type="text" value={Text2} readOnly className={`form-control  bg-${heading.mode==='dark'?'dark':'whitesmoke'} text-${heading.mode==='light'?'dark':'light'}`} id="convertText" rows={7}  />
            </div>
            <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert Text</button>
            <button className="btn btn-danger mx-1" onClick={handleOnClear}>clear text</button>
            <br />

            {/* number of words and letters */}
            <div className="text-summary">
                <h4>Text Summary</h4>
                <p>words {Text.split(" ").length} , letters {Text.length}</p>
            </div>

        </div>
    );

}