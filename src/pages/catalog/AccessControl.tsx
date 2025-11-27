import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const AccessControl = () => {
  useSEO(SEO_CONFIGS.catalog.accessControl);
  const solutions = [
    {
      name: 'Secret Net Studio',
      vendor: 'Код Безопасности',
      description: 'Комплексная система защиты конфиденциальной информации от утечек и несанкционированного доступа',
      features: [
        'Разграничение доступа к файлам и папкам',
        'Контроль портов и устройств',
        'Шифрование дисков и съемных носителей',
        'Персональный МЭ и HIPS',
        'Контроль печати',
        'Аудит действий пользователей'
      ],
      certification: 'ФСТЭК до класса 1Г, ФСБ',
      compatibility: 'Windows',
      recommended: true
    },
    {
      name: 'Aladdin R.D. КриптоПро',
      vendor: 'Aladdin R.D.',
      description: 'Решение для защиты информации от НСД на рабочих станциях и серверах',
      features: [
        'Мандатное и дискреционное разграничение доступа',
        'Замкнутая программная среда',
        'Контроль целостности системы',
        'Регистрация событий безопасности',
        'Идентификация и аутентификация',
        'Поддержка смарт-карт и токенов'
      ],
      certification: 'ФСТЭК до класса 1Б, ФСБ',
      compatibility: 'Windows, Linux',
      recommended: false
    },
    {
      name: 'Dallas Lock',
      vendor: 'Конфидент',
      description: 'Средство защиты информации от несанкционированного доступа для Windows',
      features: [
        'Дискреционное управление доступом',
        'Мандатное управление доступом',
        'Управление потоками информации',
        'Аудит событий безопасности',
        'Контроль целостности',
        'Замкнутая программная среда'
      ],
      certification: 'ФСТЭК до класса 1В',
      compatibility: 'Windows',
      recommended: false
    }
  ];

  const protectionLevels = [
    {
      level: 'УЗ-1',
      color: 'red',
      requirements: 'Требуется СЗИ от НСД класса 1Б и выше',
      suitable: ['Secret Net Studio', 'Aladdin R.D.']
    },
    {
      level: 'УЗ-2',
      color: 'orange',
      requirements: 'Требуется СЗИ от НСД класса 1В и выше',
      suitable: ['Secret Net Studio', 'Aladdin R.D.', 'Dallas Lock']
    },
    {
      level: 'УЗ-3',
      color: 'yellow',
      requirements: 'Требуется СЗИ от НСД класса 1Г и выше',
      suitable: ['Secret Net Studio', 'Aladdin R.D.', 'Dallas Lock']
    }
  ];

  const capabilities = [
    {
      icon: 'Lock',
      title: 'Контроль доступа',
      description: 'Мандатное и дискреционное разграничение прав доступа к файлам, папкам и ресурсам системы'
    },
    {
      icon: 'Usb',
      title: 'Контроль устройств',
      description: 'Управление подключением USB-накопителей, принтеров и других периферийных устройств'
    },
    {
      icon: 'FileKey',
      title: 'Шифрование данных',
      description: 'Прозрачное шифрование файлов, папок, дисков и съемных носителей информации'
    },
    {
      icon: 'Eye',
      title: 'Аудит событий',
      description: 'Регистрация и анализ всех действий пользователей для расследования инцидентов'
    },
    {
      icon: 'ShieldAlert',
      title: 'Контроль целостности',
      description: 'Мониторинг изменений в системных файлах и критичных компонентах ОС'
    },
    {
      icon: 'UserCheck',
      title: 'Усиленная аутентификация',
      description: 'Поддержка токенов, смарт-карт и биометрических устройств'
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
                <h1 className="text-2xl md:text-4xl font-bold">Защита информации от НСД</h1>
              </div>
              <p className="text-xl text-blue-100">
                Сертифицированные средства контроля доступа и защиты конфиденциальной информации от несанкционированного доступа
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Icon name="AlertCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Обязательное требование</h3>
                  <p className="text-gray-700">
                    В соответствии с приказом ФСТЭК России № 21, для информационных систем персональных данных 
                    УЗ-1, УЗ-2 и УЗ-3 обязательно применение сертифицированных средств защиты информации от 
                    несанкционированного доступа. Класс защиты СЗИ от НСД определяется уровнем защищенности ИСПДн.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Соответствие уровням защищенности</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
              {protectionLevels.map((level, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white border-2 rounded-lg p-6 ${
                    level.color === 'red' ? 'border-red-400' :
                    level.color === 'orange' ? 'border-orange-400' :
                    'border-yellow-400'
                  }`}
                >
                  <div className={`inline-block px-4 py-2 rounded-lg font-bold text-white mb-4 ${
                    level.color === 'red' ? 'bg-red-500' :
                    level.color === 'orange' ? 'bg-orange-500' :
                    'bg-yellow-600'
                  }`}>
                    {level.level}
                  </div>
                  <p className="text-sm font-semibold text-secondary mb-3">{level.requirements}</p>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600 font-medium">Подходящие решения:</p>
                    {level.suitable.map((solution, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-green-600 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Сертифицированные решения</h2>

            <div className="space-y-6 mb-16">
              {solutions.map((solution, idx) => (
                <Card 
                  key={idx} 
                  className={`border-l-4 hover:shadow-lg transition-shadow ${
                    solution.recommended ? 'border-primary bg-blue-50/30' : 'border-gray-300'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl text-secondary">{solution.name}</CardTitle>
                          {solution.recommended && (
                            <Badge className="bg-primary">Рекомендуем</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-medium mb-2">{solution.vendor}</p>
                        <p className="text-gray-700">{solution.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
                      <div>
                        <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-primary" size={20} />
                          Функциональные возможности
                        </h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                              <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Award" className="text-green-600" size={20} />
                            <h4 className="font-semibold text-secondary">Сертификация</h4>
                          </div>
                          <p className="text-sm text-gray-700">{solution.certification}</p>
                        </div>

                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Laptop" className="text-blue-600" size={20} />
                            <h4 className="font-semibold text-secondary">Платформы</h4>
                          </div>
                          <p className="text-sm text-gray-700">{solution.compatibility}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+79015000078" className="inline-block w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                      Запросить коммерческое предложение
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Основные возможности</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {capabilities.map((capability, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={capability.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-secondary mb-3">{capability.title}</h3>
                  <p className="text-sm text-gray-700">{capability.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-secondary to-blue-900 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Комплексная защита вашей инфраструктуры</h2>
              <p className="text-xl mb-6 text-blue-100">
                Поможем выбрать, внедрить и настроить систему защиты от НСД в соответствии с требованиями регуляторов
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Получить консультацию
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

export default AccessControl;