import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Articles = () => {
  useSEO(SEO_CONFIGS.info.articles);
  const articles = [
    {
      category: 'Технологии',
      date: '15 ноября 2024',
      title: 'Современные методы защиты от кибератак',
      description: 'Обзор актуальных технологий и подходов к защите информационных систем от внешних угроз',
      readTime: '8 мин',
      author: 'Иванов А.С.'
    },
    {
      category: 'Законодательство',
      date: '10 ноября 2024',
      title: 'Изменения в ФЗ-152: что нужно знать в 2024 году',
      description: 'Анализ последних изменений в законодательстве о персональных данных и их влияние на бизнес',
      readTime: '12 мин',
      author: 'Петрова М.И.'
    },
    {
      category: 'Практика',
      date: '5 ноября 2024',
      title: 'Как правильно провести аудит информационной безопасности',
      description: 'Пошаговое руководство по проведению комплексного аудита ИБ в организации',
      readTime: '15 мин',
      author: 'Сидоров П.К.'
    },
    {
      category: 'Аналитика',
      date: '1 ноября 2024',
      title: 'Статистика утечек данных в России за 2024 год',
      description: 'Детальный анализ инцидентов информационной безопасности и тенденции развития угроз',
      readTime: '10 мин',
      author: 'Козлов Д.В.'
    },
    {
      category: 'Технологии',
      date: '28 октября 2024',
      title: 'Внедрение DLP-систем: опыт крупных компаний',
      description: 'Практические кейсы внедрения систем предотвращения утечек данных в российских организациях',
      readTime: '20 мин',
      author: 'Морозова О.Н.'
    },
    {
      category: 'Обучение',
      date: '25 октября 2024',
      title: 'Повышение осведомленности сотрудников в области ИБ',
      description: 'Эффективные методы обучения персонала основам информационной безопасности',
      readTime: '7 мин',
      author: 'Волков И.С.'
    },
    {
      category: 'Практика',
      date: '20 октября 2024',
      title: 'Построение системы управления инцидентами ИБ',
      description: 'Рекомендации по созданию эффективной системы реагирования на инциденты безопасности',
      readTime: '18 мин',
      author: 'Новикова Е.А.'
    },
    {
      category: 'Законодательство',
      date: '15 октября 2024',
      title: 'Требования к операторам критической информационной инфраструктуры',
      description: 'Полный обзор законодательных требований к субъектам КИИ и порядок их выполнения',
      readTime: '14 мин',
      author: 'Смирнов В.П.'
    }
  ];

  const categories = ['Все', 'Технологии', 'Законодательство', 'Практика', 'Аналитика', 'Обучение'];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Статьи и публикации</h1>
              </div>
              <p className="text-xl text-blue-100">
                Экспертные материалы по различным аспектам информационной безопасности
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex gap-3 mb-8 flex-wrap">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    idx === 0
                      ? 'bg-primary text-white'
                      : 'bg-white text-secondary hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-secondary hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="User" size={16} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        Читать
                        <Icon name="ArrowRight" size={16} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button className="px-6 py-3 bg-white border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                Загрузить еще статьи
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Популярные темы</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Защита ПДн</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Материалы о соответствии требованиям ФЗ-152 и организации защиты персональных данных
                </p>
                <a href="#" className="text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Смотреть статьи
                  <Icon name="ArrowRight" size={16} />
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Network" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Кибербезопасность</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Актуальные угрозы, методы защиты и практические рекомендации по обеспечению безопасности
                </p>
                <a href="#" className="text-purple-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Смотреть статьи
                  <Icon name="ArrowRight" size={16} />
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileCheck" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Аттестация</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Процедура аттестации, требования регуляторов и практические аспекты подготовки
                </p>
                <a href="#" className="text-green-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Смотреть статьи
                  <Icon name="ArrowRight" size={16} />
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

export default Articles;