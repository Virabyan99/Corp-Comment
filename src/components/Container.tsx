import { TFeedbackItem } from '../lib/types'
import FeedbackList from './FeedbackList'
import Header from './Header'

type ContanerProps = {
  isLoading: boolean
  feedbackItems: TFeedbackItem[]
  errorMessage: string,
  handleAddToList: (text: string) => void;
}

export default function Container({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddToList,
}: ContanerProps) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        isLoading={isLoading}
        errorMessage={errorMessage}
        feedbackItems={feedbackItems}
      />
    </main>
  )
}
