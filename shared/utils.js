// Utility functions for Libruz

// Generate secure password
function generateSecurePassword(length = 12) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const allChars = uppercase + lowercase + numbers + symbols;
    
    let password = '';
    
    // Ensure at least one of each required character type
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Fill the rest randomly
    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    return password;
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate PESEL
function validatePESEL(pesel) {
    if (!/^[0-9]{11}$/.test(pesel)) return false;
    
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    
    for (let i = 0; i < 10; i++) {
        sum += parseInt(pesel[i]) * weights[i];
    }
    
    const checksum = (10 - (sum % 10)) % 10;
    return checksum === parseInt(pesel[10]);
}

// Format date to YYYY-MM-DD
function formatDateForInput(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    
    return [year, month, day].join('-');
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get current academic year
function getCurrentAcademicYear() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    
    // If month is August or later, academic year starts this year
    if (month >= 8) {
        return `${year}/${year + 1}`;
    } else {
        return `${year - 1}/${year}`;
    }
}

// Create download link
function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Check if user is admin
function isAdmin() {
    return localStorage.getItem('libruz_admin') === 'true';
}

// Check if user is director
function isDirector() {
    const user = JSON.parse(localStorage.getItem('libruz_user') || '{}');
    return user.role === 'director';
}

// Check if user is teacher
function isTeacher() {
    const user = JSON.parse(localStorage.getItem('libruz_user') || '{}');
    return user.role === 'teacher';
}

// Check if user is student
function isStudent() {
    const user = JSON.parse(localStorage.getItem('libruz_user') || '{}');
    return user.role === 'student';
}

// Get user school ID
function getUserSchoolId() {
    const user = JSON.parse(localStorage.getItem('libruz_user') || '{}');
    return user.school_id;
}

// Show loading spinner
function showLoading() {
    let spinner = document.getElementById('loading-spinner');
    if (!spinner) {
        spinner = document.createElement('div');
        spinner.id = 'loading-spinner';
        spinner.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255,255,255,0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            ">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Ładowanie...</span>
                </div>
            </div>
        `;
        document.body.appendChild(spinner);
    }
    spinner.style.display = 'flex';
}

// Hide loading spinner
function hideLoading() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 
                         type === 'error' ? 'exclamation-circle' : 
                         type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Add styles
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' :
                    type === 'error' ? '#f44336' :
                    type === 'warning' ? '#ff9800' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Remove after 5 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Calculate grade average
function calculateAverage(grades) {
    if (!grades || grades.length === 0) return 0;
    
    const gradeValues = {
        '1': 1, '1+': 1.5, '2-': 1.75,
        '2': 2, '2+': 2.5, '3-': 2.75,
        '3': 3, '3+': 3.5, '4-': 3.75,
        '4': 4, '4+': 4.5, '5-': 4.75,
        '5': 5, '5+': 5.5, '6': 6
    };
    
    let totalWeight = 0;
    let weightedSum = 0;
    
    grades.forEach(grade => {
        const value = gradeValues[grade.grade] || 0;
        const weight = grade.weight || 1;
        weightedSum += value * weight;
        totalWeight += weight;
    });
    
    return totalWeight > 0 ? (weightedSum / totalWeight).toFixed(2) : 0;
}

// Export all utility functions
window.LibruzUtils = {
    generateSecurePassword,
    validateEmail,
    validatePESEL,
    formatDateForInput,
    debounce,
    getCurrentAcademicYear,
    downloadFile,
    isAdmin,
    isDirector,
    isTeacher,
    isStudent,
    getUserSchoolId,
    showLoading,
    hideLoading,
    showToast,
    formatFileSize,
    calculateAverage
};
