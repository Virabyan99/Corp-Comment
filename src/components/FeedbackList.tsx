import FeedbackItem from './FeedbackItem'

const feedbackItem1 = {
  upvoteCount: 593,
  badgeLetter: 'B',
  companyName: 'ByteGrad',
  text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias',
  daysAgo: 5
}
const feedbackItem2 = {
  upvoteCount: 53,
  badgeLetter: 'S',
  companyName: 'StartBucks',
  text: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias',
  daysAgo: 2
}

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <FeedbackItem feedbackItem={feedbackItem1} />
      <FeedbackItem feedbackItem={feedbackItem2} />
      <FeedbackItem feedbackItem={feedbackItem1} />
     
    </ol>
  )
}
