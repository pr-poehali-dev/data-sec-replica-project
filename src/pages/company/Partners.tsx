import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Partners = () => {
  useSEO(SEO_CONFIGS.company.about);
  const vendors = [
    {
      name: 'Лаборатория Касперского',
      status: 'Золотой партнер',
      statusColor: 'bg-yellow-100 text-yellow-800',
      category: 'Антивирусная защита',
      products: ['Kaspersky Endpoint Security', 'Kaspersky Security Center', 'Kaspersky Anti-Targeted Attack'],
      benefits: [
        'Приоритетная техническая поддержка',
        'Доступ к расширенным учебным программам',
        'Специальные условия для клиентов'
      ],
      icon: 'Shield'
    },
    {
      name: 'АО "Код Безопасности"',
      status: 'Сертифицированный партнер',
      statusColor: 'bg-blue-100 text-blue-800',
      category: 'Защита от НСД',
      products: ['Secret Net Studio', 'Secret Net LSP', 'Dallas Lock', 'C-Terra'],
      benefits: [
        'Сертифицированные инженеры',
        'Прямая поддержка производителя',
        'Участие в пилотных проектах'
      ],
      icon: 'Lock'
    },
    {
      name: 'Аладдин Р.Д.',
      status: 'Авторизованный партнер',
      statusColor: 'bg-green-100 text-green-800',
      category: 'Средства криптографической защиты',
      products: ['Аладдин eToken', 'JaCarta', 'Рутокен'],
      benefits: [
        'Техническая экспертиза',
        'Обучение специалистов',
        'Преференции по ценообразованию'
      ],
      icon: 'Key'
    },
    {
      name: 'UserGate',
      status: 'Сертифицированный партнер',
      statusColor: 'bg-blue-100 text-blue-800',
      category: 'Межсетевое экранирование',
      products: ['UserGate NGFW', 'UserGate UTM', 'UserGate Endpoint Security'],
      benefits: [
        'Сертифицированные инженеры',
        'Доступ к бета-версиям',
        'Приоритетная поддержка проектов'
      ],
      icon: 'Network'
    },
    {
      name: 'ГК InfoWatch',
      status: 'Партнер',
      statusColor: 'bg-purple-100 text-purple-800',
      category: 'DLP-системы',
      products: ['InfoWatch Traffic Monitor', 'InfoWatch Vision', 'InfoWatch Device Monitor'],
      benefits: [
        'Подтвержденная квалификация',
        'Техническая поддержка',
        'Совместные маркетинговые активности'
      ],
      icon: 'Eye'
    },
    {
      name: 'Positive Technologies',
      status: 'Партнер',
      statusColor: 'bg-purple-100 text-purple-800',
      category: 'Анализ защищенности',
      products: ['MaxPatrol SIEM', 'MaxPatrol VM', 'PT Application Inspector'],
      benefits: [
        'Обученные специалисты',
        'Доступ к демо-стендам',
        'Совместные проекты'
      ],
      icon: 'Search'
    }
  ];

  const integrators = [
    {
      name: 'Softline',
      description: 'Стратегическое партнерство в области поставки лицензионного ПО',
      icon: 'Package'
    },
    {
      name: 'MONT',
      description: 'Сотрудничество по проектам защиты КИИ и ГИС',
      icon: 'Building'
    },
    {
      name: 'АйТи Проект',
      description: 'Партнерство в области аудита и аттестации',
      icon: 'FileCheck'
    }
  ];

  const certCenters = [
    {
      name: 'Учебный центр АйТи',
      courses: ['Специалист по ИБ', 'Аудитор СУИБ', 'Lead Auditor ISO 27001'],
      icon: 'GraduationCap'
    },
    {
      name: 'Центр обучения "Код Безопасности"',
      courses: ['Secret Net Studio', 'Dallas Lock', 'C-Terra'],
      icon: 'BookOpen'
    },
    {
      name: 'Kaspersky Academy',
      courses: ['Kaspersky Endpoint Security', 'KATA', 'Security Center'],
      icon: 'Award'
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
                  <Icon name="Handshake" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">Наши партнеры</h1>
              </div>
              <p className="text-xl text-blue-100">
                Сотрудничество с ведущими производителями и интеграторами решений ИБ
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Вендоры средств защиты информации</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Мы являемся сертифицированными партнерами крупнейших производителей СЗИ. Это позволяет нам предлагать клиентам проверенные решения и обеспечивать квалифицированную поддержку на всех этапах проекта.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {vendors.map((vendor, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={vendor.icon as any} className="text-primary" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-secondary">{vendor.name}</CardTitle>
                          <CardDescription className="text-sm">{vendor.category}</CardDescription>
                        </div>
                      </div>
                      <Badge className={vendor.statusColor}>{vendor.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-secondary text-sm mb-2">Продукты:</h4>
                        <ul className="space-y-1">
                          {vendor.products.map((product, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={14} />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary text-sm mb-2">Преимущества партнерства:</h4>
                        <ul className="space-y-1">
                          {vendor.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <Icon name="CheckCircle" className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Партнеры-интеграторы</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Мы сотрудничаем с крупнейшими системными интеграторами для реализации комплексных проектов в области информационной безопасности.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {integrators.map((integrator, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name={integrator.icon as any} className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg text-secondary">{integrator.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">{integrator.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Учебные центры</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Наши специалисты регулярно проходят обучение и сертификацию в авторизованных учебных центрах производителей СЗИ.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certCenters.map((center, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name={center.icon as any} className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg text-secondary">{center.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground mb-2">Направления обучения:</p>
                    <ul className="space-y-1">
                      {center.courses.map((course, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={14} />
                          {course}
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
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <Icon name="Users" className="mx-auto mb-6 text-primary" size={48} />
              <h2 className="text-3xl font-bold text-secondary mb-6">Станьте нашим партнером</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Мы открыты для сотрудничества с производителями СЗИ, системными интеграторами и учебными центрами. Совместно мы можем создавать комплексные решения для защиты информации наших клиентов.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-secondary mb-4">Что мы предлагаем партнерам</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-secondary">Опыт и экспертиза</p>
                      <p className="text-sm text-gray-700">15 лет работы, 500+ проектов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-secondary">Квалифицированная команда</p>
                      <p className="text-sm text-gray-700">60+ сертифицированных специалистов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-secondary">Клиентская база</p>
                      <p className="text-sm text-gray-700">250+ активных клиентов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-secondary">Региональное покрытие</p>
                      <p className="text-sm text-gray-700">35 регионов России</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="mailto:partners@security-center.ru" className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    <Icon name="Mail" size={20} />
                    Отправить предложение
                  </a>
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

export default Partners;