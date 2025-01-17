const Content = (props) => {

  const content = props.content

  return (
    <div className="content">
    {content ? (
       <>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        </>
    ) : (
      <p> Nessun Contenuto Selezionato </p>
    )}


    </div>
  )
}


export default Content