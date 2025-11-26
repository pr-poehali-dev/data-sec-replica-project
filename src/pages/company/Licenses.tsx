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
      title: 'Лицензия на осуществление частной охранной деятельности',
      number: 'ЧО № 000414 № 2053 от 11 января 2000г.',
      description: 'Главное управление Росгвардии по городу Москве',
      validUntil: 'Действует до 11 января 2023г.',
      icon: 'Shield',
      color: 'bg-blue-100 text-blue-600',
      image: 'https://cdn.poehali.dev/files/54554a56-90ce-4920-93b3-b28423131da9.png'
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
                <h1 className="text-2xl md:text-4xl font-bold">Лицензии и сертификаты</h1>
              </div>
              <p className="text-xl text-blue-100">
                Официальные разрешительные документы и подтверждения компетенций
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-8">Лицензия на охранную деятельность</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              ЧОП "СБ ЗВИ" осуществляет деятельность на основании лицензии, выданной Главным управлением Росгвардии по городу Москве.
            </p>

            <div className="mb-16">
              {licenses.map((license, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow max-w-4xl mx-auto">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${license.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={license.icon as any} size={24} />
                      </div>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Документ
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-secondary mb-2">{license.title}</CardTitle>
                    <CardDescription className="text-base font-semibold text-primary mb-2">
                      {license.number}
                    </CardDescription>
                    <p className="text-gray-700 mb-2">{license.description}</p>
                    <p className="text-sm text-muted-foreground">{license.validUntil}</p>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={license.image} 
                      alt={license.title}
                      className="w-full rounded-lg border border-gray-200 shadow-sm"
                    />
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
                <a href="tel:+79015000078" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-secondary border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
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