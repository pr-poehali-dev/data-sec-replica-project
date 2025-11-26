import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Consulting = () => {
  const services = [
    {
      icon: 'Search',
      title: 'Аудит информационной безопасности',
      description: 'Комплексная оценка текущего состояния ИБ',
      includes: [
        'Анализ инфраструктуры и процессов',
        'Тестирование на проникновение',
        'Оценка рисков',
        'Дорожная карта улучшений'
      ]
    },
    {
      icon: 'FileText',
      title: 'Разработка политик и регламентов',
      description: 'Создание организационно-распорядительной документации',
      includes: [
        'Политика информационной безопасности',
        'Регламенты и процедуры',
        'Должностные инструкции',
        'Планы реагирования на инциденты'
      ]
    },
    {
      icon: 'Target',
      title: 'Оценка и управление рисками',
      description: 'Идентификация и анализ рисков ИБ',
      includes: [
        'Реестр активов',
        'Выявление угроз и уязвимостей',
        'Оценка вероятности и ущерба',
        'План обработки рисков'
      ]
    },
    {
      icon: 'Shield',
      title: 'Построение СУИБ',
      description: 'Внедрение системы управления ИБ по ISO 27001',
      includes: [
        'Gap-анализ',
        'Проектирование СУИБ',
        'Внедрение процессов',
        'Подготовка к сертификации'
      ]
    },
    {
      icon: 'Briefcase',
      title: 'Сопровождение проектов',
      description: 'Экспертная поддержка на всех этапах',
      includes: [
        'Выделенный эксперт',
        'Еженедельные встречи',
        'Контроль выполнения',
        'Консультации 24/7'
      ]
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение и повышение квалификации',
      description: 'Тренинги для специалистов и руководства',
      includes: [
        'Основы ИБ для сотрудников',
        'Курсы для ИБ-специалистов',
        'Security Awareness',
        'Сертификационные программы'
      ]
    }
  ];

  const experts = [
    {
      name: 'Старший консультант',
      experience: '10+ лет',
      achievements: [
        'Реализовано 200+ проектов',
        'Сертификат CISSP, CISM',
        'Эксперт ФСТЭК'
      ]
    },
    {
      name: 'Технический консультант',
      experience: '7+ лет',
      achievements: [
        'Специализация на СЗИ',
        'Опыт внедрения 50+ решений',
        'Сертификаты вендоров'
      ]
    },
    {
      name: 'Юрист по ИБ',
      experience: '5+ лет',
      achievements: [
        'Специализация на ФЗ-152',
        'Опыт судебной практики',
        'Взаимодействие с регуляторами'
      ]
    }
  ];

  const cases = [
    {
      industry: 'Финансовый сектор',
      company: 'Региональный банк',
      task: 'Построение СУИБ и получение сертификата ISO 27001',
      result: 'Успешная сертификация за 8 месяцев, оптимизация процессов ИБ'
    },
    {
      industry: 'Ритейл',
      company: 'Сеть магазинов (500+ точек)',
      task: 'Аудит ИБ и приведение в соответствие с ФЗ-152',
      result: 'Выявлено 43 нарушения, все устранены за 3 месяца, успешная проверка РКН'
    },
    {
      industry: 'Здравоохранение',
      company: 'Медицинский холдинг',
      task: 'Разработка политик ИБ и защита персональных данных пациентов',
      result: 'Комплект из 25 документов, внедрение СЗИ, обучение 300 сотрудников'
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
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Консалтинг и обучение</h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Экспертное сопровождение по всем вопросам информационной безопасности
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="Award" size={20} />
                  <span>Опыт 15+ лет</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="Users" size={20} />
                  <span>30+ экспертов</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Icon name="Briefcase" size={20} />
                  <span>500+ проектов</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Консалтинговые услуги</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {services.map((service, idx) => (
                <Card key={idx} className="border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-lg text-secondary mb-2">{service.title}</CardTitle>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.includes.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Наши эксперты</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {experts.map((expert, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{expert.name}</h3>
                  <p className="text-primary font-semibold mb-4">{expert.experience}</p>
                  <div className="space-y-2">
                    {expert.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-sm text-gray-700 justify-center">
                        <Icon name="Award" className="text-primary flex-shrink-0" size={16} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Кейсы клиентов</h2>

            <div className="space-y-6 mb-16">
              {cases.map((caseItem, idx) => (
                <Card key={idx} className="border-l-4 border-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-xs font-semibold mb-3">
                          {caseItem.industry}
                        </span>
                        <CardTitle className="text-xl text-secondary mb-2">{caseItem.company}</CardTitle>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                          <Icon name="Target" className="text-primary" size={18} />
                          Задача
                        </h4>
                        <p className="text-sm text-gray-700">{caseItem.task}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-green-600" size={18} />
                          Результат
                        </h4>
                        <p className="text-sm text-gray-700">{caseItem.result}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-secondary mb-6 text-center">Форматы работы</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">Разовая консультация</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Экспертная помощь по конкретному вопросу
                  </p>
                  <p className="text-primary font-bold">от 15 000 ₽</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calendar" className="text-purple-600" size={32} />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">Проектное сопровождение</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Работа над конкретной задачей от начала до конца
                  </p>
                  <p className="text-purple-600 font-bold">от 150 000 ₽</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Repeat" className="text-green-600" size={32} />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">Абонентское обслуживание</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Постоянный доступ к экспертам
                  </p>
                  <p className="text-green-600 font-bold">от 50 000 ₽/мес</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Получите бесплатную консультацию эксперта</h2>
              <p className="text-xl mb-6 text-blue-100">
                Обсудим вашу задачу и предложим оптимальное решение
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Записаться на консультацию
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Скачать презентацию
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

export default Consulting;