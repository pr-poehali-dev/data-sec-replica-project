import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const Penalties = () => {
  useSEO(SEO_CONFIGS.info.penalties);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="AlertTriangle" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Штрафы за нарушения</h1>
              </div>
              <p className="text-xl text-blue-100">
                Актуальная информация об ответственности за нарушение требований законодательства в области защиты информации
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Icon name="AlertCircle" className="text-red-500 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Важно знать!</h3>
                  <p className="text-gray-700">
                    Штрафы за нарушения в области защиты персональных данных регулярно индексируются. 
                    За серьезные нарушения предусмотрена не только административная, но и уголовная ответственность.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Административная ответственность</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Ст. 13.11 КоАП РФ — Нарушение требований ФЗ-152</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" className="text-orange-600" size={20} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-secondary mb-2">Для граждан</h4>
                        <p className="text-2xl font-bold text-primary mb-1">3 000 — 5 000 ₽</p>
                        <p className="text-sm text-gray-600">За обработку ПДн без согласия субъекта</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="User" className="text-blue-600" size={20} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-secondary mb-2">Для должностных лиц</h4>
                        <p className="text-2xl font-bold text-primary mb-1">10 000 — 20 000 ₽</p>
                        <p className="text-sm text-gray-600">За нарушение порядка обработки ПДн</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Building" className="text-red-600" size={20} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-secondary mb-2">Для юридических лиц</h4>
                        <p className="text-2xl font-bold text-primary mb-1">100 000 — 300 000 ₽</p>
                        <p className="text-sm text-gray-600">За обработку ПДн без уведомления Роскомнадзора</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Ст. 13.12 КоАП РФ — Нарушение требований защиты информации</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="ShieldAlert" className="text-purple-600" size={20} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-secondary mb-2">За нарушение требований о защите информации</h4>
                        <div className="space-y-2">
                          <p className="text-gray-700">
                            <span className="font-semibold">Граждане:</span> <span className="text-primary font-bold">3 000 — 5 000 ₽</span>
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold">Должностные лица:</span> <span className="text-primary font-bold">20 000 — 30 000 ₽</span>
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold">Юридические лица:</span> <span className="text-primary font-bold">200 000 — 400 000 ₽</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Ст. 19.7 КоАП РФ — Непредставление информации</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="FileX" className="text-red-600" size={20} />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-secondary mb-2">За непредставление информации Роскомнадзору</h4>
                        <div className="space-y-2">
                          <p className="text-gray-700">
                            <span className="font-semibold">Должностные лица:</span> <span className="text-primary font-bold">3 000 — 5 000 ₽</span>
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold">Юридические лица:</span> <span className="text-primary font-bold">30 000 — 50 000 ₽</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Уголовная ответственность</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-white border-2 border-red-500 rounded-lg overflow-hidden">
                <div className="bg-red-600 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Ст. 137 УК РФ — Нарушение неприкосновенности частной жизни</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Часть 1: Незаконное собирание или распространение сведений о частной жизни</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Штраф до <span className="font-bold">200 000 ₽</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Обязательные работы до <span className="font-bold">360 часов</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Исправительные работы до <span className="font-bold">1 года</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Принудительные работы до <span className="font-bold">2 лет</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Арест до <span className="font-bold">4 месяцев</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Лишение свободы до <span className="font-bold">2 лет</span></span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-secondary mb-3">Часть 2: С использованием служебного положения</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Штраф от <span className="font-bold">100 000</span> до <span className="font-bold">300 000 ₽</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Лишение права занимать определенные должности до <span className="font-bold">3 лет</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Принудительные работы до <span className="font-bold">4 лет</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                          <span>Лишение свободы до <span className="font-bold">4 лет</span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-500 rounded-lg overflow-hidden">
                <div className="bg-red-700 text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Ст. 272 УК РФ — Неправомерный доступ к компьютерной информации</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    За неправомерный доступ к охраняемой законом компьютерной информации с причинением крупного ущерба или из корыстной заинтересованности:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                      <span>Штраф до <span className="font-bold">200 000 ₽</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                      <span>Исправительные работы до <span className="font-bold">1 года</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                      <span>Ограничение свободы до <span className="font-bold">2 лет</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                      <span>Принудительные работы до <span className="font-bold">2 лет</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-red-500 mt-1.5 flex-shrink-0" size={8} />
                      <span>Лишение свободы до <span className="font-bold">2 лет</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-8">Типичные нарушения</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="X" className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <h4 className="font-semibold text-secondary">Обработка без согласия</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Обработка персональных данных без получения согласия субъекта ПДн или с нарушением условий согласия
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="X" className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <h4 className="font-semibold text-secondary">Отсутствие защиты</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Необеспечение защиты персональных данных или использование несертифицированных СЗИ
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="X" className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <h4 className="font-semibold text-secondary">Неуведомление Роскомнадзора</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Осуществление обработки ПДн без направления уведомления в уполномоченный орган
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="X" className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <h4 className="font-semibold text-secondary">Утечка данных</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Необеспечение конфиденциальности ПДн, приведшее к несанкционированному доступу к данным
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="X" className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <h4 className="font-semibold text-secondary">Нарушение прав субъектов</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Отказ в доступе к ПДн или уклонение от исправления неточных данных по требованию субъекта
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="X" className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <h4 className="font-semibold text-secondary">Избыточная обработка</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Обработка ПДн, не соответствующих заявленным целям, или хранение данных сверх установленных сроков
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Penalties;