import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Clients = () => {
  const sectors = [
    {
      name: 'Банки и финансы',
      icon: 'Building',
      count: 45,
      clients: [
        'ПАО "Сбербанк"',
        'АО "Альфа-Банк"',
        'ПАО "ВТБ"',
        'АО "Тинькофф Банк"',
        'ПАО "Промсвязьбанк"',
        'АО "Райффайзенбанк"'
      ]
    },
    {
      name: 'Государственный сектор',
      icon: 'Landmark',
      count: 38,
      clients: [
        'Министерство промышленности и торговли РФ',
        'Правительство Московской области',
        'ФНС России',
        'Пенсионный фонд РФ',
        'Росреестр',
        'Министерство здравоохранения РФ'
      ]
    },
    {
      name: 'Промышленность',
      icon: 'Factory',
      count: 52,
      clients: [
        'АО "Газпром нефть"',
        'ПАО "ЛУКОЙЛ"',
        'ПАО "Северсталь"',
        'ГК "Росатом"',
        'АО "СУЭК"',
        'ПАО "Татнефть"'
      ]
    },
    {
      name: 'Энергетика',
      icon: 'Zap',
      count: 28,
      clients: [
        'ПАО "Россети"',
        'АО "Мосэнерго"',
        'ПАО "ФСК ЕЭС"',
        'ПАО "Интер РАО"',
        'ПАО "РусГидро"'
      ]
    },
    {
      name: 'Телекоммуникации',
      icon: 'Wifi',
      count: 22,
      clients: [
        'ПАО "Ростелеком"',
        'ПАО "МегаФон"',
        'ПАО "МТС"',
        'ПАО "ВымпелКом"',
        'АО "ЭР-Телеком"'
      ]
    },
    {
      name: 'Транспорт и логистика',
      icon: 'Truck',
      count: 31,
      clients: [
        'АО "РЖД"',
        'ФГУП "Почта России"',
        'ПАО "Аэрофлот"',
        'АО "ГТЛК"',
        'ГК "Автодор"'
      ]
    },
    {
      name: 'Ритейл',
      icon: 'ShoppingCart',
      count: 19,
      clients: [
        'X5 Retail Group',
        'ПАО "Магнит"',
        'ООО "Лента"',
        'ООО "Метро Кэш энд Керри"',
        'АО "Дикси Групп"'
      ]
    },
    {
      name: 'Медицина и фармацевтика',
      icon: 'Heart',
      count: 24,
      clients: [
        'ФГБУ "НМИЦ онкологии"',
        'ГК "Медси"',
        'АО "Фармстандарт"',
        'ГК "Мать и дитя"',
        'Сеть клиник "СМ-Клиника"'
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
                <h1 className="text-4xl font-bold">Наши клиенты</h1>
              </div>
              <p className="text-xl text-blue-100">
                Более 250 компаний и организаций доверяют нам защиту своей информации
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">География проектов</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                За 15 лет работы мы реализовали более 500 проектов в различных отраслях экономики. Среди наших клиентов — крупнейшие российские компании, государственные структуры и организации малого и среднего бизнеса.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">250+</div>
                <p className="text-muted-foreground">Постоянных клиентов</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Реализованных проектов</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">35</div>
                <p className="text-muted-foreground">Регионов России</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Повторных обращений</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Клиенты по отраслям</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {sectors.map((sector, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={sector.icon as any} className="text-primary" size={24} />
                        </div>
                        <CardTitle className="text-xl text-secondary">{sector.name}</CardTitle>
                      </div>
                      <Badge variant="secondary">{sector.count} клиентов</Badge>
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

            <h2 className="text-3xl font-bold text-secondary mb-8">Кейсы наших проектов</h2>
            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={study.icon as any} className="text-primary" size={28} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <CardTitle className="text-xl text-secondary">{study.client}</CardTitle>
                          <Badge variant="outline">{study.industry}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">{study.task}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Решение:</h4>
                        <p className="text-gray-700 text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Результат:</h4>
                        <p className="text-gray-700 text-sm">{study.result}</p>
                      </div>
                      <div className="flex flex-wrap gap-6 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" className="text-muted-foreground" size={16} />
                          <span className="text-sm text-gray-700">{study.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Users" className="text-muted-foreground" size={16} />
                          <span className="text-sm text-gray-700">{study.team}</span>
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
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
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
