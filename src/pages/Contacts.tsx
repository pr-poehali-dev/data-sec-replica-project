import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Contacts = () => {
  useSEO(SEO_CONFIGS.company.contacts);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                Контакты
              </h1>
              <p className="text-xl text-blue-100 animate-fade-in">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Наши контакты</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-secondary">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Phone" className="text-primary" size={20} />
                      </div>
                      Телефон
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+79015000078" className="text-lg font-semibold text-secondary hover:text-primary transition-colors block">+7 (901) 500-00-78</a>
                    <a href="tel:+79015000087" className="text-lg font-semibold text-secondary hover:text-primary transition-colors block">+7 (901) 500-00-87</a>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-secondary">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Mail" className="text-primary" size={20} />
                      </div>
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@security-center.ru" className="text-lg font-semibold text-secondary hover:text-primary transition-colors block">info@security-center.ru</a>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение 24 часов</p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-secondary">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="MapPin" className="text-primary" size={20} />
                      </div>
                      Адрес
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-secondary">115093, г. Москва,<br />пер. Партийный, д. 1</p>
                    <p className="text-sm text-muted-foreground mt-1">ЧОП "СБ ЗВИ"</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Как нас найти</h2>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c7f5e5f5f5f5f5f5f5f5f5f5f5f5f5f&amp;source=constructor"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  title="Карта офиса ЧОП СБ ЗВИ"
                  className="w-full"
                ></iframe>
              </div>
              <div className="mt-6 bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-semibold text-secondary mb-2">Как добраться:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Метро «Серпуховская» / «Добрынинская» — 7 минут пешком</li>
                      <li>• Метро «Павелецкая» — 10 минут пешком</li>
                      <li>• Наземный транспорт: остановка «Партийный переулок»</li>
                    </ul>
                  </div>
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

export default Contacts;