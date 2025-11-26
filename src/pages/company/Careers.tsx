import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Careers = () => {
  useSEO(SEO_CONFIGS.company.about);
  const vacancies = [
    {
      title: 'Специалист по аттестации объектов информатизации',
      level: 'Middle / Senior',
      type: 'Полная занятость',
      location: 'Москва / Гибрид',
      salary: 'от 150 000 ₽',
      requirements: [
        'Опыт работы в области аттестации от 2 лет',
        'Знание требований ФСТЭК и ФСБ России',
        'Опыт разработки технической документации',
        'Навыки проведения аттестационных испытаний'
      ],
      responsibilities: [
        'Проведение аттестации информационных систем',
        'Разработка проектной и эксплуатационной документации',
        'Испытания средств защиты информации',
        'Взаимодействие с регуляторами'
      ],
      icon: 'Shield',
      urgent: true
    },
    {
      title: 'Аудитор информационной безопасности',
      level: 'Middle',
      type: 'Полная занятость',
      location: 'Москва / Удаленно',
      salary: 'от 130 000 ₽',
      requirements: [
        'Опыт аудита ИБ от 1 года',
        'Знание стандартов ISO 27001, ФЗ-152',
        'Навыки анализа рисков ИБ',
        'Умение работать с документацией'
      ],
      responsibilities: [
        'Проведение аудитов информационной безопасности',
        'Анализ соответствия требованиям регуляторов',
        'Оценка рисков информационной безопасности',
        'Подготовка отчетов и рекомендаций'
      ],
      icon: 'FileCheck',
      urgent: false
    },
    {
      title: 'Инженер по внедрению СЗИ',
      level: 'Junior / Middle',
      type: 'Полная занятость',
      location: 'Москва',
      salary: 'от 100 000 ₽',
      requirements: [
        'Базовые знания ОС Windows/Linux',
        'Понимание принципов работы сетей',
        'Желание развиваться в области ИБ',
        'Готовность к командировкам'
      ],
      responsibilities: [
        'Установка и настройка средств защиты информации',
        'Техническая поддержка клиентов',
        'Участие в проектах по внедрению СЗИ',
        'Обучение пользователей'
      ],
      icon: 'Settings',
      urgent: true
    },
    {
      title: 'Специалист по защите персональных данных',
      level: 'Middle',
      type: 'Полная занятость',
      location: 'Москва / Гибрид',
      salary: 'от 120 000 ₽',
      requirements: [
        'Опыт работы с ФЗ-152 от 1 года',
        'Знание требований ФСТЭК и Роскомнадзора',
        'Опыт разработки ОРД',
        'Навыки консультирования клиентов'
      ],
      responsibilities: [
        'Консультирование по вопросам защиты ПДн',
        'Разработка организационно-распорядительной документации',
        'Помощь в уведомлении Роскомнадзора',
        'Сопровождение при проверках'
      ],
      icon: 'Lock',
      urgent: false
    },
    {
      title: 'Пентестер',
      level: 'Middle / Senior',
      type: 'Полная занятость',
      location: 'Москва / Удаленно',
      salary: 'от 180 000 ₽',
      requirements: [
        'Опыт проведения тестов на проникновение от 2 лет',
        'Знание методологий OWASP, PTES',
        'Навыки работы с Kali Linux, Metasploit, Burp Suite',
        'Опыт анализа защищенности веб-приложений'
      ],
      responsibilities: [
        'Тестирование на проникновение',
        'Анализ защищенности приложений и инфраструктуры',
        'Подготовка отчетов о выявленных уязвимостях',
        'Консультирование клиентов'
      ],
      icon: 'Search',
      urgent: false
    }
  ];

  const benefits = [
    {
      title: 'Конкурентная зарплата',
      description: 'Достойный уровень оплаты труда с прозрачной системой премирования',
      icon: 'Wallet'
    },
    {
      title: 'Профессиональный рост',
      description: 'Обучение и сертификация за счет компании, участие в крупных проектах',
      icon: 'TrendingUp'
    },
    {
      title: 'Гибкий график',
      description: 'Возможность удаленной работы и гибридного формата',
      icon: 'Clock'
    },
    {
      title: 'ДМС',
      description: 'Добровольное медицинское страхование для сотрудников',
      icon: 'Heart'
    },
    {
      title: 'Оборудование',
      description: 'Современная техника и софт для эффективной работы',
      icon: 'Laptop'
    },
    {
      title: 'Корпоративная культура',
      description: 'Дружный коллектив, тимбилдинги и корпоративные мероприятия',
      icon: 'Users'
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
                  <Icon name="Briefcase" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold"Вакансии</h1>
              </div>
              <p className="text-xl text-blue-100">
                Присоединяйтесь к команде профессионалов в области информационной безопасности
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Почему стоит работать у нас</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Мы создаем условия для профессионального роста и развития каждого сотрудника. Наша команда — это эксперты, которые работают над интересными проектами для крупнейших российских компаний.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-gray-200 text-center">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon as any} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-lg text-secondary">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Открытые вакансии</h2>
            <p className="text-gray-700 mb-8">
              Мы ищем специалистов с различным уровнем подготовки — от начинающих до опытных профессионалов. Если вы не нашли подходящую вакансию, отправьте резюме на <a href="mailto:hr@security-center.ru" className="text-primary hover:underline">hr@security-center.ru</a> — мы рассмотрим его для будущих позиций.
            </p>

            <div className="space-y-6">
              {vacancies.map((vacancy, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4 flex-grow">
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={vacancy.icon as any} className="text-primary" size={28} />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl text-secondary">{vacancy.title}</CardTitle>
                            {vacancy.urgent && (
                              <Badge className="bg-red-100 text-red-700">Срочно</Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline">{vacancy.level}</Badge>
                            <Badge variant="outline">{vacancy.type}</Badge>
                            <Badge variant="outline">{vacancy.location}</Badge>
                          </div>
                          <CardDescription className="text-lg font-semibold text-primary">
                            {vacancy.salary}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-secondary mb-3">Требования:</h4>
                        <ul className="space-y-2">
                          {vacancy.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-3">Обязанности:</h4>
                        <ul className="space-y-2">
                          {vacancy.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Button className="bg-primary hover:bg-blue-600">
                        <Icon name="Send" size={16} className="mr-2" />
                        Откликнуться на вакансию
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <Icon name="Users" className="mx-auto mb-6 text-primary" size={48} />
              <h2 className="text-3xl font-bold text-secondary mb-4">Процесс отбора</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold text-secondary mb-2">Отклик</h4>
                <p className="text-sm text-gray-700">Отправка резюме на вакансию</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold text-secondary mb-2">Интервью с HR</h4>
                <p className="text-sm text-gray-700">Знакомство с компанией и вакансией</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold text-secondary mb-2">Техническое интервью</h4>
                <p className="text-sm text-gray-700">Оценка профессиональных компетенций</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  4
                </div>
                <h4 className="font-semibold text-secondary mb-2">Оффер</h4>
                <p className="text-sm text-gray-700">Получение предложения о работе</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">Инициативные отклики</h3>
                <p className="text-gray-700 mb-6">
                  Не нашли подходящую вакансию? Мы всегда рады познакомиться с талантливыми специалистами. Отправьте свое резюме, и мы свяжемся с вами при появлении подходящей позиции.
                </p>
                <a href="mailto:hr@security-center.ru" className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  <Icon name="Mail" size={20} />
                  Отправить резюме
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;