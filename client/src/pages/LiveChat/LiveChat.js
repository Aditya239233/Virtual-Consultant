import React, {useState, useEffect} from "react";
import "./liveChat.css";
import Navbar from "../../components/Navbar/Navbar";
import SideMenu from "../../components/SideMenuComponent/SideMenu";
import { KeyboardReturn, Call, Videocam } from "@material-ui/icons";
import Message from "../../components/Message/Message";
import axios from 'axios';

const LiveChat = () => {
const [chats, setChats]=useState([]);
const [username, setUsername]=useState('Arat')
const [partner, setPartner]=useState('Shruthi')

useEffect(()=>{
  axios.get('http://localhost:8000/retrieveConversation',{
    params: {
      username1:username,
      username2:partner
    },
    headers: {"Access-Control-Allow-Origin": "*", 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json'},
    
  }).then(response=>{
    console.log(response)
    setChats(response.data.chat_messages)
  }).catch(err=>{
    console.log("Error happened")
    console.log(err)
  })
},[])


  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="a">
          <SideMenu />
        </div>

        <div className="b">
          <div className="c">
            <div className="backButton">
              <KeyboardReturn style={{ fontSize: 35 }} />
            </div>
            <div className="chatPerson">
              <img
                className="chatPhoto"
                src="/assets/Post/Passport photo.jpg"
                alt=""
              />
              <p className="chatName">
                { username }
              </p>
            </div>
            <div className="videoButton">
              <Videocam style={{ fontSize: 35 }} />
            </div>
            <div className="callButton">
              <Call style={{ fontSize: 40 }} />
            </div>
          </div>
          <div className="d">
            {/* <div className="chatReceive">
              <Message sender="Khush" text="I am fine" date="16/10/2021" time="11:10pm"/>
            </div>
            <div className="chatSend">
            <Message sender="Adi" text="Nice" date="16/10/2021" time="11:15pm"/>
            </div> */}
            {
              chats.map((chat)=>{
                return <div className={chat.sender==username? "chatSend":"chatReceive"}>
                  <Message sender={chat.sender} text={chat.text} timestamp={chat.timestamp}/>
                  </div>
              })
            }
          </div>
          <div className="e">
            <textarea
              className="chatInputBox"
              placeholder="Write something here...."
            ></textarea>
            <button className="sendButton">
              <p className="Send">Send</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
