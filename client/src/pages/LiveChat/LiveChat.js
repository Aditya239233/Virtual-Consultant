import React from 'react'
import "./liveChat.css"
import Navbar from '../../components/Navbar/Navbar'
import SideMenu from '../../components/SideMenuComponent/SideMenu'
import { KeyboardReturn, Call, Videocam } from '@material-ui/icons'
import Message from '../../components/Message/Message'

const LiveChat = () =>{
    return(
        <>
        <Navbar />
        <div className="wrapper">
            <div className="a">
                
                <SideMenu />
            </div>

            <div className="b">
                <div className="c">
                    <div className="backButton">
                        <KeyboardReturn style={{fontSize:35}}/>
                    </div>
                    <div className="chatPerson">
                        <img 
                            className="chatPhoto"
                            src = "/assets/Post/Passport photo.jpg"
                            alt = ""
                        />
                        <p className = "chatName">Dr. John Tan
                            <p className = "chatMedicalID">Medical ID: 123456789</p>
                        </p>
                     
                    </div>
                    <div className="videoButton">
                        <Videocam style={{fontSize:35}}/>
                    </div>
                    <div className="callButton">
                        <Call style={{fontSize:40}}/>
                    </div>
                </div>
                <div className="d">
                    <div className="chatReceive">
                    <Message/>
                    <Message/>
                    </div>
                    <div className="chatSend">
                    <Message/>
                    <Message/>

                    </div>
                </div>
                <div className="e">
                    <textarea className="chatInputBox" placeholder="Write something here...."></textarea>
                    <button className="sendButton">
                        <p className="Send">Send</p>
                    </button>
                </div>
            </div>


        </div>
        
        
        </>
    )
}

export default LiveChat;