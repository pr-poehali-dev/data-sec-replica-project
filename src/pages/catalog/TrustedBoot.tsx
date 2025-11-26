import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const TrustedBoot = () => {
  useSEO(SEO_CONFIGS.catalog.trustedBoot);
  const solutions = [
    {
      name: 'Аккорд-АМДЗ',
      vendor: 'НПО "Эшелон"',
      description: 'Аппаратно-программное средство доверенной загрузки для обеспечения контроля целостности',
      features: [
        'Контроль целостности ПО и данных',
        'Доверенная загрузка ОС',
        'Двухфакторная аутентификация',
        'Защита от буткитов и руткитов',
        'Контроль конфигурации системы',
        'Аудит загрузки системы'
      ],
      certification: 'ФСТЭК до класса 1Б, ФСБ',
      formFactor: 'PCI-E карта',
      recommended: true
    },
    {
      name: 'Страж NT',
      vendor: 'Код Безопасности',
      description: 'Программно-аппаратный комплекс доверенной загрузки и контроля целостности',
      features: [
        'Доверенная загрузка операционной системы',
        'Контроль целостности файлов и реестра',
        'Парольная и ключевая аутентификация',
        'Защита от изменений загрузочного сектора',
        'Журналирование событий',
        'Удаленное управление'
      ],
      certification: 'ФСТЭК до класса 1В',
      formFactor: 'USB-токен, PCI-карта',
      recommended: false
    },
    {
      name: 'ViPNet [Depo ST]',
      vendor: 'ИнфоТеКС',
      description: 'Программно-аппаратный модуль доверенной загрузки в составе решений ViPNet',
      features: [
        'Контроль целостности загрузочных файлов',
        'Доверенная загрузка с аппаратным модулем',
        'Интеграция с криптосистемой ViPNet',
        'Аутентификация пользователя',
        'Защита загрузчика ОС',
        'Контроль подключения устройств'
      ],
      certification: 'ФСТЭК, ФСБ',
      formFactor: 'USB-токен',
      recommended: false
    }
  ];

  const threats = [
    {
      icon: 'Bug',
      title: 'Буткиты',
      description: 'Вредоносное ПО, заражающее загрузочный сектор и запускающееся до операционной системы'
    },
    {
      icon: 'AlertTriangle',
      title: 'Руткиты',
      description: 'Программы, получающие привилегированный доступ к системе и скрывающие своё присутствие'
    },
    {
      icon: 'FileX',
      title: 'Модификация системных файлов',
      description: 'Несанкционированное изменение критичных компонентов операционной системы'
    },
    {
      icon: 'Key',
      title: 'Обход аутентификации',
      description: 'Попытки получения доступа к системе в обход установленных механизмов защиты'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Контроль при загрузке',
      description: 'Аппаратный модуль перехватывает управление при включении компьютера до загрузки ОС'
    },
    {
      step: 2,
      title: 'Проверка целостности',
      description: 'Вычисляются и сравниваются контрольные суммы системных файлов и загрузчика'
    },
    {
      step: 3,
      title: 'Аутентификация пользователя',
      description: 'Требуется ввод пароля или использование ключевого носителя'
    },
    {
      step: 4,
      title: 'Передача управления ОС',
      description: 'При успешной проверке управление передается операционной системе'
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
                  <Icon name="ShieldCheck" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Средства доверенной загрузки</h1>
              </div>
              <p className="text-xl text-blue-100">
                Программно-аппаратные комплексы для контроля целостности и обеспечения безопасной загрузки операционной системы
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Зачем нужны средства доверенной загрузки?</h3>
                  <p className="text-gray-700">
                    Средства доверенной загрузки (СДЗ) обеспечивают контроль целостности программного обеспечения 
                    и защиту от несанкционированной модификации системных файлов. Требуются для ИСПДн УЗ-1 и УЗ-2, 
                    а также для систем обработки государственной тайны.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">От каких угроз защищают СДЗ</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {threats.map((threat, idx) => (
                <div key={idx} className="bg-white border-2 border-red-200 rounded-lg p-6 text-center">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={threat.icon as any} className="text-red-600" size={28} />
                  </div>
                  <h3 className="font-bold text-secondary mb-3">{threat.title}</h3>
                  <p className="text-sm text-gray-700">{threat.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Как это работает</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {howItWorks.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-secondary mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                  {idx < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <Icon name="ArrowRight" className="text-primary" size={24} />
                    </div>
                  )}
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
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <CardTitle className="text-2xl text-secondary">{solution.name}</CardTitle>
                          {solution.recommended && (
                            <Badge className="bg-primary">Рекомендуем</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-medium mb-2">{solution.vendor}</p>
                        <p className="text-gray-700">{solution.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
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
                            <Icon name="Cpu" className="text-blue-600" size={20} />
                            <h4 className="font-semibold text-secondary">Форм-фактор</h4>
                          </div>
                          <p className="text-sm text-gray-700">{solution.formFactor}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <button className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Узнать стоимость
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white border-2 border-primary rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Требования регуляторов</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary">УЗ-1</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-semibold">Обязательно</span> использование сертифицированных СДЗ класса не ниже КС2
                  </p>
                  <p className="text-xs text-gray-600">
                    Биометрические ПДн, специальные категории более 100 000 субъектов
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary">УЗ-2</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-semibold">Обязательно</span> использование сертифицированных СДЗ класса не ниже КС3
                  </p>
                  <p className="text-xs text-gray-600">
                    Специальные категории до 100 000 субъектов или иные более 100 000
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary">УЗ-3</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-semibold">Рекомендуется</span> использование СДЗ для повышения уровня защиты
                  </p>
                  <p className="text-xs text-gray-600">
                    Иные категории ПДн до 100 000 субъектов
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary">УЗ-4</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-semibold">Не требуется</span> использование СДЗ
                  </p>
                  <p className="text-xs text-gray-600">
                    Общедоступные ПДн
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary to-blue-900 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Поставка и внедрение СДЗ под ключ</h2>
              <p className="text-xl mb-6 text-blue-100">
                Поможем выбрать оптимальное решение, выполним поставку оборудования и настройку системы
              </p>
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Заказать консультацию
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrustedBoot;