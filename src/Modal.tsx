import styled from "@emotion/styled";
import {
  ReactNode,
  cloneElement,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";

const callAll =
  (...fns: any) =>
  (...args: any) =>
    fns.forEach((fn: any) => fn && fn(...args));

const ModalContext = createContext<any>(null);

const Modal = ({ isFocus, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isFocus);
  }, [isFocus]);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
};

function ModalDismissButton({ children: child }: any) {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  });
}

function ModalOpenButton({ children: child }: any) {
  const [, setIsOpen] = useContext(ModalContext);
  return cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
}

const ModalContents = forwardRef<HTMLDivElement, any>(
  ({ title, children, ...props }: any, ref: any) => {
    const [isOpen, _] = useContext(ModalContext);
    return (
      isOpen && (
        <Dialog {...props} ref={ref}>
          {children}
          <span style={{ textAlign: "center" }}>{title}</span>
        </Dialog>
      )
    );
  }
);

const Dialog = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: white;
  padding: 8px;
  z-index: 100;
`;

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents };
