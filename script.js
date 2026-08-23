document.documentElement.classList.add('js');

const btn = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');

if (btn && links) {
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('in-view'));
}

const i18n = {
  ru: {
    'דילוג לתוכן': 'Перейти к содержанию',
    'סדנת AI ובניית אתרים לתיכונים · אפשר להתחיל מקבוצה אחת': 'AI и создание сайтов для школ · можно начать с одной группы',
    'תפריט': 'Меню',
    'הצורך': 'Зачем',
    'התוצר': 'Результат',
    'מה קורה בשיעור': 'Урок',
    'פורמטים': 'Форматы',
    'בטיחות': 'Безопасность',
    'שאלות': 'Вопросы',
    'סדנת AI שבה תלמידים בונים אתר אמיתי': 'AI-семинар, где ученики создают настоящий сайт',
    'במפגש קצר או בקורס של כמה שיעורים התלמידים לוקחים רעיון, בונים לו עמוד אינטרנט, מבינים את הקוד ומפרסמים קישור שאפשר לפתוח ולהציג.': 'За короткую встречу или курс из нескольких занятий ученики берут идею, создают веб-страницу, понимают код и публикуют ссылку, которую можно открыть и показать.',
    'בדיקת התאמה לבית הספר': 'Проверить формат для школы',
    'פתיחת מסמך התוכנית': 'Открыть документ программы',
    'עיקרי התוכנית': 'Ключевые пункты программы',
    'סדנה של 2 עד 3 שעות': 'Семинар 2-3 часа',
    'קורס של 4 או 8 מפגשים': 'Курс на 4 или 8 встреч',
    'קישור אישי לכל תלמיד': 'Личная ссылка для каждого ученика',
    'המחשת פרויקט תלמיד': 'Пример ученического проекта',
    'תוצר': 'Результат',
    'אתר אישי וקישור להצגה': 'Личный сайт и ссылка для показа',
    'התחלה מומלצת': 'Рекомендуемый старт',
    'פיילוט לקבוצה אחת': 'Пилот для одной группы',
    'קהל יעד': 'Для кого',
    'כיתות י׳ עד י״ב': '10-12 классы',
    'דגש': 'Акцент',
    'AI אחראי, לא העתקה': 'Ответственный AI, не копирование',
    'התלמידים כבר משתמשים בכלי AI. עכשיו צריך ללמד אותם לעבוד נכון.': 'Ученики уже используют AI. Теперь нужно научить их работать правильно.',
    'לא צריך עוד הרצאה על העתיד. צריך שיעור שבו תלמידים שואלים שאלה טובה, בודקים את התשובה, מתקנים קוד ומסבירים מה הם בנו.': 'Нужна не ещё одна лекция о будущем, а урок, где ученики задают хороший вопрос, проверяют ответ, исправляют код и объясняют, что они построили.',
    'תוכנית שאפשר לבדוק מהר, בלי להפוך את כל המערכת.': 'Программа, которую можно быстро проверить без перестройки всей системы.',
    'חדשנות עם תוצר': 'Инновация с результатом',
    'במקום לדבר על חדשנות, התלמידים פותחים דפדפן ורואים משהו שהם יצרו.': 'Вместо разговоров об инновациях ученики открывают браузер и видят то, что создали сами.',
    'למידה פעילה': 'Активное обучение',
    'כותבים, בודקים, מתקנים ומשפרים. לא נשארים ברמת הדגמה על המסך.': 'Пишут, проверяют, исправляют и улучшают. Это не остаётся демонстрацией на экране.',
    'פיילוט נמוך סיכון': 'Пилот с низким риском',
    'מתחילים מקבוצה אחת. אחרי שרואים תוצרים, מחליטים אם להמשיך.': 'Начинаем с одной группы. После результатов решаем, расширять ли программу.',
    'שפה להנהלה ולהורים': 'Язык для администрации и родителей',
    'השפה מתאימה גם להנהלה ולהורים: אחריות, פרטיות ותוצר לימודי ברור.': 'Формулировки понятны администрации и родителям: ответственность, приватность и ясный учебный результат.',
    'מה נשאר אחרי שהסדנה נגמרת?': 'Что остаётся после семинара?',
    'לתלמיד': 'Для ученика',
    'אתר שהוא באמת מבין': 'Сайт, который он действительно понимает',
    'התלמיד לא רק מקבל קישור. הוא יודע להסביר מה יש בעמוד, איפה הקוד נמצא, ומה השתנה בעזרת AI.': 'Ученик получает не просто ссылку. Он может объяснить, что на странице, где код и что изменилось с помощью AI.',
    'רעיון אישי שהפך לעמוד עובד': 'Личная идея, ставшая рабочей страницей',
    'היכרות ראשונה עם HTML ו CSS': 'Первое знакомство с HTML и CSS',
    'ביטחון לפתוח קובץ, לשנות ולבדוק': 'Уверенность открыть файл, изменить и проверить',
    'לבית הספר': 'Для школы',
    'פעילות שאפשר להראות': 'Активность, которую можно показать',
    'בסוף הפעילות יש תוצרים, לא רק תמונות מהכיתה. אפשר להציג להנהלה, למחנכים ולהורים מה התלמידים בנו.': 'В конце есть результаты, а не только фотографии из класса. Можно показать администрации, педагогам и родителям, что ученики построили.',
    'כניסה מבוקרת לנושא AI': 'Контролируемый вход в тему AI',
    'תוצר מדיד לקבוצה אחת': 'Измеримый результат для одной группы',
    'בסיס להחלטה אם להרחיב לקורס': 'Основа для решения о расширении в курс',
    'מתאים במיוחד כאשר': 'Особенно подходит, когда',
    'בית הספר רוצה להתחיל עם AI בצורה מבוקרת, בלי רעש מיותר.': 'Школа хочет начать с AI контролируемо, без лишнего шума.',
    'חשוב לצאת עם תוצר שאפשר לפתוח ולהראות.': 'Важно получить результат, который можно открыть и показать.',
    'רוצים לתת לתלמידים מפגש עם כלים אמיתיים של עולם הטכנולוגיה.': 'Хочется дать ученикам встречу с реальными инструментами технологического мира.',
    'כדאי לתאם ציפיות אם': 'Стоит согласовать ожидания, если',
    'רוצים הרצאה בלבד, בלי מחשבים ובלי זמן עבודה לתלמידים.': 'Нужна только лекция, без компьютеров и времени на работу учеников.',
    'עדיין אין אישור לשימוש בכלי AI או GitHub.': 'Пока нет разрешения на использование AI-инструментов или GitHub.',
    'אין זמן לתרגול, טעויות, תיקון והצגה קצרה.': 'Нет времени на практику, ошибки, исправления и короткую презентацию.',
    'מרעיון לאתר שאפשר לפתוח': 'От идеи к сайту, который можно открыть',
    'תהליך העבודה': 'Процесс работы',
    'רעיון': 'Идея',
    'בקשת AI': 'Запрос к AI',
    'קוד': 'Код',
    'פרסום': 'Публикация',
    'בסוף הפעילות': 'В конце активности',
    'לכל תלמיד יש אתר אישי, קוד מסודר, קישור והסבר קצר על מה שבנה.': 'У каждого ученика есть личный сайт, аккуратный код, ссылка и короткое объяснение того, что он построил.',
    'הבסיס שהתלמידים צריכים כדי להתחיל לבנות בעצמם.': 'База, которая нужна ученикам, чтобы начать строить самостоятельно.',
    'המטרה אינה להפוך כל תלמיד למתכנת ביום אחד. המטרה היא לתת לו ביטחון, שפה וכלים להתחיל.': 'Цель не в том, чтобы за день сделать каждого программистом. Цель - дать уверенность, язык и инструменты для старта.',
    'ניסוח בקשה טובה לכלי AI': 'Формулировка хорошего запроса к AI',
    'HTML ומבנה עמוד': 'HTML и структура страницы',
    'CSS, צבעים, כרטיסים והתאמה למובייל': 'CSS, цвета, карточки и адаптация под мобильные',
    'JavaScript לפעולה פשוטה באתר': 'JavaScript для простого действия на сайте',
    'בדיקה ותיקון שגיאות': 'Проверка и исправление ошибок',
    'שמירת קוד ב GitHub': 'Сохранение кода в GitHub',
    'פרסום ב GitHub Pages': 'Публикация через GitHub Pages',
    'הצגת התוצר והסבר העבודה': 'Презентация результата и объяснение работы',
    'כך נראה שיעור בפועל': 'Так выглядит урок на практике',
    'מגדירים רעיון': 'Определяем идею',
    'כל תלמיד בוחר נושא ומנסח מה האתר אמור להראות.': 'Каждый ученик выбирает тему и формулирует, как должен выглядеть сайт.',
    'עובדים עם AI': 'Работаем с AI',
    'משתמשים בכלי AI כדי לקבל התחלה, ואז בודקים ומשנים בעצמם.': 'Используем AI, чтобы получить старт, затем проверяем и меняем самостоятельно.',
    'בונים ומתקנים': 'Строим и исправляем',
    'פותחים את הקובץ בדפדפן, רואים מה נשבר ומתקנים שלב אחר שלב.': 'Открываем файл в браузере, видим, что сломалось, и исправляем шаг за шагом.',
    'מפרסמים ומציגים': 'Публикуем и показываем',
    'שומרים את הקוד, מפרסמים ומראים את האתר לאחרים.': 'Сохраняем код, публикуем и показываем сайт другим.',
    'דוגמאות לפרויקטים שתלמידים יכולים לבנות': 'Примеры проектов, которые могут построить ученики',
    'אתר אישי': 'Личный сайт',
    'עמוד אישי עם תחומי עניין, מיומנויות וקישורים.': 'Личная страница с интересами, навыками и ссылками.',
    'אתר לפרויקט חברתי': 'Сайт для социального проекта',
    'עמוד שמציג בעיה, פתרון וקריאה לפעולה.': 'Страница, которая показывает проблему, решение и призыв к действию.',
    'אתר לרעיון טכנולוגי': 'Сайт для технологической идеи',
    'דף קצר שמסביר מוצר, אפליקציה או רעיון טכנולוגי.': 'Короткая страница, объясняющая продукт, приложение или технологическую идею.',
    'דוגמה לתוצר תלמיד': 'Пример результата ученика',
    'עמוד אישי קצר: מי אני, מה מעניין אותי, פרויקט קטן, קישורים ותמונה. פשוט מספיק להתחלה, אבל אמיתי מספיק כדי שהתלמיד ירגיש שהוא בנה משהו.': 'Короткая личная страница: кто я, что мне интересно, маленький проект, ссылки и изображение. Достаточно просто для старта, но достаточно реально, чтобы ученик почувствовал: он что-то построил.',
    'בפיילוט לא מחפשים אתר מושלם. מחפשים רגע שבו תלמיד פותח קישור ואומר: זה שלי, ואני יודע איך זה עובד.': 'В пилоте мы не ищем идеальный сайт. Мы ищем момент, когда ученик открывает ссылку и говорит: это моё, и я понимаю, как это работает.',
    'דוגמה לעמוד תלמיד': 'Пример страницы ученика',
    'נועה כהן': 'Ноа Коэн',
    'אפשר להתחיל קטן או לבנות תהליך מלא': 'Можно начать с малого или построить полный процесс',
    'אפשרות א׳': 'Вариант А',
    'סדנת פיילוט חד פעמית': 'Разовый пилотный семинар',
    '2 עד 3 שעות': '2-3 часа',
    'מתאים לבית ספר שרוצה לבדוק את הרעיון עם קבוצה אחת.': 'Подходит школе, которая хочет проверить идею с одной группой.',
    'היכרות עם AI ופיתוח': 'Знакомство с AI и разработкой',
    'בניית דף אישי בסיסי': 'Создание базовой личной страницы',
    'פרסום ראשון של האתר': 'Первая публикация сайта',
    'אפשרות ב׳': 'Вариант Б',
    'קורס קצר': 'Короткий курс',
    '4 מפגשים': '4 встречи',
    'מתאים לקבוצה שרוצה תוצר אישי ברור בזמן קצר.': 'Подходит группе, которой нужен ясный личный результат за короткое время.',
    'AI ורעיון לפרויקט': 'AI и идея проекта',
    'HTML ו CSS': 'HTML и CSS',
    'שיפור ותיקון עם AI': 'Улучшение и исправление с AI',
    'פרסום והצגת תוצרים': 'Публикация и презентация результатов',
    'אפשרות ג׳': 'Вариант В',
    'קורס מלא': 'Полный курс',
    '8 מפגשים': '8 встреч',
    'מתאים לבית ספר שרוצה יותר זמן לתרגול, תיקון והצגת תוצרים.': 'Подходит школе, которой нужно больше времени на практику, исправления и презентацию результатов.',
    'HTML, CSS ו JavaScript': 'HTML, CSS и JavaScript',
    'עבודה נכונה עם AI': 'Правильная работа с AI',
    'GitHub ו GitHub Pages': 'GitHub и GitHub Pages',
    'בדיקה, שיפור והצגת פרויקטים': 'Проверка, улучшение и презентация проектов',
    'עובדים עם AI בצורה אחראית וברורה': 'Работаем с AI ответственно и понятно',
    'פרטיות תלמידים': 'Приватность учеников',
    'לא מפרסמים מידע אישי רגיש. תכנים ותמונות נבחרים לפי כללי בית הספר.': 'Не публикуем чувствительные личные данные. Тексты и изображения выбираются по правилам школы.',
    'מדיניות בית הספר': 'Политика школы',
    'שימוש ב GitHub ובכלי AI נעשה לפי אישור וכללים ברורים של בית הספר.': 'Использование GitHub и AI-инструментов происходит по разрешению и ясным правилам школы.',
    'חשיבה ביקורתית': 'Критическое мышление',
    'התלמידים בודקים תשובות של AI ולא מציגים עבודה שהם לא יודעים להסביר.': 'Ученики проверяют ответы AI и не представляют работу, которую не могут объяснить.',
    'פיקוח והדרכה': 'Сопровождение и контроль',
    'העבודה מתבצעת במסגרת מונחית, עם מטרות ברורות וקצב שמתאים לכיתה.': 'Работа проходит в управляемом формате, с ясными целями и темпом, подходящим классу.',
    'ולדימיר ברסון': 'Владимир Берсон',
    'עוסק בפיתוח תוכנה, AI, סייבר ואוטומציה. מעביר את התוכנית בצורה מעשית: רעיון, קוד, בדיקה, תיקון ופרסום.': 'Занимается разработкой ПО, AI, кибербезопасностью и автоматизацией. Ведёт программу практично: идея, код, проверка, исправление и публикация.',
    'הדגש הוא על עבודה אחראית עם AI ועל תוצר שהתלמיד באמת מבין ויכול להציג.': 'Акцент на ответственной работе с AI и результате, который ученик действительно понимает и может представить.',
    'שאלות שבדרך כלל עולות לפני שמתחילים': 'Вопросы, которые обычно возникают до начала',
    'האם התוכנית מתאימה לתלמידים ללא ניסיון בתכנות?': 'Подходит ли программа ученикам без опыта программирования?',
    'כן. מתחילים מרעיון ומבנה עמוד, ואז מתקדמים לעיצוב, תיקון שגיאות ופרסום.': 'Да. Начинаем с идеи и структуры страницы, затем переходим к дизайну, исправлению ошибок и публикации.',
    'האם התלמידים משתמשים ב AI במקום ללמוד?': 'Используют ли ученики AI вместо обучения?',
    'לא. AI הוא כלי עזר. התלמיד עדיין צריך להבין את הקוד, לבדוק תשובות ולהסביר את העבודה במילים שלו.': 'Нет. AI - вспомогательный инструмент. Ученик всё равно должен понимать код, проверять ответы и объяснять работу своими словами.',
    'מה בית הספר צריך להכין?': 'Что должна подготовить школа?',
    'כיתה עם מחשבים, אינטרנט יציב, מקרן, אישור שימוש בכלי AI/GitHub, רשימת תלמידים ואיש קשר מטעם בית הספר.': 'Класс с компьютерами, стабильный интернет, проектор, разрешение на AI/GitHub, список учеников и контактное лицо от школы.',
    'האם אפשר להתחיל בלי קורס מלא?': 'Можно ли начать без полного курса?',
    'כן. מתחילים בפיילוט לקבוצה אחת, רואים תוצרים ומחליטים אם להמשיך לקורס קצר או מלא.': 'Да. Начинаем с пилота для одной группы, смотрим результаты и решаем, переходить ли к короткому или полному курсу.',
    'רוצים לבדוק אם זה מתאים לבית הספר?': 'Хотите проверить, подходит ли это школе?',
    'אפשר להתחיל בשיחת WhatsApp קצרה, להבין את הכיתה, את המטרה ואת הכללים של בית הספר, ואז להתאים את הפורמט.': 'Можно начать с короткого разговора в WhatsApp, понять класс, цель и правила школы, а затем адаптировать формат.',
    'שליחת WhatsApp': 'Написать в WhatsApp',
    'WhatsApp: +972 54 799 9309': 'WhatsApp: +972 54 799 9309',
    'HellSec Edu · סדנאות AI ובניית אתרים לתיכונים': 'HellSec Edu · AI и создание сайтов для школ',
    'בדיקת התאמה ב WhatsApp': 'Проверить в WhatsApp',
    '2-3 שעות · קבוצה אחת': '2-3 часа · одна группа',
    'חזרה למעלה': 'Наверх'
  },
  en: {
    'דילוג לתוכן': 'Skip to content',
    'סדנת AI ובניית אתרים לתיכונים · אפשר להתחיל מקבוצה אחת': 'AI and website building for high schools · start with one group',
    'תפריט': 'Menu',
    'הצורך': 'Need',
    'התוצר': 'Outcome',
    'מה קורה בשיעור': 'Lesson',
    'פורמטים': 'Formats',
    'בטיחות': 'Safety',
    'שאלות': 'FAQ',
    'סדנת AI שבה תלמידים בונים אתר אמיתי': 'An AI workshop where students build a real website',
    'במפגש קצר או בקורס של כמה שיעורים התלמידים לוקחים רעיון, בונים לו עמוד אינטרנט, מבינים את הקוד ומפרסמים קישור שאפשר לפתוח ולהציג.': 'In a short session or a multi lesson course, students take an idea, build a web page, understand the code and publish a link they can open and present.',
    'בדיקת התאמה לבית הספר': 'Check fit for your school',
    'פתיחת מסמך התוכנית': 'Open program document',
    'עיקרי התוכנית': 'Program highlights',
    'סדנה של 2 עד 3 שעות': '2 to 3 hour workshop',
    'קורס של 4 או 8 מפגשים': '4 or 8 session course',
    'קישור אישי לכל תלמיד': 'Personal link for every student',
    'המחשת פרויקט תלמיד': 'Student project preview',
    'תוצר': 'Outcome',
    'אתר אישי וקישור להצגה': 'Personal website and presentation link',
    'התחלה מומלצת': 'Recommended start',
    'פיילוט לקבוצה אחת': 'Pilot for one group',
    'קהל יעד': 'Audience',
    'כיתות י׳ עד י״ב': 'Grades 10 to 12',
    'דגש': 'Focus',
    'AI אחראי, לא העתקה': 'Responsible AI, not copying',
    'התלמידים כבר משתמשים בכלי AI. עכשיו צריך ללמד אותם לעבוד נכון.': 'Students already use AI tools. Now they need to learn how to work with them properly.',
    'לא צריך עוד הרצאה על העתיד. צריך שיעור שבו תלמידים שואלים שאלה טובה, בודקים את התשובה, מתקנים קוד ומסבירים מה הם בנו.': 'They do not need another lecture about the future. They need a lesson where they ask a good question, check the answer, fix code and explain what they built.',
    'תוכנית שאפשר לבדוק מהר, בלי להפוך את כל המערכת.': 'A program you can test quickly without changing the whole system.',
    'חדשנות עם תוצר': 'Innovation with an outcome',
    'במקום לדבר על חדשנות, התלמידים פותחים דפדפן ורואים משהו שהם יצרו.': 'Instead of talking about innovation, students open a browser and see something they created.',
    'למידה פעילה': 'Active learning',
    'כותבים, בודקים, מתקנים ומשפרים. לא נשארים ברמת הדגמה על המסך.': 'They write, test, fix and improve. It does not stay as a screen demo.',
    'פיילוט נמוך סיכון': 'Low risk pilot',
    'מתחילים מקבוצה אחת. אחרי שרואים תוצרים, מחליטים אם להמשיך.': 'Start with one group. After seeing the outcomes, decide whether to continue.',
    'שפה להנהלה ולהורים': 'Language for leadership and parents',
    'השפה מתאימה גם להנהלה ולהורים: אחריות, פרטיות ותוצר לימודי ברור.': 'The framing works for leadership and parents: responsibility, privacy and a clear learning outcome.',
    'מה נשאר אחרי שהסדנה נגמרת?': 'What remains after the workshop?',
    'לתלמיד': 'For the student',
    'אתר שהוא באמת מבין': 'A website they truly understand',
    'התלמיד לא רק מקבל קישור. הוא יודע להסביר מה יש בעמוד, איפה הקוד נמצא, ומה השתנה בעזרת AI.': 'The student does not just receive a link. They can explain what is on the page, where the code is and what changed with AI.',
    'רעיון אישי שהפך לעמוד עובד': 'A personal idea turned into a working page',
    'היכרות ראשונה עם HTML ו CSS': 'First contact with HTML and CSS',
    'ביטחון לפתוח קובץ, לשנות ולבדוק': 'Confidence to open a file, change it and test it',
    'לבית הספר': 'For the school',
    'פעילות שאפשר להראות': 'An activity you can show',
    'בסוף הפעילות יש תוצרים, לא רק תמונות מהכיתה. אפשר להציג להנהלה, למחנכים ולהורים מה התלמידים בנו.': 'At the end there are outcomes, not just classroom photos. You can show leadership, educators and parents what students built.',
    'כניסה מבוקרת לנושא AI': 'A controlled entry into AI',
    'תוצר מדיד לקבוצה אחת': 'A measurable outcome for one group',
    'בסיס להחלטה אם להרחיב לקורס': 'A basis for deciding whether to expand into a course',
    'מתאים במיוחד כאשר': 'Best suited when',
    'בית הספר רוצה להתחיל עם AI בצורה מבוקרת, בלי רעש מיותר.': 'The school wants to start with AI in a controlled way, without unnecessary noise.',
    'חשוב לצאת עם תוצר שאפשר לפתוח ולהראות.': 'It is important to leave with something that can be opened and shown.',
    'רוצים לתת לתלמידים מפגש עם כלים אמיתיים של עולם הטכנולוגיה.': 'You want students to meet real tools from the technology world.',
    'כדאי לתאם ציפיות אם': 'Expectations should be aligned if',
    'רוצים הרצאה בלבד, בלי מחשבים ובלי זמן עבודה לתלמידים.': 'You only want a lecture, without computers or student work time.',
    'עדיין אין אישור לשימוש בכלי AI או GitHub.': 'There is not yet approval to use AI tools or GitHub.',
    'אין זמן לתרגול, טעויות, תיקון והצגה קצרה.': 'There is no time for practice, mistakes, fixing and a short presentation.',
    'מרעיון לאתר שאפשר לפתוח': 'From idea to a website you can open',
    'תהליך העבודה': 'Work process',
    'רעיון': 'Idea',
    'בקשת AI': 'AI prompt',
    'קוד': 'Code',
    'פרסום': 'Publish',
    'בסוף הפעילות': 'At the end',
    'לכל תלמיד יש אתר אישי, קוד מסודר, קישור והסבר קצר על מה שבנה.': 'Every student has a personal website, organized code, a link and a short explanation of what they built.',
    'הבסיס שהתלמידים צריכים כדי להתחיל לבנות בעצמם.': 'The foundation students need to start building on their own.',
    'המטרה אינה להפוך כל תלמיד למתכנת ביום אחד. המטרה היא לתת לו ביטחון, שפה וכלים להתחיל.': 'The goal is not to turn every student into a programmer in one day. The goal is to give them confidence, language and tools to begin.',
    'ניסוח בקשה טובה לכלי AI': 'Writing a good prompt for an AI tool',
    'HTML ומבנה עמוד': 'HTML and page structure',
    'CSS, צבעים, כרטיסים והתאמה למובייל': 'CSS, colors, cards and mobile adaptation',
    'JavaScript לפעולה פשוטה באתר': 'JavaScript for a simple site action',
    'בדיקה ותיקון שגיאות': 'Testing and fixing errors',
    'שמירת קוד ב GitHub': 'Saving code in GitHub',
    'פרסום ב GitHub Pages': 'Publishing with GitHub Pages',
    'הצגת התוצר והסבר העבודה': 'Presenting the outcome and explaining the work',
    'כך נראה שיעור בפועל': 'What a real lesson looks like',
    'מגדירים רעיון': 'Define the idea',
    'כל תלמיד בוחר נושא ומנסח מה האתר אמור להראות.': 'Each student chooses a topic and describes what the website should show.',
    'עובדים עם AI': 'Work with AI',
    'משתמשים בכלי AI כדי לקבל התחלה, ואז בודקים ומשנים בעצמם.': 'Use AI tools to get a starting point, then test and change it themselves.',
    'בונים ומתקנים': 'Build and fix',
    'פותחים את הקובץ בדפדפן, רואים מה נשבר ומתקנים שלב אחר שלב.': 'Open the file in a browser, see what breaks and fix it step by step.',
    'מפרסמים ומציגים': 'Publish and present',
    'שומרים את הקוד, מפרסמים ומראים את האתר לאחרים.': 'Save the code, publish it and show the site to others.',
    'דוגמאות לפרויקטים שתלמידים יכולים לבנות': 'Examples of projects students can build',
    'אתר אישי': 'Personal website',
    'עמוד אישי עם תחומי עניין, מיומנויות וקישורים.': 'A personal page with interests, skills and links.',
    'אתר לפרויקט חברתי': 'Website for a social project',
    'עמוד שמציג בעיה, פתרון וקריאה לפעולה.': 'A page that presents a problem, solution and call to action.',
    'אתר לרעיון טכנולוגי': 'Website for a tech idea',
    'דף קצר שמסביר מוצר, אפליקציה או רעיון טכנולוגי.': 'A short page explaining a product, app or technology idea.',
    'דוגמה לתוצר תלמיד': 'Example student outcome',
    'עמוד אישי קצר: מי אני, מה מעניין אותי, פרויקט קטן, קישורים ותמונה. פשוט מספיק להתחלה, אבל אמיתי מספיק כדי שהתלמיד ירגיש שהוא בנה משהו.': 'A short personal page: who I am, what interests me, a small project, links and an image. Simple enough to start, but real enough for the student to feel they built something.',
    'בפיילוט לא מחפשים אתר מושלם. מחפשים רגע שבו תלמיד פותח קישור ואומר: זה שלי, ואני יודע איך זה עובד.': 'In a pilot, we are not looking for a perfect website. We are looking for the moment when a student opens a link and says: this is mine, and I know how it works.',
    'דוגמה לעמוד תלמיד': 'Student page example',
    'נועה כהן': 'Noa Cohen',
    'אפשר להתחיל קטן או לבנות תהליך מלא': 'Start small or build a full process',
    'אפשרות א׳': 'Option A',
    'סדנת פיילוט חד פעמית': 'One time pilot workshop',
    '2 עד 3 שעות': '2 to 3 hours',
    'מתאים לבית ספר שרוצה לבדוק את הרעיון עם קבוצה אחת.': 'For a school that wants to test the idea with one group.',
    'היכרות עם AI ופיתוח': 'Intro to AI and development',
    'בניית דף אישי בסיסי': 'Build a basic personal page',
    'פרסום ראשון של האתר': 'First website publication',
    'אפשרות ב׳': 'Option B',
    'קורס קצר': 'Short course',
    '4 מפגשים': '4 sessions',
    'מתאים לקבוצה שרוצה תוצר אישי ברור בזמן קצר.': 'For a group that wants a clear personal outcome in a short time.',
    'AI ורעיון לפרויקט': 'AI and project idea',
    'HTML ו CSS': 'HTML and CSS',
    'שיפור ותיקון עם AI': 'Improve and fix with AI',
    'פרסום והצגת תוצרים': 'Publish and present outcomes',
    'אפשרות ג׳': 'Option C',
    'קורס מלא': 'Full course',
    '8 מפגשים': '8 sessions',
    'מתאים לבית ספר שרוצה יותר זמן לתרגול, תיקון והצגת תוצרים.': 'For a school that wants more time for practice, fixing and presenting outcomes.',
    'HTML, CSS ו JavaScript': 'HTML, CSS and JavaScript',
    'עבודה נכונה עם AI': 'Proper work with AI',
    'GitHub ו GitHub Pages': 'GitHub and GitHub Pages',
    'בדיקה, שיפור והצגת פרויקטים': 'Testing, improving and presenting projects',
    'עובדים עם AI בצורה אחראית וברורה': 'Work with AI responsibly and clearly',
    'פרטיות תלמידים': 'Student privacy',
    'לא מפרסמים מידע אישי רגיש. תכנים ותמונות נבחרים לפי כללי בית הספר.': 'No sensitive personal information is published. Content and images are chosen according to school rules.',
    'מדיניות בית הספר': 'School policy',
    'שימוש ב GitHub ובכלי AI נעשה לפי אישור וכללים ברורים של בית הספר.': 'GitHub and AI tools are used according to school approval and clear rules.',
    'חשיבה ביקורתית': 'Critical thinking',
    'התלמידים בודקים תשובות של AI ולא מציגים עבודה שהם לא יודעים להסביר.': 'Students check AI answers and do not present work they cannot explain.',
    'פיקוח והדרכה': 'Guidance and supervision',
    'העבודה מתבצעת במסגרת מונחית, עם מטרות ברורות וקצב שמתאים לכיתה.': 'The work is guided, with clear goals and a pace that fits the class.',
    'ולדימיר ברסון': 'Vladimir Berson',
    'עוסק בפיתוח תוכנה, AI, סייבר ואוטומציה. מעביר את התוכנית בצורה מעשית: רעיון, קוד, בדיקה, תיקון ופרסום.': 'Works in software development, AI, cyber and automation. Delivers the program practically: idea, code, testing, fixing and publishing.',
    'הדגש הוא על עבודה אחראית עם AI ועל תוצר שהתלמיד באמת מבין ויכול להציג.': 'The focus is responsible AI work and an outcome the student truly understands and can present.',
    'שאלות שבדרך כלל עולות לפני שמתחילים': 'Questions that usually come up before starting',
    'האם התוכנית מתאימה לתלמידים ללא ניסיון בתכנות?': 'Is the program suitable for students without coding experience?',
    'כן. מתחילים מרעיון ומבנה עמוד, ואז מתקדמים לעיצוב, תיקון שגיאות ופרסום.': 'Yes. We start with an idea and page structure, then move to design, error fixing and publishing.',
    'האם התלמידים משתמשים ב AI במקום ללמוד?': 'Do students use AI instead of learning?',
    'לא. AI הוא כלי עזר. התלמיד עדיין צריך להבין את הקוד, לבדוק תשובות ולהסביר את העבודה במילים שלו.': 'No. AI is an assistant tool. The student still needs to understand the code, check answers and explain the work in their own words.',
    'מה בית הספר צריך להכין?': 'What should the school prepare?',
    'כיתה עם מחשבים, אינטרנט יציב, מקרן, אישור שימוש בכלי AI/GitHub, רשימת תלמידים ואיש קשר מטעם בית הספר.': 'A classroom with computers, stable internet, projector, approval for AI/GitHub tools, student list and a school contact person.',
    'האם אפשר להתחיל בלי קורס מלא?': 'Can we start without a full course?',
    'כן. מתחילים בפיילוט לקבוצה אחת, רואים תוצרים ומחליטים אם להמשיך לקורס קצר או מלא.': 'Yes. Start with a pilot for one group, see outcomes and decide whether to continue to a short or full course.',
    'רוצים לבדוק אם זה מתאים לבית הספר?': 'Want to check if this fits your school?',
    'אפשר להתחיל בשיחת WhatsApp קצרה, להבין את הכיתה, את המטרה ואת הכללים של בית הספר, ואז להתאים את הפורמט.': 'We can start with a short WhatsApp conversation, understand the class, goal and school rules, then adapt the format.',
    'שליחת WhatsApp': 'Send WhatsApp',
    'WhatsApp: +972 54 799 9309': 'WhatsApp: +972 54 799 9309',
    'HellSec Edu · סדנאות AI ובניית אתרים לתיכונים': 'HellSec Edu · AI and website building for high schools',
    'בדיקת התאמה ב WhatsApp': 'Check fit on WhatsApp',
    '2-3 שעות · קבוצה אחת': '2-3 hours · one group',
    'חזרה למעלה': 'Back to top'
  }
};

const originalTexts = new WeakMap();
const translatedAttrs = ['aria-label', 'alt', 'title'];

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function walkTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (!normalizeText(node.nodeValue)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

function applyLanguage(lang) {
  const safeLang = ['he', 'ru', 'en'].includes(lang) ? lang : 'he';
  const dict = i18n[safeLang] || {};
  document.documentElement.lang = safeLang;
  document.documentElement.dir = safeLang === 'he' ? 'rtl' : 'ltr';
  document.body.classList.toggle('is-ltr', safeLang !== 'he');
  document.body.classList.toggle('is-rtl', safeLang === 'he');

  walkTextNodes(document.body).forEach((node) => {
    if (!originalTexts.has(node)) originalTexts.set(node, node.nodeValue);
    const original = normalizeText(originalTexts.get(node));
    const replacement = safeLang === 'he' ? original : dict[original];
    if (replacement) node.nodeValue = node.nodeValue.replace(/\S[\s\S]*\S|\S/, replacement);
  });

  document.querySelectorAll('[aria-label], img[alt], [title]').forEach((el) => {
    translatedAttrs.forEach((attr) => {
      if (!el.hasAttribute(attr)) return;
      const key = `data-original-${attr}`;
      if (!el.hasAttribute(key)) el.setAttribute(key, el.getAttribute(attr));
      const original = normalizeText(el.getAttribute(key));
      const replacement = safeLang === 'he' ? original : dict[original];
      if (replacement) el.setAttribute(attr, replacement);
    });
  });

  document.querySelectorAll('.lang-switch button').forEach((languageButton) => {
    const active = languageButton.dataset.lang === safeLang;
    languageButton.classList.toggle('active', active);
    languageButton.setAttribute('aria-pressed', String(active));
  });

  try { localStorage.setItem('hellsecEduLang', safeLang); } catch (error) {}
  const url = new URL(window.location.href);
  url.searchParams.set('lang', safeLang);
  window.history.replaceState({}, '', url);
}

const initialLang = new URLSearchParams(window.location.search).get('lang') || (() => {
  try { return localStorage.getItem('hellsecEduLang'); } catch (error) { return null; }
})();
applyLanguage(initialLang || 'he');

document.querySelectorAll('.lang-switch button').forEach((languageButton) => {
  languageButton.addEventListener('click', () => {
    applyLanguage(languageButton.dataset.lang);
    links?.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
  });
});

const backToTop = document.querySelector('.back-to-top');
const hero = document.querySelector('.hero');
const mobileStickyCta = document.querySelector('.mobile-sticky-cta');
function updateBackToTop() {
  if (!hero) return;
  const y = getPageScrollY();
  const heroBottom = hero.getBoundingClientRect().bottom + y;
  backToTop?.classList.toggle('visible', y > heroBottom - 120);
  mobileStickyCta?.classList.toggle('visible', y > 360);
}
function getPageScrollY() {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function updateFloatingNav() {
  const y = getPageScrollY();
  document.body.classList.toggle('nav-scrolled', y > 12);
}
window.addEventListener('scroll', () => { updateBackToTop(); updateFloatingNav(); }, { passive: true });
document.addEventListener('scroll', () => { updateBackToTop(); updateFloatingNav(); }, { passive: true });
window.addEventListener('resize', () => { updateBackToTop(); updateFloatingNav(); });
requestAnimationFrame(() => { updateBackToTop(); updateFloatingNav(); });
updateBackToTop();
updateFloatingNav();
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
