import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={20} />
              </div>
              <h3 className="font-bold">ЧОП "СБ ЗВИ"</h3>
            </div>
            <p className="text-sm text-blue-200 mb-3">Защита информации</p>
            <p className="text-xs text-blue-200">115093, г. Москва,<br />пер. Партийный, д. 1</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/services/attestation" className="hover:text-white transition-colors">Аттестация</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Аудит ИБ</Link></li>
              <li><Link to="/services/consulting" className="hover:text-white transition-colors">Консалтинг</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/company/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/company/clients" className="hover:text-white transition-colors">Клиенты</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="tel:+79015000078" className="hover:text-white transition-colors">+7 (901) 500-00-78</a></li>
              <li><a href="tel:+79015000087" className="hover:text-white transition-colors">+7 (901) 500-00-87</a></li>
              <li><a href="mailto:info@security-center.ru" className="hover:text-white transition-colors">info@security-center.ru</a></li>
              <li>115093, г. Москва,<br />пер. Партийный, д. 1</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-200">
          <p>&copy; 2024 ЧОП "СБ ЗВИ". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;