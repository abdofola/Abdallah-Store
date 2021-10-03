import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { BsXCircleFill } from "react-icons/bs";

function Modal({ show, close, title, children, form }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    if (show) {
      body.style.overflow = "hidden";
      modalRef.current.focus();
    } else body.style.overflow = "initial";
  }, [show]);

  const child = (
    <>
      {show && (
        <div className="modalContainer" onClick={() => close()}>
          <div
            ref={modalRef}
            tabIndex={-1}
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="modal__header">
              <h3 className="modal__header-title">
                {form ? `Request for ${title}` : title}
              </h3>
              <button className="close" onClick={() => close()}>
                <BsXCircleFill />
              </button>
            </header>
            <main className="modal_content"> {children} </main>
          </div>
        </div>
      )}
    </>
  );

  const container = document.getElementById("modal");

  return ReactDOM.createPortal(child, container);
}

export default Modal;
