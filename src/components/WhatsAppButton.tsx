import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '79015000078';
  const message = 'Здравствуйте! Хочу узнать подробнее о ваших услугах.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        <button
          onClick={handleClick}
          className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Написать в WhatsApp"
        >
          <MessageCircle size={28} />
          <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Написать в WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;