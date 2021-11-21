import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function GameOverModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.gameStart();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.win} Win The Game, Press start to play again!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Start Again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameOverModal;
