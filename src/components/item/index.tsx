import { FC, memo } from 'react'
import { measurementType } from '../../types/measurements'

interface IItemProps {
  data?: measurementType
  greenhouse: "Tomato Hut" | "Beetville" | ""
}

const Item: FC<IItemProps> = memo(({ data, greenhouse }) => {
  return (
    <div className='item'>
      <h3 className='heading center-element'>{greenhouse}</h3>
      <div className='row'>
        <div className='column'>
          <span className='make-red'>{data?.sensor}</span>
        </div>
        <div className='column'>
          <span>{data?.measurement}</span>
        </div>
      </div>
    </div>
  )
})

export default Item
