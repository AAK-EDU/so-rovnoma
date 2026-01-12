# 📋 COMPLETE SURVEY QUESTIONS LIST
## Teaching, Learning, and New Digital Tools Survey - Uzbekistan

**Last Updated**: January 11, 2026  
**Version**: 1.5.0  
**Status**: ✅ Production Ready

---

## 📊 SURVEY OVERVIEW

- **Total Questions**: 15 questions
- **Required**: 12 questions
- **Conditional**: 3 questions (based on role/responses)
- **Languages**: Russian & Uzbek (full bilingual support)
- **Estimated Time**: 5-7 minutes
- **Target Audience**: Students (10+), Parents, Teachers, Administrators, IT Teachers
- **Geographic Coverage**: All 14 regions of Uzbekistan

---

## 🎯 STEP 1: ROLE SELECTION (1 Question)

### Q1. Your Role
**Type**: Single choice (required)  
**Field Name**: `user_role`

**Options**:
- 👨‍🎓 **Student** / Учащийся / O'quvchi
- 👨‍👩‍👧 **Parent or Legal Guardian** / Родитель или опекун / Ota-ona yoki vasiy
- 👨‍🏫 **Teacher** / Учитель / O'qituvchi
- 👔 **School Administrator** / Администратор школы / Maktab ma'muriʏati
- 💻 **IT Teacher/ICT Coordinator** / IT-учитель/координатор ИКТ / IT oʻqituvchi/IKT koordinatori

**Database Values**: `student`, `parent`, `teacher`, `administrator`, `it_teacher`

---

## 📊 STEP 2: DEMOGRAPHICS (5 Questions)

### Q2. Age Group (Conditional - Students Only)
**Type**: Single choice (required for students)  
**Field Name**: `age_group`

**Russian**: Возрастная группа  
**Uzbek**: Yosh guruhi

**Options**:
- **10-12 years** / 10-12 лет / 10-12 yosh
- **13-15 years** / 13-15 лет / 13-15 yosh
- **16-18 years** / 16-18 лет / 16-18 yosh

**Database Values**: `10-12`, `13-15`, `16-18`

**Impact**: Questions automatically adapt language complexity based on age group selected.

---

### Q3. Region
**Type**: Dropdown (required)  
**Field Name**: `region`

**Russian**: Регион  
**Uzbek**: Viloyat

**Options** (14 regions - English/Russian/Uzbek):
1. **Tashkent City** / Город Ташкент / Toshkent shahri
2. **Republic of Karakalpakstan** / Республика Каракалпакстан / Qoraqalpog'iston Respublikasi
3. **Andijan Region** / Андижанская область / Andijon viloyati
4. **Bukhara Region** / Бухарская область / Buxoro viloyati
5. **Fergana Region** / Ферганская область / Farg'ona viloyati
6. **Jizzakh Region** / Джизакская область / Jizzax viloyati
7. **Khorezm Region** / Хорезмская область / Xorazm viloyati
8. **Namangan Region** / Наманганская область / Namangan viloyati
9. **Navoiy Region** / Навоийская область / Navoiy viloyati
10. **Qashqadaryo Region** / Кашкадарьинская область / Qashqadaryo viloyati
11. **Samarqand Region** / Самаркандская область / Samarqand viloyati
12. **Sirdaryo Region** / Сырдарьинская область / Sirdaryo viloyati
13. **Surxondaryo Region** / Сурхандарьинская область / Surxondaryo viloyati
14. **Tashkent Region** / Ташкентская область / Toshkent viloyati

**Database Values**: `tashkent_city`, `karakalpakstan`, `andijan`, `bukhara`, `fergana`, `jizzakh`, `khorezm`, `namangan`, `navoiy`, `kashkadarya`, `samarkand`, `syrdarya`, `surkhandarya`, `tashkent_region`

---

### Q4. School Type
**Type**: Dropdown (required)  
**Field Name**: `school_type`

**Russian**: Тип школы  
**Uzbek**: Maktab turi

**Options**:
- 🏫 **Public general education school** / Общеобразовательная школа / Umumiy ta'lim maktabi
- 🎓 **Specialized school** / Специализированная школа / Ixtisoslashtirilgan maktab
- 🏛️ **Academic lyceum** / Академический лицей / Akademik litsey
- 🔧 **Vocational college** / Профессиональный колледж / Kasb-hunar kolleji
- 🏢 **Private school** / Частная школа / Xususiy maktab
- 🌍 **International school** / Международная школа / Xalqaro maktab

**Database Values**: `public`, `specialized`, `lyceum`, `vocational`, `private`, `international`

---

### Q5. Private Tutor Usage (Conditional - Students Only)
**Type**: Radio buttons (required for students)  
**Field Name**: `uses_private_tutor`

**Russian**: Пользуетесь ли вы услугами репетитора после школы?  
**Uzbek**: Maktabdan keyin repetitor xizmatlaridan foydalanasizmi?

**Options**:
- ✅ **Yes** / Да / Ha
- ❌ **No** / Нет / Yo'q

**Database Values**: `yes`, `no`

---

### Q5b. Reasons for Using Private Tutors (Conditional - If Q5 = Yes)
**Type**: Multiple choice (up to 7 selections)  
**Field Name**: `tutor_reasons`

**Russian**: Если да, почему вы используете репетиторов?  
**Uzbek**: Agar ha bo'lsa, nima uchun repetitorlardan foydalanasiz?

**Options**:
1. 🎓 **University admission preparation** / Подготовка к поступлению в вуз / Oliy o'quv yurtiga kirish tayyorgarligi
2. ⭐ **To get better grades** / Чтобы получать хорошие оценки / Yaxshi baholar olish uchun
3. 🙋 **Cannot ask teachers questions in class** / Не могу задать вопросы учителям в классе / Sinfda o'qituvchilarga savol bera olmayman
4. 📚 **Don't understand material taught in school** / Не понимаю материал в школе / Maktabda o'rgatilayotgan materialni tushunmayman
5. 📝 **Too much homework, need help** / Слишком много домашних заданий, нужна помощь / Juda ko'p uy vazifasi, yordam kerak
6. ⏱️ **Teacher explains too fast in class** / Учитель объясняет слишком быстро / O'qituvchi tez tushuntiradi
7. 👨‍👩‍👧 **Parents want me to have extra lessons** / Родители хотят, чтобы я занимался дополнительно / Ota-onam qo'shimcha dars olishimni xohlashadi

**Database Values**: `university_admission`, `good_grades`, `cannot_ask_teacher`, `not_understand_school`, `too_much_homework`, `teacher_fast`, `parents_want`

---

## 💻 STEP 3: DIGITAL TOOLS USAGE (3 Questions)

### Q6. Digital Tools Usage Frequency
**Type**: Radio buttons (required)  
**Field Name**: `digital_tools_usage`

**Russian**: Как часто вы используете цифровые инструменты в процессе обучения?  
**Uzbek**: Ta'lim jarayonida raqamli vositalardan qanchalik tez-tez foydalanasiz?

**Age-Appropriate Variations**:
- **10-12**: "Как часто ты используешь компьютер, планшет или телефон для учёбы?"
- **13-15**: "Как часто вы используете цифровые инструменты для обучения?"
- **16-18**: "Как часто вы используете цифровые технологии в процессе обучения?"
- **Adults**: Professional terminology

**Options**:
- 📱 **Daily** / Ежедневно / Har kuni
- 📅 **Several times a week** / Несколько раз в неделю / Haftada bir necha marta
- 🗓️ **Once a week** / Раз в неделю / Haftada bir marta
- 🕐 **Rarely** / Редко / Kamdan-kam
- ⛔ **Never** / Никогда / Hech qachon

**Database Values**: `daily`, `several_times_week`, `once_week`, `rarely`, `never`

---

### Q7. AI Tools Awareness
**Type**: Radio buttons (required)  
**Field Name**: `ai_tools_awareness`

**Russian**: Знаете ли вы об инструментах на основе ИИ?  
**Uzbek**: Sun'iy intellekt asosidagi raqamli vositalar haqida bilasizmi?

**Age-Appropriate Variations**:
- **10-12**: "Знаешь ли ты об умных помощниках (ChatGPT, голосовые помощники)?"
- **13-15**: Standard phrasing
- **16-18**: More sophisticated language
- **Adults**: Professional terminology

**Helper Text for Students**:
💡 *ИИ (искусственный интеллект) - это умные программы, которые могут отвечать на вопросы, помогать с домашним заданием, учить языки и многое другое!*

**Options**:
- ✅ **Yes, I use them** / Да, я их использую / Ha, ulardan foydalanaman
- 👀 **Yes, but I don't use them** / Да, но не использую / Ha, lekin foydalanmayman
- ❓ **Heard about them** / Слышал(а) о них / Ular haqida eshitganman
- ❌ **No, first time hearing** / Нет, впервые слышу / Yo'q, birinchi marta eshityapman

**Database Values**: `yes_use`, `yes_not_use`, `heard_about`, `not_familiar`

---

### Q8. AI Tools Used (Conditional - If Q7 = "Yes, I use them")
**Type**: Multiple choice (optional)  
**Field Name**: `ai_tools_used`

**Russian**: Какие инструменты ИИ вы использовали?  
**Uzbek**: Qaysi sun'iy intellekt vositalaridan foydalangansiz?

**Options with Descriptions**:
1. 🤖 **ChatGPT** - Answers questions, helps with homework / Отвечает на вопросы, помогает с домашкой
2. 🎨 **DALL-E/Midjourney** - Creates pictures from text / Создаёт картинки по описанию
3. 🔍 **Google Gemini** - Smart search & answers / Умный поиск и ответы
4. 📝 **Grammarly** - Fixes writing errors / Исправляет ошибки
5. 🗣️ **Voice assistants** (Siri, Alexa, Alice) - Talks and helps / Говорит и помогает
6. 📊 **Quizlet with AI** - Creates flashcards / Создаёт карточки для учёбы
7. 🎓 **Khanmigo** - Helps learn step-by-step / Помогает учиться пошагово
8. 📚 **Other AI learning tools** / Другие обучающие инструменты ИИ

**Database Values**: `chatgpt`, `dalle_midjourney`, `google_gemini`, `grammarly`, `voice_assistants`, `quizlet_ai`, `khanmigo`, `other`

---

## 🎯 STEP 4: ASSESSMENT & FEEDBACK (6 Questions)

### Q9. Effectiveness Rating
**Type**: Star rating (required)  
**Field Name**: `effectiveness_rating`

**Russian**: Оцените эффективность цифровых инструментов в обучении  
**Uzbek**: Raqamli vositalarning ta'limdagi samaradorligini baholang

**Scale**: 1-5 stars
- ⭐ 1 star = Not effective at all / Совсем неэффективно
- ⭐⭐⭐⭐⭐ 5 stars = Very effective / Очень эффективно

**Database Values**: `1`, `2`, `3`, `4`, `5` (number)

---

### Q10. Main Challenges
**Type**: Multiple choice (required, choose up to 3)  
**Field Name**: `challenges`

**Russian**: Какие основные проблемы при использовании цифровых инструментов?  
**Uzbek**: Raqamli vositalardan foydalanishda asosiy muammolar nima?

**Age-Appropriate Variations**:
- **10-12**: "Какие проблемы у тебя бывают, когда пользуешься компьютером/планшетом для учёбы?"

**Options**:
- 🚫 **No devices available** / Нет устройств / Qurilmalar yo'q
- 📶 **Poor internet connection** / Плохой интернет / Internet yomon ishlaydi
- 🎓 **Don't know how to use them** / Не умею пользоваться / Foydalanishni bilmayman
- 👨‍🏫 **Teachers don't use digital tools** / Учителя не используют / O'qituvchilar ishlatmaydi
- ⏰ **Not enough time** / Не хватает времени / Vaqt yetmaydi
- 💰 **Too expensive** / Слишком дорого / Juda qimmat
- ❌ **None** (exclusive option) / Нет проблем / Muammolar yo'q

**Database Values**: `no_devices`, `poor_internet`, `lack_skills`, `teachers_not_use`, `no_time`, `too_expensive`, `no_challenges`

---

### Q11. Internet Quality
**Type**: Dropdown (required)  
**Field Name**: `internet_access`

**Russian**: Как качество интернета в школе/дома?  
**Uzbek**: Maktab/uydagi internet sifati qanday?

**Options**:
- 🟢 **Excellent** - Fast, always works / Отлично - Быстро, всегда работает
- 🟡 **Good** - Usually works well / Хорошо - Обычно работает
- 🟠 **Average** - Sometimes slow / Средне - Иногда медленно
- 🔴 **Poor** - Often disconnects / Плохо - Часто отключается
- ⚫ **No internet** / Нет интернета / Internet yo'q

**Database Values**: `excellent`, `good`, `average`, `poor`, `no_internet`

---

### Q12. Device Availability
**Type**: Multiple choice (required, select all that apply)  
**Field Name**: `device_availability`

**Russian**: Какие устройства у вас есть для обучения?  
**Uzbek**: Ta'lim uchun qanday qurilmalar mavjud?

**Options**:
- 💻 **Laptop/Desktop computer** / Ноутбук/компьютер / Noutbuk/kompyuter
- 📱 **Smartphone** / Смартфон / Smartfon
- 📲 **Tablet** / Планшет / Planshet
- 🖥️ **School computer lab** / Школьный компьютерный класс / Maktab kompyuter sinfi
- ❌ **No devices** (exclusive) / Нет устройств / Qurilmalar yo'q

**Database Values**: `laptop_desktop`, `smartphone`, `tablet`, `school_lab`, `no_devices`

---

### Q13. Training Needs
**Type**: 5-point scale (required)  
**Field Name**: `training_needs`

**Russian**: Нужно ли вам обучение работе с инструментами ИИ?  
**Uzbek**: Sun'iy intellekt vositalari bo'yicha treningga ehtiyojingiz bormi?

**Age-Appropriate Variations**:
- **10-12**: "Хочешь ли ты научиться пользоваться умными помощниками?"

**Options**:
- 💯 **Definitely yes** / Определённо да / Albatta ha
- 👍 **Probably yes** / Вероятно да / Ehtimol ha
- 🤷 **Not sure** / Не уверен / Ishonchim komil emas
- 👎 **Probably no** / Вероятно нет / Ehtimol yo'q
- ❌ **Definitely no** / Определённо нет / Albatta yo'q

**Database Values**: `definitely_yes`, `probably_yes`, `not_sure`, `probably_no`, `definitely_no`

---

### Q14. 🆕 Teacher Transformation with AI
**Type**: Multiple choice (up to 7 selections)  
**Field Name**: `ai_teacher_transformation`

**Russian**: Как изменится роль учителя с ИИ в ближайшие три года?  
**Uzbek**: Yaqin uch yilda AI bilan o'qituvchi roli qanday o'zgaradi?

**Helper Text**:
*Поделитесь своими мыслями о том, как искусственный интеллект изменит работу учителей.*

**Options**:
1. 📋 **Less explaining, more organizing** / Меньше объяснять, больше организовывать / Kamroq tushuntirish, ko'proq tashkil qilish
2. 💬 **More feedback, AI helps grading** / Больше обратной связи, AI проверяет / Ko'proq fikr, AI tekshiradi
3. ⏱️ **Personalized learning pace** / Помощь в индивидуальном темпе / Individual sur'atda yordam
4. 🧠 **Focus on thinking, not memorization** / Фокус на мышлении, не запоминании / Fikrlashga e'tibor
5. 🤝 **Mentors and motivators** / Наставники и мотиваторы / Murabbiy va motivator
6. 📊 **Use learning data from AI** / Использование данных от AI / AI ma'lumotlaridan foydalanish
7. 🎓 **Need new skills for AI** / Потребуются новые навыки / Yangi ko'nikmalar kerak

**Database Values**: `less_explaining_more_organizing`, `more_feedback_ai_grading`, `personalized_learning_pace`, `focus_thinking_not_memorization`, `mentors_motivators`, `use_learning_data`, `need_new_skills`

---

### Q15. AI Language Preferences
**Type**: Multiple choice (select all that apply)  
**Field Name**: `ai_language_preference`

**Russian**: На каком языке вы хотели бы использовать инструменты ИИ?  
**Uzbek**: AI vositalaridan qaysi tilda foydalanishni xohlaysiz?

**Helper Text for Students**:
🌍 *Выбери языки, на которых тебе удобнее учиться. Можно выбрать несколько!*

**Options** (in order of regional importance):
1. 🇺🇿 **Uzbek** / Узбекский / O'zbek tili
2. 🇬🇧 **English** / Английский / Ingliz tili
3. 🇷🇺 **Russian** / Русский / Rus tili
4. 🇹🇯 **Tajik** / Таджикский / Tojik tili
5. 🏴 **Karakalpak** / Каракалпакский / Qoraqalpoq tili
6. 🌐 **Other** / Другой / Boshqa

**Database Values**: `uzbek`, `english`, `russian`, `tajik`, `karakalpak`, `other`

---

## 📈 DATA VISUALIZATIONS (8 Charts)

After survey submission, respondents see:

1. **Role Distribution** - Doughnut chart
2. **Digital Tools Usage Frequency** - Bar chart
3. **AI Awareness Levels** - Pie chart
4. **Effectiveness Ratings** - Bar chart with average
5. **Common Challenges** - Horizontal bar chart
6. **AI Language Preferences** - Vertical bar chart
7. **Private Tutoring Usage** - Horizontal bar (Students only)
8. **Teacher Transformation Expectations** - Horizontal bar with percentages

---

## 🗄️ DATABASE SUMMARY

**Table Name**: `survey_responses`  
**Total Fields**: 19 fields + 4 system fields

### Field Distribution
- **Text fields**: 8
- **Array fields**: 5
- **Number fields**: 1
- **Datetime fields**: 1
- **Auto-generated system fields**: 4

### Array Fields (Multiple Selections)
1. `tutor_reasons` - Up to 7 options
2. `ai_tools_used` - Up to 8 options
3. `challenges` - Up to 7 options (max 3 selections)
4. `device_availability` - Up to 5 options
5. `ai_teacher_transformation` - Up to 7 options
6. `ai_language_preference` - Up to 6 options

---

## ✨ KEY FEATURES

### Age-Appropriate Questions
- **3 age groups** for students (10-12, 13-15, 16-18)
- **Simplified language** for younger students
- **Professional terminology** for adults
- **Visual aids** (emojis, icons) for engagement

### Conditional Logic
- Age group question → **Only for students**
- Private tutor questions → **Only for students**
- Tutor reasons → **Only if uses tutor = yes**
- AI tools used → **Only if awareness = "Yes, I use them"**

### Privacy-First Design
- ✅ **No personal data** collected
- ✅ **No authentication** required
- ✅ **100% anonymous** responses
- ✅ **No tracking** or cookies (except language preference)

### Bilingual Support
- ✅ **Russian & Uzbek** full translation
- ✅ **Instant language switching**
- ✅ **Dynamic chart updates**
- ✅ **Age-appropriate translations**

---

## 🚀 DEPLOYMENT READY

**Status**: ✅ Production Ready  
**Last Updated**: January 11, 2026  
**Version**: 1.5.0

**Survey Statistics**:
- 15 questions (12 required, 3 conditional)
- 5-7 minutes completion time
- 8 data visualizations
- 2 languages (Russian + Uzbek)
- 14 regions covered
- 5 target user groups
- 19 database fields

---

## 📞 DOCUMENTATION

**Related Files**:
- `README.md` - Complete project documentation
- `ENHANCEMENTS.md` - Age-appropriate feature details
- `REGIONS_UPDATE.md` - Geographic coverage
- `LANGUAGE_PREFERENCE_UPDATE.md` - Language question details
- `TUTORING_QUESTION_UPDATE.md` - Private tutoring feature
- `TEACHER_TRANSFORMATION_UPDATE.md` - Teacher roles with AI

---

## 🎉 NEXT STEPS

1. **Review** all questions for accuracy
2. **Test** across all age groups and roles
3. **Validate** Russian and Uzbek translations
4. **Publish** to production via Publish tab
5. **Share** survey URL across Uzbekistan
6. **Monitor** response patterns
7. **Analyze** data by region, role, and demographics

---

**🎓 Ready for nationwide deployment across Uzbekistan's education system!**
