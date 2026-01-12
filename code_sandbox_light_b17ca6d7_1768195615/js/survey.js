// Survey Form Logic
let currentStep = 0;
const totalSteps = 4;
let surveyData = {};

document.addEventListener('DOMContentLoaded', () => {
    initializeSurvey();
});

function initializeSurvey() {
    // Start Survey Button
    document.getElementById('startSurveyBtn').addEventListener('click', startSurvey);
    
    // Navigation Buttons
    document.getElementById('nextBtn').addEventListener('click', nextStep);
    document.getElementById('prevBtn').addEventListener('click', prevStep);
    
    // Form Submission
    document.getElementById('surveyForm').addEventListener('submit', submitSurvey);
    
    // Role Change Handler
    document.querySelectorAll('input[name="user_role"]').forEach(radio => {
        radio.addEventListener('change', handleRoleChange);
    });
    
    // Star Rating Handler
    document.querySelectorAll('.rating-star').forEach(star => {
        star.addEventListener('click', handleStarRating);
    });
    
    // Private Tutor Yes/No Handler
    document.querySelectorAll('input[name="uses_private_tutor"]').forEach(radio => {
        radio.addEventListener('change', handleTutorChange);
    });
    
    // New Survey Button
    document.getElementById('newSurveyBtn').addEventListener('click', resetSurvey);
    
    // Handle "None" checkbox exclusivity for AI tools
    const noneToolCheckbox = document.getElementById('tool_none');
    const otherToolCheckboxes = document.querySelectorAll('input[name="ai_tools_used"]:not(#tool_none)');
    
    noneToolCheckbox.addEventListener('change', function() {
        if (this.checked) {
            otherToolCheckboxes.forEach(cb => cb.checked = false);
        }
    });
    
    otherToolCheckboxes.forEach(cb => {
        cb.addEventListener('change', function() {
            if (this.checked) {
                noneToolCheckbox.checked = false;
            }
        });
    });
    
    // Handle "No challenges" checkbox exclusivity
    const noChallengeCheckbox = document.getElementById('challenge_none');
    const otherChallengeCheckboxes = document.querySelectorAll('input[name="challenges"]:not(#challenge_none)');
    
    noChallengeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            otherChallengeCheckboxes.forEach(cb => cb.checked = false);
        }
    });
    
    otherChallengeCheckboxes.forEach(cb => {
        cb.addEventListener('change', function() {
            if (this.checked) {
                noChallengeCheckbox.checked = false;
            }
        });
    });
}

function startSurvey() {
    document.getElementById('welcomeSection').classList.add('hidden');
    document.getElementById('surveySection').classList.remove('hidden');
    currentStep = 1;
    showStep(currentStep);
    updateProgress();
}

function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.survey-step').forEach(stepEl => {
        stepEl.classList.add('hidden');
    });
    
    // Show current step
    const currentStepEl = document.querySelector(`.survey-step[data-step="${step}"]`);
    if (currentStepEl) {
        currentStepEl.classList.remove('hidden');
        currentStepEl.classList.add('fade-in');
    }
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    if (step === 1) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }
    
    if (step === totalSteps) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextStep() {
    if (validateStep(currentStep)) {
        currentStep++;
        showStep(currentStep);
        updateProgress();
    }
}

function prevStep() {
    currentStep--;
    showStep(currentStep);
    updateProgress();
}

function validateStep(step) {
    const currentStepEl = document.querySelector(`.survey-step[data-step="${step}"]`);
    
    if (step === 1) {
        // Validate role selection
        const roleSelected = document.querySelector('input[name="user_role"]:checked');
        if (!roleSelected) {
            alert(currentLang === 'ru' ? 'Пожалуйста, выберите вашу роль' : 'Iltimos, rolingizni tanlang');
            return false;
        }
    }
    
    if (step === 2) {
        // Validate demographics
        const region = document.getElementById('region').value;
        const schoolType = document.getElementById('school_type').value;
        
        if (!region || !schoolType) {
            alert(currentLang === 'ru' ? 'Пожалуйста, заполните все обязательные поля' : 'Iltimos, barcha majburiy maydonlarni to\'ldiring');
            return false;
        }
        
        // Validate age group if student
        const role = document.querySelector('input[name="user_role"]:checked').value;
        if (role === 'student') {
            const ageGroup = document.getElementById('age_group').value;
            if (!ageGroup) {
                alert(currentLang === 'ru' ? 'Пожалуйста, выберите возрастную группу' : 'Iltimos, yosh guruhini tanlang');
                return false;
            }
        }
    }
    
    if (step === 3) {
        // Validate digital tools usage
        const usage = document.querySelector('input[name="digital_tools_usage"]:checked');
        const awareness = document.querySelector('input[name="ai_tools_awareness"]:checked');
        
        if (!usage || !awareness) {
            alert(currentLang === 'ru' ? 'Пожалуйста, ответьте на все вопросы' : 'Iltimos, barcha savollarga javob bering');
            return false;
        }
    }
    
    if (step === 4) {
        // Validate assessment
        const rating = document.querySelector('input[name="effectiveness_rating"]:checked');
        const internetAccess = document.querySelector('select[name="internet_access"]').value;
        const deviceAvailability = document.querySelector('select[name="device_availability"]').value;
        const training = document.querySelector('input[name="training_needs"]:checked');
        
        if (!rating || !internetAccess || !deviceAvailability || !training) {
            alert(currentLang === 'ru' ? 'Пожалуйста, ответьте на все обязательные вопросы' : 'Iltimos, barcha majburiy savollarga javob bering');
            return false;
        }
    }
    
    return true;
}

function updateProgress() {
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${Math.round(progress)}%`;
    
    // Update step indicators
    for (let i = 1; i <= totalSteps; i++) {
        const stepIndicator = document.getElementById(`step${i}Label`);
        if (i < currentStep) {
            stepIndicator.classList.add('completed');
            stepIndicator.classList.remove('active');
        } else if (i === currentStep) {
            stepIndicator.classList.add('active');
            stepIndicator.classList.remove('completed');
        } else {
            stepIndicator.classList.remove('active', 'completed');
        }
    }
}

function handleRoleChange(e) {
    const role = e.target.value;
    const ageGroupContainer = document.getElementById('ageGroupContainer');
    const privateTutoringContainer = document.getElementById('privateTutoringContainer');
    const studentHelper = document.getElementById('studentHelper');
    const aiToolsHelper = document.getElementById('aiToolsHelper');
    const aiLanguageHelper = document.getElementById('aiLanguageHelper');
    
    // Show age group and tutoring only for students
    if (role === 'student') {
        ageGroupContainer.classList.remove('hidden');
        document.getElementById('age_group').required = true;
        
        // Show private tutoring question
        if (privateTutoringContainer) privateTutoringContainer.classList.remove('hidden');
        
        // Show student helper messages
        if (studentHelper) studentHelper.classList.remove('hidden');
        if (aiToolsHelper) aiToolsHelper.classList.remove('hidden');
        if (aiLanguageHelper) aiLanguageHelper.classList.remove('hidden');
    } else {
        ageGroupContainer.classList.add('hidden');
        document.getElementById('age_group').required = false;
        document.getElementById('age_group').value = '';
        
        // Hide private tutoring question
        if (privateTutoringContainer) privateTutoringContainer.classList.add('hidden');
        
        // Reset tutoring answers
        const tutorRadios = document.querySelectorAll('input[name="uses_private_tutor"]');
        tutorRadios.forEach(radio => radio.checked = false);
        const tutorReasonsContainer = document.getElementById('tutorReasonsContainer');
        if (tutorReasonsContainer) tutorReasonsContainer.classList.add('hidden');
        
        // Hide student helper messages
        if (studentHelper) studentHelper.classList.add('hidden');
        if (aiToolsHelper) aiToolsHelper.classList.add('hidden');
        if (aiLanguageHelper) aiLanguageHelper.classList.add('hidden');
    }
}

function handleTutorChange(e) {
    const tutorReasonsContainer = document.getElementById('tutorReasonsContainer');
    
    if (e.target.value === 'yes') {
        // Show reasons if user has a tutor
        tutorReasonsContainer.classList.remove('hidden');
    } else {
        // Hide reasons and uncheck all if user doesn't have a tutor
        tutorReasonsContainer.classList.add('hidden');
        const reasonCheckboxes = document.querySelectorAll('input[name="tutor_reasons"]');
        reasonCheckboxes.forEach(cb => cb.checked = false);
    }
}

function handleStarRating(e) {
    const rating = parseInt(e.target.dataset.rating);
    const stars = document.querySelectorAll('.rating-star');
    
    // Update star display
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.filter = 'grayscale(0%)';
        } else {
            star.style.filter = 'grayscale(100%)';
        }
    });
    
    // Set the corresponding radio button
    document.getElementById(`rating_${rating}`).checked = true;
}

async function submitSurvey(e) {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
        return;
    }
    
    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>' + 
        (currentLang === 'ru' ? 'Отправка...' : 'Yuborilmoqda...');
    
    try {
        // Collect form data
        const formData = new FormData(e.target);
        const data = {
            language: currentLang,
            submitted_at: new Date().toISOString()
        };
        
        // Process form fields
        for (let [key, value] of formData.entries()) {
            if (key === 'ai_tools_used' || key === 'challenges' || key === 'ai_language_preference' || key === 'tutor_reasons' || key === 'ai_teacher_transformation') {
                // Handle checkboxes (multiple values)
                if (!data[key]) {
                    data[key] = [];
                }
                data[key].push(value);
            } else if (key === 'effectiveness_rating') {
                // Convert to number
                data[key] = parseInt(value);
            } else {
                data[key] = value;
            }
        }
        
        // Ensure arrays exist even if empty
        if (!data.ai_tools_used) data.ai_tools_used = [];
        if (!data.challenges) data.challenges = [];
        if (!data.ai_language_preference) data.ai_language_preference = [];
        if (!data.tutor_reasons) data.tutor_reasons = [];
        if (!data.ai_teacher_transformation) data.ai_teacher_transformation = [];
        
        // If user doesn't use tutor, set to null
        if (data.uses_private_tutor === 'no') {
            data.tutor_reasons = [];
        }
        
        // Submit to database
        const response = await fetch('tables/survey_responses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            // Hide survey form
            document.getElementById('surveySection').classList.add('hidden');
            
            // Show results
            document.getElementById('resultsSection').classList.remove('hidden');
            
            // Load and display visualizations
            await loadVisualizationData();
        } else {
            throw new Error('Failed to submit survey');
        }
    } catch (error) {
        console.error('Error submitting survey:', error);
        alert(currentLang === 'ru' ? 
            'Произошла ошибка при отправке. Пожалуйста, попробуйте снова.' : 
            'Yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
}

function resetSurvey() {
    // Reset form
    document.getElementById('surveyForm').reset();
    
    // Reset star ratings
    document.querySelectorAll('.rating-star').forEach(star => {
        star.style.filter = 'grayscale(100%)';
    });
    
    // Hide results and show welcome
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('welcomeSection').classList.remove('hidden');
    
    // Reset step
    currentStep = 0;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
