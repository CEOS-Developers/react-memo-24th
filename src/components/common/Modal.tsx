import { useEffect, useRef, type ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  labelledBy: string;
  className?: string;
  onClose: () => void;
};

function Modal({ children, labelledBy, className = '', onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      className={`m-auto border-0 backdrop:bg-blue-07/50 ${className}`}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        ) {
          onClose(); // 클릭 좌표가 모달의 위, 아래, 왼, 오른쪽 경계 중 하나라도 벗어나면 모달을 닫도록 한다.
        }
      }}
    >
      {children}
    </dialog>
  );
}

export default Modal;
