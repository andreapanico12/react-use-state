

const Buttons = (props)=>{

  const selected = props.selected
  const Languages = props.languages
  const onSelect = props.onSelect

  return (
    <div className="tabs">
      {Languages.map(item => (
      <button 
        key={item.id}
        className={selected === item.id ? `active` : ``}
        onClick={() => onSelect(item.id)}>
        {item.title}
      </button>

))}

</div>
  )
}

export default Buttons