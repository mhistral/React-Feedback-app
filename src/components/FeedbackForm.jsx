import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'

function FeedbackForm() {

    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form action="">
                <h2>How would you rate your service with us?</h2>
                {/* @todo - Rating Select Component */}
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder='Write a Review'/>
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm