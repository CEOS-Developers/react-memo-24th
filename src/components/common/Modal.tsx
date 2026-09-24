type ModalProps = {
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
};

function Modal({ title, description, confirmLabel, onConfirm }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,27,81,0.50)] p-6">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="flex w-full max-w-[468px] flex-col rounded-[24px] bg-white p-8 text-center shadow-lg"
      >
        <h2
          id="modal-title"
          className="text-heading-small font-bold text-blue-07"
        >
          {title}
        </h2>

        <p className="mt-4 text-body-small text-gray-04">{description}</p>

        <button
          type="button"
          onClick={onConfirm}
          className="mt-10 h-14 rounded-xl bg-blue-05 px-5 font-bold text-white"
        >
          {confirmLabel}
        </button>
      </section>
    </div>
  );
}

export default Modal;
