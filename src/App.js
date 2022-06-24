import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App(){

    return (
        <>
            {/* <Header bgColor='red' textColor ='blue'/> */}
            <Header/>
            <div className="container">
                <FeedbackItem/>
            </div>
        </>
    )
}

export default App