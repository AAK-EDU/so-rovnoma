// Enhanced Age-Appropriate Questions Module
// Based on Survey 2026.docx professional structure

// Age group detection and question customization
let studentAgeGroup = null;

// Enhanced question texts with age-appropriate variations
const enhancedQuestions = {
    // Digital Tools Usage - Age-appropriate versions
    digitalToolsUsage: {
        '10-12': {
            ru: 'Как часто ты используешь компьютер, планшет или телефон для учёбы в школе?',
            uz: 'Maktabda o\'qish uchun kompyuter, planshet yoki telefondan qanchalik tez-tez foydalanasiz?'
        },
        '13-15': {
            ru: 'Как часто вы используете цифровые инструменты (компьютер, планшет, смартфон) для обучения?',
            uz: 'O\'qish uchun raqamli vositalardan (kompyuter, planshet, smartfon) qanchalik tez-tez foydalanasiz?'
        },
        '16-18': {
            ru: 'Как часто вы используете цифровые технологии в процессе обучения?',
            uz: 'O\'quv jarayonida raqamli texnologiyalardan qanchalik tez-tez foydalanasiz?'
        },
        'adult': {
            ru: 'Как часто используются цифровые инструменты в процессе обучения?',
            uz: 'O\'quv jarayonida raqamli vositalardan qanchalik tez-tez foydalaniladi?'
        }
    },
    
    // AI Awareness - Age-appropriate versions
    aiAwareness: {
        '10-12': {
            ru: 'Слышал(а) ли ты о программах с искусственным интеллектом (ИИ), которые помогают учиться? Например, ChatGPT или другие умные помощники.',
            uz: 'Sun\'iy intellekt (AI) dasturlari haqida eshitganmisiz? Masalan, ChatGPT yoki boshqa aqlli yordamchilar.'
        },
        '13-15': {
            ru: 'Знакомы ли вы с инструментами на основе искусственного интеллекта (ИИ), которые можно использовать для обучения?',
            uz: 'O\'qish uchun ishlatish mumkin bo\'lgan sun\'iy intellekt (AI) vositalari bilan tanishmisiz?'
        },
        '16-18': {
            ru: 'Насколько вы знакомы с инструментами на основе искусственного интеллекта (ИИ) для образовательных целей?',
            uz: 'Ta\'lim maqsadlarida sun\'iy intellekt (AI) asosidagi vositalar bilan qanchalik tanishsiz?'
        },
        'adult': {
            ru: 'Насколько хорошо вы знакомы с инструментами на основе искусственного интеллекта для образования?',
            uz: 'Ta\'lim uchun sun\'iy intellekt asosidagi vositalar bilan qanchalik yaxshi tanishsiz?'
        }
    },
    
    // Effectiveness Rating - Age-appropriate versions
    effectiveness: {
        '10-12': {
            ru: 'Помогают ли тебе компьютер и другие цифровые инструменты лучше учиться? Поставь оценку от 1 (совсем не помогают) до 5 (очень помогают)',
            uz: 'Kompyuter va boshqa raqamli vositalar sizga yaxshiroq o\'rganishga yordam beradimi? 1 dan (umuman yordam bermaydi) 5 gacha (juda yordam beradi) baho qo\'ying'
        },
        '13-15': {
            ru: 'Оцените, насколько эффективно цифровые инструменты помогают вам в обучении (1 - не эффективно, 5 - очень эффективно)',
            uz: 'Raqamli vositalar o\'qishingizga qanchalik samarali yordam berishini baholang (1 - samarasiz, 5 - juda samarali)'
        },
        '16-18': {
            ru: 'Оцените эффективность использования цифровых технологий в вашем образовательном процессе (1-5)',
            uz: 'Ta\'lim jarayoningizda raqamli texnologiyalardan foydalanish samaradorligini baholang (1-5)'
        },
        'adult': {
            ru: 'Оцените эффективность цифровых инструментов в образовательном процессе (1-5)',
            uz: 'Ta\'lim jarayonida raqamli vositalarning samaradorligini baholang (1-5)'
        }
    },
    
    // Training Needs - Age-appropriate versions
    trainingNeeds: {
        '10-12': {
            ru: 'Хочешь ли ты научиться лучше использовать компьютер и другие цифровые инструменты для учёбы?',
            uz: 'O\'qish uchun kompyuter va boshqa raqamli vositalardan yaxshiroq foydalanishni o\'rganishni xohlaysizmi?'
        },
        '13-15': {
            ru: 'Нужно ли вам дополнительное обучение по использованию цифровых инструментов и технологий?',
            uz: 'Raqamli vositalar va texnologiyalardan foydalanish bo\'yicha qo\'shimcha o\'qitish kerakmi?'
        },
        '16-18': {
            ru: 'Считаете ли вы необходимым получить дополнительную подготовку по работе с цифровыми технологиями?',
            uz: 'Raqamli texnologiyalar bilan ishlash bo\'yicha qo\'shimcha tayyorgarlik olish zarur deb hisoblaysizmi?'
        },
        'adult': {
            ru: 'Требуется ли дополнительное обучение по использованию цифровых инструментов в образовании?',
            uz: 'Ta\'limda raqamli vositalardan foydalanish bo\'yicha qo\'shimcha o\'qitish talab qilinadimi?'
        }
    },
    
    // Future Expectations - Age-appropriate versions
    futureExpectations: {
        '10-12': {
            ru: 'Что бы ты хотел(а), чтобы появилось в твоей школе для лучшей учёбы? (компьютеры, программы, интернет и т.д.)',
            uz: 'Yaxshiroq o\'qish uchun maktabingizda nima paydo bo\'lishini xohlaysiz? (kompyuterlar, dasturlar, internet va hokazo)'
        },
        '13-15': {
            ru: 'Какие цифровые инструменты или возможности вы бы хотели видеть в своей школе в будущем?',
            uz: 'Kelajakda maktabingizda qanday raqamli vositalar yoki imkoniyatlarni ko\'rishni xohlaysiz?'
        },
        '16-18': {
            ru: 'Какие ваши ожидания от развития цифровых технологий в образовании?',
            uz: 'Ta\'limda raqamli texnologiyalar rivojlanishidan nimalarni kutasiz?'
        },
        'adult': {
            ru: 'Ваши ожидания от будущих цифровых инструментов в образовании',
            uz: 'Ta\'limdagi kelajak raqamli vositalardan kutganlaringiz'
        }
    }
};

// Enhanced answer options with age-appropriate language
const enhancedAnswers = {
    // Usage frequency - simplified for younger students
    usageFrequency: {
        '10-12': {
            daily: { ru: 'Каждый день', uz: 'Har kuni' },
            several_times_week: { ru: 'Несколько раз в неделю', uz: 'Haftada bir necha marta' },
            once_week: { ru: 'Раз в неделю', uz: 'Haftada bir marta' },
            rarely: { ru: 'Редко', uz: 'Kamdan-kam' },
            never: { ru: 'Никогда / У нас нет', uz: 'Hech qachon / Bizda yo\'q' }
        },
        'adult': {
            daily: { ru: 'Ежедневно', uz: 'Har kuni' },
            several_times_week: { ru: 'Несколько раз в неделю', uz: 'Haftada bir necha marta' },
            once_week: { ru: 'Раз в неделю', uz: 'Haftada bir marta' },
            rarely: { ru: 'Редко', uz: 'Kamdan-kam' },
            never: { ru: 'Никогда', uz: 'Hech qachon' }
        }
    },
    
    // AI Awareness - simplified explanations
    aiAwareness: {
        '10-12': {
            very_familiar: { ru: 'Да, я знаю и использую', uz: 'Ha, bilaman va foydalanaman' },
            somewhat_familiar: { ru: 'Да, я слышал(а) и немного пробовал(а)', uz: 'Ha, eshitganman va bir oz sinab ko\'rganman' },
            heard_about: { ru: 'Только слышал(а) о них', uz: 'Faqat ular haqida eshitganman' },
            not_familiar: { ru: 'Нет, не знаю что это', uz: 'Yo\'q, bu nima ekanligini bilmayman' }
        },
        'adult': {
            very_familiar: { ru: 'Очень хорошо знаком', uz: 'Juda yaxshi tanishman' },
            somewhat_familiar: { ru: 'Частично знаком', uz: 'Qisman tanishman' },
            heard_about: { ru: 'Слышал о них', uz: 'Ular haqida eshitganman' },
            not_familiar: { ru: 'Не знаком', uz: 'Tanish emasman' }
        }
    },
    
    // Training needs - simplified for students
    trainingNeeds: {
        '10-12': {
            definitely_yes: { ru: 'Да, очень хочу!', uz: 'Ha, juda xohlayman!' },
            probably_yes: { ru: 'Да, хочу', uz: 'Ha, xohlayman' },
            not_sure: { ru: 'Не знаю', uz: 'Bilmayman' },
            probably_no: { ru: 'Наверное, нет', uz: 'Ehtimol, yo\'q' },
            definitely_no: { ru: 'Нет, не нужно', uz: 'Yo\'q, kerak emas' }
        },
        'adult': {
            definitely_yes: { ru: 'Определённо да', uz: 'Albatta ha' },
            probably_yes: { ru: 'Вероятно да', uz: 'Ehtimol ha' },
            not_sure: { ru: 'Не уверен', uz: 'Ishonchim komil emas' },
            probably_no: { ru: 'Вероятно нет', uz: 'Ehtimol yo\'q' },
            definitely_no: { ru: 'Определённо нет', uz: 'Albatta yo\'q' }
        }
    }
};

// Enhanced challenges with examples for younger students
const enhancedChallenges = {
    '10-12': {
        internet_quality: {
            ru: 'Интернет работает медленно или отключается',
            uz: 'Internet sekin ishlaydi yoki o\'chib qoladi'
        },
        device_access: {
            ru: 'Не хватает компьютеров или планшетов',
            uz: 'Kompyuter yoki planshetlar yetarli emas'
        },
        technical_skills: {
            ru: 'Не знаю, как пользоваться некоторыми программами',
            uz: 'Ba\'zi dasturlardan qanday foydalanishni bilmayman'
        },
        language_barrier: {
            ru: 'Программы не на моём языке (нет русского или узбекского)',
            uz: 'Dasturlar mening tilimda emas (rus yoki o\'zbek tili yo\'q)'
        },
        content_quality: {
            ru: 'Программы непонятные или неинтересные',
            uz: 'Dasturlar tushunarsiz yoki qiziq emas'
        },
        no_challenges: {
            ru: 'У меня нет проблем',
            uz: 'Menda muammolar yo\'q'
        }
    },
    'adult': {
        internet_quality: { ru: 'Качество интернета', uz: 'Internet sifati' },
        device_access: { ru: 'Доступ к устройствам', uz: 'Qurilmalarga kirish' },
        technical_skills: { ru: 'Недостаток навыков', uz: 'Ko\'nikmalar yetishmasligi' },
        language_barrier: { ru: 'Языковой барьер', uz: 'Til to\'sig\'i' },
        content_quality: { ru: 'Качество контента', uz: 'Kontent sifati' },
        no_challenges: { ru: 'Нет проблем', uz: 'Muammolar yo\'q' }
    }
};

// Function to get age-appropriate question text
function getQuestionText(questionKey, ageGroup, role, lang) {
    // Determine which age group to use
    let targetGroup = 'adult';
    
    if (role === 'student' && ageGroup) {
        targetGroup = ageGroup;
    }
    
    // Get the question text
    if (enhancedQuestions[questionKey] && enhancedQuestions[questionKey][targetGroup]) {
        return enhancedQuestions[questionKey][targetGroup][lang];
    }
    
    // Fallback to adult version
    return enhancedQuestions[questionKey]?.['adult']?.[lang] || '';
}

// Function to get age-appropriate answer text
function getAnswerText(answerKey, optionValue, ageGroup, role, lang) {
    let targetGroup = (role === 'student' && ageGroup === '10-12') ? '10-12' : 'adult';
    
    if (enhancedAnswers[answerKey] && enhancedAnswers[answerKey][targetGroup]) {
        return enhancedAnswers[answerKey][targetGroup][optionValue]?.[lang] || '';
    }
    
    return '';
}

// Function to get age-appropriate challenge text
function getChallengeText(challengeValue, ageGroup, role, lang) {
    let targetGroup = (role === 'student' && ageGroup === '10-12') ? '10-12' : 'adult';
    
    if (enhancedChallenges[targetGroup] && enhancedChallenges[targetGroup][challengeValue]) {
        return enhancedChallenges[targetGroup][challengeValue][lang];
    }
    
    return '';
}

// Export functions for use in survey.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        enhancedQuestions,
        enhancedAnswers,
        enhancedChallenges,
        getQuestionText,
        getAnswerText,
        getChallengeText
    };
}
