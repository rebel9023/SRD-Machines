import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';

const ErrorMessage = ({ message, onClose, type = 'error' }) => {
  if (!message) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
      default:
        return <AlertCircle size={20} className="text-white" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
      default:
        return 'bg-red-500';
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'success':
        return 'border-green-600';
      case 'warning':
        return 'border-yellow-600';
      case 'error':
      default:
        return 'border-red-600';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className={`relative ${getBackgroundColor()} ${getBorderColor()} border-l-4 p-4 rounded-lg shadow-lg mb-4`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            {getIcon()}
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium leading-relaxed">
              {message}
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="flex-shrink-0 ml-3 text-white hover:text-gray-200 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorMessage;
