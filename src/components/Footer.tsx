import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
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
            <h4 className="font-semibold mb-4">Услуги и решения</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/services/personal-data" className="hover:text-white transition-colors">Персональные данные</Link></li>
              <li><Link to="/services/critical-infrastructure" className="hover:text-white transition-colors">КИИ</Link></li>
              <li><Link to="/services/attestation" className="hover:text-white transition-colors">Аттестация объектов</Link></li>
              <li><Link to="/services/consulting" className="hover:text-white transition-colors">Консалтинг</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/info/personal-data-basics" className="hover:text-white transition-colors">Ликбез по ПДн</Link></li>
              <li><Link to="/info/penalties" className="hover:text-white transition-colors">Штрафы</Link></li>
              <li><Link to="/info/articles" className="hover:text-white transition-colors">Статьи</Link></li>
              <li><Link to="/info/faq" className="hover:text-white transition-colors">Вопросы и ответы</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/company/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/company/history" className="hover:text-white transition-colors">История</Link></li>
              <li><Link to="/company/licenses" className="hover:text-white transition-colors">Лицензии</Link></li>
              <li><Link to="/company/clients" className="hover:text-white transition-colors">Клиенты</Link></li>
              <li><Link to="/company/partners" className="hover:text-white transition-colors">Партнеры</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="tel:+79015000078" className="hover:text-white transition-colors">+7 (901) 500-00-78</a></li>
              <li><a href="tel:+79015000087" className="hover:text-white transition-colors">+7 (901) 500-00-87</a></li>
              <li className="pt-2">115093, г. Москва,<br />пер. Партийный, д. 1</li>
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