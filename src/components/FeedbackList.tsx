import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'
import ErrorM from './ErrorM'
import { TFeedbackItem } from '../lib/types'

type FeedbackListProps = {
  isLoading: boolean,
  feedbackItems: TFeedbackItem[],
  errorMessage: string
}

export default function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorM message={errorMessage} />}
      {feedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        )
      })}
    </ol>
  )
}
