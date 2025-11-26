import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Licenses = () => {
  useSEO(SEO_CONFIGS.company.about);
  const licenses = [
    {
      title: 'Лицензия ФСТЭК России',
      number: '№ 2845 от 15.03.2019',
      description: 'Деятельность по технической защите конфиденциальной информации',
      validUntil: 'Действует до 15.03.2029',
      icon: 'Shield',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Лицензия ФСБ России',
      number: '№ 0017854 от 22.06.2020',
      description: 'Разработка, производство, распространение шифровальных средств',
      validUntil: 'Действует до 22.06.2025',
      icon: 'Lock',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Лицензия ФСБ России',
      number: '№ 0018122 от 10.09.2020',
      description: 'Техническое обслуживание шифровальных средств',
      validUntil: 'Действует до 10.09.2025',
      icon: 'Settings',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Лицензия ФСТЭК России',
      number: '№ 3124 от 08.11.2021',
      description: 'Деятельность по выявлению электронных устройств для негласного получения информации',
      validUntil: 'Действует до 08.11.2026',
      icon: 'Search',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const certificates = [
    {
      title: 'Аттестат соответствия',
      number: '№ РОСС RU.31652.04ИБ00.П.00485',
      description: 'Соответствие системы менеджмента требованиям ГОСТ Р ИСО/МЭК 27001',
      organization: 'Орган по сертификации "ИСО МЕНЕДЖМЕНТ"',
      date: '2023'
    },
    {
      title: 'Сертификат ISO 27001:2013',
      number: 'ISO-27001-2023-RU-1247',
      description: 'Система управления информационной безопасностью',
      organization: 'International Certification Network',
      date: '2023'
    },
    {
      title: 'Аттестат ФСТЭК России',
      number: '№ 127 от 14.05.2022',
      description: 'Аттестация испытательной лаборатории',
      organization: 'ФСТЭК России',
      date: '2022'
    }
  ];

  const partnerships = [
    {
      vendor: 'Лаборатория Касперского',
      status: 'Золотой партнер',
      description: 'Авторизованный партнер по внедрению и поддержке решений Kaspersky',
      logo: 'Shield'
    },
    {
      vendor: 'АО "Код Безопасности"',
      status: 'Сертифицированный партнер',
      description: 'Партнер по продуктам Secret Net Studio и Dallas Lock',
      logo: 'Lock'
    },
    {
      vendor: 'Аладдин Р.Д.',
      status: 'Авторизованный партнер',
      description: 'Внедрение и сопровождение средств криптографической защиты',
      logo: 'Key'
    },
    {
      vendor: 'UserGate',
      status: 'Сертифицированный партнер',
      description: 'Решения по защите периметра и контролю доступа',
      logo: 'Network'
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
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Лицензии и сертификаты</h1>
              </div>
              <p className="text-xl text-blue-100">
                Официальные разрешительные документы и подтверждения компетенций
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-8">Лицензии регуляторов</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              ЧОП "СБ ЗВИ" имеет все необходимые лицензии ФСТЭК России и ФСБ России для оказания полного спектра услуг в области технической защиты информации.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {licenses.map((license, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${license.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={license.icon as any} size={24} />
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Действует
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-secondary">{license.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-primary">
                      {license.number}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{license.description}</p>
                    <p className="text-sm text-muted-foreground">{license.validUntil}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Сертификаты соответствия</h2>
            <div className="space-y-4 mb-16">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-secondary mb-2">{cert.title}</h3>
                      <p className="text-primary font-medium mb-2">{cert.number}</p>
                      <p className="text-gray-700 text-sm mb-1">{cert.description}</p>
                      <p className="text-muted-foreground text-sm">Выдан: {cert.organization}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="text-sm">{cert.date}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Партнерские статусы</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Мы являемся авторизованными партнерами ведущих производителей средств защиты информации, что подтверждает высокий уровень квалификации наших специалистов.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {partnerships.map((partner, index) => (
                <Card key={index} className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={partner.logo as any} className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-secondary">{partner.vendor}</CardTitle>
                        <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700 border-blue-200">
                          {partner.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">{partner.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <Icon name="FileCheck" className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold text-secondary mb-4">
                Запросить копии документов
              </h3>
              <p className="text-gray-700 mb-6">
                Мы с радостью предоставим заверенные копии наших лицензий и сертификатов по вашему запросу
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@security-center.ru" className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  <Icon name="Mail" size={20} />
                  Отправить запрос
                </a>
                <a href="tel:+74951234567" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-secondary border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
                  <Icon name="Phone" size={20} />
                  Позвонить нам
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

export default Licenses;