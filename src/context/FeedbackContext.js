import { v4 as uuidv4 } from "uuid"
import React, { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([])

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	useEffect(() => {
		fetchFeedback()
	}, [])

	// Fetch Feedback
	const fetchFeedback = async () => {
		const response = await fetch(
			`http://localhost:5000/feedback?_sort=id&_order=desc`
		)
		const data = await response.json()

		setFeedback(data)
      setIsLoading(false);
	}

	//Update Feedback Item
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		)
	}

	// Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm("Are you Sure you want to Delete?")) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	// Add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	// Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
            isLoading,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{" "}
			{children}{" "}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
