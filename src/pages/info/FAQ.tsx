import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      category: 'Общие вопросы',
      questions: [
        {
          question: 'Что такое персональные данные и кто такой оператор ПДн?',
          answer: 'Персональные данные — это любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу. Оператор персональных данных — государственный орган, муниципальный орган, юридическое или физическое лицо, организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели и содержание обработки персональных данных.'
        },
        {
          question: 'Обязательно ли уведомлять Роскомнадзор о начале обработки персональных данных?',
          answer: 'Да, в большинстве случаев оператор обязан направить уведомление в Роскомнадзор до начала обработки персональных данных. Существуют исключения, например, когда обработка осуществляется для однократной продажи товаров, работ или услуг, или когда субъект сам сделал свои данные общедоступными.'
        },
        {
          question: 'Нужно ли получать согласие на обработку персональных данных?',
          answer: 'В общем случае да. Согласие субъекта персональных данных требуется до начала обработки его персональных данных. Согласие должно быть конкретным, информированным и сознательным. Однако есть случаи, когда обработка возможна без согласия субъекта, например, при исполнении договора или в соответствии с законодательством РФ.'
        }
      ]
    },
    {
      category: 'Защита информации',
      questions: [
        {
          question: 'Какие средства защиты информации необходимо использовать?',
          answer: 'Выбор средств защиты информации (СЗИ) зависит от уровня защищенности информационной системы, который определяется на основании категории персональных данных и количества субъектов. Для УЗ-1, УЗ-2 и УЗ-3 необходимо использовать сертифицированные ФСТЭК России или ФСБ России СЗИ. Базовый набор включает: систему контроля доступа, антивирус, межсетевой экран, средства криптографической защиты информации (при необходимости).'
        },
        {
          question: 'Как определить уровень защищенности информационной системы?',
          answer: 'Уровень защищенности определяется исходя из категории обрабатываемых персональных данных и количества субъектов персональных данных. Существует 4 уровня: УЗ-1 (высокий) — биометрические, специальные категории ПДн, более 100 000 субъектов; УЗ-2 (средний) — специальные категории до 100 000 субъектов или иные ПДн более 100 000 субъектов; УЗ-3 (базовый) — иные категории до 100 000 субъектов; УЗ-4 (минимальный) — общедоступные данные.'
        },
        {
          question: 'Что такое аттестация объекта информатизации?',
          answer: 'Аттестация объекта информатизации — это комплекс организационных и технических мероприятий, в результате которых подтверждается, что объект информатизации соответствует требованиям по защите информации. По результатам аттестации выдается аттестат соответствия. Аттестация требуется для систем, обрабатывающих информацию ограниченного доступа, включая персональные данные УЗ-1, УЗ-2 и УЗ-3.'
        }
      ]
    },
    {
      category: 'Законодательство',
      questions: [
        {
          question: 'Какие штрафы предусмотрены за нарушение требований ФЗ-152?',
          answer: 'Административная ответственность по ст. 13.11 КоАП РФ: для граждан — 3 000-5 000 руб., для должностных лиц — 10 000-20 000 руб., для юридических лиц — 100 000-300 000 руб. За более серьезные нарушения, включающие утечку данных, может наступить уголовная ответственность по ст. 137, 272, 274 УК РФ с наказанием вплоть до лишения свободы.'
        },
        {
          question: 'Как долго можно хранить персональные данные?',
          answer: 'Персональные данные должны храниться не дольше, чем этого требуют цели их обработки. По достижении целей обработки или при утрате необходимости в их достижении персональные данные подлежат уничтожению, если иное не предусмотрено федеральным законом. Например, кадровые документы хранятся в соответствии со сроками, установленными законодательством об архивном деле.'
        },
        {
          question: 'Что такое специальные категории персональных данных?',
          answer: 'Специальные категории персональных данных — это данные, касающиеся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни. Обработка таких данных запрещена, за исключением случаев, прямо предусмотренных законом, например, с письменного согласия субъекта или в целях защиты жизни и здоровья.'
        }
      ]
    },
    {
      category: 'Практические вопросы',
      questions: [
        {
          question: 'Нужно ли назначать ответственного за обработку персональных данных?',
          answer: 'Да, оператор обязан назначить лицо, ответственное за организацию обработки персональных данных. Это может быть как штатный сотрудник, так и должностное лицо организации. Ответственный координирует действия по обеспечению безопасности персональных данных, организует обучение сотрудников и контролирует соблюдение требований законодательства.'
        },
        {
          question: 'Какие документы необходимо разработать для соответствия ФЗ-152?',
          answer: 'Минимально необходимый пакет документов включает: Политику обработки персональных данных (размещается на сайте), Положение о защите персональных данных, документы, определяющие угрозы безопасности и меры защиты, должностные инструкции, формы согласий на обработку ПДн, приказы о назначении ответственных лиц и организации обработки ПДн.'
        },
        {
          question: 'Как проводится внутренний аудит соответствия требованиям по защите ПДн?',
          answer: 'Внутренний аудит должен проводиться регулярно (рекомендуется не реже 1 раза в год). Он включает: проверку актуальности документов, оценку эффективности применяемых мер защиты, анализ журналов событий и инцидентов безопасности, проверку наличия и актуальности согласий субъектов ПДн, оценку знаний сотрудников требований по защите ПДн. По результатам составляется отчет с рекомендациями по устранению выявленных нарушений.'
        },
        {
          question: 'Что делать при утечке персональных данных?',
          answer: 'При обнаружении утечки необходимо: немедленно принять меры по локализации инцидента и предотвращению дальнейшего распространения данных, задокументировать инцидент, оценить масштаб утечки и возможные последствия, уведомить Роскомнадзор в течение 24 часов с момента выявления, уведомить затронутых субъектов персональных данных, провести расследование и устранить причины инцидента, при необходимости — обратиться в правоохранительные органы.'
        }
      ]
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
                  <Icon name="MessageCircle" className="text-white" size={24} />
                </div>
                <h1 className="text-4xl font-bold">Вопросы и ответы</h1>
              </div>
              <p className="text-xl text-blue-100">
                Ответы на частые вопросы по информационной безопасности от наших экспертов
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Не нашли ответ на свой вопрос?</h3>
                  <p className="text-gray-700 mb-3">
                    Наши эксперты всегда готовы помочь вам разобраться в вопросах информационной безопасности
                  </p>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Задать вопрос эксперту
                  </button>
                </div>
              </div>
            </div>

            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const globalIndex = faqData
                      .slice(0, categoryIndex)
                      .reduce((sum, cat) => sum + cat.questions.length, 0) + questionIndex;
                    
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={questionIndex}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-left font-semibold text-secondary pr-4">
                            {item.question}
                          </span>
                          <Icon
                            name="ChevronDown"
                            className={`text-primary flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            size={20}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
              Полезные материалы
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Ликбез по ПДн</h3>
                <p className="text-gray-600 mb-4">
                  Базовые понятия и требования законодательства
                </p>
                <a href="/info/personal-data-basics" className="text-primary font-medium hover:underline">
                  Перейти к материалу →
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Scale" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Законодательство</h3>
                <p className="text-gray-600 mb-4">
                  Нормативные документы и законодательные акты
                </p>
                <a href="/info/legislation" className="text-purple-600 font-medium hover:underline">
                  Перейти к материалу →
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="AlertTriangle" className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">Штрафы</h3>
                <p className="text-gray-600 mb-4">
                  Ответственность за нарушение требований
                </p>
                <a href="/info/penalties" className="text-red-600 font-medium hover:underline">
                  Перейти к материалу →
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

export default FAQ;