import React from 'react'
import { useDispatch } from 'react-redux'

import { uiOpenModal } from '../../actions/ui'

export const AddNewFab = () => {

  const dispatch = useDispatch()

  const handleAddNew = () => {
    dispatch(uiOpenModal())
  }

  return (
    <button
      className='btn btn-primary shadow-lg fab'
      onClick={handleAddNew}>
      <i className='bi bi-plus'></i>
    </button>
  )
}
