import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('Text must be atleast 10 Characters')
        }else{
            setBtnDisabled(false);
            setMessage(null)
        }
        setText(e.target.value)
    }

    return (
        <Card>
            <form action="">
                <h2>How would you rate your service with us?</h2>
                {/* @todo - Rating Select Component */}
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder='Write a Review'/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div> }
            </form>
        </Card>
    )
}

export default FeedbackForm