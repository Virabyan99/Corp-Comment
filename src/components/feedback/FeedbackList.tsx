import FeedbackItem from './FeedbackItem'
import Spinner from '../Spinner'
import ErrorM from '../ErrorM'
import { useFeedbackItemsStore } from '../../stores/feedbackItemsStore'


export default function FeedbackList() {
  
  // const {isLoading, errorMessage, filteredFeedbackItems} = useFeedbackItemsContext()

  const isLoading = useFeedbackItemsStore(state => state.isLoading)
  const errorMessage = useFeedbackItemsStore(state => state.errorMessage)
  const filteredFeedbackItems = useFeedbackItemsStore(state => state.getFilteredFeedbackItems())

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
