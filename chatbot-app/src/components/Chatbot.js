import React, {useState} from 'react';
import OpenAi from 'openai';

const openai = new OpenAi({
    key: 'Your_API_Key' ,

});

function Chatbot() {
const [userInput, setUserInput] = useState('');
const [chatHistoory, setChatHistory] = useState ([]);
async function sendMessage() {
    // code to send messages to the chatbot here
}
// JSX for rendering the chat inerface here

return (
    <div>
        {/* JSX for the chat interface */}
    </div>
);
}

export default Chatbot;