import {PlayImg} from './StyledComponents'

const ItemsView = props => {
  const {imgDetails, getResult} = props
  const {id, imageUrl} = imgDetails

  const onClickImg = () => {
    getResult(id, imageUrl)
  }

  return (
    <div>
      <button
        data-testid={`${id.toLowerCase()}Button`}
        type="button"
        onClick={onClickImg}
      >
        <PlayImg src={imageUrl} alt={id} />
      </button>
    </div>
  )
}

export default ItemsView
