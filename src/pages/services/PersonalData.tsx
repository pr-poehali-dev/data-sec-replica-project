import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const PersonalData = () => {
  // Apply SEO configuration for Personal Data service page
  useSEO(SEO_CONFIGS.services.personalData);
  const stages = [
    {
      number: 1,
      title: 'Обследование',
      description: 'Анализ текущей ИТ-инфраструктуры и процессов обработки персональных данных',
      duration: '1-2 недели',
      deliverables: ['Отчет об обследовании', 'Перечень ИСПДн', 'Категории обрабатываемых ПДн']
    },
    {
      number: 2,
      title: 'Категорирование',
      description: 'Определение уровня защищенности информационных систем персональных данных',
      duration: '1 неделя',
      deliverables: ['Акты категорирования ИСПДн', 'Определение уровней защищенности']
    },
    {
      number: 3,
      title: 'Моделирование угроз',
      description: 'Разработка модели угроз безопасности персональных данных',
      duration: '2 недели',
      deliverables: ['Модель угроз безопасности ПДн', 'Актуальные угрозы для каждой ИСПДн']
    },
    {
      number: 4,
      title: 'Разработка документации',
      description: 'Подготовка полного комплекта организационно-распорядительной документации',
      duration: '2-3 недели',
      deliverables: ['Политика ОПДн', 'Положения и инструкции', 'Приказы и регламенты']
    },
    {
      number: 5,
      title: 'Подбор и внедрение СЗИ',
      description: 'Выбор, поставка и настройка сертифицированных средств защиты информации',
      duration: '3-4 недели',
      deliverables: ['Подобранные СЗИ', 'Установка и настройка', 'Акты ввода в эксплуатацию']
    },
    {
      number: 6,
      title: 'Аттестация (при необходимости)',
      description: 'Проведение аттестационных испытаний для УЗ-1 и УЗ-2',
      duration: '2-3 недели',
      deliverables: ['Аттестат соответствия', 'Протоколы испытаний']
    },
    {
      number: 7,
      title: 'Уведомление Роскомнадзора',
      description: 'Подготовка и подача уведомления в Роскомнадзор',
      duration: '1 неделя',
      deliverables: ['Уведомление об обработке ПДн', 'Подтверждение от РКН']
    },
    {
      number: 8,
      title: 'Обучение персонала',
      description: 'Проведение обучения сотрудников требованиям защиты ПДн',
      duration: '1-2 дня',
      deliverables: ['Обученный персонал', 'Сертификаты о прохождении обучения']
    }
  ];

  const documents = [
    {
      category: 'Основные документы',
      items: [
        'Политика обработки персональных данных',
        'Положение о защите персональных данных',
        'Положение об обработке персональных данных',
        'Перечень информационных систем ПДн'
      ]
    },
    {
      category: 'Технические документы',
      items: [
        'Модель угроз безопасности ПДн',
        'Акты категорирования ИСПДн',
        'Техническое задание на создание систем защиты',
        'Акты классификации ИСПДн'
      ]
    },
    {
      category: 'Организационные документы',
      items: [
        'Приказ о назначении ответственного за ОПДн',
        'Приказ об организации обработки ПДн',
        'Должностные инструкции',
        'Журналы учета и контроля'
      ]
    },
    {
      category: 'Согласия и уведомления',
      items: [
        'Формы согласий на обработку ПДн',
        'Уведомление в Роскомнадзор',
        'Политика конфиденциальности для сайта',
        'Договоры с операторами ПДн'
      ]
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Полное соответствие ФЗ-152',
      description: 'Гарантируем соблюдение всех требований законодательства о персональных данных'
    },
    {
      icon: 'FileCheck',
      title: 'Готовность к проверкам',
      description: 'Вся документация и системы защиты подготовлены для успешного прохождения проверок РКН'
    },
    {
      icon: 'Award',
      title: 'Опыт 500+ проектов',
      description: 'Успешно реализованные проекты защиты ПДн для компаний всех масштабов'
    },
    {
      icon: 'Users',
      title: 'Аккредитованные эксперты',
      description: 'В штате специалисты с сертификатами ФСТЭК и многолетним опытом'
    },
    {
      icon: 'Headphones',
      title: 'Техподдержка 24/7',
      description: 'Постоянная поддержка и консультации по всем вопросам защиты ПДн'
    },
    {
      icon: 'TrendingDown',
      title: 'Минимизация рисков',
      description: 'Защита от штрафов до 300 000 ₽ и репутационных потерь'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Lock" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">Защита персональных данных</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Комплексные услуги по приведению обработки персональных данных в соответствие с требованиями ФЗ-152
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="Clock" size={20} />
                  <span>От 4 недель</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="CheckCircle2" size={20} />
                  <span>Под ключ</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="Award" size={20} />
                  <span>Гарантия результата</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Icon name="AlertTriangle" className="text-red-500 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Штрафы за несоблюдение ФЗ-152</h3>
                  <p className="text-gray-700 mb-3">
                    За нарушение требований законодательства о персональных данных предусмотрены:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                      <span><strong>Юридические лица:</strong> штраф от 100 000 до 300 000 ₽</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                      <span><strong>Должностные лица:</strong> штраф от 10 000 до 20 000 ₽</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                      <span><strong>Уголовная ответственность:</strong> при утечках данных</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Этапы реализации проекта</h2>

            <div className="space-y-6 mb-16">
              {stages.map((stage, idx) => (
                <Card key={idx} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-2xl">{stage.number}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <CardTitle className="text-xl text-secondary">{stage.title}</CardTitle>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            {stage.duration}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-4">{stage.description}</p>
                        <div>
                          <p className="text-sm font-semibold text-secondary mb-2">Результаты этапа:</p>
                          <div className="flex flex-wrap gap-2">
                            {stage.deliverables.map((item, dIdx) => (
                              <span key={dIdx} className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                <Icon name="Check" size={12} />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Комплект документации</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
              {documents.map((doc, idx) => (
                <Card key={idx} className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-secondary flex items-center gap-2">
                      <Icon name="FolderOpen" className="text-primary" size={20} />
                      {doc.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {doc.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Icon name="FileText" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Преимущества работы с нами</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
              {advantages.map((adv, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={adv.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-secondary mb-3">{adv.title}</h3>
                  <p className="text-sm text-gray-700">{adv.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Получите бесплатный аудит соответствия ФЗ-152</h2>
              <p className="text-xl mb-6 text-blue-100">
                Узнайте текущий статус вашей компании и что нужно сделать для соответствия требованиям
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Заказать аудит
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Скачать чек-лист
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PersonalData;