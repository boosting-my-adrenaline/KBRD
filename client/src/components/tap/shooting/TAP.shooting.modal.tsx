import React from 'react'

import { Modal, Backdrop, Slide } from '@material-ui/core'

interface IProps {
  modalOpen: boolean
  handleCloseModal(): void
}

export const TAPshootingModal: React.FC<IProps> = ({
  modalOpen,
  handleCloseModal,
}) => {
  return (
    <>
      <Modal
        // open={true}
        open={modalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Slide in={modalOpen}>
          <p
            className={`w-450px h-100px text-4em cursor-pointer bg-red-200 border-red-500 border-2 mx-auto mt-56 rounded-2xl outline-none flex  items-center justify-center font-courier `}
            onClick={handleCloseModal}
          >
            YOU LOST : <p className="transform -translate-x-5">(</p>
          </p>
        </Slide>
      </Modal>
    </>
  )
}
