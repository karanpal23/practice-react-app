import React ,{useState} from 'react';

const About = () => {

    // let myStyle={
    //     color:'white',
    //     backgroundColor:'black'
    // }


    const[darkModeBtn,lightModebtn]=useState("Disable Dark Mode");

    const[myStyle,updateStyle]=useState({
        color:'white',
        backgroundColor:'black'
    });

   

    const handleOnClick=(event)=>{
        if(myStyle.color=='white'){
            updateStyle({
                color:'black',
                backgroundColor:'white'
            });
            lightModebtn("Enable Dark Mode")

        }
        else{
            updateStyle({
                color:'white',
                backgroundColor:'black'
            });
            lightModebtn("Disable Dark Mode")
        }
        
    }

    return (
        <div className='container' style={myStyle}>
            <div className="accordion" id="accordionExample" >
                <h2 className='my-2'>About Us</h2>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="container my-3">
                    <button class="btn btn-primary" onClick={handleOnClick}>{darkModeBtn}</button>
                </div>
                </div>
        </div>
    );
}

export default About;
