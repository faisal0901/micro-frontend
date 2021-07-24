import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
export default function Modal(props) {
  const [ready, setReady] = useState(() => false);
  const [display, setDisplay] = useState(() => false);
  const [allow, setAllow] = useState(() => false);
  const modalRef = useRef(null);
  function toggleAllow() {
    setAllow(!allow);
  }
  const idModal = "modal";
  function toggle() {
    if (props.toggleModal) props.toggleModal();
    else setDisplay(!display);
  }
  function hanldeClickOutside(event) {
    if (
      modalRef?.current &&
      !modalRef?.current?.contains?.(event.target) &&
      allow
    ) {
      toggle();
    }
  }

  useEffect(() => {
    const rootContainer = document.createElement("div");
    rootContainer.setAttribute("id", idModal);
    setReady(true);
    if (!document.getElementById(!idModal)) {
      document.body.appendChild(rootContainer);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", hanldeClickOutside);
    return () => {
      document.removeEventListener("mousedown", hanldeClickOutside);
    };
  });
  useEffect(() => {
    if (display || props.in) {
      document.querySelector("body").classList.add("modal-open");
    }
    return () => {
      document.querySelector("body").classList.remove("modal-open");
    };
  }, [display, props.in]);
  if (!ready) return null;
  return (
    <>
      {props.children(toggle)}
      {document && document.getElementById(idModal) && (
        <div>
          {createPortal(
            <CSSTransition
              in={props.in ?? display}
              timeout={500}
              onExit={toggleAllow}
              onExited={toggleAllow}
              classNames="overlay"
              unmountOnExit
            >
              <div className="overlay fixed inset-0 h-screen z-50">
                <div className="bg-black opacity-25 inset-0 absolute z-index-10"></div>
                <div className="absolute btg z-20 flex items-center justify-center inset-0">
                  <div
                    ref={modalRef}
                    style={props.modalStyle}
                    className="bg-white shadow-2xl max-w-3xl max-h-2xl"
                  >
                    <div className="relative">
                      <span className="modal-close" onClick={toggle}></span>
                    </div>
                    {props.content(toggle)}
                  </div>
                </div>
              </div>
            </CSSTransition>,
            document.getElementById(idModal)
          )}
        </div>
      )}
    </>
  );
}
Modal.defaultProps = {};
Modal.propTypes = {
  in: propTypes.bool,
  toggleModal: propTypes.func,
  content: propTypes.func.isRequired,
};
