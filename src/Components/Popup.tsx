/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { getuser, removeuser } from '../State /Action/Action';
import { useDispatch } from 'react-redux';
import { RiDeleteBin5Fill } from 'react-icons/ri';

interface PopupProps {
  shows: boolean;
  onHides: () => void;
  datas: string | number;
}

const Popup = ({ shows, onHides, datas }: PopupProps) => {
  const dispatch: any = useDispatch();
  const handledelete = () => {
    console.log('popupdelete');
    dispatch(removeuser(datas));
    dispatch(getuser());
  };

  return (
    <>
      <Modal show={shows} onHide={onHides}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete Confirmation
            <RiDeleteBin5Fill />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the user with this : {datas} ID ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHides}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handledelete}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Popup;
