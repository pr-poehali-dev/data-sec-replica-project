import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      label: 'Услуги и решения',
      href: '#',
      dropdown: [
        { label: 'Персональные данные', href: '/services/personal-data' },
        { label: 'Критическая информационная инфраструктура (КИИ)', href: '/services/personal-data' },
        { label: 'Конфиденциальная информация', href: '/services/personal-data' },
        { label: 'Аттестация объектов информатизации', href: '/services/attestation' },
        { label: 'Защищенные приложения', href: '/services/attestation' },
        { label: 'Средства защиты информации', href: '/services/attestation' },
        { label: 'Консалтинг и обучение', href: '/services/consulting' }
      ]
    },
    { 
      label: 'Каталог СЗИ', 
      href: '#', 
      dropdown: 'extended',
      dropdownData: [
        {
          title: 'Защита серверов и рабочих станций',
          icon: 'Monitor',
          items: [
            { label: 'Антивирусная защита', href: '/catalog/antivirus' },
            { label: 'Защита информации от НСД', href: '/catalog/access-control' },
            { label: 'Средства доверенной загрузки', href: '/catalog/trusted-boot' }
          ]
        },
        {
          title: 'Сетевая безопасность',
          icon: 'Network',
          items: [
            { label: 'Межсетевое экранирование', href: '/catalog/firewall' }
          ]
        }
      ]
    },
    {
      label: 'Информация',
      href: '#',
      dropdown: [
        { label: 'Ликбез по персональным данным', href: '/info/personal-data-basics' },
        { label: 'Штрафы за нарушения', href: '/info/penalties' },
        { label: 'Статьи и публикации', href: '/info/articles' },
        { label: 'Вопросы и ответы', href: '/info/faq' },
        { label: 'Новости о ПДн', href: '/info/news' },
        { label: 'Законодательство', href: '/info/legislation' }
      ]
    },
    { 
      label: 'Компания', 
      href: '/company', 
      dropdown: [
        { label: 'О компании', href: '/company/about' },
        { label: 'История', href: '/company/history' },
        { label: 'Лицензии и сертификаты', href: '/company/licenses' },
        { label: 'Клиенты', href: '/company/clients' },
        { label: 'Партнеры', href: '/company/partners' },
        { label: 'Вакансии', href: '/company/careers' }
      ]
    },
    { label: 'Контакты', href: '/contacts', dropdown: null }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary">Центр Безопасности</h1>
              <p className="text-xs text-muted-foreground">данных</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="text-sm font-medium text-secondary hover:text-primary transition-colors py-2 flex items-center gap-1"
                >
                  {item.label}
                  {item.dropdown && (
                    <Icon name="ChevronDown" size={16} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                {item.dropdown && openDropdown === item.label && (
                  <>
                    {item.dropdown === 'extended' ? (
                      <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[600px] animate-slide-down">
                        <div className="p-6 grid grid-cols-2 gap-6">
                          {item.dropdownData?.map((section: any, sectionIndex: number) => (
                            <div key={sectionIndex}>
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                  <Icon name={section.icon} className="text-primary" size={24} />
                                </div>
                                <h3 className="font-semibold text-secondary">{section.title}</h3>
                              </div>
                              <div className="space-y-2 ml-2">
                                {section.items.map((subItem: any, subIndex: number) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.href}
                                    className="block px-3 py-1.5 text-sm text-primary hover:text-blue-600 transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[280px] animate-slide-down">
                        <div className="py-2">
                          {Array.isArray(item.dropdown) && item.dropdown.map((subItem: any, subIndex: number) => (
                            <Link
                              key={subIndex}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-secondary hover:bg-blue-50 hover:text-primary transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Icon name="Search" className="text-secondary cursor-pointer hover:text-primary transition-colors" size={20} />
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} className="text-secondary" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.href}
                  className="block py-2 text-sm font-medium text-secondary hover:text-primary"
                >
                  {item.label}
                </Link>
                {item.dropdown && item.dropdown !== 'extended' && (
                  <div className="pl-4">
                    {Array.isArray(item.dropdown) && item.dropdown.map((subItem: any, subIndex: number) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="block py-1.5 text-xs text-muted-foreground hover:text-primary"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;