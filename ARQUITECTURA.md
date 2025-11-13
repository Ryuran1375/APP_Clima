# 🏗️ Arquitectura del Sistema - Mi Portal de Apps

## 📊 Diagrama de Navegación

```
┌─────────────────────────────────────────────────────────┐
│                    ENTRADA A LA APP                      │
│              (Se carga App.js principal)                 │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
          ┌──────────────────────────────┐
          │  ¿Hay sesión en localStorage? │
          └────────┬────────────┬────────┘
                   │ Sí         │ No
                   ▼            ▼
              ┌──────────┐  ┌─────────┐
              │  MainMenu│  │ Login   │
              └─────┬────┘  └────┬────┘
                    │            │
         ┌──────────┼────────────┘
         │          │ (Validar credenciales)
         │          ▼
         │      ┌──────────┐
         │      │ ¿Válido? │
         │      └──┬──┬────┘
         │         │ │
         │    Sí──┘ │ └──No
         │         ▼
         │    ┌─────────┐
         │    │ MainMenu│
         │    └────┬────┘
         │         │
         └─────────┼────────────────────┐
                   │                    │
         ┌─────────┼─────────┐         │
         │         │         │         │
         ▼         ▼         ▼         ▼
    ┌────────┐ ┌─────────┐ ┌──────────┐ ┌────────┐
    │Weather │ │ Users   │ │Cocktails │ │ Logout │
    │  App   │ │  App    │ │   App    │ │ (Login)│
    └────┬───┘ └────┬────┘ └─────┬────┘ └────────┘
         │          │            │
         └──────────┼────────────┘
                    │
                    ▼
          ┌──────────────────────┐
          │ Volver al Menú o     │
          │ cambiar de app       │
          └──────────────────────┘
```

## 🗂️ Estructura de Carpetas Detallada

```
APP_Clima/
│
├── 📄 package.json              # Dependencias y scripts
├── 📄 README.md                 # Descripción original
├── 📄 GUIA_USO.md              # 📍 NUEVA - Guía completa de uso
├── 📄 CAMBIOS.md               # 📍 NUEVA - Resumen de cambios
├── 📄 GIT_COMMIT.md            # 📍 NUEVA - Instrucciones de git
│
├── 📁 public/                   # Archivos estáticos
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── 📁 src/                      # Código fuente
│   │
│   ├── 📄 App.js               # 🔴 MODIFICADO - Gestor principal
│   ├── 📄 App.css              # 🔴 MODIFICADO - Estilos principales
│   ├── 📄 App.test.js
│   ├── 📄 index.js
│   ├── 📄 index.css
│   ├── 📄 reportWebVitals.js
│   ├── 📄 setupTests.js
│   │
│   ├── 📁 components/           # Componentes React
│   │   ├── 📄 Login.js          # 📍 NUEVA - Login component
│   │   ├── 📄 MainMenu.js       # 📍 NUEVA - Menú principal
│   │   ├── 📄 AppHeader.js      # 📍 NUEVA - Header de navegación
│   │   │
│   │   ├── 📄 Header.js         # Búsqueda de clima
│   │   ├── 📄 WeatherList.js    # Lista de clima
│   │   ├── 📄 WeatherItem.js    # Item de clima
│   │   ├── 📄 ForecastList.js   # Pronóstico
│   │   ├── 📄 ForecastItem.js   # Item de pronóstico
│   │   ├── 📄 MusicRecommender.js  # Recomendaciones
│   │   │
│   │   └── 📁 Lugo/             # Componentes de Cócteles
│   │       ├── 📄 Header.js
│   │       ├── 📄 SearchBar.js
│   │       ├── 📄 CocktailList.js
│   │       └── 📄 CocktailItem.js
│   │
│   ├── 📁 apps/                 # 📍 NUEVA CARPETA - Apps modulares
│   │   ├── 📄 WeatherApp.js     # 📍 NUEVA - App de clima
│   │   ├── 📄 UsersApp.js       # 📍 NUEVA - App de usuarios
│   │   └── 📄 CocktailsApp.js   # 📍 NUEVA - App de cócteles
│   │
│   ├── 📁 styles/               # 📍 NUEVA CARPETA - Estilos CSS
│   │   ├── 📄 Login.css         # 📍 NUEVA
│   │   ├── 📄 MainMenu.css      # 📍 NUEVA
│   │   └── 📄 AppHeader.css     # 📍 NUEVA
│   │
│   ├── 📁 utils/                # Utilidades (si las hay)
│   │
│   ├── 📄 AppRodrigo.js         # App original de usuarios
│   └── 📄 AppLugo.js            # App original de cócteles
│
└── 📁 build/                    # Archivos compilados (npm run build)
    ├── index.html
    ├── manifest.json
    ├── robots.txt
    └── static/
        ├── css/
        └── js/
```

## 🔄 Flujo de Componentes

```
App.js (Principal)
    │
    ├─→ ¿isLoggedIn?
    │   ├─→ No: Renderiza <Login />
    │   │   └─→ Login.js
    │   │       └─→ handleLoginSuccess()
    │   │
    │   └─→ Sí: ¿currentApp?
    │       ├─→ No: Renderiza <MainMenu />
    │       │   └─→ MainMenu.js
    │       │       ├─→ handleSelectApp()
    │       │       └─→ handleLogout()
    │       │
    │       └─→ Sí: Renderiza
    │           ├─→ <AppHeader />
    │           │   └─→ handleBackToMenu()
    │           │
    │           └─→ <App wrapper>
    │               ├─→ currentApp === 'weather' → <WeatherApp />
    │               ├─→ currentApp === 'users' → <UsersApp />
    │               └─→ currentApp === 'cocktails' → <CocktailsApp />
```

## 🎨 Jerarquía de Componentes

```
<App>  ━━━━━━━━━━━━━━━━━ Componente Raíz
  ├─ <Login>  ━━━━━━━━ Pantalla de autenticación
  │
  ├─ <MainMenu>  ━━━━━━━ Menú de selección de apps
  │
  └─ <>  ━━━━━━━━━━━━━━━ Cuando app está seleccionada
      ├─ <AppHeader>  ━━━ Navegación
      │
      └─ <AppWrapper>  ━━ Contenedor de la app
          ├─ <WeatherApp>  ━━━━━━━━━━ App de clima
          │   ├─ <Header>
          │   ├─ <WeatherList>
          │   │   └─ <WeatherItem>
          │   ├─ <ForecastList>
          │   │   └─ <ForecastItem>
          │   └─ <MusicRecommender>
          │
          ├─ <UsersApp>  ━━━━━━━━━━━ App de usuarios
          │   ├─ <Header>
          │   └─ <List>
          │       └─ <Item>
          │
          └─ <CocktailsApp>  ━━━━━━━ App de cócteles
              ├─ <Header>
              ├─ <SearchBar>
              └─ <CocktailList>
                  └─ <CocktailItem>
```

## 📱 Responsividad

```
┌─────────────────────────────────────────────────┐
│              DESKTOP (1024px+)                   │
│  ┌────────────────────────────────────────────┐ │
│  │       Header + Contenido Principal         │ │
│  ├────────────────────────────────────────────┤ │
│  │  Descripción detallada con 2-3 columnas    │ │
│  └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘

┌──────────────────────┐
│  TABLET (768px)      │
├──────────────────────┤
│  Header              │
├──────────────────────┤
│  Contenido adaptado  │
│  2 columnas          │
├──────────────────────┤
└──────────────────────┘

┌────────────────────┐
│ MOBILE (360px+)    │
├────────────────────┤
│ Header            │
├────────────────────┤
│ Contenido          │
│ 1 columna          │
│ Desplazable        │
├────────────────────┤
└────────────────────┘
```

## 🔐 Flujo de Autenticación

```
Login.js
  ├─ Estados:
  │   ├─ username (string)
  │   ├─ password (string)
  │   └─ error (string | null)
  │
  ├─ handleLogin(e)
  │   ├─ Validar username y password
  │   ├─ Buscar en validUsers
  │   ├─ Si válido:
  │   │   ├─ localStorage.setItem('currentUser', {...})
  │   │   └─ onLoginSuccess(username)
  │   └─ Si inválido:
  │       └─ setError('Usuario o contraseña incorrectos')
  │
  └─ Renderizar:
      ├─ Inputs (username, password)
      ├─ Botón de login
      ├─ Mensajes de error
      └─ Credenciales de prueba
```

## 📊 Estados Globales (App.js)

```
App.js Estados:
├─ isLoggedIn (boolean)
│   └─ Determina si mostrar Login o MainMenu
│
├─ currentUser (string | null)
│   └─ Nombre del usuario autenticado
│
└─ currentApp (string | null)
    ├─ 'weather'   → WeatherApp
    ├─ 'users'     → UsersApp
    ├─ 'cocktails' → CocktailsApp
    └─ null        → MainMenu
```

---

## 📝 Notas de Implementación

- ✅ localStorage se usa para persistencia de sesión
- ✅ CSS Modules/Global para estilos
- ✅ Componentes funcionales con Hooks
- ✅ Props drilling minimizado
- ✅ Separación clara de responsabilidades
- ✅ Componentes reutilizables

---

**Diagrama creado:** Noviembre 2025
**Versión:** 1.0.0
