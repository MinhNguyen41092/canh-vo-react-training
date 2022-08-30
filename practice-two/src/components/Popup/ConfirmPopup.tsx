import React, {useState} from "react"

// Services
import { deleteUser } from "../../services/action"

// Components
import ActionButton from "../Button/ActionButton"
import Loading from "../Loading/Loading"

// Interface
interface ConfirmPopupProps {
  heading: string
  text: string
  id?: number
  getUsersDetails(): void
  handleHidePopupDelete(): void
}

function ConfirmPopup(props: ConfirmPopupProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const {heading, text, handleHidePopupDelete, getUsersDetails, id} = props

  // Handle delete user
  const handleDeleteUser = async () => {
    setLoading(true)
    try {
      await deleteUser(id)
      getUsersDetails()
      setError('')
      handleHidePopupDelete()
    } catch {
      setError('Error while calling api')
    }
    setLoading(false)
  }
  
  return (
    <div className="confirm-popup">
      <div className="popup-inner">
        <div className="popup-header">
            <p>{heading}</p>
        </div>

        <div className="popup-body">
          <p>{text}</p>
        </div>
        
        {loading && <Loading />}
        
        <div className="popup-footer">
          <ActionButton 
            className="confirm-btn"
            text="Confirm"
            handleClick={handleDeleteUser}
          />
          <ActionButton 
            className="cancel-btn"
            text="Cancel"
            handleClick={handleHidePopupDelete}
          />
        </div>
        <p className="error-msg">{error}</p>
      </div>
    </div>
  )
}

export default ConfirmPopup