// Bilingual translations (Russian and Uzbek)
const translations = {
    ru: {
        // Header
        headerTitle: "Опрос об образовании и цифровых инструментах",
        headerSubtitle: "Анонимный опрос для школ Узбекистана",
        langText: "O'zbek",
        
        // Welcome Section
        welcomeTitle: "Добро пожаловать!",
        welcomeDescription: "Этот опрос поможет нам понять, как цифровые технологии и инструменты на основе ИИ используются в образовании. Ваши ответы полностью анонимны и помогут улучшить качество обучения.",
        feature1Title: "Полная анонимность",
        feature1Desc: "Личные данные не собираются",
        feature2Title: "5-7 минут",
        feature2Desc: "Быстрое прохождение",
        feature3Title: "Результаты сразу",
        feature3Desc: "Визуализация после опроса",
        startBtnText: "Начать опрос",
        
        // Progress
        progressLabel: "Прогресс",
        step1Label: "Шаг 1",
        step2Label: "Шаг 2",
        step3Label: "Шаг 3",
        step4Label: "Шаг 4",
        
        // Step 1: Role Selection
        roleQuestion: "Выберите вашу роль",
        roleStudent: "Ученик (10+ лет)",
        roleParent: "Родитель / Законный представитель",
        roleTeacher: "Учитель / Преподаватель",
        roleAdmin: "Администратор (Директор, завуч)",
        roleIT: "Учитель информатики / ИКТ-координатор",
        roleOtherOption: "Другое",
        
        // Step 2: Demographics
        demographicsTitle: "Общая информация",
        ageLabel: "Возрастная группа",
        regionLabel: "Регион",
        schoolTypeLabel: "Тип школы",
        schoolTypePlaceholder: "-- Выберите тип школы --",
        schoolTypePublic: "Государственная общеобразовательная школа",
        schoolTypeSpecialized: "Специализированная школа",
        schoolTypeLyceum: "Академический лицей",
        schoolTypeCollege: "Профессиональный колледж",
        schoolTypePrivate: "Частная школа",
        schoolTypeInternational: "Международная школа",
        
        // Private Tutoring
        privateTutoringLabel: "Занимаешься ли ты с репетитором (частные уроки после школы)?",
        tutorYes: "Да, занимаюсь с репетитором",
        tutorNo: "Нет, не занимаюсь",
        tutorReasonsLabel: "Почему ты занимаешься с репетитором? (можно выбрать несколько)",
        reasonUniversity: "Для поступления в университет",
        reasonGrades: "Чтобы получать хорошие оценки",
        reasonAsk: "Не могу спросить учителя, если не понимаю",
        reasonUnderstand: "Не понимаю материал в школе",
        reasonHomework: "Слишком много домашнего задания",
        reasonParents: "Родители хотят, чтобы я занимался",
        reasonOther: "Другая причина",
        
        // Step 3: Digital Tools
        digitalToolsTitle: "Использование цифровых инструментов",
        usageFreqLabel: "Как часто вы используете цифровые инструменты в процессе обучения?",
        usageDaily: "Ежедневно",
        usageSeveral: "Несколько раз в неделю",
        usageOnce: "Раз в неделю",
        usageRarely: "Редко",
        usageNever: "Никогда",
        
        aiAwarenessLabel: "Знакомы ли вы с инструментами на основе искусственного интеллекта (ИИ) для обучения?",
        aiVery: "Очень хорошо знаком",
        aiSomewhat: "Частично знаком",
        aiHeard: "Слышал о них",
        aiNot: "Не знаком",
        
        aiToolsUsedLabel: "Какие инструменты на основе ИИ вы используете или знаете? (можно выбрать несколько)",
        toolOther: "Другие",
        toolNone: "Не использую",
        
        // Step 4: Assessment
        assessmentTitle: "Оценка и обратная связь",
        effectivenessLabel: "Оцените эффективность цифровых инструментов в обучении (1-5)",
        
        challengesLabel: "С какими проблемами вы сталкиваетесь при использовании цифровых инструментов?",
        challengeInternet: "Качество интернета",
        challengeDevice: "Доступ к устройствам",
        challengeSkills: "Недостаток навыков",
        challengeLanguage: "Языковой барьер",
        challengeContent: "Качество контента",
        challengeNone: "Нет проблем",
        
        internetLabel: "Качество интернет-доступа в школе/дома",
        deviceLabel: "Доступность устройств (компьютер, планшет, смартфон)",
        
        trainingLabel: "Нужно ли вам обучение по использованию цифровых инструментов?",
        trainingDefinitely: "Определённо да",
        trainingProbably: "Вероятно да",
        trainingUnsure: "Не уверен",
        trainingProbablyNo: "Вероятно нет",
        trainingNo: "Определённо нет",
        
        // Teacher Transformation
        teacherTransformLabel: "Как изменится роль учителя с ИИ в ближайшие три года? (можно выбрать несколько)",
        teacherTransformHelper: "Поделитесь своими мыслями о том, как искусственный интеллект изменит работу учителей.",
        transform1Text: "Учителя будут меньше времени объяснять и больше организовывать учебную деятельность",
        transform2Text: "Учителя будут давать больше обратной связи и поддержки, а ИИ поможет с проверкой работ",
        transform3Text: "Учителя будут помогать ученикам учиться в своём темпе с помощью ИИ-инструментов",
        transform4Text: "Учителя будут больше внимания уделять мышлению, обсуждению и решению проблем, а не запоминанию",
        transform5Text: "Учителя будут больше выступать в роли наставников и мотиваторов для учеников",
        transform6Text: "Учителя будут использовать данные об обучении от ИИ для лучшей поддержки учеников",
        transform7Text: "Учителям потребуются новые навыки для работы с ИИ в классе",
        
        aiLanguageLabel: "На каком языке вы хотели бы использовать инструменты ИИ? (можно выбрать несколько, в порядке важности)",
        aiLanguageHelperText: "🌍 Выбери языки, на которых тебе удобнее учиться. Можно выбрать несколько!",
        langOther: "Другой язык",
        
        expectationsLabel: "Ваши ожидания от будущих цифровых инструментов в образовании",
        commentsLabel: "Дополнительные комментарии или предложения",
        
        // Navigation
        prevBtnText: "Назад",
        nextBtnText: "Далее",
        submitBtnText: "Отправить ответы",
        
        // Results
        thanksTitle: "Спасибо за участие!",
        thanksMessage: "Ваши ответы помогут улучшить качество образования с использованием цифровых технологий.",
        resultsTitle: "Результаты опроса",
        roleDistTitle: "Распределение участников по ролям",
        usageChartTitle: "Частота использования цифровых инструментов",
        aiAwarenessChartTitle: "Осведомлённость об инструментах ИИ",
        effectivenessChartTitle: "Оценка эффективности",
        challengesChartTitle: "Основные проблемы",
        languageChartTitle: "Предпочитаемые языки для AI инструментов",
        tutoringChartTitle: "Использование репетиторов (только учащиеся)",
        teacherTransformChartTitle: "Как изменится роль учителя с AI",
        newSurveyBtnText: "Пройти опрос снова",
        
        // Footer
        footerText: "© 2026 Опрос об образовании и цифровых инструментах | Все данные анонимны",
        
        // Helper texts for students
        helperText: "Эти вопросы помогут нам понять, какие школы участвуют в опросе. Твои ответы полностью анонимны!",
        aiToolsHelperText: "💡 ИИ (искусственный интеллект) - это умные программы, которые могут отвечать на вопросы, помогать с домашним заданием, учить языки и многое другое!",
        
        // AI Tool descriptions
        chatgptDesc: "💬 Умный помощник для вопросов",
        bardDesc: "🤖 Помощник от Google",
        khanDesc: "📚 Учёба по видео и заданиям",
        duolingoDesc: "🗣️ Учим языки весело",
        quizletDesc: "📝 Карточки для запоминания",
        grammarlyDesc: "✍️ Проверка грамматики",
        canvaDesc: "🎨 Создание картинок и презентаций",
        
        // Select Options
        internetExcellent: "Отличное",
        internetGood: "Хорошее",
        internetAverage: "Среднее",
        internetPoor: "Плохое",
        internetNo: "Нет доступа",
        
        deviceAlways: "Всегда доступны",
        deviceMostly: "Часто доступны",
        deviceSometimes: "Иногда доступны",
        deviceRarely: "Редко доступны",
        deviceNot: "Недоступны"
    },
    
    uz: {
        // Header
        headerTitle: "Ta'lim va raqamli vositalar so'rovnomasi",
        headerSubtitle: "O'zbekiston maktablari uchun anonim so'rovnoma",
        langText: "Русский",
        
        // Welcome Section
        welcomeTitle: "Xush kelibsiz!",
        welcomeDescription: "Ushbu so'rovnoma raqamli texnologiyalar va sun'iy intellekt asosidagi vositalar ta'limda qanday qo'llanilishini tushunishga yordam beradi. Sizning javoblaringiz to'liq anonim va ta'lim sifatini yaxshilashga yordam beradi.",
        feature1Title: "To'liq anonimllik",
        feature1Desc: "Shaxsiy ma'lumotlar yig'ilmaydi",
        feature2Title: "5-7 daqiqa",
        feature2Desc: "Tez o'tish",
        feature3Title: "Natijalar darhol",
        feature3Desc: "So'rovnomadan keyin vizualizatsiya",
        startBtnText: "So'rovnomani boshlash",
        
        // Progress
        progressLabel: "Jarayon",
        step1Label: "1-qadam",
        step2Label: "2-qadam",
        step3Label: "3-qadam",
        step4Label: "4-qadam",
        
        // Step 1: Role Selection
        roleQuestion: "Rolingizni tanlang",
        roleStudent: "O'quvchi (10+ yosh)",
        roleParent: "Ota-ona / Qonuniy vakil",
        roleTeacher: "O'qituvchi / Pedagog",
        roleAdmin: "Ma'mur (Direktor, o'rinbosar)",
        roleIT: "Informatika o'qituvchisi / AKT koordinatori",
        
        // Step 2: Demographics
        demographicsTitle: "Umumiy ma'lumot",
        ageLabel: "Yosh guruhi",
        regionLabel: "Hudud",
        schoolTypeLabel: "Maktab turi",
        schoolTypePlaceholder: "-- Maktab turini tanlang --",
        schoolTypePublic: "Umumta'lim maktabi",
        schoolTypeSpecialized: "Ixtisoslashtirilgan maktab",
        schoolTypeLyceum: "Akademik litsey",
        schoolTypeCollege: "Kasb-hunar kolleji",
        schoolTypePrivate: "Xususiy maktab",
        schoolTypeInternational: "Xalqaro maktab",
        
        // Private Tutoring
        privateTutoringLabel: "Repetitor (maktabdan keyin shaxsiy darslar) bilan shug'ullanasizmi?",
        tutorYes: "Ha, repetitor bilan shug'ullanaman",
        tutorNo: "Yo'q, shug'ullanmayman",
        tutorReasonsLabel: "Nega repetitor bilan shug'ullanasiz? (bir nechtasini tanlash mumkin)",
        reasonUniversity: "Universitetga kirish uchun",
        reasonGrades: "Yaxshi baholar olish uchun",
        reasonAsk: "Tushunmasam, o'qituvchidan so'ray olmayman",
        reasonUnderstand: "Maktabda materialni tushunmayman",
        reasonHomework: "Uy vazifasi juda ko'p",
        reasonParents: "Ota-onam shug'ullanishimni xohlashadi",
        reasonOther: "Boshqa sabab",
        
        // Step 3: Digital Tools
        digitalToolsTitle: "Raqamli vositalardan foydalanish",
        usageFreqLabel: "O'quv jarayonida raqamli vositalardan qanchalik tez-tez foydalanasiz?",
        usageDaily: "Har kuni",
        usageSeveral: "Haftada bir necha marta",
        usageOnce: "Haftada bir marta",
        usageRarely: "Kamdan-kam",
        usageNever: "Hech qachon",
        
        aiAwarenessLabel: "Sun'iy intellekt (AI) asosidagi ta'lim vositalari bilan tanishmisiz?",
        aiVery: "Juda yaxshi tanishman",
        aiSomewhat: "Qisman tanishman",
        aiHeard: "Ular haqida eshitganman",
        aiNot: "Tanish emasman",
        
        aiToolsUsedLabel: "Qaysi AI asosidagi vositalardan foydalanasiz yoki bilasiz? (bir nechtasini tanlash mumkin)",
        toolOther: "Boshqalar",
        toolNone: "Foydalanmayman",
        
        // Step 4: Assessment
        assessmentTitle: "Baholash va fikr-mulohaza",
        effectivenessLabel: "Ta'limda raqamli vositalar samaradorligini baholang (1-5)",
        
        challengesLabel: "Raqamli vositalardan foydalanishda qanday muammolarga duch kelasiz?",
        challengeInternet: "Internet sifati",
        challengeDevice: "Qurilmalarga kirish",
        challengeSkills: "Ko'nikmalar yetishmasligi",
        challengeLanguage: "Til to'sig'i",
        challengeContent: "Kontent sifati",
        challengeNone: "Muammolar yo'q",
        
        internetLabel: "Maktabda/uyda internet kirish sifati",
        deviceLabel: "Qurilmalar mavjudligi (kompyuter, planshet, smartfon)",
        
        trainingLabel: "Raqamli vositalardan foydalanish bo'yicha o'qitish kerakmi?",
        trainingDefinitely: "Albatta ha",
        trainingProbably: "Ehtimol ha",
        trainingUnsure: "Ishonchim komil emas",
        trainingProbablyNo: "Ehtimol yo'q",
        trainingNo: "Albatta yo'q",
        
        // Teacher Transformation
        teacherTransformLabel: "Yaqin uch yilda AI bilan o'qituvchi roli qanday o'zgaradi? (bir nechtasini tanlash mumkin)",
        teacherTransformHelper: "Sun'iy intellekt o'qituvchilar ishini qanday o'zgartirishini o'ylang.",
        transform1Text: "O'qituvchilar kamroq tushuntiradi va ko'proq o'quv faoliyatini tashkil qiladi",
        transform2Text: "O'qituvchilar ko'proq fikr va qo'llab-quvvatlash beradi, AI ishlarni tekshirishda yordam beradi",
        transform3Text: "O'qituvchilar o'quvchiga AI vositalaridan foydalangan holda, o'z sur'atlarida o'rganishga yordam beradi",
        transform4Text: "O'qituvchilar yod olishga emas, balki fikrlash, muhokama va muammo hal qilishga ko'proq e'tibor beradi",
        transform5Text: "O'qituvchilar o'quvchilar uchun ko'proq murabbiy va motivator rolini o'ynaydi",
        transform6Text: "O'qituvchilar o'quvchilarni yaxshiroq qo'llab-quvvatlash uchun AI dan o'qish ma'lumotlaridan foydalanadi",
        transform7Text: "O'qituvchilarga sinfda AI bilan ishlash uchun yangi ko'nikmalar kerak bo'ladi",
        
        aiLanguageLabel: "AI vositalaridan qaysi tilda foydalanishni xohlaysiz? (bir nechtasini tanlash mumkin, muhimlik tartibida)",
        aiLanguageHelperText: "🌍 O'rganish uchun qulayroq tillarni tanlang. Bir nechtasini tanlash mumkin!",
        langOther: "Boshqa til",
        
        expectationsLabel: "Ta'limdagi kelajak raqamli vositalardan kutganlaringiz",
        commentsLabel: "Qo'shimcha izohlar yoki takliflar",
        
        // Navigation
        prevBtnText: "Orqaga",
        nextBtnText: "Keyingi",
        submitBtnText: "Javoblarni yuborish",
        
        // Results
        thanksTitle: "Ishtirok etganingiz uchun rahmat!",
        thanksMessage: "Sizning javoblaringiz raqamli texnologiyalardan foydalangan holda ta'lim sifatini yaxshilashga yordam beradi.",
        resultsTitle: "So'rovnoma natijalari",
        roleDistTitle: "Ishtirokchilarning rollari bo'yicha taqsimlanishi",
        usageChartTitle: "Raqamli vositalardan foydalanish chastotasi",
        aiAwarenessChartTitle: "AI vositalari haqida xabardorlik",
        effectivenessChartTitle: "Samaradorlik bahosi",
        challengesChartTitle: "Asosiy muammolar",
        languageChartTitle: "AI vositalari uchun afzal ko'rilgan tillar",
        tutoringChartTitle: "Repetitorlardan foydalanish (faqat o'quvchilar)",
        teacherTransformChartTitle: "O'qituvchi roli AI bilan qanday o'zgaradi",
        newSurveyBtnText: "So'rovnomani qayta o'tish",
        
        // Footer
        footerText: "© 2026 Ta'lim va raqamli vositalar so'rovnomasi | Barcha ma'lumotlar anonim",
        
        // Select Options
        internetExcellent: "A'lo",
        internetGood: "Yaxshi",
        internetAverage: "O'rtacha",
        internetPoor: "Yomon",
        internetNo: "Kirish yo'q",
        
        deviceAlways: "Doimo mavjud",
        deviceMostly: "Ko'pincha mavjud",
        deviceSometimes: "Ba'zan mavjud",
        deviceRarely: "Kamdan-kam mavjud",
        deviceNot: "Mavjud emas",
        
        // Helper texts for students
        helperText: "Bu savollar bizga qaysi maktablar so'rovnomada ishtirok etayotganini tushunishga yordam beradi. Javoblaringiz to'liq anonim!",
        aiToolsHelperText: "💡 AI (sun'iy intellekt) - bu savollarga javob beradigan, uy vazifasida yordam beradigan, tillarni o'rgatadigan aqlli dasturlar!",
        
        // AI Tool descriptions
        chatgptDesc: "💬 Savollar uchun aqlli yordamchi",
        bardDesc: "🤖 Google dan yordamchi",
        khanDesc: "📚 Video va topshiriqlar orqali o'rganish",
        duolingoDesc: "🗣️ Tillarni qiziqarli o'rganish",
        quizletDesc: "📝 Eslab qolish uchun kartochkalar",
        grammarlyDesc: "✍️ Grammatika tekshirish",
        canvaDesc: "🎨 Rasmlar va taqdimotlar yaratish"
    }
};

// Current language state
let currentLang = 'ru';

// Function to update page language
function updateLanguage(lang) {
    currentLang = lang;
    
    // Update all translatable elements
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('surveyLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('surveyLanguage') || 'ru';
    updateLanguage(savedLang);
    
    // Language toggle button
    document.getElementById('langToggle').addEventListener('click', () => {
        const newLang = currentLang === 'ru' ? 'uz' : 'ru';
        updateLanguage(newLang);
    });
});
