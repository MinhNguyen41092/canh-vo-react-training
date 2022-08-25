import React from "react"
import ActionButton from "../Button/actionButton"
import Loading from "../Loading/loading"

interface ConfirmPopupProps {
  heading: string
  text: string
  loading: boolean
  id: number
  handleHidePopupDelete(): void
  handleDeleteUser(e: any, userId: number): void
}

function ConfirmPopup(props: ConfirmPopupProps) {
  
  const {heading, text, handleHidePopupDelete, id, handleDeleteUser, loading} = props

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
            handleButton={handleDeleteUser}
          />
          <ActionButton 
            className="cancel-btn"
            text="Cancel"
            handleButton={handleHidePopupDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmPopup