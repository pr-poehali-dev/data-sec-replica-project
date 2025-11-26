import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const History = () => {
  const timeline = [
    {
      year: '2009',
      title: 'Основание компании',
      description: 'Создание Центра Безопасности данных группой экспертов по информационной безопасности. Получение первых лицензий ФСТЭК России.',
      icon: 'Rocket'
    },
    {
      year: '2011',
      title: 'Расширение компетенций',
      description: 'Получение лицензии ФСБ России на деятельность по технической защите конфиденциальной информации. Первые крупные проекты в банковском секторе.',
      icon: 'Award'
    },
    {
      year: '2013',
      title: 'Рост команды',
      description: 'Увеличение штата до 25 специалистов. Открытие учебного центра по информационной безопасности. Реализовано более 100 проектов.',
      icon: 'Users'
    },
    {
      year: '2015',
      title: 'Федеральное присутствие',
      description: 'Открытие региональных представительств в Санкт-Петербурге и Екатеринбурге. Статус авторизованного партнера ведущих производителей СЗИ.',
      icon: 'MapPin'
    },
    {
      year: '2017',
      title: 'Защита КИИ',
      description: 'Становление экспертом по защите критической информационной инфраструктуры. Участие в разработке методических рекомендаций ФСТЭК России.',
      icon: 'Shield'
    },
    {
      year: '2019',
      title: 'Цифровая трансформация',
      description: 'Запуск собственной R&D лаборатории. Разработка автоматизированных систем аудита и мониторинга информационной безопасности.',
      icon: 'Laptop'
    },
    {
      year: '2021',
      title: 'Лидер рынка',
      description: 'Вхождение в топ-10 компаний России по объему выполненных работ в области защиты информации. Реализовано более 400 проектов.',
      icon: 'TrendingUp'
    },
    {
      year: '2024',
      title: 'Сегодня',
      description: 'Команда из 60+ специалистов. Более 500 завершенных проектов. Партнеры ведущих российских и международных вендоров в области ИБ.',
      icon: 'Star'
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
                  <Icon name="Clock" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">История компании</h1>
              </div>
              <p className="text-xl text-blue-100">
                15 лет развития, инноваций и профессионального роста
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
              Путь от стартапа до лидера рынка
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-shrink-0 w-16">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                        <Icon name={item.icon as any} size={28} />
                      </div>
                    </div>
                    
                    <div className="flex-grow pb-8">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl font-bold text-primary">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-secondary mb-3">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Ключевые вехи</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Первый проект в госсекторе</h3>
                </div>
                <p className="text-gray-700 text-sm mb-2">2010 год</p>
                <p className="text-gray-700">
                  Аттестация информационной системы регионального министерства по 1 классу защищенности
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon name="Building" className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Крупнейший банковский проект</h3>
                </div>
                <p className="text-gray-700 text-sm mb-2">2014 год</p>
                <p className="text-gray-700">
                  Аттестация 150+ объектов автоматизированной банковской системы федерального банка
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="Award" className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Премия "Эксперт года"</h3>
                </div>
                <p className="text-gray-700 text-sm mb-2">2018 год</p>
                <p className="text-gray-700">
                  Награда от ФСТЭК России за вклад в развитие отрасли защиты информации
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Защита энергетики</h3>
                </div>
                <p className="text-gray-700 text-sm mb-2">2020 год</p>
                <p className="text-gray-700">
                  Категорирование и защита 45 объектов КИИ крупнейшей энергетической компании
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-secondary to-blue-900 text-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Icon name="Target" className="mx-auto mb-6 text-primary" size={48} />
            <h2 className="text-3xl font-bold mb-6">Наша цель на ближайшие годы</h2>
            <p className="text-lg text-blue-100 mb-8">
              Стать ведущим интегратором решений по информационной безопасности в России, обеспечивая высочайший уровень защиты для критически важных объектов инфраструктуры и создавая инновационные продукты для автоматизации процессов ИБ.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-blue-100">Проектов к 2027 году</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-blue-100">Специалистов в команде</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">TOP-3</div>
                <p className="text-blue-100">На рынке России</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default History;
