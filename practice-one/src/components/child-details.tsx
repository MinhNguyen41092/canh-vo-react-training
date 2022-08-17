import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type ResultDetailsProps = {
  classname: string,
  dangerouslySetInnerHTML: any
}

type ChildDetailsState = {}

class ChildDetails extends React.Component<ResultDetailsProps, ChildDetailsState> {
  render() {
    const {classname, dangerouslySetInnerHTML} = this.props

    return (
      <>
        <p 
          className={classname} 
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        ></p>
      </>
    )
  }
}

export default ChildDetails