import React from 'react'
import "./message.css"


export default function Message() {
    return (
        <>
            <div className="message">
                <div className="messageTop">
                    <p className="sender">
                        Dr. John Tan <br/>
                    </p>
                    <p className="defaultMsg">
                    You are now consulting Dr. John Tan
                    </p>
                </div>
                <div className="messageDateTime">
                    <div className="messageDate">
                        01/10/2021
                    </div>
                    <div className="messageTime">
                        11:26 pm
                    </div>
                </div>
            </div>
            
        
        </>
        
    )
}
