import { useContext, useEffect, useState } from "react"
import { FeedbackItemsContext } from "../contexts/FeedbackItemsContextProvider"
import { TFeedbackItem } from "./types"

export function useFeedbackItemsContext() {
    const context = useContext(FeedbackItemsContext)
    if (!context) {
      throw new Error(
        'FeedbackItemsContext is not definded in FeedbackList component'
      )
    }
    return context
  }


  export function useFeedbackItems (){
    
    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMesage] = useState('')

    useEffect(() => {
      const fetchFeedbackItems = async () => {
        setIsLoading(true)
  
        try {
          const response = await fetch(
            'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
          )
          if (!response.ok) {
            throw new Error('Something went wrong')
          }
          const data = await response.json()
          setFeedbackItems(data.feedbacks)
        } catch (error) {
          setErrorMesage('Something went Wrong ')
        }
        setIsLoading(false)
      }
  
      fetchFeedbackItems()
    }, [])
    return {
      feedbackItems,
      isLoading,
      errorMessage,
      setFeedbackItems
      
    }
  }