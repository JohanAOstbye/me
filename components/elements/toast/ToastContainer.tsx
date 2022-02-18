import Toast from './Toast';
import { toast, useToastStateContext } from '../../context/Toast';

export default function ToastContainer() {
  const { toasts } = useToastStateContext();
  return (
    <div className='fixed bottom-10 w-full h-fit z-50'>
      <div className='max-w-xl mx-auto'>
        {toasts &&
          toasts.map((toast: toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  );
}
