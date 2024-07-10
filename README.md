Portfolio (односторінковий сайт) " Мета проекту - створення прототипу портфоліо,
яке надасть студентові можливість легко і ефективно представити свої досягнення,
проєкти та навички своєму майбутньому роботодавцеві. " Базові задачі "Верстка
адаптивна, окрім мобільних пристроїв. Точки перелому:

- mobile: верстка гумова від 320px, стає адаптивною з 375px;
- tablet: з 768px;
- desktop: з 1440px " Верстка валідна (https://validator.w3.org/ ,
  https://jigsaw.w3.org/css-validator/ ) Забезпечити дотримання семантики
  відповідно до стандартів HTML5 Здійснити підключення шрифтів Забезпечити
  оптимізацію розмірів векторної та растрової графіки Забезпечити підтримку
  відображення картинок для retina-екранів Оптимізувати завантаження зображень
  Всі svg-іконки підключити через sprite Додати відображення фавікон сторінки
  (знаходиться в UI KIT) Всім інтерактивним елементам (кнопки, посилання тощо)
  слід додати hover-ефект згідно макету Анімації не є обовʼязковими, але їх
  використання може зробити взаємодію з вебсайтом більш приємною та інтуїтивно
  зрозумілою для користувача Посилання на документацію API
  https://portfolio-js.b.goit.study/api-docs Структура проєкту "- Header
- Hero
- About me
- Benefits
- Projects
- FAQ
- Covers
- Reviews
- Work together" Header В Header-і знаходиться logo, навігація по сайту та
  посилання "Order the project" Logo складається з контентного зображення та
  напису Навігація по сайту для планшетних і десктопних пристроїв має зʼявлятись
  і приховуватись по clickу на Menu, як на прикладі, і має бути реалізована
  якірними посиланнями, які ведуть до відповідних секцій сайту з застосуванням
  повільного скролу. "Order the project" має перенаправляти користувача до
  секції Work together. "Для мобільних пристроїв навігація по сайту має бути
  розміщена в меню, взаємодія з яким має бути реалізована за допомогою JS.

По clickу на кнопку-іконку з бургер-меню, меню має плавно зʼявитися і заповнити
всю ширину та висоту в'юпорту пристрою користувача. У разі clickу по елементу
навігації, користувача слід перенаправити до відповідної секції сайту і закрити
меню. Меню також можна закрити по clickу на кнопку-іконку закриття." Header має
прозорий фон і має бути спозиціоновано через absolute поверх секції Hero. Hero
Текст “Hello. I’m Fullstack developer Lloyd Jefferson.” є головним заголовком
сайту "Секція також містить

- перелік посилань на соц. мережі, який має бути реалізований як список
  елементів за допомогою <ul>, що відкриватимуть у новій вкладці сторінку GoIT
  відповідної соц. мережі: Instagram - https://www.instagram.com/goitclub/  
   YouTube - https://www.youtube.com/c/GoIT  
   Facebook - https://www.facebook.com/goITclub/  
   GitHub - посилання на проєкт команди, розміщений на GitHub
- контактний email, який необхідно реалізувати за допомогою протоколів
  посилання" Фон слід реалізувати з використанням фонового зображення формату
  png. About me У секції немає видимого заголовку. Потрібно зробити прихований
  заголовок для краулерів. Секція також містить описову частину та зображення,
  яке слід реалізувати як контенте. Інформацію про себе, свій досвід і освіту
  необхідно реалізувати за допомогою <ul> і бібліотеки Accordeon як список
  елементів, що розкриватимуться або закриватимуться по clickу на елемент в
  залежності від його стану. По замовчуванню, перший елемент списку має бути
  розкритим. Перелік навичок необхідно реалізувати за допомогою <ul> у вигляді
  горизонтального слайдера (https://swiperjs.com/swiper-api). Користувач повинен
  мати змогу взаємодіяти зі слайдером через мишу, клавіатуру (клавіш Tab та
  стрілок) або сенсорний екран. По clickу праворуч (або відповідно до
  зазначеного напрямку), у разі досягнення кінця списку елементів, наступний
  click повинен знову відобразити перший/останній елемент. Така функціональність
  дозволить користувачеві продовжувати переглядати елементи безкінечно,
  переходячи з одного кінця до іншого без переривання. Benefits Текст “Benefits
  of working with me” є заголовком секції. У секції знаходиться перелік переваг,
  який необхідно реалізувати як список елементів за допомогою <ul> "Order the
  project" слід реалізувати як якірне посилання, яке перенаправлятиме
  користувача до секції Work together. Projects Текст “Projects” є заголовком
  секції. Перелік проєктів та опису до них необхідно реалізувати за допомогою
  <ul> у вигляді горизонтального слайдера (https://swiperjs.com/swiper-api).
  Користувач повинен мати змогу взаємодіяти зі слайдером через мишу, клавіатуру
  (клавіш Tab та стрілок) або сенсорний екран. У разі досягнення кінця списку
  елементів, кнопка відповідно до вказаного напрямку повинна бути задізейблена
  (користувач більше не може взаємодіяти з нею, і вона не реагує на події clickу
  або натискання клавіші). Задізейблена кнопка візуальною змінюється, що
  підкреслює її неактивний стан. Зображення потрібно реалізувати як контенті.
  Посилання "See project" має відкривати проєкт команди, розміщений на GitHub, у
  новій вкладці. FAQ Текст “FAQ" є заголовком секції. Перелік популярних
  запитань необхідно реалізувати за допомогою <ul> і бібліотеки Accordeon як
  список елементів, що розкриватимуться або закриватимуться по clickу на елемент
  в залежності від його стану. По замовчуванню, всі елементи списку мають бути
  закритими. Covers У секції немає видимого заголовку. Потрібно зробити
  прихований заголовок для краулерів. Перелік обкладинок необхідно реалізувати
  за допомогою <ul>. За бажанням команди, перелік можна реалізувати у вигляді
  рядків, що біжуть (приклад). За допомогою JS така анімація має спрацьовувати
  лише за наявності секції "Covers" всередині viewportа користувача. Фон слід
  реалізувати за допомогою фонового зображення формату png (або радіальних
  градієнтів за бажанням команди). Reviews Текст “Reviews" є заголовком секції.
  "Перелік відгуків необхідно реалізувати за допомогою <ul> у вигляді
  горизонтального слайдера (https://swiperjs.com/swiper-api). Користувач повинен
  мати змогу взаємодіяти зі слайдером через мишу, клавіатуру (клавіш Tab та
  стрілок) або сенсорний екран. У разі досягнення кінця списку елементів, кнопка
  відповідно до вказаного напрямку повинна бути задізейблена (користувач більше
  не може взаємодіяти з нею, і вона не реагує на події clickу або натискання
  клавіші). Задізейблена кнопка візуальною змінюється, що підкреслює її
  неактивний стан.

Перелік відгуків слід отримувати з backendа. Якщо з сервера буде повернута
помилка - користувачеві слід повідомити про це за допомогою вспливаючого
повідомлення, а замість переліку відгуків відмалювати текст-заглушку ""Not
found""" Work together Текст “Let’s work together" є заголовком секції. "Секція
також містить форму, що включає обовʼязкові до заповнення елементи <input> та
кнопку “Send"" типу submit. Полю для введення електронної пошти слід додати
мінімальну валідацію введених даних за допомогою атрибуту
pattern=""^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"". У випадку, коли вміст
введеного тексту перевищує розмір поля input, відображується тільки обмежена
кількість символів, а решта тексту позначається трьома крапками (...), що
показує, що текст був обрізаний. По clickу на кнопку ""Send"" необхідно
відправити POST запит на сервер про створення заявки щодо співпраці та у разі
успішного створення - повідомити про це користувача, відкривши відповідне
модальне вікно, в цьому випадку слід також очистити форму. Якщо з сервера буде
повернута помилка - користувачеві слід повідомити про це за допомогою
вспливаючого повідомлення і надати можливість відкорегувати введені значення (не
очищувати форму) для їх подальшої повторної відправки." Контактний номер
телефону та email необхідно реалізувати за допомогою протоколів посилання. Фон
слід реалізувати з використанням фонового зображення формату png. Modal window
Текст “Thank you for your interest in cooperation!" є заголовком модального
вікна. Модальне вікно також містить описову частину та кнопку-іконку закриття.
Модальне вікно повинно закриватись по clickу на кнопку-іконку закриття, по
clickу на backdrop, а також натисканню на клавішу Escape.