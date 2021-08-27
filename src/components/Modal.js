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
    } else body.style.overflow = "unset";
  }, [show]);

  const child = (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div
            ref={modalRef}
            tabIndex={-1}
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="modal_header">
              <h2 className="modal_header-title">
                {form ? `Request for ${title}` : title}
              </h2>
              <button className="close" onClick={() => close()}>
                <BsXCircleFill />
              </button>
            </header>
            <main className="modal_content"> {children} </main>
          </div>
        </div>
      ) : null}
    </>
  );

  const container = document.getElementById("modal");

  return ReactDOM.createPortal(child, container);
}

export default Modal;
