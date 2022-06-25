import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
	console.log(feedback);

	if (!feedback || feedback.lenght === 0) {
		return <p>No Feedback Yet</p>;
	}

	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div 
                  key={item.id}
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  exit={{ opacity:0 }}
               >
						<FeedbackItem
							key={item.id}
							item={item}
							handleDelete={handleDelete}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);

	// version without the animation
	//  return (
	//      <div className='feedback-list'>
	//          {feedback.map((item) => (
	//              <FeedbackItem
	//                  key={item.id}
	//                  item={item}
	//                  handleDelete={handleDelete}/>
	//          ))}
	//      </div>
	//  )
}

FeedbackList.propType = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
};

export default FeedbackList;
