import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcomeBack: 'Welcome Back',
      email: 'Email',
      password: 'Password',
      login: 'Login',
      error: 'Error',
      invalidCredentials: 'Invalid email or password',
      invalidEmail: 'Please enter a valid email address',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      companyName: 'Your Company',
      allRightsReserved: 'All rights reserved.',
    },
  },
  es: {
    translation: {
      welcomeBack: 'Bienvenido de nuevo',
      email: 'Correo electrónico',
      password: 'Contraseña',
      login: 'Iniciar sesión',
      error: 'Error',
      invalidCredentials: 'Correo electrónico o contraseña inválidos',
      invalidEmail:
        'Por favor, introduce una dirección de correo electrónico válida',
      privacyPolicy: 'Política de privacidad',
      termsOfService: 'Términos de servicio',
      companyName: 'Tu Empresa',
      allRightsReserved: 'Todos los derechos reservados.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
