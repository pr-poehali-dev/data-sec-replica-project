import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Firewall = () => {
  useSEO(SEO_CONFIGS.catalog.firewall);
  const solutions = [
    {
      name: 'UserGate',
      vendor: 'Entensys',
      description: 'Комплексное решение для защиты периметра сети с функциями NGFW',
      features: [
        'Межсетевое экранирование 7-го уровня',
        'IPS/IDS - обнаружение и предотвращение вторжений',
        'VPN (IPsec, L2TP, PPTP, OpenVPN)',
        'Контентная фильтрация и веб-контроль',
        'Антивирусная проверка трафика',
        'DPI - глубокий анализ пакетов',
        'Балансировка каналов',
        'Captive-портал'
      ],
      certification: 'ФСТЭК до класса КС1, ФСБ',
      deployment: 'Программное, аппаратное',
      recommended: true
    },
    {
      name: 'Континент 4',
      vendor: 'НПО "Криптон"',
      description: 'Российская система защиты периметра сети с криптографическими функциями',
      features: [
        'Межсетевое экранирование',
        'VPN на базе российской криптографии',
        'Контроль приложений',
        'Фильтрация по IP, портам, протоколам',
        'NAT и маршрутизация',
        'Обнаружение сетевых атак',
        'Кластеризация и отказоустойчивость',
        'Интеграция с PKI'
      ],
      certification: 'ФСТЭК, ФСБ, Гостехкомиссия',
      deployment: 'Программное, программно-аппаратное',
      recommended: false
    },
    {
      name: 'Check Point',
      vendor: 'Check Point Software',
      description: 'Мировой лидер в области сетевой безопасности с продвинутыми функциями защиты',
      features: [
        'NGFW - межсетевой экран нового поколения',
        'Advanced Threat Prevention',
        'SandBlast - песочница для анализа файлов',
        'Application Control',
        'URL Filtering',
        'Anti-Bot и Anti-Virus',
        'IPSec VPN',
        'Centralized Management'
      ],
      certification: 'ФСТЭК до класса КС2',
      deployment: 'Аппаратное, виртуальное, облачное',
      recommended: false
    }
  ];

  const capabilities = [
    {
      icon: 'Shield',
      title: 'Фильтрация трафика',
      description: 'Контроль входящих и исходящих соединений на основе политик безопасности'
    },
    {
      icon: 'Eye',
      title: 'Обнаружение вторжений',
      description: 'Мониторинг сетевого трафика и выявление подозрительной активности'
    },
    {
      icon: 'Lock',
      title: 'VPN-туннели',
      description: 'Создание защищенных каналов связи между удаленными объектами'
    },
    {
      icon: 'Globe',
      title: 'Веб-фильтрация',
      description: 'Контроль доступа к веб-ресурсам и фильтрация контента'
    },
    {
      icon: 'Activity',
      title: 'Балансировка нагрузки',
      description: 'Распределение трафика между несколькими каналами связи'
    },
    {
      icon: 'FileSearch',
      title: 'Глубокий анализ пакетов',
      description: 'DPI для детального исследования содержимого сетевых пакетов'
    }
  ];

  const deploymentScenarios = [
    {
      title: 'Защита периметра',
      description: 'Размещение МЭ на границе внутренней сети и интернета для защиты от внешних угроз',
      icon: 'Network'
    },
    {
      title: 'Сегментация сети',
      description: 'Разделение внутренней сети на сегменты с контролем трафика между ними',
      icon: 'GitBranch'
    },
    {
      title: 'Удаленный доступ',
      description: 'Организация защищенного VPN-доступа для удаленных сотрудников и филиалов',
      icon: 'Users'
    },
    {
      title: 'DMZ-зона',
      description: 'Создание демилитаризованной зоны для публичных сервисов',
      icon: 'Server'
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
                  <Icon name="Network" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">Межсетевое экранирование</h1>
              </div>
              <p className="text-xl text-blue-100">
                Сертифицированные межсетевые экраны для защиты периметра сети от внешних и внутренних угроз
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
                  <h3 className="text-lg font-semibold text-secondary mb-2">Требования ФСТЭК России</h3>
                  <p className="text-gray-700">
                    Для информационных систем персональных данных УЗ-1, УЗ-2 и УЗ-3 обязательно применение 
                    сертифицированных межсетевых экранов. Класс защиты МЭ должен соответствовать уровню 
                    защищенности ИСПДн. МЭ обеспечивает контроль сетевых соединений и защиту от сетевых атак.
                  </p>
                </div>
              </div>
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
                            <Badge className="bg-primary">Лидер рынка</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-medium mb-2">{solution.vendor}</p>
                        <p className="text-gray-700">{solution.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
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
                            <Icon name="Package" className="text-blue-600" size={20} />
                            <h4 className="font-semibold text-secondary">Варианты поставки</h4>
                          </div>
                          <p className="text-sm text-gray-700">{solution.deployment}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <a href="tel:+79015000078" className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Запросить КП
                      </a>
                      <a href="tel:+79015000078" className="px-6 py-3 bg-white border border-gray-300 text-secondary rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Получить консультацию
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Основные функции МЭ</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
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

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Сценарии применения</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {deploymentScenarios.map((scenario, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={scenario.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-2">{scenario.title}</h3>
                      <p className="text-sm text-gray-700">{scenario.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border-2 border-primary rounded-lg overflow-hidden mb-12">
              <div className="bg-gradient-to-r from-primary to-blue-700 text-white px-6 py-4">
                <h2 className="text-2xl font-bold">Соответствие требованиям регуляторов</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Icon name="FileText" className="text-primary" size={20} />
                      Приказ ФСТЭК № 21
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                        <span>УЗ-1: МЭ класса КС1 или выше</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                        <span>УЗ-2: МЭ класса КС2 или выше</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                        <span>УЗ-3: МЭ класса КС3 или выше</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Icon name="Scale" className="text-primary" size={20} />
                      Требования по КИИ (187-ФЗ)
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                        <span>Обязательное применение МЭ для объектов КИИ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                        <span>Сертификация по требованиям ФСТЭК</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                        <span>Регулярное обновление правил фильтрации</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary to-blue-900 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Полный цикл внедрения межсетевых экранов</h2>
              <p className="text-xl mb-6 text-blue-100">
                От проектирования архитектуры до настройки и поддержки решения
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Консультация эксперта
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Примеры проектов
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

export default Firewall;