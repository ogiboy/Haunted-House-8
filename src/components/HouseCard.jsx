const ListItem = ({ propertyKey, value }) => {
  if (propertyKey === 'image' || propertyKey === 'id') {
    return null
  }

  const displayValue =
    typeof value === 'boolean' ? (value ? 'Evet' : 'Hayır') : value

  return (
    <li>
      <span>{propertyKey}: </span> {displayValue}{' '}
    </li>
  )
}

const HouseCard = ({ houseData, index, array }) => {
  const propertyList = Object.entries(houseData).map(([key, value]) => {
    return (
      <ListItem key={crypto.randomUUID()} propertyKey={key} value={value} />
    )
  })

  return (
    <div className="house-card" key={houseData.id}>
      <p>
        {index + 1} / {array.length}
      </p>
      <img src={houseData.image} />
      <div>
        <ul>{propertyList}</ul>
      </div>
    </div>
  )
}

export default HouseCard
