import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const News = () => {
  useSEO(SEO_CONFIGS.info.news);
  const news = [
    {
      date: '20 ноября 2024',
      type: 'Законодательство',
      title: 'Роскомнадзор ужесточает требования к операторам персональных данных',
      excerpt: 'С 1 января 2025 года вступают в силу новые требования к порядку уведомления регулятора об инцидентах безопасности. Операторы обязаны будут сообщать о любых утечках данных в течение 24 часов.',
      isImportant: true
    },
    {
      date: '18 ноября 2024',
      type: 'Практика',
      title: 'Крупная утечка данных в российской компании: анализ инцидента',
      excerpt: 'Персональные данные более 50 000 клиентов оказались в открытом доступе из-за неправильной настройки облачного хранилища. Роскомнадзор назначил штраф в размере 250 000 рублей.',
      isImportant: false
    },
    {
      date: '15 ноября 2024',
      type: 'Технологии',
      title: 'Новые средства защиты информации получили сертификат ФСТЭК',
      excerpt: 'Российский разработчик представил обновленную версию комплексной системы защиты персональных данных, успешно прошедшую сертификацию для использования в системах УЗ-1 и УЗ-2.',
      isImportant: false
    },
    {
      date: '12 ноября 2024',
      type: 'Аналитика',
      title: 'Статистика проверок Роскомнадзора за III квартал 2024 года',
      excerpt: 'За третий квартал регулятор провел 348 плановых и 127 внеплановых проверок. Выявлено более 1500 нарушений требований ФЗ-152, наложено штрафов на общую сумму 67,5 млн рублей.',
      isImportant: true
    },
    {
      date: '10 ноября 2024',
      type: 'Законодательство',
      title: 'Минцифры предлагает изменить порядок обработки биометрических данных',
      excerpt: 'Министерство цифрового развития подготовило законопроект об упрощении процедуры сбора и использования биометрических персональных данных для государственных услуг.',
      isImportant: false
    },
    {
      date: '8 ноября 2024',
      type: 'Судебная практика',
      title: 'ВС РФ вынес важное решение по спору о согласии на обработку ПДн',
      excerpt: 'Верховный суд подтвердил, что молчание субъекта не может считаться согласием на обработку персональных данных даже при наличии оферты на сайте компании.',
      isImportant: true
    },
    {
      date: '5 ноября 2024',
      type: 'Образование',
      title: 'ФСТЭК запускает бесплатные курсы по защите информации',
      excerpt: 'Федеральная служба по техническому и экспортному контролю открыла регистрацию на онлайн-курсы для специалистов по информационной безопасности.',
      isImportant: false
    },
    {
      date: '1 ноября 2024',
      type: 'Практика',
      title: 'Банки усиливают защиту персональных данных клиентов',
      excerpt: 'Крупнейшие российские банки внедряют дополнительные технологии защиты данных после серии инцидентов в финансовом секторе в 2024 году.',
      isImportant: false
    },
    {
      date: '28 октября 2024',
      type: 'Технологии',
      title: 'Искусственный интеллект в защите персональных данных',
      excerpt: 'Российские разработчики представили систему на базе ИИ для автоматического выявления аномалий при обработке персональных данных.',
      isImportant: false
    },
    {
      date: '25 октября 2024',
      type: 'Законодательство',
      title: 'Росс иностранным компаниям работать с данными россиян',
      excerpt: 'Правительство РФ утвердило новые требования к локализации данных российских пользователей для иностранных IT-компаний.',
      isImportant: true
    }
  ];

  const typeColors: Record<string, string> = {
    'Законодательство': 'bg-blue-100 text-blue-700',
    'Практика': 'bg-green-100 text-green-700',
    'Технологии': 'bg-purple-100 text-purple-700',
    'Аналитика': 'bg-orange-100 text-orange-700',
    'Судебная практика': 'bg-red-100 text-red-700',
    'Образование': 'bg-teal-100 text-teal-700'
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Newspaper" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Новости о ПДн</h1>
              </div>
              <p className="text-xl text-blue-100">
                Актуальные новости в сфере защиты персональных данных и информационной безопасности
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Icon name="Bell" className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Подпишитесь на рассылку новостей</h3>
                  <p className="text-gray-700 mb-4">
                    Получайте самые важные новости об изменениях в законодательстве и практике защиты данных
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                      Подписаться
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {news.map((item, idx) => (
                <Card
                  key={idx}
                  className={`hover:shadow-lg transition-shadow cursor-pointer ${
                    item.isImportant ? 'border-2 border-primary' : 'border-gray-200'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[item.type]}`}>
                          {item.type}
                        </span>
                        {item.isImportant && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                            <Icon name="AlertCircle" size={14} />
                            Важно
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
                        <Icon name="Calendar" size={16} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-secondary hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      Читать полностью
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                <Icon name="RefreshCw" size={20} />
                Загрузить больше новостей
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Категории новостей</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Scale" className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Законодательство</h3>
                <p className="text-sm text-gray-600 mb-3">Изменения в законах и нормативных актах</p>
                <span className="text-blue-600 font-semibold text-sm">42 новости</span>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Практика</h3>
                <p className="text-sm text-gray-600 mb-3">Реальные кейсы и инциденты</p>
                <span className="text-green-600 font-semibold text-sm">38 новостей</span>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Cpu" className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Технологии</h3>
                <p className="text-sm text-gray-600 mb-3">Новые решения и СЗИ</p>
                <span className="text-purple-600 font-semibold text-sm">29 новостей</span>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart3" className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Аналитика</h3>
                <p className="text-sm text-gray-600 mb-3">Обзоры и статистика</p>
                <span className="text-orange-600 font-semibold text-sm">25 новостей</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;