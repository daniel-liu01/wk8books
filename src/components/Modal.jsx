import { useRef } from "react";

function Modal({ btnLabel, btnClassName, children, onDelete }) {
    const modalRef = useRef();

    function handleClick() {
        modalRef.current.showModal();
    }

    function handleOutsideClick(e) {
    if (e.target === modalRef.current) {
      modalRef.current.close();
    }
  } 

    return (
        <>
        <div className="newBook-container">
            <button
                className={btnClassName}
                onClick={handleClick}>
                {btnLabel}
            </button>
            <button className="edit-button">Edit</button>
            <button className="delete-button" onClick={onDelete}>Delete</button>
            <dialog ref={modalRef} onClick={handleOutsideClick}>{children}</dialog>
        </div>
        </>
    );
}

export default Modal; 