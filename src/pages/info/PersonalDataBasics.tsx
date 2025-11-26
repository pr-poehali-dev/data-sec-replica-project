import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useSEO, SEO_CONFIGS } from '@/utils/seo';

const PersonalDataBasics = () => {
  useSEO(SEO_CONFIGS.info.personalDataBasics);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" className="text-white" size={24} />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold">Ликбез по персональным данным</h1>
              </div>
              <p className="text-xl text-blue-100">
                Основные понятия, требования законодательства и практические рекомендации
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-secondary mb-6">Что такое персональные данные?</h2>
              <p className="text-gray-700 mb-8">
                Персональные данные — это любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-3">К персональным данным относятся:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>ФИО, дата и место рождения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Адрес проживания и регистрации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Данные паспорта и других документов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Контактные данные: телефон, email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Семейное положение, образование, профессия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Биометрические данные</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>ИНН, СНИЛС, номера счетов</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-secondary mb-6 mt-12">Основные требования ФЗ-152</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="FileCheck" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Согласие субъекта</h3>
                  <p className="text-gray-700">
                    Обработка ПДн возможна только при наличии согласия субъекта, за исключением случаев, предусмотренных законодательством.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Lock" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Защита данных</h3>
                  <p className="text-gray-700">
                    Оператор обязан применять организационные и технические меры для защиты ПДн от неправомерного доступа.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Target" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Цели обработки</h3>
                  <p className="text-gray-700">
                    Обработка должна осуществляться только для заранее определенных и законных целей.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Сроки хранения</h3>
                  <p className="text-gray-700">
                    ПДн должны храниться не дольше, чем этого требуют цели их обработки.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-secondary mb-6">Уровни защищенности</h2>
              <p className="text-gray-700 mb-6">
                В зависимости от категории персональных данных и количества субъектов определяется один из четырех уровней защищенности информационных систем:
              </p>

              <div className="space-y-4 mb-12">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-500 text-white font-bold px-3 py-1 rounded">УЗ-1</span>
                    <h4 className="text-lg font-semibold text-secondary">Высокий уровень</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Биометрические, специальные категории ПДн, более 100 000 субъектов
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded">УЗ-2</span>
                    <h4 className="text-lg font-semibold text-secondary">Средний уровень</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Специальные категории ПДн до 100 000 субъектов или иные ПДн более 100 000 субъектов
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-yellow-600 text-white font-bold px-3 py-1 rounded">УЗ-3</span>
                    <h4 className="text-lg font-semibold text-secondary">Базовый уровень</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Иные категории ПДн до 100 000 субъектов
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-green-600 text-white font-bold px-3 py-1 rounded">УЗ-4</span>
                    <h4 className="text-lg font-semibold text-secondary">Минимальный уровень</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Общедоступные ПДн или обработка без использования средств автоматизации
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-secondary mb-6">Обязанности оператора ПДн</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Уведомление Роскомнадзора</h4>
                    <p className="text-gray-700 text-sm">
                      Подать уведомление о начале обработки персональных данных (для большинства случаев)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Назначение ответственного</h4>
                    <p className="text-gray-700 text-sm">
                      Назначить ответственного за организацию обработки персональных данных
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Разработка документов</h4>
                    <p className="text-gray-700 text-sm">
                      Создать политику обработки ПДн, положения о защите ПДн и другие внутренние документы
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Внедрение СЗИ</h4>
                    <p className="text-gray-700 text-sm">
                      Установить сертифицированные средства защиты информации в соответствии с уровнем защищенности
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Обучение персонала</h4>
                    <p className="text-gray-700 text-sm">
                      Провести обучение сотрудников, работающих с персональными данными
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Регулярный аудит</h4>
                    <p className="text-gray-700 text-sm">
                      Проводить внутренний аудит соответствия требованиям законодательства
                    </p>
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

export default PersonalDataBasics;