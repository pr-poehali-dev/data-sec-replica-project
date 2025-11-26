import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Legislation = () => {
  useSEO(SEO_CONFIGS.info.legislation);
  const federalLaws = [
    {
      number: '152-ФЗ',
      date: '27.07.2006',
      title: 'О персональных данных',
      description: 'Основной закон, регулирующий отношения, связанные с обработкой персональных данных',
      status: 'Действует',
      lastUpdate: '14.07.2022'
    },
    {
      number: '149-ФЗ',
      date: '27.07.2006',
      title: 'Об информации, информационных технологиях и о защите информации',
      description: 'Регулирует отношения в сфере информации, информационных технологий и защиты информации',
      status: 'Действует',
      lastUpdate: '29.12.2022'
    },
    {
      number: '187-ФЗ',
      date: '26.07.2017',
      title: 'О безопасности критической информационной инфраструктуры РФ',
      description: 'Устанавливает правовые основы обеспечения безопасности КИИ',
      status: 'Действует',
      lastUpdate: '01.05.2022'
    },
    {
      number: '98-ФЗ',
      date: '29.07.2004',
      title: 'О коммерческой тайне',
      description: 'Регулирует отношения, связанные с отнесением информации к коммерческой тайне',
      status: 'Действует',
      lastUpdate: '11.06.2021'
    }
  ];

  const regulations = [
    {
      issuer: 'ФСТЭК России',
      number: '21',
      date: '18.02.2013',
      title: 'Состав и содержание организационных и технических мер по обеспечению безопасности персональных данных',
      category: 'Приказ'
    },
    {
      issuer: 'ФСТЭК России',
      number: '17',
      date: '11.02.2013',
      title: 'Требования о защите информации, не составляющей государственную тайну, содержащейся в государственных информационных системах',
      category: 'Приказ'
    },
    {
      issuer: 'ФСБ России',
      number: '378',
      date: '10.07.2014',
      title: 'Состав и содержание организационных и технических мер по обеспечению безопасности ПДн при их обработке в ИС с использованием СКЗИ',
      category: 'Приказ'
    },
    {
      issuer: 'Роскомнадзор',
      number: '996',
      date: '05.09.2013',
      title: 'Требования и методы по обезличиванию персональных данных',
      category: 'Приказ'
    },
    {
      issuer: 'Правительство РФ',
      number: '1119',
      date: '01.11.2012',
      title: 'Об утверждении требований к защите персональных данных при их обработке в ИС',
      category: 'Постановление'
    },
    {
      issuer: 'ФСТЭК России',
      number: '31',
      date: '14.03.2014',
      title: 'Требования к обеспечению защиты информации в автоматизированных системах управления производственными и технологическими процессами на КО',
      category: 'Приказ'
    }
  ];

  const standards = [
    {
      number: 'ГОСТ Р 50922-2006',
      title: 'Защита информации. Основные термины и определения',
      scope: 'Устанавливает основные термины и определения понятий в области защиты информации'
    },
    {
      number: 'ГОСТ Р ИСО/МЭК 27001-2021',
      title: 'Информационная технология. Методы и средства обеспечения безопасности. Системы менеджмента информационной безопасности',
      scope: 'Требования к системам управления информационной безопасностью'
    },
    {
      number: 'ГОСТ Р 57580.1-2017',
      title: 'Безопасность финансовых (банковских) операций. Защита информации финансовых организаций',
      scope: 'Требования по обеспечению информационной безопасности финансовых организаций'
    },
    {
      number: 'ГОСТ Р ИСО/МЭК 15408-1-2012',
      title: 'Информационная технология. Методы и средства обеспечения безопасности. Критерии оценки безопасности',
      scope: 'Общие понятия и модель оценки информационной безопасности'
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
                  <Icon name="Scale" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">Законодательство</h1>
              </div>
              <p className="text-xl text-blue-100">
                База нормативных документов и законодательных актов в области защиты информации
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
                  <h3 className="text-lg font-semibold text-secondary mb-2">Актуальность информации</h3>
                  <p className="text-gray-700">
                    Все документы представлены в актуальных редакциях с учетом последних изменений. 
                    Обновление базы происходит ежедневно.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Федеральные законы</h2>

            <div className="grid gap-6 mb-16">
              {federalLaws.map((law, idx) => (
                <Card key={idx} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="px-4 py-2 bg-primary rounded-lg">
                          <span className="text-white font-bold text-lg">{law.number}</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">от {law.date}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                              {law.status}
                            </span>
                            <span className="text-xs text-gray-500">
                              Посл. изм.: {law.lastUpdate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Icon name="Download" className="text-primary" size={20} />
                      </button>
                    </div>
                    <CardTitle className="text-xl text-secondary">{law.title}</CardTitle>
                    <CardDescription className="text-base">{law.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                        Читать полный текст
                      </button>
                      <button className="px-4 py-2 bg-white border border-gray-300 text-secondary rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                        История изменений
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Подзаконные акты</h2>

            <div className="space-y-4 mb-16">
              {regulations.map((regulation, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {regulation.category}
                        </span>
                        <span className="text-sm font-semibold text-secondary">
                          {regulation.issuer}
                        </span>
                        <span className="text-sm text-gray-500">
                          № {regulation.number} от {regulation.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">
                        {regulation.title}
                      </h3>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Скачать">
                        <Icon name="Download" className="text-primary" size={20} />
                      </button>
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Открыть">
                        <Icon name="ExternalLink" className="text-primary" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">ГОСТы и стандарты</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {standards.map((standard, idx) => (
                <Card key={idx} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-bold">
                        {standard.number}
                      </span>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Icon name="Download" className="text-primary" size={18} />
                      </button>
                    </div>
                    <CardTitle className="text-lg text-secondary">{standard.title}</CardTitle>
                    <CardDescription className="text-sm">{standard.scope}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="w-full px-4 py-2 bg-white border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors text-sm">
                      Подробнее
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
              Регулирующие органы
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">ФСТЭК России</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Федеральная служба по техническому и экспортному контролю
                </p>
                <a href="https://fstec.ru" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline text-sm">
                  Перейти на сайт →
                </a>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lock" className="text-red-600" size={40} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">ФСБ России</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Федеральная служба безопасности Российской Федерации
                </p>
                <a href="https://fsb.ru" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline text-sm">
                  Перейти на сайт →
                </a>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Database" className="text-green-600" size={40} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">Роскомнадзор</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Федеральная служба по надзору в сфере связи, информационных технологий и массовых коммуникаций
                </p>
                <a href="https://rkn.gov.ru" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline text-sm">
                  Перейти на сайт →
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

export default Legislation;