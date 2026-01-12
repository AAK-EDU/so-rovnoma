// Data Visualization Logic
let chartInstances = {};

async function loadVisualizationData() {
    try {
        // Fetch all survey responses
        const response = await fetch('tables/survey_responses?limit=1000');
        const result = await response.json();
        
        if (result && result.data) {
            const data = result.data;
            
            // Create visualizations
            createRoleDistributionChart(data);
            createUsageFrequencyChart(data);
            createAIAwarenessChart(data);
            createEffectivenessChart(data);
            createChallengesChart(data);
            createLanguagePreferenceChart(data);
            createTutoringChart(data);
            createTeacherTransformChart(data);
        }
    } catch (error) {
        console.error('Error loading visualization data:', error);
    }
}

function createRoleDistributionChart(data) {
    const ctx = document.getElementById('roleChart');
    if (!ctx) return;
    
    // Count roles
    const roleCounts = {
        student: 0,
        parent: 0,
        teacher: 0,
        administrator: 0,
        it_teacher: 0
    };
    
    data.forEach(response => {
        if (response.user_role && roleCounts.hasOwnProperty(response.user_role)) {
            roleCounts[response.user_role]++;
        }
    });
    
    // Translate labels
    const roleLabels = {
        ru: {
            student: 'Ученики',
            parent: 'Родители',
            teacher: 'Учителя',
            administrator: 'Администраторы',
            it_teacher: 'ИКТ-специалисты'
        },
        uz: {
            student: 'O\'quvchilar',
            parent: 'Ota-onalar',
            teacher: 'O\'qituvchilar',
            administrator: 'Ma\'murlar',
            it_teacher: 'AKT mutaxassislari'
        }
    };
    
    const labels = Object.keys(roleCounts).map(key => roleLabels[currentLang][key]);
    const values = Object.values(roleCounts);
    
    // Destroy existing chart if any
    if (chartInstances.roleChart) {
        chartInstances.roleChart.destroy();
    }
    
    // Create chart
    chartInstances.roleChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    '#667eea',
                    '#764ba2',
                    '#f093fb',
                    '#4facfe',
                    '#43e97b'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14,
                            family: 'Inter'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function createUsageFrequencyChart(data) {
    const ctx = document.getElementById('usageChart');
    if (!ctx) return;
    
    // Count usage frequencies
    const usageCounts = {
        daily: 0,
        several_times_week: 0,
        once_week: 0,
        rarely: 0,
        never: 0
    };
    
    data.forEach(response => {
        if (response.digital_tools_usage && usageCounts.hasOwnProperty(response.digital_tools_usage)) {
            usageCounts[response.digital_tools_usage]++;
        }
    });
    
    // Translate labels
    const usageLabels = {
        ru: {
            daily: 'Ежедневно',
            several_times_week: 'Несколько раз в неделю',
            once_week: 'Раз в неделю',
            rarely: 'Редко',
            never: 'Никогда'
        },
        uz: {
            daily: 'Har kuni',
            several_times_week: 'Haftada bir necha marta',
            once_week: 'Haftada bir marta',
            rarely: 'Kamdan-kam',
            never: 'Hech qachon'
        }
    };
    
    const labels = Object.keys(usageCounts).map(key => usageLabels[currentLang][key]);
    const values = Object.values(usageCounts);
    
    // Destroy existing chart if any
    if (chartInstances.usageChart) {
        chartInstances.usageChart.destroy();
    }
    
    // Create chart
    chartInstances.usageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ru' ? 'Количество ответов' : 'Javoblar soni',
                data: values,
                backgroundColor: 'rgba(102, 126, 234, 0.8)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed.y}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        font: {
                            family: 'Inter'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createAIAwarenessChart(data) {
    const ctx = document.getElementById('aiAwarenessChart');
    if (!ctx) return;
    
    // Count AI awareness levels
    const awarenessCounts = {
        very_familiar: 0,
        somewhat_familiar: 0,
        heard_about: 0,
        not_familiar: 0
    };
    
    data.forEach(response => {
        if (response.ai_tools_awareness && awarenessCounts.hasOwnProperty(response.ai_tools_awareness)) {
            awarenessCounts[response.ai_tools_awareness]++;
        }
    });
    
    // Translate labels
    const awarenessLabels = {
        ru: {
            very_familiar: 'Очень хорошо знаком',
            somewhat_familiar: 'Частично знаком',
            heard_about: 'Слышал о них',
            not_familiar: 'Не знаком'
        },
        uz: {
            very_familiar: 'Juda yaxshi tanishman',
            somewhat_familiar: 'Qisman tanishman',
            heard_about: 'Ular haqida eshitganman',
            not_familiar: 'Tanish emasman'
        }
    };
    
    const labels = Object.keys(awarenessCounts).map(key => awarenessLabels[currentLang][key]);
    const values = Object.values(awarenessCounts);
    
    // Destroy existing chart if any
    if (chartInstances.aiAwarenessChart) {
        chartInstances.aiAwarenessChart.destroy();
    }
    
    // Create chart
    chartInstances.aiAwarenessChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: values,
                backgroundColor: [
                    '#10b981',
                    '#3b82f6',
                    '#f59e0b',
                    '#ef4444'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 13,
                            family: 'Inter'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function createEffectivenessChart(data) {
    const ctx = document.getElementById('effectivenessChart');
    if (!ctx) return;
    
    // Count effectiveness ratings
    const ratingCounts = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };
    
    data.forEach(response => {
        if (response.effectiveness_rating && ratingCounts.hasOwnProperty(response.effectiveness_rating)) {
            ratingCounts[response.effectiveness_rating]++;
        }
    });
    
    const labels = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
    const values = Object.values(ratingCounts);
    
    // Calculate average rating
    let totalRating = 0;
    let totalCount = 0;
    Object.entries(ratingCounts).forEach(([rating, count]) => {
        totalRating += parseInt(rating) * count;
        totalCount += count;
    });
    const avgRating = totalCount > 0 ? (totalRating / totalCount).toFixed(2) : 0;
    
    // Destroy existing chart if any
    if (chartInstances.effectivenessChart) {
        chartInstances.effectivenessChart.destroy();
    }
    
    // Create chart
    chartInstances.effectivenessChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ru' ? 'Количество оценок' : 'Baholar soni',
                data: values,
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(16, 185, 129, 0.8)'
                ],
                borderColor: [
                    'rgba(239, 68, 68, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(16, 185, 129, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return currentLang === 'ru' ? `Оценка: ${context[0].dataIndex + 1}` : `Baho: ${context[0].dataIndex + 1}`;
                        },
                        label: function(context) {
                            return `${currentLang === 'ru' ? 'Количество' : 'Soni'}: ${context.parsed.y}`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: `${currentLang === 'ru' ? 'Средняя оценка' : 'O\'rtacha baho'}: ${avgRating}`,
                    font: {
                        size: 16,
                        family: 'Inter',
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        font: {
                            family: 'Inter'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 18
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createChallengesChart(data) {
    const ctx = document.getElementById('challengesChart');
    if (!ctx) return;
    
    // Count challenges
    const challengeCounts = {
        internet_quality: 0,
        device_access: 0,
        technical_skills: 0,
        language_barrier: 0,
        content_quality: 0,
        no_challenges: 0
    };
    
    data.forEach(response => {
        if (response.challenges && Array.isArray(response.challenges)) {
            response.challenges.forEach(challenge => {
                if (challengeCounts.hasOwnProperty(challenge)) {
                    challengeCounts[challenge]++;
                }
            });
        }
    });
    
    // Translate labels
    const challengeLabels = {
        ru: {
            internet_quality: 'Качество интернета',
            device_access: 'Доступ к устройствам',
            technical_skills: 'Недостаток навыков',
            language_barrier: 'Языковой барьер',
            content_quality: 'Качество контента',
            no_challenges: 'Нет проблем'
        },
        uz: {
            internet_quality: 'Internet sifati',
            device_access: 'Qurilmalarga kirish',
            technical_skills: 'Ko\'nikmalar yetishmasligi',
            language_barrier: 'Til to\'sig\'i',
            content_quality: 'Kontent sifati',
            no_challenges: 'Muammolar yo\'q'
        }
    };
    
    const labels = Object.keys(challengeCounts).map(key => challengeLabels[currentLang][key]);
    const values = Object.values(challengeCounts);
    
    // Destroy existing chart if any
    if (chartInstances.challengesChart) {
        chartInstances.challengesChart.destroy();
    }
    
    // Create chart
    chartInstances.challengesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ru' ? 'Количество упоминаний' : 'Eslatmalar soni',
                data: values,
                backgroundColor: 'rgba(118, 75, 162, 0.8)',
                borderColor: 'rgba(118, 75, 162, 1)',
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed.x}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        font: {
                            family: 'Inter'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createLanguagePreferenceChart(data) {
    const ctx = document.getElementById('languageChart');
    if (!ctx) return;
    
    // Count language preferences
    const languageCounts = {
        uzbek: 0,
        english: 0,
        russian: 0,
        tajik: 0,
        karakalpak: 0,
        other: 0
    };
    
    data.forEach(response => {
        if (response.ai_language_preference && Array.isArray(response.ai_language_preference)) {
            response.ai_language_preference.forEach(lang => {
                if (languageCounts.hasOwnProperty(lang)) {
                    languageCounts[lang]++;
                }
            });
        }
    });
    
    // Translate labels
    const languageLabels = {
        ru: {
            uzbek: 'O\'zbek tili',
            english: 'English',
            russian: 'Русский',
            tajik: 'Тоҷикӣ',
            karakalpak: 'Qaraqalpaq tili',
            other: 'Другие'
        },
        uz: {
            uzbek: 'O\'zbek tili',
            english: 'English',
            russian: 'Русский',
            tajik: 'Тоҷикӣ',
            karakalpak: 'Qaraqalpaq tili',
            other: 'Boshqalar'
        }
    };
    
    const labels = Object.keys(languageCounts).map(key => languageLabels[currentLang][key]);
    const values = Object.values(languageCounts);
    
    // Destroy existing chart if any
    if (chartInstances.languageChart) {
        chartInstances.languageChart.destroy();
    }
    
    // Create chart
    chartInstances.languageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ru' ? 'Количество выборов' : 'Tanlanganlar soni',
                data: values,
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(20, 184, 166, 0.8)',
                    'rgba(156, 163, 175, 0.8)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(20, 184, 166, 1)',
                    'rgba(156, 163, 175, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed.y || 0;
                            return `${label}: ${value}`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: currentLang === 'ru' ? 
                        'Участники могли выбрать несколько языков' : 
                        'Ishtirokchilar bir necha tilni tanlashlari mumkin edi',
                    font: {
                        size: 13,
                        family: 'Inter',
                        weight: 'normal'
                    },
                    color: '#6b7280',
                    padding: {
                        bottom: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        font: {
                            family: 'Inter'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createTutoringChart(data) {
    const ctx = document.getElementById('tutoringChart');
    if (!ctx) return;
    
    // Filter only student responses
    const studentData = data.filter(response => response.user_role === 'student');
    
    // Count tutor usage and reasons
    let usesTutor = 0;
    let noTutor = 0;
    const reasonCounts = {
        university_admission: 0,
        good_grades: 0,
        cannot_ask_teacher: 0,
        not_understand_school: 0,
        too_much_homework: 0,
        parents_want: 0,
        other: 0
    };
    
    studentData.forEach(response => {
        if (response.uses_private_tutor === 'yes') {
            usesTutor++;
            if (response.tutor_reasons && Array.isArray(response.tutor_reasons)) {
                response.tutor_reasons.forEach(reason => {
                    if (reasonCounts.hasOwnProperty(reason)) {
                        reasonCounts[reason]++;
                    }
                });
            }
        } else if (response.uses_private_tutor === 'no') {
            noTutor++;
        }
    });
    
    // Translate labels
    const reasonLabels = {
        ru: {
            university_admission: 'Поступление в университет',
            good_grades: 'Хорошие оценки',
            cannot_ask_teacher: 'Не могу спросить учителя',
            not_understand_school: 'Не понимаю материал',
            too_much_homework: 'Много домашнего задания',
            parents_want: 'Желание родителей',
            other: 'Другие причины'
        },
        uz: {
            university_admission: 'Universitetga kirish',
            good_grades: 'Yaxshi baholar',
            cannot_ask_teacher: 'O\'qituvchidan so\'ray olmayman',
            not_understand_school: 'Materialni tushunmayman',
            too_much_homework: 'Uy vazifasi ko\'p',
            parents_want: 'Ota-ona xohishi',
            other: 'Boshqa sabablar'
        }
    };
    
    const labels = Object.keys(reasonCounts).map(key => reasonLabels[currentLang][key]);
    const values = Object.values(reasonCounts);
    
    // Calculate percentages
    const totalStudents = studentData.length;
    const tutorPercentage = totalStudents > 0 ? ((usesTutor / totalStudents) * 100).toFixed(1) : 0;
    
    // Destroy existing chart if any
    if (chartInstances.tutoringChart) {
        chartInstances.tutoringChart.destroy();
    }
    
    // Create chart
    chartInstances.tutoringChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ru' ? 'Количество упоминаний' : 'Eslatmalar soni',
                data: values,
                backgroundColor: [
                    'rgba(147, 51, 234, 0.8)',
                    'rgba(234, 179, 8, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(249, 115, 22, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(156, 163, 175, 0.8)'
                ],
                borderColor: [
                    'rgba(147, 51, 234, 1)',
                    'rgba(234, 179, 8, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(249, 115, 22, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(156, 163, 175, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed.x}`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: currentLang === 'ru' ? 
                        `${tutorPercentage}% учащихся занимаются с репетитором (${usesTutor} из ${totalStudents})` : 
                        `${tutorPercentage}% o'quvchilar repetitor bilan shug'ullanadi (${usesTutor} dan ${totalStudents})`,
                    font: {
                        size: 14,
                        family: 'Inter',
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        font: {
                            family: 'Inter'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createTeacherTransformChart(data) {
    const ctx = document.getElementById('teacherTransformChart');
    if (!ctx) return;
    
    // Count transformation expectations
    const transformCounts = {
        less_explaining_more_organizing: 0,
        more_feedback_ai_grading: 0,
        personalized_learning_pace: 0,
        focus_thinking_not_memorization: 0,
        mentors_motivators: 0,
        use_learning_data: 0,
        need_new_skills: 0
    };
    
    let totalResponses = 0;
    data.forEach(response => {
        if (response.ai_teacher_transformation && Array.isArray(response.ai_teacher_transformation) && response.ai_teacher_transformation.length > 0) {
            totalResponses++;
            response.ai_teacher_transformation.forEach(transform => {
                if (transformCounts.hasOwnProperty(transform)) {
                    transformCounts[transform]++;
                }
            });
        }
    });
    
    // Translate labels
    const transformLabels = {
        ru: {
            less_explaining_more_organizing: 'Меньше объяснять, больше организовывать',
            more_feedback_ai_grading: 'Больше обратной связи, AI проверяет',
            personalized_learning_pace: 'Помощь в индивидуальном темпе',
            focus_thinking_not_memorization: 'Фокус на мышлении, не запоминании',
            mentors_motivators: 'Наставники и мотиваторы',
            use_learning_data: 'Использование данных от AI',
            need_new_skills: 'Потребуются новые навыки'
        },
        uz: {
            less_explaining_more_organizing: 'Kamroq tushuntirish, ko\'proq tashkil qilish',
            more_feedback_ai_grading: 'Ko\'proq fikr, AI tekshiradi',
            personalized_learning_pace: 'Individual sur\'atda yordam',
            focus_thinking_not_memorization: 'Fikrlashga e\'tibor, yod olishga emas',
            mentors_motivators: 'Murabbiy va motivator',
            use_learning_data: 'AI ma\'lumotlaridan foydalanish',
            need_new_skills: 'Yangi ko\'nikmalar kerak'
        }
    };
    
    const labels = Object.keys(transformCounts).map(key => transformLabels[currentLang][key]);
    const values = Object.values(transformCounts);
    
    // Calculate percentages for each option
    const percentages = values.map(count => totalResponses > 0 ? ((count / totalResponses) * 100).toFixed(1) : 0);
    
    // Destroy existing chart if any
    if (chartInstances.teacherTransformChart) {
        chartInstances.teacherTransformChart.destroy();
    }
    
    // Create chart
    chartInstances.teacherTransformChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ru' ? 'Процент выборов' : 'Tanlovlar foizi',
                data: percentages,
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',    // Blue
                    'rgba(34, 197, 94, 0.8)',     // Green
                    'rgba(147, 51, 234, 0.8)',    // Purple
                    'rgba(236, 72, 153, 0.8)',    // Pink
                    'rgba(249, 115, 22, 0.8)',    // Orange
                    'rgba(20, 184, 166, 0.8)',    // Teal
                    'rgba(239, 68, 68, 0.8)'      // Red
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(147, 51, 234, 1)',
                    'rgba(236, 72, 153, 1)',
                    'rgba(249, 115, 22, 1)',
                    'rgba(20, 184, 166, 1)',
                    'rgba(239, 68, 68, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const count = values[context.dataIndex];
                            return currentLang === 'ru' ? 
                                `${context.parsed.x}% (${count} из ${totalResponses} ответов)` :
                                `${context.parsed.x}% (${count} dan ${totalResponses} javob)`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: currentLang === 'ru' ? 
                        `Ожидания изменений в роли учителя (${totalResponses} ответов)` : 
                        `O'qituvchi rolida o'zgarishlar kutilmoqda (${totalResponses} javob)`,
                    font: {
                        size: 14,
                        family: 'Inter',
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 10,
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            family: 'Inter'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Update charts when language changes
document.addEventListener('DOMContentLoaded', () => {
    const originalToggle = document.getElementById('langToggle');
    if (originalToggle) {
        originalToggle.addEventListener('click', () => {
            // Wait for language update then refresh charts if visible
            setTimeout(() => {
                const resultsSection = document.getElementById('resultsSection');
                if (resultsSection && !resultsSection.classList.contains('hidden')) {
                    loadVisualizationData();
                }
            }, 100);
        });
    }
});
