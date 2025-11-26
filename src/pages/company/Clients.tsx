import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Clients = () => {
  useSEO(SEO_CONFIGS.company.about);
  const sectors = [
    {
      name: 'Банки и финансы',
      icon: 'Building',
      count: 5,
      clients: [
        'ПАО "Сбербанк"',
        'АО "Альфа-Банк"'
      ]
    },
    {
      name: 'Государственный сектор',
      icon: 'Landmark',
      count: 4,
      clients: [
        'Министерство промышленности и торговли РФ',
        'Правительство Московской области'
      ]
    },
    {
      name: 'Промышленность',
      icon: 'Factory',
      count: 5,
      clients: [
        'АО "Газпром нефть"',
        'ПАО "ЛУКОЙЛ"',
        'ПАО "Северсталь"'
      ]
    },
    {
      name: 'Энергетика',
      icon: 'Zap',
      count: 3,
      clients: [
        'ПАО "Россети"',
        'АО "Мосэнерго"'
      ]
    },
    {
      name: 'Телекоммуникации',
      icon: 'Wifi',
      count: 3,
      clients: [
        'ПАО "Ростелеком"',
        'ПАО "МегаФон"'
      ]
    },
    {
      name: 'Транспорт и логистика',
      icon: 'Truck',
      count: 4,
      clients: [
        'АО "РЖД"',
        'ФГУП "Почта России"',
        'ПАО "Аэрофлот"'
      ]
    },
    {
      name: 'Ритейл',
      icon: 'ShoppingCart',
      count: 2,
      clients: [
        'X5 Retail Group',
        'ПАО "Магнит"'
      ]
    },
    {
      name: 'Медицина и фармацевтика',
      icon: 'Heart',
      count: 3,
      clients: [
        'ФГБУ "НМИЦ онкологии"',
        'ГК "Медси"'
      ]
    }
  ];

  const caseStudies = [
    {
      client: 'Крупный федеральный банк',
      industry: 'Банковский сектор',
      task: 'Аттестация автоматизированной банковской системы',
      solution: 'Проведена комплексная аттестация 150+ объектов информатизации АБС по требованиям ЦБ РФ и ФСТЭК России',
      result: 'Получены аттестаты соответствия 1 класса защищенности, обеспечена непрерывность банковских операций',
      duration: '8 месяцев',
      team: '12 специалистов',
      icon: 'Building'
    },
    {
      client: 'Производственное предприятие',
      industry: 'Промышленность',
      task: 'Категорирование и защита объектов КИИ',
      solution: 'Выполнено категорирование 45 объектов КИИ, разработаны и внедрены организационные и технические меры защиты',
      result: 'Обеспечено соответствие требованиям 187-ФЗ, объекты успешно прошли проверку ФСТЭК России',
      duration: '10 месяцев',
      team: '8 специалистов',
      icon: 'Factory'
    },
    {
      client: 'Региональное правительство',
      industry: 'Госсектор',
      task: 'Внедрение ГИС регионального значения',
      solution: 'Проектирование системы защиты, внедрение СЗИ, разработка комплекта документации, проведение аттестационных испытаний',
      result: 'Система аттестована по 3 классу защищенности, введена в промышленную эксплуатацию',
      duration: '6 месяцев',
      team: '6 специалистов',
      icon: 'Landmark'
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
                <h1 className="text-2xl md:text-4xl font-bold">Наши клиенты</h1>
              </div>
              <p className="text-xl text-blue-100">
                Более 30 компаний и организаций доверяют нам защиту своей информации
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">География проектов</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                За 15 лет работы мы реализовали более 100 проектов в различных отраслях экономики. Среди наших клиентов — крупнейшие российские компании, государственные структуры и организации малого и среднего бизнеса.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
              <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">30+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Постоянных клиентов</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-xs md:text-sm text-muted-foreground">Реализованных проектов</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">15</div>
                <p className="text-xs md:text-sm text-muted-foreground">Регионов России</p>
              </div>
              <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-xs md:text-sm text-muted-foreground">Повторных обращений</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">Клиенты по отраслям</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {sectors.map((sector, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={sector.icon as any} className="text-primary" size={20} />
                        </div>
                        <CardTitle className="text-base md:text-xl text-secondary">{sector.name}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="text-xs">{sector.count} клиентов</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {sector.clients.map((client, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                          <span>{client}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">Кейсы наших проектов</h2>
            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={study.icon as any} className="text-primary" size={24} />
                      </div>
                      <div className="flex-grow min-w-0">
                        <CardTitle className="text-base md:text-xl text-secondary mb-2">{study.client}</CardTitle>
                        <Badge variant="outline" className="text-xs mb-3">{study.industry}</Badge>
                        <p className="text-muted-foreground text-xs md:text-sm">{study.task}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 md:space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary text-sm md:text-base mb-2">Решение:</h4>
                        <p className="text-gray-700 text-xs md:text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary text-sm md:text-base mb-2">Результат:</h4>
                        <p className="text-gray-700 text-xs md:text-sm">{study.result}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" className="text-muted-foreground" size={14} />
                          <span className="text-xs md:text-sm text-gray-700">{study.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Users" className="text-muted-foreground" size={14} />
                          <span className="text-xs md:text-sm text-gray-700">{study.team}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <Icon name="MessageSquare" className="mx-auto mb-6 text-primary" size={48} />
              <h2 className="text-3xl font-bold text-secondary mb-6">Отзывы клиентов</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                  <div className="flex items-center gap-2 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Профессиональная команда с глубокой экспертизой. Аттестация прошла в срок, все замечания регулятора были оперативно устранены."
                  </p>
                  <p className="text-sm font-semibold text-secondary">Начальник отдела ИБ</p>
                  <p className="text-xs text-muted-foreground">Крупный федеральный банк</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 text-left">
                  <div className="flex items-center gap-2 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Отличное понимание специфики КИИ. Помогли пройти весь путь от категорирования до успешной проверки ФСТЭК."
                  </p>
                  <p className="text-sm font-semibold text-secondary">Директор по ИТ</p>
                  <p className="text-xs text-muted-foreground">Производственное предприятие</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;