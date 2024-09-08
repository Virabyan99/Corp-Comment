import FeedbackItem from './FeedbackItem'
import Spinner from '../Spinner'
import ErrorM from '../ErrorM'
import { useFeedbackItemsContext } from '../../lib/hooks'


export default function FeedbackList() {
  
  const {isLoading, errorMessage, filteredFeedbackItems} = useFeedbackItemsContext()


  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorM message={errorMessage} />}

      {filteredFeedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        )
      })}
    </ol>
  )
}
