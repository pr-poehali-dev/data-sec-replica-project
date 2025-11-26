import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-8">Наши контакты</h2>
                <div className="space-y-6">
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
                      <p className="text-lg font-semibold text-secondary">+7 (495) 123-45-67</p>
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
                      <p className="text-lg font-semibold text-secondary">info@security-center.ru</p>
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
                      <p className="text-sm text-muted-foreground mt-1">ООО "ЧОО "СБ ЗВИ"</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-secondary mb-8">Напишите нам</h2>
                <Card className="border-gray-200">
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-secondary block mb-2">
                          Имя *
                        </label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-secondary block mb-2">
                          Email *
                        </label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-secondary block mb-2">
                          Телефон
                        </label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-secondary block mb-2">
                          Сообщение *
                        </label>
                        <Textarea 
                          placeholder="Опишите ваш вопрос или задачу"
                          rows={5}
                        />
                      </div>
                      <Button className="w-full bg-primary hover:bg-blue-600">
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
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