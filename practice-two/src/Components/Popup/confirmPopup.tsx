import React from "react"

// Components
import ActionButton from "../Button/ActionButton"
import Loading from "../Loading/Loading"

interface ConfirmPopupProps {
  heading: string
  text: string
  loading: boolean
  id: number
  error: string
  handleHidePopupDelete(): void
  handleDeleteUser(e: any, userId: number): void
}

function ConfirmPopup(props: ConfirmPopupProps) {
  
  const {heading, text, handleHidePopupDelete, id, handleDeleteUser, loading, error} = props

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
            userId={id}
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