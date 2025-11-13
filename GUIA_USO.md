# 🎯 Mi Portal de Apps - Guía de Uso

## 📱 Descripción

Este es un portal integrado que reúne múltiples aplicaciones con un sistema de **autenticación** y un **menú principal** para navegar entre ellas.

## 🔐 Sistema de Login

### Credenciales de Prueba

```
Usuario: admin
Contraseña: admin123

Usuario: user
Contraseña: user123

Usuario: test
Contraseña: test123
```

> **Nota:** Las credenciales se muestran en la pantalla de login para facilitar las pruebas.

## 📚 Aplicaciones Disponibles

### 1. 🌤️ Clima (Weather App)
- **Descripción:** Consulta el clima actual y pronóstico a 5 días en tiempo real
- **Características:**
  - Búsqueda de ciudades
  - Información detallada del clima (temperatura, humedad, viento, etc.)
  - Pronóstico de 5 días
  - Recomendaciones de música según el clima
- **API:** OpenWeatherMap

### 2. 👥 Lista de Usuarios (Users App)
- **Descripción:** Gestiona y visualiza usuarios del sistema
- **Características:**
  - Visualización de lista de usuarios
  - Selección de usuario
  - Información detallada de contacto
- **API:** JSONPlaceholder

### 3. 🍹 GlassofGod Cocktails
- **Descripción:** Descubre deliciosos cócteles y recetas
- **Características:**
  - Búsqueda de cócteles
  - Visualización de imágenes
  - Ingredientes y instrucciones
  - Información del vaso y tipo de alcohol
- **API:** TheCocktailDB

## 🚀 Características Principales

- ✅ **Autenticación segura** - Login requerido para acceder a las apps
- ✅ **Menú intuitivo** - Interfaz visual para seleccionar aplicaciones
- ✅ **Navegación fluida** - Botón para volver al menú desde cualquier app
- ✅ **Información del usuario** - Muestra el usuario logeado en la sesión
- ✅ **Cierre de sesión** - Opción para cerrar sesión desde el menú
- ✅ **Diseño responsivo** - Funciona en dispositivos móviles y escritorio
- ✅ **Tema moderno** - Interfaz con gradientes y transiciones suaves

## 🛠️ Estructura del Proyecto

```
src/
├── App.js                          # Componente principal con lógica de navegación
├── components/
│   ├── Login.js                    # Pantalla de login
│   ├── MainMenu.js                 # Menú principal de selección de apps
│   ├── AppHeader.js                # Header con botón de regreso
│   ├── Header.js                   # Header de búsqueda (Clima)
│   ├── WeatherList.js              # Lista de clima
│   ├── WeatherItem.js              # Item de clima
│   ├── ForecastList.js             # Pronóstico
│   ├── ForecastItem.js             # Item de pronóstico
│   ├── MusicRecommender.js         # Recomendador de música
│   └── Lugo/
│       ├── Header.js               # Header de Cocktails
│       ├── SearchBar.js            # Barra de búsqueda
│       ├── CocktailList.js         # Lista de cócteles
│       └── CocktailItem.js         # Item de cóctel
├── apps/
│   ├── WeatherApp.js               # App de Clima
│   ├── UsersApp.js                 # App de Usuarios
│   └── CocktailsApp.js             # App de Cócteles
├── styles/
│   ├── Login.css                   # Estilos del login
│   ├── MainMenu.css                # Estilos del menú
│   └── AppHeader.css               # Estilos del header de app
└── App.css                         # Estilos principales
```

## 📖 Flujo de la Aplicación

```
Login → MainMenu → (Weather | Users | Cocktails) → Back to Menu → Logout
```

### Paso a Paso:

1. **Login:** Ingresa tus credenciales
2. **Menú Principal:** Selecciona una de las 3 aplicaciones disponibles
3. **Usar App:** Navega dentro de la aplicación seleccionada
4. **Volver:** Haz clic en "← Volver al Menú" para regresar al menú principal
5. **Cerrar Sesión:** Desde el menú, puedes hacer clic en "Cerrar Sesión"

## 🎨 Diseño Visual

- **Paleta de colores:**
  - Primario: Morado gradiente (#667eea → #764ba2)
  - Secundarios: Azul, Rojo, Verde
  - Fondo: Gradientes suaves

- **Componentes:**
  - Tarjetas interactivas
  - Botones con efectos hover
  - Transiciones suaves
  - Sombras modernas

## 💻 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Iniciar la aplicación
npm start

# Construir para producción
npm build
```

## 🔒 Seguridad

- Las credenciales se validan en el login
- Los datos de usuario se almacenan en localStorage
- Se requiere login para acceder a cualquier aplicación

## 📝 Notas Importantes

- Las credenciales de demostración son solo para pruebas
- Los datos se almacenan en localStorage y se pierden al limpiar el navegador
- Las APIs externas requieren conexión a internet
- El sistema mantiene la sesión del usuario durante la navegación

## 🐛 Solución de Problemas

### El login no funciona
- Verifica que estés usando una de las credenciales correctas mostradas en la pantalla

### Las APIs no cargan
- Asegúrate de tener conexión a internet
- Algunos navegadores pueden bloquear CORS en desarrollo

### La sesión se cierra
- Si limpias el localStorage del navegador, se cerrará la sesión
- Haz login nuevamente para continuar

---

**Versión:** 1.0.0
**Última actualización:** Noviembre 2025
