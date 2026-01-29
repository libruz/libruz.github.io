<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Libruz - Logowanie</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary-color: #64748b;
            --success-color: #10b981;
            --danger-color: #ef4444;
            --warning-color: #f59e0b;
            --background-color: #f8fafc;
            --card-color: #ffffff;
            --text-color: #334155;
            --border-color: #e2e8f0;
            --input-bg: #f1f5f9;
            --shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            --shadow-sm: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            color: var(--text-color);
            line-height: 1.6;
        }
        
        .login-container {
            width: 100%;
            max-width: 480px;
        }
        
        .login-card {
            background: var(--card-color);
            border-radius: 20px;
            box-shadow: var(--shadow);
            overflow: hidden;
            transition: transform 0.3s ease;
        }
        
        .login-card:hover {
            transform: translateY(-5px);
        }
        
        .login-header {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
            padding: 40px 30px 30px;
            text-align: center;
            color: white;
        }
        
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 15px;
        }
        
        .logo-icon {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }
        
        .logo-text h1 {
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }
        
        .logo-text p {
            font-size: 14px;
            opacity: 0.9;
            font-weight: 400;
        }
        
        .login-body {
            padding: 40px;
        }
        
        .login-tabs {
            display: flex;
            background: var(--input-bg);
            border-radius: 12px;
            padding: 4px;
            margin-bottom: 30px;
        }
        
        .tab-btn {
            flex: 1;
            padding: 12px;
            border: none;
            background: transparent;
            font-size: 15px;
            font-weight: 500;
            color: var(--secondary-color);
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s;
        }
        
        .tab-btn.active {
            background: white;
            color: var(--primary-color);
            box-shadow: var(--shadow-sm);
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--text-color);
            font-size: 14px;
        }
        
        .input-with-icon {
            position: relative;
        }
        
        .input-with-icon i {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--secondary-color);
            font-size: 18px;
        }
        
        .form-control {
            width: 100%;
            padding: 15px 15px 15px 50px;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            font-size: 16px;
            transition: all 0.3s;
            background: var(--input-bg);
            color: var(--text-color);
        }
        
        .form-control:focus {
            outline: none;
            border-color: var(--primary-color);
            background: white;
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
        
        .form-control.error {
            border-color: var(--danger-color);
        }
        
        .password-toggle {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: var(--secondary-color);
            cursor: pointer;
            font-size: 18px;
        }
        
        .btn-login {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .btn-login:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
        }
        
        .btn-login:active {
            transform: translateY(0);
        }
        
        .btn-login:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
        }
        
        .divider {
            display: flex;
            align-items: center;
            margin: 25px 0;
            color: var(--secondary-color);
        }
        
        .divider::before,
        .divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: var(--border-color);
        }
        
        .divider span {
            padding: 0 15px;
            font-size: 14px;
        }
        
        .role-buttons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .role-btn {
            padding: 12px;
            border: 2px solid var(--border-color);
            background: var(--input-bg);
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            color: var(--text-color);
        }
        
        .role-btn:hover {
            border-color: var(--primary-color);
            background: white;
        }
        
        .role-btn.active {
            border-color: var(--primary-color);
            background: white;
            color: var(--primary-color);
        }
        
        .role-btn i {
            font-size: 20px;
        }
        
        .alert {
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: none;
            animation: slideIn 0.3s ease-out;
        }
        
        .alert.error {
            background: #fef2f2;
            border: 1px solid #fee2e2;
            color: var(--danger-color);
        }
        
        .alert.success {
            background: #ecfdf5;
            border: 1px solid #d1fae5;
            color: var(--success-color);
        }
        
        .alert.info {
            background: #eff6ff;
            border: 1px solid #dbeafe;
            color: var(--primary-color);
        }
        
        .remember-forgot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .checkbox-group input[type="checkbox"] {
            width: 18px;
            height: 18px;
            border-radius: 4px;
            border: 2px solid var(--border-color);
            cursor: pointer;
        }
        
        .checkbox-group label {
            margin: 0;
            font-size: 14px;
            cursor: pointer;
        }
        
        .forgot-password {
            color: var(--primary-color);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .forgot-password:hover {
            color: var(--primary-dark);
            text-decoration: underline;
        }
        
        .login-footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color);
            font-size: 14px;
            color: var(--secondary-color);
        }
        
        .login-footer a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 500;
        }
        
        .login-footer a:hover {
            text-decoration: underline;
        }
        
        .loading-spinner {
            display: none;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s linear infinite;
        }
        
        .admin-note {
            background: #fef3c7;
            border: 1px solid #fde68a;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 20px;
            font-size: 14px;
        }
        
        .admin-note strong {
            color: #92400e;
            display: block;
            margin-bottom: 5px;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        /* Responsive */
        @media (max-width: 480px) {
            .login-body {
                padding: 30px 20px;
            }
            
            .login-header {
                padding: 30px 20px 25px;
            }
            
            .role-buttons {
                grid-template-columns: 1fr;
            }
            
            .remember-forgot {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <div class="login-header">
                <div class="logo">
                    <div class="logo-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="logo-text">
                        <h1>Libruz</h1>
                        <p>System Zarządzania Szkołą</p>
                    </div>
                </div>
            </div>
            
            <div class="login-body">
                <!-- Alert messages -->
                <div class="alert" id="errorAlert"></div>
                <div class="alert" id="successAlert"></div>
                
                <!-- Tabs for login type -->
                <div class="login-tabs">
                    <button class="tab-btn active" data-tab="standard">Standardowe logowanie</button>
                    <button class="tab-btn" data-tab="admin">Logowanie admina</button>
                </div>
                
                <!-- Standard Login Tab -->
                <div id="standard-tab" class="tab-content active">
                    <div class="admin-note">
                        <strong>Dla administratorów:</strong>
                        Jeżeli jesteś administratorem systemu, przełącz się na zakładkę "Logowanie admina"
                    </div>
                    
                    <div class="role-buttons">
                        <button class="role-btn" data-role="director">
                            <i class="fas fa-user-tie"></i>
                            Dyrektor
                        </button>
                        <button class="role-btn" data-role="teacher">
                            <i class="fas fa-chalkboard-teacher"></i>
                            Nauczyciel
                        </button>
                        <button class="role-btn" data-role="student">
                            <i class="fas fa-user-graduate"></i>
                            Uczeń
                        </button>
                        <button class="role-btn" data-role="parent">
                            <i class="fas fa-users"></i>
                            Rodzic
                        </button>
                    </div>
                    
                    <form id="standardLoginForm">
                        <div class="form-group">
                            <label for="standardLogin">Login</label>
                            <div class="input-with-icon">
                                <i class="fas fa-user"></i>
                                <input 
                                    type="text" 
                                    id="standardLogin" 
                                    class="form-control" 
                                    placeholder="Wpisz swój login" 
                                    required
                                >
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="standardPassword">Hasło</label>
                            <div class="input-with-icon">
                                <i class="fas fa-lock"></i>
                                <input 
                                    type="password" 
                                    id="standardPassword" 
                                    class="form-control" 
                                    placeholder="Wpisz swoje hasło" 
                                    required
                                >
                                <button type="button" class="password-toggle" id="toggleStandardPassword">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="remember-forgot">
                            <div class="checkbox-group">
                                <input type="checkbox" id="rememberMe">
                                <label for="rememberMe">Zapamiętaj mnie</label>
                            </div>
                            <a href="#" class="forgot-password">Nie pamiętasz hasła?</a>
                        </div>
                        
                        <button type="submit" class="btn-login" id="standardLoginBtn">
                            <span>Zaloguj się</span>
                            <div class="loading-spinner" id="standardSpinner"></div>
                        </button>
                    </form>
                </div>
                
                <!-- Admin Login Tab -->
                <div id="admin-tab" class="tab-content">
                    <div class="admin-note">
                        <strong>Uwaga:</strong>
                        Logowanie administratora systemu Libruz
                    </div>
                    
                    <form id="adminLoginForm">
                        <div class="form-group">
                            <label for="adminLogin">Login administratora</label>
                            <div class="input-with-icon">
                                <i class="fas fa-user-shield"></i>
                                <input 
                                    type="text" 
                                    id="adminLogin" 
                                    class="form-control" 
                                    value="admin"
                                    readonly
                                    style="background-color: #f8f9fa;"
                                >
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="adminPassword">Hasło administratora</label>
                            <div class="input-with-icon">
                                <i class="fas fa-key"></i>
                                <input 
                                    type="password" 
                                    id="adminPassword" 
                                    class="form-control" 
                                    placeholder="Wpisz hasło administratora" 
                                    required
                                >
                                <button type="button" class="password-toggle" id="toggleAdminPassword">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn-login" id="adminLoginBtn">
                            <span>Zaloguj jako administrator</span>
                            <div class="loading-spinner" id="adminSpinner"></div>
                        </button>
                    </form>
                </div>
                
                <div class="login-footer">
                    <p>System Libruz v1.0.0 © 2024</p>
                    <p>Wersja produkcyjna</p>
                </div>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
    <script>
        // Supabase Configuration
        const SUPABASE_URL = 'https://your-project.supabase.co'; // ZMIEŃ NA SWÓJ URL
        const SUPABASE_ANON_KEY = 'your-anon-key'; // ZMIEŃ NA SWÓJ KLUCZ
        
        // Initialize Supabase
        const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
            auth: {
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: false
            }
        });
        
        // Admin Credentials (hardcoded)
        const ADMIN_CREDENTIALS = {
            login: 'admin',
            password: 'Grahamka321@##'
        };
        
        // DOM Elements
        const errorAlert = document.getElementById('errorAlert');
        const successAlert = document.getElementById('successAlert');
        const tabButtons = document.querySelectorAll('.tab-btn');
        const roleButtons = document.querySelectorAll('.role-btn');
        const standardLoginForm = document.getElementById('standardLoginForm');
        const adminLoginForm = document.getElementById('adminLoginForm');
        
        // Current state
        let currentRole = 'director';
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Check if user is already logged in
            checkExistingSession();
            
            // Set up tab switching
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    switchTab(tabId);
                });
            });
            
            // Set up role selection
            roleButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const role = this.getAttribute('data-role');
                    selectRole(role);
                });
            });
            
            // Set up password toggles
            document.getElementById('toggleStandardPassword').addEventListener('click', function() {
                togglePasswordVisibility('standardPassword', this);
            });
            
            document.getElementById('toggleAdminPassword').addEventListener('click', function() {
                togglePasswordVisibility('adminPassword', this);
            });
            
            // Handle standard login form submission
            standardLoginForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                await handleStandardLogin();
            });
            
            // Handle admin login form submission
            adminLoginForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                await handleAdminLogin();
            });
            
            // Auto-select first role
            selectRole('director');
        });
        
        // Switch between tabs
        function switchTab(tabId) {
            // Update tab buttons
            tabButtons.forEach(button => {
                button.classList.remove('active');
                if (button.getAttribute('data-tab') === tabId) {
                    button.classList.add('active');
                }
            });
            
            // Update tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            document.getElementById(`${tabId}-tab`).classList.add('active');
        }
        
        // Select role for standard login
        function selectRole(role) {
            roleButtons.forEach(button => {
                button.classList.remove('active');
                if (button.getAttribute('data-role') === role) {
                    button.classList.add('active');
                }
            });
            
            currentRole = role;
            
            // Update placeholder text based on role
            const loginInput = document.getElementById('standardLogin');
            switch(role) {
                case 'director':
                    loginInput.placeholder = 'Wpisz login dyrektora';
                    break;
                case 'teacher':
                    loginInput.placeholder = 'Wpisz login nauczyciela';
                    break;
                case 'student':
                    loginInput.placeholder = 'Wpisz login ucznia';
                    break;
                case 'parent':
                    loginInput.placeholder = 'Wpisz login rodzica';
                    break;
            }
        }
        
        // Toggle password visibility
        function togglePasswordVisibility(inputId, button) {
            const input = document.getElementById(inputId);
            const icon = button.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        }
        
        // Show alert message
        function showAlert(type, message) {
            // Hide all alerts first
            errorAlert.style.display = 'none';
            successAlert.style.display = 'none';
            
            const alert = type === 'error' ? errorAlert : successAlert;
            alert.className = `alert ${type}`;
            alert.innerHTML = `
                <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
                <span>${message}</span>
            `;
            alert.style.display = 'block';
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                alert.style.display = 'none';
            }, 5000);
        }
        
        // Show loading state
        function setLoading(buttonId, isLoading) {
            const button = document.getElementById(buttonId);
            const spinner = button.querySelector('.loading-spinner');
            
            if (isLoading) {
                button.disabled = true;
                spinner.style.display = 'block';
                button.querySelector('span').style.opacity = '0.5';
            } else {
                button.disabled = false;
                spinner.style.display = 'none';
                button.querySelector('span').style.opacity = '1';
            }
        }
        
        // Check existing session
        async function checkExistingSession() {
            // Check for admin session
            if (localStorage.getItem('libruz_admin')) {
                window.location.href = '../admin/index.html';
                return;
            }
            
            // Check for Supabase session
            const { data: { session } } = await supabase.auth.getSession();
            
            if (session) {
                // Get user profile
                const { data: profile, error } = await supabase
                    .from('user_profiles')
                    .select('*')
                    .eq('auth_id', session.user.id)
                    .single();
                
                if (profile && !error) {
                    redirectBasedOnRole(profile.role);
                }
            }
        }
        
        // Handle standard login (non-admin users)
        async function handleStandardLogin() {
            const login = document.getElementById('standardLogin').value.trim();
            const password = document.getElementById('standardPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Basic validation
            if (!login || !password) {
                showAlert('error', 'Proszę wypełnić wszystkie pola');
                standardLoginForm.classList.add('shake');
                setTimeout(() => standardLoginForm.classList.remove('shake'), 500);
                return;
            }
            
            setLoading('standardLoginBtn', true);
            
            try {
                // 1. Find user profile by login
                const { data: profile, error: profileError } = await supabase
                    .from('user_profiles')
                    .select('*')
                    .eq('login', login)
                    .eq('deleted_at', null)
                    .single();
                
                if (profileError || !profile) {
                    throw new Error('Nieprawidłowy login lub hasło');
                }
                
                // Check if account is locked
                if (profile.is_locked) {
                    throw new Error('Konto jest zablokowane. Skontaktuj się z administratorem.');
                }
                
                // Check if password needs to be changed
                if (profile.must_change_password) {
                    // Store user ID for password change page
                    localStorage.setItem('temp_user_id', profile.id);
                    window.location.href = 'change-password.html';
                    return;
                }
                
                // 2. Attempt to sign in with Supabase Auth
                const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                    email: profile.email,
                    password: password
                });
                
                if (authError) {
                    // Increment failed login attempts
                    await incrementFailedAttempts(profile.id);
                    throw authError;
                }
                
                // 3. Reset failed login attempts on successful login
                await resetFailedAttempts(profile.id);
                
                // 4. Update last login timestamp
                await updateLastLogin(profile.id);
                
                // 5. Store user session data
                const userSession = {
                    id: authData.user.id,
                    email: authData.user.email,
                    role: profile.role,
                    school_id: profile.school_id,
                    profile_id: profile.id,
                    first_name: profile.first_name,
                    last_name: profile.last_name,
                    login: profile.login
                };
                
                localStorage.setItem('libruz_user', JSON.stringify(userSession));
                
                // 6. Remember me option
                if (rememberMe) {
                    localStorage.setItem('libruz_remember', 'true');
                }
                
                // 7. Show success message and redirect
                showAlert('success', 'Logowanie pomyślne! Przekierowywanie...');
                setTimeout(() => {
                    redirectBasedOnRole(profile.role);
                }, 1000);
                
            } catch (error) {
                console.error('Login error:', error);
                
                let errorMessage = 'Błąd logowania';
                
                if (error.message.includes('Invalid login credentials')) {
                    errorMessage = 'Nieprawidłowy login lub hasło';
                } else if (error.message.includes('Email not confirmed')) {
                    errorMessage = 'Email nie został potwierdzony';
                } else if (error.message.includes('Too many requests')) {
                    errorMessage = 'Zbyt wiele prób logowania. Spróbuj później.';
                } else {
                    errorMessage = error.message || 'Wystąpił nieoczekiwany błąd';
                }
                
                showAlert('error', errorMessage);
                setLoading('standardLoginBtn', false);
            }
        }
        
        // Handle admin login
        async function handleAdminLogin() {
            const login = document.getElementById('adminLogin').value;
            const password = document.getElementById('adminPassword').value;
            
            // Validation
            if (!login || !password) {
                showAlert('error', 'Proszę wypełnić wszystkie pola');
                adminLoginForm.classList.add('shake');
                setTimeout(() => adminLoginForm.classList.remove('shake'), 500);
                return;
            }
            
            setLoading('adminLoginBtn', true);
            
            // Simulate API call delay
            setTimeout(async () => {
                if (login === ADMIN_CREDENTIALS.login && password === ADMIN_CREDENTIALS.password) {
                    // Successful admin login
                    const adminUser = {
                        id: 'admin',
                        email: 'admin@libruz.pl',
                        role: 'admin',
                        login: 'admin',
                        first_name: 'Administrator',
                        last_name: 'Systemu',
                        is_admin: true
                    };
                    
                    // Store admin session
                    localStorage.setItem('libruz_admin', JSON.stringify(adminUser));
                    
                    // Show success message
                    showAlert('success', 'Logowanie administratora pomyślne! Przekierowywanie...');
                    
                    // Redirect to admin panel
                    setTimeout(() => {
                        window.location.href = '../admin/index.html';
                    }, 1000);
                    
                } else {
                    // Failed login
                    showAlert('error', 'Nieprawidłowe dane logowania administratora');
                    setLoading('adminLoginBtn', false);
                }
            }, 800); // Simulate network delay
        }
        
        // Increment failed login attempts
        async function incrementFailedAttempts(userId) {
            try {
                const { data: profile } = await supabase
                    .from('user_profiles')
                    .select('failed_login_attempts')
                    .eq('id', userId)
                    .single();
                
                const attempts = (profile?.failed_login_attempts || 0) + 1;
                
                await supabase
                    .from('user_profiles')
                    .update({ 
                        failed_login_attempts: attempts,
                        is_locked: attempts >= 5
                    })
                    .eq('id', userId);
                
            } catch (error) {
                console.error('Error incrementing failed attempts:', error);
            }
        }
        
        // Reset failed login attempts
        async function resetFailedAttempts(userId) {
            try {
                await supabase
                    .from('user_profiles')
                    .update({ 
                        failed_login_attempts: 0,
                        is_locked: false
                    })
                    .eq('id', userId);
            } catch (error) {
                console.error('Error resetting failed attempts:', error);
            }
        }
        
        // Update last login timestamp
        async function updateLastLogin(userId) {
            try {
                await supabase
                    .from('user_profiles')
                    .update({ 
                        last_login: new Date().toISOString()
                    })
                    .eq('id', userId);
            } catch (error) {
                console.error('Error updating last login:', error);
            }
        }
        
        // Redirect based on user role
        function redirectBasedOnRole(role) {
            switch(role) {
                case 'director':
                    window.location.href = '../director/index.html';
                    break;
                case 'teacher':
                    window.location.href = '../teacher/index.html';
                    break;
                case 'student':
                    window.location.href = '../student/index.html';
                    break;
                case 'parent':
                    window.location.href = '../parent/index.html';
                    break;
                default:
                    showAlert('error', 'Nieznana rola użytkownika');
                    setLoading('standardLoginBtn', false);
            }
        }
        
        // Add some demo accounts for testing (remove in production)
        function setupDemoAccounts() {
            // This is just for demonstration
            console.log('Demo accounts available for testing:');
            console.log('- Dyrektor: login: "kowalskiD", password: "Test123!"');
            console.log('- Nauczyciel: login: "nowakN", password: "Test123!"');
            console.log('- Uczeń: login: "wisniewskiU", password: "Test123!"');
        }
        
        // Call demo setup on page load
        setupDemoAccounts();
    </script>
</body>
</html>
