const Bath = (props) => {
  return (  
    <>
    <div className="bathroom" id={`bath-${props.size}`}>
      {props.size} Bath
    </div>
      </>
  )
}

export default Bath;