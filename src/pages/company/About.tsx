import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const About = () => {
  useSEO(SEO_CONFIGS.company.about);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Building" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">О компании</h1>
              </div>
              <p className="text-xl text-blue-100">
                ЧОП "СБ ЗВИ" — надежный партнер в области информационной безопасности
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-secondary mb-6">Кто мы</h2>
              <p className="text-gray-700 text-lg mb-6">
                ЧОП "СБ ЗВИ" — это профессиональная команда специалистов по информационной безопасности с более чем 15-летним опытом работы на российском рынке. Мы специализируемся на комплексных решениях по защите информации для коммерческих организаций и государственных структур.
              </p>
              <p className="text-gray-700 text-sm mb-6 text-muted-foreground">
                Адрес: 115093, г. Москва, пер. Партийный, д. 1
              </p>
              <p className="text-gray-700 text-lg mb-12">
                За годы работы мы реализовали более 500 проектов в различных отраслях экономики: от банковского сектора и промышленности до здравоохранения и государственного управления. Наша экспертиза признана ведущими регуляторами и подтверждена всеми необходимыми лицензиями и аттестатами.
              </p>

              <h2 className="text-3xl font-bold text-secondary mb-6">Наша миссия</h2>
              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
                <p className="text-gray-700 text-lg italic">
                  Обеспечить максимальный уровень защиты информации наших клиентов, помогая им соответствовать требованиям законодательства и защищаться от современных киберугроз, сохраняя при этом эффективность бизнес-процессов.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-secondary mb-6">Наши ценности</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-gray-200">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Target" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl text-secondary">Профессионализм</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Высокая квалификация специалистов, регулярное обучение и сертификация по современным стандартам информационной безопасности.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl text-secondary">Надежность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Гарантированное выполнение обязательств, использование проверенных методологий и сертифицированных средств защиты.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl text-secondary">Клиентоориентированность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Индивидуальный подход к каждому проекту, учет специфики бизнеса и готовность работать в условиях ограниченных сроков.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name="TrendingUp" className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl text-secondary">Инновации</CardTitle>
                  </CardHeader>
                    <CardContent>
                    <p className="text-gray-700">
                      Постоянный мониторинг новых угроз, освоение современных технологий защиты и адаптация мировых практик к российским реалиям.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-secondary mb-6">Ключевые компетенции</h2>
              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Аттестация и сертификация</h4>
                    <p className="text-gray-700 text-sm">
                      Полный цикл аттестации объектов информатизации и информационных систем персональных данных по требованиям ФСТЭК и ФСБ России
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Защита персональных данных</h4>
                    <p className="text-gray-700 text-sm">
                      Внедрение систем защиты ПДн в соответствии с ФЗ-152 и требованиями регуляторов, получение всех необходимых разрешительных документов
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Защита критической информационной инфраструктуры</h4>
                    <p className="text-gray-700 text-sm">
                      Категорирование, аудит и защита объектов КИИ в соответствии с 187-ФЗ и приказами ФСТЭК России
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Аудит информационной безопасности</h4>
                    <p className="text-gray-700 text-sm">
                      Комплексная оценка защищенности информационных систем, тестирование на проникновение, анализ защищенности кода
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Построение систем управления ИБ</h4>
                    <p className="text-gray-700 text-sm">
                      Разработка и внедрение СУИБ по стандартам ISO 27001, создание организационно-распорядительной документации
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Внедрение и сопровождение СЗИ</h4>
                    <p className="text-gray-700 text-sm">
                      Установка, настройка и техническая поддержка сертифицированных средств защиты информации российских и зарубежных производителей
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-secondary mb-6">Почему выбирают нас</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <h4 className="font-semibold text-secondary mb-2">Комплексный подход</h4>
                  <p className="text-gray-700 text-sm">
                    Полный спектр услуг от аудита до внедрения и сопровождения систем защиты
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="text-primary" size={32} />
                  </div>
                  <h4 className="font-semibold text-secondary mb-2">Опытная команда</h4>
                  <p className="text-gray-700 text-sm">
                    Сертифицированные специалисты с опытом работы от 10 лет в крупных проектах
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" className="text-primary" size={32} />
                  </div>
                  <h4 className="font-semibold text-secondary mb-2">Соблюдение сроков</h4>
                  <p className="text-gray-700 text-sm">
                    98% проектов завершены в установленные сроки или досрочно
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-secondary">Наши достижения в цифрах</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Проектов реализовано</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <p className="text-muted-foreground">Лет опыта</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Постоянных клиентов</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">Успешных аттестаций</p>
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

export default About;