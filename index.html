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
        
        .login-type {
            display: flex;
            background: var(--input-bg);
            border-radius: 12px;
            padding: 4px;
            margin-bottom: 25px;
            position: relative;
        }
        
        .type-indicator {
            position: absolute;
            height: calc(100% - 8px);
            width: calc(50% - 4px);
            background: white;
            border-radius: 8px;
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease;
            top: 4px;
        }
        
        .type-indicator.admin {
            transform: translateX(calc(100% + 4px));
        }
        
        .type-btn {
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
            position: relative;
            z-index: 1;
        }
        
        .type-btn.active {
            color: var(--primary-color);
        }
        
        .admin-notice {
            background: #fef3c7;
            border: 1px solid #fde68a;
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 20px;
            font-size: 14px;
            display: none;
        }
        
        .admin-notice.show {
            display: block;
            animation: fadeIn 0.3s ease;
        }
        
        .admin-notice strong {
            color: #92400e;
            display: block;
            margin-bottom: 5px;
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
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            transition: all 0.3s;
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
        
        .role-selection {
            margin-bottom: 25px;
        }
        
        .role-label {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 10px;
            color: var(--text-color);
        }
        
        .role-buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }
        
        .role-btn {
            padding: 12px 8px;
            border: 2px solid var(--border-color);
            background: var(--input-bg);
            border-radius: 10px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
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
            box-shadow: var(--shadow-sm);
        }
        
        .role-btn i {
            font-size: 18px;
        }
        
        .alert {
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: none;
            animation: fadeIn 0.3s ease-out;
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
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
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
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            
            .role-btn {
                padding: 12px;
                font-size: 14px;
            }
            
            .remember-forgot {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
            
            .login-type {
                margin-bottom: 20px;
            }
        }
        
        @media (max-width: 360px) {
            .role-buttons {
                grid-template-columns: 1fr;
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
                
                <!-- Login type switcher -->
                <div class="login-type">
                    <div class="type-indicator" id="typeIndicator"></div>
                    <button type="button" class="type-btn active" id="btnStandard">
                        Użytkownicy systemu
                    </button>
                    <button type="button" class="type-btn" id="btnAdmin">
                        Administrator systemu
                    </button>
                </div>
                
                <!-- Admin notice -->
                <div class="admin-notice" id="adminNotice">
                    <strong>Logowanie administratora systemu</strong>
                    <p>Jeżeli nie jesteś administratorem systemu, wybierz opcję "Użytkownicy systemu"</p>
                </div>
                
                <!-- User type selection (only for standard users) -->
                <div class="role-selection" id="roleSelection">
                    <div class="role-label">Wybierz typ konta:</div>
                    <div class="role-buttons">
                        <button type="button" class="role-btn active" data-role="director">
                            <i class="fas fa-user-tie"></i>
                            <span>Dyrektor</span>
                        </button>
                        <button type="button" class="role-btn" data-role="teacher">
                            <i class="fas fa-chalkboard-teacher"></i>
                            <span>Nauczyciel</span>
                        </button>
                        <button type="button" class="role-btn" data-role="student">
                            <i class="fas fa-user-graduate"></i>
                            <span>Uczeń</span>
                        </button>
                        <button type="button" class="role-btn" data-role="parent">
                            <i class="fas fa-users"></i>
                            <span>Rodzic</span>
                        </button>
                    </div>
                </div>
                
                <!-- Login form -->
                <form id="loginForm">
                    <div class="form-group">
                        <label for="loginInput" id="loginLabel">Login</label>
                        <div class="input-with-icon">
                            <i class="fas fa-user" id="loginIcon"></i>
                            <input 
                                type="text" 
                                id="loginInput" 
                                class="form-control" 
                                placeholder="Wpisz swój login" 
                                required
                            >
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="passwordInput">Hasło</label>
                        <div class="input-with-icon">
                            <i class="fas fa-lock"></i>
                            <input 
                                type="password" 
                                id="passwordInput" 
                                class="form-control" 
                                placeholder="Wpisz swoje hasło" 
                                required
                            >
                            <button type="button" class="password-toggle" id="togglePassword">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="remember-forgot">
                        <div class="checkbox-group">
                            <input type="checkbox" id="rememberMe">
                            <label for="rememberMe">Zapamiętaj mnie</label>
                        </div>
                        <a href="#" class="forgot-password" onclick="showForgotPassword()">Nie pamiętasz hasła?</a>
                    </div>
                    
                    <button type="submit" class="btn-login" id="loginBtn">
                        <span id="loginBtnText">Zaloguj się</span>
                        <div class="loading-spinner" id="loginSpinner"></div>
                    </button>
                </form>
                
                <div class="login-footer">
                    <p>System Libruz v1.0.0 © 2024</p>
                    <p>Wersja produkcyjna</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Simple forgot password modal -->
    <div id="forgotPasswordModal" style="
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
    ">
        <div style="
            background: white;
            padding: 30px;
            border-radius: 15px;
            width: 90%;
            max-width: 400px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        ">
            <h3 style="margin-bottom: 15px; color: var(--primary-color);">Resetowanie hasła</h3>
            <p style="margin-bottom: 20px; color: var(--text-color);">
                Skontaktuj się z administratorem systemu lub dyrektorem swojej szkoły w celu resetu hasła.
            </p>
            <div style="text-align: right;">
                <button onclick="hideForgotPassword()" style="
                    padding: 10px 20px;
                    background: var(--primary-color);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                ">
                    Zamknij
                </button>
            </div>
        </div>
    </div>

    <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
    <script>
        // Supabase Configuration - ZMIEŃ TE WARTOŚCI NA SWOJE
        const SUPABASE_URL = 'https://your-project.supabase.co';
        const SUPABASE_ANON_KEY = 'your-anon-key';
        
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
        const typeIndicator = document.getElementById('typeIndicator');
        const btnStandard = document.getElementById('btnStandard');
        const btnAdmin = document.getElementById('btnAdmin');
        const adminNotice = document.getElementById('adminNotice');
        const roleSelection = document.getElementById('roleSelection');
        const roleButtons = document.querySelectorAll('.role-btn');
        const loginForm = document.getElementById('loginForm');
        const loginLabel = document.getElementById('loginLabel');
        const loginIcon = document.getElementById('loginIcon');
        const loginInput = document.getElementById('loginInput');
        const passwordInput = document.getElementById('passwordInput');
        const togglePasswordBtn = document.getElementById('togglePassword');
        const loginBtn = document.getElementById('loginBtn');
        const loginBtnText = document.getElementById('loginBtnText');
        const loginSpinner = document.getElementById('loginSpinner');
        const forgotPasswordModal = document.getElementById('forgotPasswordModal');
        
        // Current state
        let isAdminMode = false;
        let currentRole = 'director';
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Check if user is already logged in
            checkExistingSession();
            
            // Set up login type switching
            btnStandard.addEventListener('click', function() {
                setLoginType(false);
            });
            
            btnAdmin.addEventListener('click', function() {
                setLoginType(true);
            });
            
            // Set up role selection
            roleButtons.forEach(button => {
                button.addEventListener('click', function() {
                    selectRole(this.getAttribute('data-role'));
                });
            });
            
            // Set up password toggle
            togglePasswordBtn.addEventListener('click', function() {
                togglePasswordVisibility();
            });
            
            // Handle login form submission
            loginForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                await handleLogin();
            });
            
            // Auto-select first role
            selectRole('director');
            
            // Add demo data info
            console.log('Dane logowania testowe:');
            console.log('- Admin: login: "admin", hasło: "Grahamka321@##"');
            console.log('- Przykładowy użytkownik: login: "test", hasło: "Test123!"');
        });
        
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
        
        // Set login type (admin or standard)
        function setLoginType(adminMode) {
            isAdminMode = adminMode;
            
            // Update buttons
            btnStandard.classList.toggle('active', !adminMode);
            btnAdmin.classList.toggle('active', adminMode);
            
            // Move indicator
            typeIndicator.classList.toggle('admin', adminMode);
            
            // Show/hide admin notice
            adminNotice.classList.toggle('show', adminMode);
            
            // Show/hide role selection
            roleSelection.style.display = adminMode ? 'none' : 'block';
            
            // Update form labels and placeholders
            if (adminMode) {
                loginLabel.textContent = 'Login administratora';
                loginInput.placeholder = 'Wpisz login administratora';
                loginIcon.className = 'fas fa-user-shield';
                loginInput.value = ADMIN_CREDENTIALS.login;
                loginInput.readOnly = true;
                loginInput.style.backgroundColor = '#f8f9fa';
                loginBtnText.textContent = 'Zaloguj jako administrator';
            } else {
                loginLabel.textContent = 'Login';
                loginInput.placeholder = 'Wpisz swój login';
                loginIcon.className = 'fas fa-user';
                loginInput.value = '';
                loginInput.readOnly = false;
                loginInput.style.backgroundColor = '';
                loginBtnText.textContent = 'Zaloguj się';
                updateLoginPlaceholder();
            }
            
            // Focus on password field for admin
            if (adminMode) {
                setTimeout(() => {
                    passwordInput.focus();
                }, 100);
            } else {
                loginInput.focus();
            }
        }
        
        // Select role for standard users
        function selectRole(role) {
            roleButtons.forEach(button => {
                button.classList.toggle('active', button.getAttribute('data-role') === role);
            });
            
            currentRole = role;
            updateLoginPlaceholder();
        }
        
        // Update login placeholder based on selected role
        function updateLoginPlaceholder() {
            if (isAdminMode) return;
            
            switch(currentRole) {
                case 'director':
                    loginInput.placeholder = 'Wpisz login dyrektora (np. kowalskiD)';
                    break;
                case 'teacher':
                    loginInput.placeholder = 'Wpisz login nauczyciela (np. nowakN)';
                    break;
                case 'student':
                    loginInput.placeholder = 'Wpisz login ucznia (np. wisniewskiU)';
                    break;
                case 'parent':
                    loginInput.placeholder = 'Wpisz login rodzica';
                    break;
            }
        }
        
        // Toggle password visibility
        function togglePasswordVisibility() {
            const icon = togglePasswordBtn.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
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
        function setLoading(isLoading) {
            if (isLoading) {
                loginBtn.disabled = true;
                loginSpinner.style.display = 'block';
                loginBtnText.style.opacity = '0.5';
            } else {
                loginBtn.disabled = false;
                loginSpinner.style.display = 'none';
                loginBtnText.style.opacity = '1';
            }
        }
        
        // Handle login
        async function handleLogin() {
            const login = loginInput.value.trim();
            const password = passwordInput.value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Basic validation
            if (!login || !password) {
                showAlert('error', 'Proszę wypełnić wszystkie pola');
                loginForm.classList.add('shake');
                setTimeout(() => loginForm.classList.remove('shake'), 500);
                return;
            }
            
            setLoading(true);
            
            try {
                if (isAdminMode) {
                    // ADMIN LOGIN
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
                        throw new Error('Nieprawidłowe dane logowania administratora');
                    }
                } else {
                    // STANDARD USER LOGIN
                    await handleStandardUserLogin(login, password, rememberMe);
                }
            } catch (error) {
                console.error('Login error:', error);
                handleLoginError(error);
            } finally {
                setLoading(false);
            }
        }
        
        // Handle standard user login
        async function handleStandardUserLogin(login, password, rememberMe) {
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
            if (profile.must_change_password || profile.is_temp_password) {
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
        }
        
        // Handle login errors
        function handleLoginError(error) {
            let errorMessage = 'Błąd logowania';
            
            if (error.message.includes('Invalid login credentials')) {
                errorMessage = 'Nieprawidłowy login lub hasło';
            } else if (error.message.includes('Email not confirmed')) {
                errorMessage = 'Email nie został potwierdzony';
            } else if (error.message.includes('Too many requests')) {
                errorMessage = 'Zbyt wiele prób logowania. Spróbuj później.';
            } else if (error.message.includes('User not found')) {
                errorMessage = 'Użytkownik nie istnieje w systemie';
            } else {
                errorMessage = error.message || 'Wystąpił nieoczekiwany błąd';
            }
            
            showAlert('error', errorMessage);
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
                case 'admin':
                    window.location.href = '../admin/index.html';
                    break;
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
            }
        }
        
        // Show forgot password modal
        function showForgotPassword() {
            forgotPasswordModal.style.display = 'flex';
        }
        
        // Hide forgot password modal
        function hideForgotPassword() {
            forgotPasswordModal.style.display = 'none';
        }
        
        // Close modal when clicking outside
        forgotPasswordModal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideForgotPassword();
            }
        });
        
        // Add some demo accounts info for testing
        console.log('Przykładowe loginy do testowania:');
        console.log('1. Admin - login: admin, hasło: Grahamka321@##');
        console.log('2. Dyrektor - login: kowalskiD, hasło: Dyrektor123!');
        console.log('3. Nauczyciel - login: nowakN, hasło: Nauczyciel123!');
        console.log('4. Uczeń - login: wisniewskiU, hasło: Uczen123!');
        console.log('5. Rodzic - login: kowalskiR, hasło: Rodzic123!');
        
        // Pre-fill for testing (remove in production)
        if (window.location.href.includes('localhost')) {
            console.log('Tryb testowy - pre-filling form for testing');
            loginInput.value = 'admin';
            passwordInput.value = 'Grahamka321@##';
        }
    </script>
</body>
</html>
