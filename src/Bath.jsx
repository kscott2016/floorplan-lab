const Bath = (props) => {
  return (  
    <>
    <div className="bathroom" id={`bath-${props.size}`}>
      <p>{props.size} Bath</p>
    </div>
      </>
  )
}

export default Bath;