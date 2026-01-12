# 📥 HOW TO DOWNLOAD ALL SURVEY RESULTS

**Guide for**: Mr. Azamat Abdymomunov  
**Project**: TF0C5368 - Uzbekistan Education System Capacity Building Project  
**Date**: January 11, 2026

---

## 🎯 OVERVIEW

Currently, the survey application stores all responses in a database accessible via RESTful API. While a one-click export feature is planned for Phase 2, you can **download all data now** using the API endpoint or browser developer tools.

---

## 📊 METHOD 1: API ENDPOINT (RECOMMENDED)

### ✅ Direct API Access

The survey uses a RESTful API that you can access directly to download all responses in JSON format.

### Step-by-Step Instructions:

#### **1. Get the API URL**

After publishing your survey, the API endpoint will be:
```
https://[your-published-url]/tables/survey_responses?limit=10000
```

Replace `[your-published-url]` with your actual published domain.

#### **2. Access the API in Browser**

Simply open this URL in your web browser:
```
https://[your-published-url]/tables/survey_responses?limit=10000
```

This will display all survey responses in JSON format.

#### **3. Save the Data**

**Option A - Copy/Paste:**
1. Select all text (Ctrl+A / Cmd+A)
2. Copy (Ctrl+C / Cmd+C)
3. Paste into a text editor
4. Save as `survey_responses.json`

**Option B - Browser Save:**
1. Right-click on the page
2. Select "Save As..."
3. Save as `survey_responses.json`

---

## 💻 METHOD 2: BROWSER DEVELOPER TOOLS

### Step-by-Step:

#### **1. Open Your Published Survey**
Navigate to your live survey URL

#### **2. Open Developer Console**
- **Windows/Linux**: Press `F12` or `Ctrl+Shift+I`
- **Mac**: Press `Cmd+Option+I`

#### **3. Go to Console Tab**
Click on the "Console" tab in the developer tools

#### **4. Run This JavaScript Code**

Copy and paste this code into the console:

```javascript
// Fetch all survey responses
async function downloadAllResponses() {
    try {
        console.log('Fetching survey responses...');
        
        const response = await fetch('tables/survey_responses?limit=10000');
        const result = await response.json();
        
        console.log(`Found ${result.total} responses`);
        
        // Convert to JSON string
        const jsonData = JSON.stringify(result, null, 2);
        
        // Create download link
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `survey_responses_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('Download complete!');
    } catch (error) {
        console.error('Error downloading responses:', error);
    }
}

// Run the download
downloadAllResponses();
```

#### **5. Press Enter**
The file will automatically download to your computer with today's date in the filename.

---

## 📋 METHOD 3: CSV EXPORT (Convert JSON to CSV)

After downloading the JSON file, you can convert it to CSV for Excel/Google Sheets:

### **Option A: Online Converter**

1. Go to: https://www.convertcsv.com/json-to-csv.htm
2. Upload your `survey_responses.json` file
3. Click "Convert JSON to CSV"
4. Download the CSV file

### **Option B: Using Excel/Google Sheets**

**Microsoft Excel (2016+):**
1. Open Excel
2. Go to **Data → Get Data → From File → From JSON**
3. Select your JSON file
4. Click "Load"
5. Excel will convert it to a table
6. Save as Excel (.xlsx) or CSV

**Google Sheets:**
1. Go to Google Sheets
2. Extensions → Apps Script
3. Paste this script:

```javascript
function importJSON() {
  var url = 'YOUR_API_URL/tables/survey_responses?limit=10000';
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // Write headers
  if (data.data.length > 0) {
    var headers = Object.keys(data.data[0]);
    sheet.appendRow(headers);
    
    // Write data
    data.data.forEach(function(row) {
      var values = headers.map(function(header) {
        return row[header];
      });
      sheet.appendRow(values);
    });
  }
}
```

4. Replace `YOUR_API_URL` with your published URL
5. Run the function
6. Data will populate the sheet

---

## 🔧 METHOD 4: PYTHON SCRIPT (For Technical Users)

If you're comfortable with Python, here's a script to download and convert data:

```python
import requests
import json
import pandas as pd
from datetime import datetime

# Your API URL
API_URL = "https://[your-published-url]/tables/survey_responses?limit=10000"

# Fetch data
print("Fetching survey responses...")
response = requests.get(API_URL)
data = response.json()

print(f"Found {data['total']} responses")

# Save as JSON
json_filename = f"survey_responses_{datetime.now().strftime('%Y-%m-%d')}.json"
with open(json_filename, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print(f"Saved JSON: {json_filename}")

# Convert to CSV
df = pd.DataFrame(data['data'])
csv_filename = f"survey_responses_{datetime.now().strftime('%Y-%m-%d')}.csv"
df.to_csv(csv_filename, index=False, encoding='utf-8-sig')
print(f"Saved CSV: {csv_filename}")

# Convert to Excel
excel_filename = f"survey_responses_{datetime.now().strftime('%Y-%m-%d')}.xlsx"
df.to_excel(excel_filename, index=False)
print(f"Saved Excel: {excel_filename}")

print("\nDownload complete!")
```

**To run:**
1. Save as `download_survey.py`
2. Install required packages: `pip install requests pandas openpyxl`
3. Update the `API_URL` with your published URL
4. Run: `python download_survey.py`

---

## 📊 WHAT DATA YOU'LL GET

### JSON Structure:
```json
{
  "data": [
    {
      "id": "uuid-here",
      "user_role": "teacher",
      "age_group": null,
      "region": "tashkent_city",
      "school_type": "public",
      "uses_private_tutor": null,
      "tutor_reasons": [],
      "digital_tools_usage": "daily",
      "ai_tools_awareness": "yes_use",
      "ai_tools_used": ["chatgpt", "google_gemini"],
      "effectiveness_rating": 4,
      "challenges": ["poor_internet", "no_devices"],
      "internet_access": "average",
      "device_availability": ["smartphone", "laptop_desktop"],
      "training_needs": "probably_yes",
      "ai_teacher_transformation": ["more_feedback_ai_grading", "need_new_skills"],
      "ai_language_preference": ["uzbek", "russian", "english"],
      "language": "ru",
      "submitted_at": "2026-01-11T20:45:00.000Z",
      "gs_project_id": "project-id",
      "gs_table_name": "survey_responses",
      "created_at": 1736627100000,
      "updated_at": 1736627100000
    },
    // ... more responses
  ],
  "total": 150,
  "page": 1,
  "limit": 10000,
  "table": "survey_responses",
  "schema": { /* field definitions */ }
}
```

### Fields Included (19 total):
1. `id` - Unique response ID
2. `user_role` - Role (student/parent/teacher/administrator/it_teacher)
3. `age_group` - Age group (students only)
4. `region` - Region in Uzbekistan
5. `school_type` - Type of school
6. `uses_private_tutor` - Tutor usage (students only)
7. `tutor_reasons` - Reasons for tutoring (array)
8. `digital_tools_usage` - Usage frequency
9. `ai_tools_awareness` - AI awareness level
10. `ai_tools_used` - AI tools used (array)
11. `effectiveness_rating` - Rating (1-5)
12. `challenges` - Challenges faced (array)
13. `internet_access` - Internet quality
14. `device_availability` - Available devices (array)
15. `training_needs` - Training need level
16. `ai_teacher_transformation` - Expected teacher role changes (array)
17. `ai_language_preference` - Preferred languages (array)
18. `language` - Survey language (ru/uz)
19. `submitted_at` - Submission timestamp

Plus 4 system fields (gs_project_id, gs_table_name, created_at, updated_at)

---

## 📈 ANALYSIS TOOLS

### Recommended Tools for Analysis:

#### **1. Microsoft Excel** (Basic Analysis)
- Pivot tables for cross-tabulation
- Charts and graphs
- Filtering by region, role, etc.

#### **2. Google Sheets** (Collaborative Analysis)
- Real-time collaboration
- Built-in charts
- Easy sharing with team

#### **3. Power BI / Tableau** (Advanced Visualization)
- Professional dashboards
- Interactive reports
- Advanced filtering

#### **4. Python + Pandas** (Statistical Analysis)
- Advanced statistics
- Custom visualizations (matplotlib, seaborn)
- Machine learning insights

#### **5. R + RStudio** (Academic Research)
- Statistical modeling
- Publication-quality graphs
- Comprehensive analysis

#### **6. SPSS** (Social Science Research)
- Descriptive statistics
- Correlation analysis
- Hypothesis testing

---

## 🔍 KEY ANALYSIS QUESTIONS

### Questions to Explore:

#### **By Region:**
- Which regions have highest AI awareness?
- Where is internet access poorest?
- Regional differences in device availability
- Language preference by region

#### **By Role:**
- How do teachers vs. students view AI?
- Parent concerns vs. teacher concerns
- Administrator expectations for change
- IT teacher technical insights

#### **By Age Group (Students):**
- Do younger students use AI tools differently?
- Age-related challenges in adoption
- Training needs by age group
- Tutor usage patterns by age

#### **Cross-Analysis:**
- Correlation: Internet quality ↔ Digital tool usage
- Correlation: AI awareness ↔ Training needs
- Correlation: School type ↔ Device availability
- Correlation: Teacher transformation expectations ↔ Role

---

## 📊 SAMPLE ANALYSIS QUERIES

### Using the JSON Data in Excel:

**Query 1: Count responses by region**
```
=COUNTIF(RegionColumn, "tashkent_city")
```

**Query 2: Average effectiveness rating**
```
=AVERAGE(EffectivenessColumn)
```

**Query 3: Percentage using AI tools**
```
=COUNTIF(AIAwarenessColumn, "yes_use") / COUNT(AIAwarenessColumn) * 100
```

---

## 🎯 EXPORT BEST PRACTICES

### Recommended Export Schedule:

1. **Daily** (during active collection period)
   - Monitor response rates
   - Check data quality
   - Identify any issues early

2. **Weekly** (ongoing analysis)
   - Generate interim reports
   - Share with stakeholders
   - Track trends

3. **Final Export** (after campaign ends)
   - Complete dataset for final analysis
   - Archive for long-term storage
   - Generate comprehensive report

### Data Backup:

- **Save multiple formats**: JSON, CSV, Excel
- **Include date in filename**: `survey_responses_2026-01-11.json`
- **Store in multiple locations**: Local drive + Cloud (Google Drive/OneDrive)
- **Version control**: Keep snapshots over time

---

## 🚀 FUTURE: ONE-CLICK EXPORT FEATURE

### Coming in Phase 2:

We plan to add a built-in export feature directly in the survey interface:

**Features:**
- ✨ One-click download button
- 📊 Export formats: CSV, Excel, JSON
- 🎛️ Filter before export (by date, region, role)
- 📅 Schedule automated exports
- 📧 Email reports
- 📈 Pre-built analysis templates

**When:** Phase 2 development (2-4 weeks after initial deployment)

---

## 💡 QUICK START GUIDE

### For Non-Technical Users:

**Easiest Method** (Browser Method):

1. Open: `https://[your-published-url]/tables/survey_responses?limit=10000`
2. Right-click → Save As → `responses.json`
3. Go to: https://www.convertcsv.com/json-to-csv.htm
4. Upload `responses.json`
5. Download CSV
6. Open in Excel

**Done!** You now have your survey data in Excel format.

---

## 📞 SUPPORT

If you encounter any issues downloading data:

1. **Check API limit**: Maximum 10,000 responses per request
   - If you have more, increase the limit: `?limit=50000`
   
2. **Browser timeout**: For very large datasets
   - Use Python script method
   - Or download in batches using pagination

3. **Data format questions**: 
   - Array fields (challenges, ai_tools_used, etc.) contain multiple values
   - Convert to separate columns if needed for analysis

---

## 🎉 SUMMARY

### Quick Download Steps:

1. **Navigate to**: `https://[your-url]/tables/survey_responses?limit=10000`
2. **Save the data** (JSON format)
3. **Convert to CSV** (if needed for Excel)
4. **Analyze** using your preferred tool

### Best Practice:
- Export data regularly (daily/weekly)
- Save multiple formats (JSON + CSV + Excel)
- Back up in multiple locations
- Document your analysis process

---

**🎓 Ready to analyze your Uzbekistan education survey data!**

*For one-click export feature, stay tuned for Phase 2 updates!*
