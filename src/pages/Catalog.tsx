import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const categories = [
    {
      title: 'Защита серверов и рабочих станций',
      icon: 'Monitor',
      products: [
        {
          name: 'Антивирусная защита',
          description: 'Сертифицированные антивирусные решения для защиты от вредоносного ПО',
          certified: true,
          vendors: ['Лаборатория Касперского', 'Dr.Web', 'ESET']
        },
        {
          name: 'Защита информации от НСД',
          description: 'Средства контроля доступа и защиты конфиденциальной информации',
          certified: true,
          vendors: ['Secret Net Studio', 'Aladdin R.D.', 'Dallas Lock']
        },
        {
          name: 'Средства доверенной загрузки',
          description: 'Обеспечение контроля целостности программного обеспечения',
          certified: true,
          vendors: ['Аккорд', 'Страж NT', 'ViPNet']
        }
      ]
    },
    {
      title: 'Сетевая безопасность',
      icon: 'Network',
      products: [
        {
          name: 'Межсетевое экранирование',
          description: 'Защита периметра сети от внешних и внутренних угроз',
          certified: true,
          vendors: ['UserGate', 'Континент', 'Checkpoint']
        },
        {
          name: 'Системы обнаружения вторжений',
          description: 'Мониторинг и анализ сетевого трафика для выявления атак',
          certified: true,
          vendors: ['PT Network Attack Discovery', 'Positive IDS', 'Snort']
        }
      ]
    },
    {
      title: 'Защита данных',
      icon: 'Database',
      products: [
        {
          name: 'Криптографическая защита',
          description: 'Шифрование данных и защита электронного документооборота',
          certified: true,
          vendors: ['КриптоПро', 'ViPNet', 'Signal-COM']
        },
        {
          name: 'DLP-системы',
          description: 'Предотвращение утечек конфиденциальной информации',
          certified: true,
          vendors: ['InfoWatch', 'SecureTower', 'Solar Dozor']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                Каталог средств защиты информации
              </h1>
              <p className="text-xl text-blue-100 animate-fade-in">
                Сертифицированные решения для комплексной защиты вашей инфраструктуры
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {categories.map((category, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={category.icon as any} className="text-primary" size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-secondary">{category.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, productIdx) => (
                      <Card key={productIdx} className="hover:shadow-lg transition-shadow border-gray-200">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-lg text-secondary">{product.name}</CardTitle>
                            {product.certified && (
                              <Badge className="bg-green-500 text-white">
                                <Icon name="ShieldCheck" size={14} className="mr-1" />
                                ФСТЭК
                              </Badge>
                            )}
                          </div>
                          <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-sm font-semibold text-secondary">Производители:</p>
                            <div className="flex flex-wrap gap-2">
                              {product.vendors.map((vendor, vendorIdx) => (
                                <Badge key={vendorIdx} variant="outline" className="text-xs">
                                  {vendor}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
