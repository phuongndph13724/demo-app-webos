import { toast } from 'react-toastify';

export const HorizontalToast = ({ closeToast }) => (
    <div className="flex items-center text-black p-1 rounded-md w-max">
    <div className="mr-3">
      <span>🔔</span>
    </div>
    <div className="flex-auto whitespace-nowrap">
      This is a horizontal toast message!
    </div>
  </div>
);

export const CustomToast = ({ message , style , icon }) => {
    return toast(<HorizontalToast />)
}
