import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Antivirus = () => {
  useSEO(SEO_CONFIGS.catalog.antivirus);
  const solutions = [
    {
      name: 'Kaspersky Endpoint Security',
      vendor: 'Лаборатория Касперского',
      description: 'Комплексная защита рабочих станций и серверов от всех видов киберугроз',
      features: [
        'Защита от вирусов, троянов, шифровальщиков',
        'Контроль устройств и приложений',
        'Веб-контроль и защита почты',
        'Технологии машинного обучения',
        'Централизованное управление',
        'Защита от эксплойтов'
      ],
      certification: 'ФСТЭК, ФСБ',
      compatibility: 'Windows, Linux, macOS',
      recommended: true
    },
    {
      name: 'Dr.Web Enterprise Security Suite',
      vendor: 'Dr.Web',
      description: 'Российское решение для защиты корпоративной инфраструктуры',
      features: [
        'Антивирусная защита в режиме реального времени',
        'Защита почтовых серверов',
        'Антиспам и антифишинг',
        'Контроль запуска приложений',
        'Защита виртуальных сред',
        'Интеграция с SIEM-системами'
      ],
      certification: 'ФСТЭК, ФСБ',
      compatibility: 'Windows, Linux, macOS, Android, iOS',
      recommended: false
    },
    {
      name: 'ESET Endpoint Security',
      vendor: 'ESET',
      description: 'Легковесное решение с высокой эффективностью защиты',
      features: [
        'Многоуровневая защита от вредоносного ПО',
        'Защита от программ-вымогателей',
        'HIPS и файервол',
        'Контроль съемных носителей',
        'Веб-контроль',
        'Малая нагрузка на систему'
      ],
      certification: 'ФСТЭК',
      compatibility: 'Windows, Linux, macOS, Android',
      recommended: false
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Сертификация ФСТЭК/ФСБ',
      description: 'Все решения имеют сертификаты для использования в системах защиты персональных данных'
    },
    {
      icon: 'Zap',
      title: 'Высокая производительность',
      description: 'Минимальное влияние на работу систем при максимальной защите'
    },
    {
      icon: 'Monitor',
      title: 'Централизованное управление',
      description: 'Единая консоль для управления защитой всей инфраструктуры'
    },
    {
      icon: 'RefreshCw',
      title: 'Регулярные обновления',
      description: 'Непрерывное обновление антивирусных баз и механизмов защиты'
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
                <h1 className="text-2xl md:text-4xl font-bold">Антивирусная защита</h1>
              </div>
              <p className="text-xl text-blue-100">
                Сертифицированные антивирусные решения для защиты корпоративной инфраструктуры от вредоносного ПО
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
                  <h3 className="text-lg font-semibold text-secondary mb-2">Требования законодательства</h3>
                  <p className="text-gray-700">
                    Согласно требованиям ФСТЭК России, для защиты информационных систем персональных данных 
                    УЗ-1, УЗ-2 и УЗ-3 необходимо использовать сертифицированные антивирусные средства. 
                    Все представленные решения имеют необходимые сертификаты.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Рекомендуемые решения</h2>

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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-primary" size={20} />
                          Основные возможности
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
                            <h4 className="font-semibold text-secondary">Совместимость</h4>
                          </div>
                          <p className="text-sm text-gray-700">{solution.compatibility}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+79015000078" className="inline-block w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                      Получить консультацию
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Преимущества использования</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
              {advantages.map((advantage, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="font-bold text-secondary mb-3">{advantage.title}</h3>
                  <p className="text-sm text-gray-700">{advantage.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Нужна помощь в выборе решения?</h2>
              <p className="text-xl mb-6 text-blue-100">
                Наши эксперты помогут подобрать оптимальное антивирусное решение для вашей инфраструктуры
              </p>
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Связаться с экспертом
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Antivirus;