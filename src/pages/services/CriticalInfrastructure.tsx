import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CriticalInfrastructure = () => {
  const services = [
    {
      icon: 'Shield',
      title: 'Обеспечение безопасности КИИ',
      description: 'Комплексные услуги по обеспечению безопасности объектов критической информационной инфраструктуры в соответствии с требованиями 187-ФЗ',
      features: [
        'Создание и внедрение системы защиты информации',
        'Снижение вероятности кибератак',
        'Оперативное противодействие злоумышленникам',
        'Ликвидация последствий инцидентов'
      ]
    },
    {
      icon: 'Layers',
      title: 'Категорирование объектов КИИ',
      description: 'Профессиональное категорирование объектов критической информационной инфраструктуры для определения необходимых мер защиты',
      features: [
        'Определение категории значимости объектов',
        'Дифференцированный подход к защите',
        'Выявление значимых и незначимых объектов',
        'Оптимизация мер безопасности'
      ]
    },
    {
      icon: 'FileText',
      title: 'Разработка документации',
      description: 'Полный пакет документов для объектов КИИ в соответствии с 187-ФЗ, приказами ФСТЭК и ФСБ России',
      features: [
        'Организационно-распорядительная документация',
        'Технические задания и регламенты',
        'Планы мероприятий по защите',
        'Документы для взаимодействия с ГосСОПКА'
      ]
    }
  ];

  const requirements = [
    {
      icon: 'FileCheck',
      title: 'Приказ ФСТЭК № 235',
      description: 'Требования к созданию систем безопасности значимых объектов КИИ, состав и содержание организационных и технических мер'
    },
    {
      icon: 'FileCheck',
      title: 'Приказ ФСТЭК № 239',
      description: 'Требования по обеспечению безопасности значимых объектов КИИ, состав мероприятий по созданию системы безопасности'
    },
    {
      icon: 'Shield',
      title: 'Федеральный закон № 187-ФЗ',
      description: 'О безопасности критической информационной инфраструктуры Российской Федерации'
    },
    {
      icon: 'Lock',
      title: 'Требования ФСБ России',
      description: 'Использование сертифицированных средств криптографической защиты информации'
    }
  ];

  const obligations = [
    {
      icon: 'AlertTriangle',
      title: 'Обязательность для всех субъектов',
      description: 'Требования распространяются на государственные структуры, компании и индивидуальных предпринимателей, включая тех, кто координирует работу систем, но не является их владельцем'
    },
    {
      icon: 'Users',
      title: 'Специализированное подразделение',
      description: 'Контроль за процессами мониторинга, реагирования и передачи информации в ГосСОПКА должен осуществляться сотрудниками выделенного подразделения'
    },
    {
      icon: 'UserCheck',
      title: 'Узкопрофильные специалисты',
      description: 'Персонал, отвечающий за защиту значимых объектов КИИ, не может быть задействован в иных задачах по обеспечению информационной безопасности'
    },
    {
      icon: 'Ban',
      title: 'Разделение обязанностей',
      description: 'Для защиты КИИ не подходят сотрудники, занимающиеся настройкой, интеграцией или эксплуатацией ИТ-инфраструктуры'
    }
  ];

  const advantages = [
    {
      icon: 'MapPin',
      title: 'Всегда рядом',
      description: 'Оказываем услуги дистанционно на всей территории России'
    },
    {
      icon: 'DollarSign',
      title: 'Цены сбалансированы',
      description: 'Индивидуальный подход при формировании стоимости работ'
    },
    {
      icon: 'Clock',
      title: 'Привлекательные сроки',
      description: 'Реализация проектов по 152-ФЗ и КИИ от 10 рабочих дней'
    },
    {
      icon: 'Award',
      title: 'Огромный опыт',
      description: 'Оказываем услуги на основании лицензии с 2012 года'
    }
  ];

  const protectionSystem = [
    {
      number: '01',
      title: 'Создание системы защиты',
      description: 'Разработка и внедрение комплексной системы защиты информации для объектов КИИ с учетом их категории значимости',
      icon: 'Settings'
    },
    {
      number: '02',
      title: 'Снижение рисков кибератак',
      description: 'Внедрение превентивных мер для минимизации вероятности успешных кибератак на критическую инфраструктуру',
      icon: 'ShieldCheck'
    },
    {
      number: '03',
      title: 'Противодействие угрозам',
      description: 'Оперативное обнаружение и нейтрализация действий злоумышленников с использованием современных средств мониторинга',
      icon: 'AlertOctagon'
    },
    {
      number: '04',
      title: 'Ликвидация последствий',
      description: 'Быстрое восстановление работоспособности систем после инцидентов и минимизация ущерба от атак',
      icon: 'RefreshCw'
    },
    {
      number: '05',
      title: 'Интеграция с ГосСОПКА',
      description: 'Настройка взаимодействия с Государственной системой обнаружения, предупреждения и ликвидации последствий компьютерных атак',
      icon: 'Network'
    },
    {
      number: '06',
      title: 'Постоянный мониторинг',
      description: 'Непрерывный контроль состояния защищенности объектов КИИ и оперативное реагирование на инциденты',
      icon: 'Activity'
    }
  ];

  const penalties = [
    {
      icon: 'AlertTriangle',
      severity: 'high',
      title: 'Уголовная ответственность',
      description: 'За неисполнение обязанностей по защите КИИ предусмотрена уголовная ответственность руководителей организаций'
    },
    {
      icon: 'DollarSign',
      severity: 'medium',
      title: 'Административные штрафы',
      description: 'Значительные штрафы для организаций и должностных лиц за нарушение требований 187-ФЗ'
    },
    {
      icon: 'Ban',
      severity: 'high',
      title: 'Приостановка деятельности',
      description: 'Возможность приостановки деятельности организации при выявлении критических нарушений'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Server" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Критическая информационная инфраструктура (КИИ)</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Услуги по обеспечению безопасности объектов критической информационной инфраструктуры Российской Федерации в соответствии с требованиями Федерального закона №187-ФЗ
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-lg mb-4">
                  Защитите вашу критическую инфраструктуру от киберугроз и избежите штрафов и уголовной ответственности
                </p>
                <Link to="/contacts">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                    Получить консультацию
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-16">
              <div className="flex items-start gap-4">
                <Icon name="ShieldAlert" className="text-red-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Важно знать</h3>
                  <p className="text-gray-700 mb-3">
                    Во избежание штрафов и уголовной ответственности субъекты критической информационной инфраструктуры обязаны соблюдать установленные требования.
                  </p>
                  <p className="text-gray-700">
                    Ключевым инструментом для определения необходимых мер защиты является категорирование, которое позволяет дифференцировать подход к обеспечению информационной безопасности для значимых и незначимых объектов КИИ.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Наши услуги в области КИИ</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-shadow border-t-4 border-t-gray-900">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Обязанности субъектов КИИ</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Важно отметить, что обязанность по выполнению защитных мер распространяется на все виды организаций
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {obligations.map((item, idx) => (
                <Card key={idx} className="border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} className="text-orange-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-yellow-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Кто подпадает под требования</h3>
                  <p className="text-gray-700">
                    Требования касаются государственных структур, коммерческих компаний и индивидуальных предпринимателей. В том числе и тех субъектов, которые не являются владельцами АСУ, ИТКС или ИС, но координируют их работу.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Система защиты объектов КИИ</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Комплексный подход к обеспечению безопасности критической информационной инфраструктуры
            </p>

            <div className="space-y-6 mb-16">
              {protectionSystem.map((item, idx) => (
                <Card key={idx} className="border-l-4 border-gray-900 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-2xl">{item.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-2">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <Icon name={item.icon} className="text-gray-900 flex-shrink-0" size={20} />
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Icon name="FileCheck" className="text-primary flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Регламентирующие документы</h3>
                  <p className="text-gray-700">
                    Требования к обеспечению безопасности объектов КИИ регламентированы приказами ФСТЭК № 235 и 239. Согласно им, организация обязана создать и внедрить систему защиты информации, предназначенную для снижения вероятности кибератак, оперативного противодействия злоумышленникам и ликвидации последствий инцидентов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Нормативная база</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {requirements.map((req, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={req.icon} className="text-secondary" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{req.title}</CardTitle>
                        <p className="text-gray-600">{req.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Ответственность за нарушения</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Несоблюдение требований законодательства о КИИ влечет серьезные последствия
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {penalties.map((penalty, idx) => (
                <Card key={idx} className={`border-t-4 ${penalty.severity === 'high' ? 'border-t-red-600' : 'border-t-orange-500'} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={penalty.icon} className="text-red-600" size={24} />
                    </div>
                    <CardTitle className="text-lg mb-2">{penalty.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{penalty.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Наши преимущества</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {advantages.map((adv, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon name={adv.icon} className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-lg mb-2">{adv.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{adv.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Готовы обеспечить безопасность КИИ?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Защитите критическую инфраструктуру от киберугроз и соблюдайте требования 187-ФЗ
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contacts">
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                    Заказать услуги по КИИ
                  </Button>
                </Link>
                <Link to="/services/personal-data">
                  <Button size="lg" variant="outline">
                    Узнать о защите персональных данных
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Icon name="Shield" className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">Лицензированный интегратор с 2012 года</h2>
            <p className="text-xl text-gray-300 mb-6">
              Оказываем услуги по обеспечению безопасности критической информационной инфраструктуры на основании лицензии ФСТЭК России. Более 10 лет успешного опыта реализации проектов в области КИИ.
            </p>
            <p className="text-lg text-gray-400">
              Наши специалисты имеют сертификаты ФСТЭК и глубокие знания в области защиты критической инфраструктуры от киберугроз.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CriticalInfrastructure;
