import { v4 as uuidv4 } from "uuid";
import React, { createContext, useState} from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: "This is Feedback item 1",
			rating: 10,
		},
		{
			id: 2,
			text: "This is Feedback item 2",
			rating: 9,
		},
		{
			id: 3,
			text: "This is Feedback item 2",
			rating: 7,
		},
	]);

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	//Update Feedback Item
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => 
				item.id === id ? { ...item, ...updItem } : item
		   ))
	};

	// Delete feedback
	const deleteFeedback = (id) => {
		if (window.confirm("Are you Sure you want to Delete?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	// Add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	// Set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{" "}
			{children}{" "}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
