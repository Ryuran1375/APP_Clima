# ❓ Preguntas Frecuentes (FAQ)

## 🔐 Autenticación y Login

### P: ¿Cuáles son las credenciales válidas?
**R:** Puedes usar cualquiera de estas tres:
- admin / admin123
- user / user123
- test / test123

Las credenciales se muestran en la pantalla de login para facilitar las pruebas.

### P: ¿Dónde se almacena la información de sesión?
**R:** Se guarda en `localStorage` del navegador. Esto significa que si cierras el navegador, la sesión se mantendrá hasta que limpies el localStorage o hagas logout.

### P: ¿Qué pasa si olvido las credenciales?
**R:** Las credenciales están mostradas en la pantalla de login en todo momento. También puedes consultar este documento o el archivo GUIA_USO.md.

### P: ¿Es seguro este sistema de autenticación?
**R:** No. Este es un sistema de demostración para propósitos educativos. Para producción, necesitarías:
- Autenticación real con base de datos
- Hash de contraseñas (bcrypt)
- JWT tokens
- HTTPS
- Rate limiting

---

## 📱 Uso de la Aplicación

### P: ¿Cómo cambio de una app a otra?
**R:** 
1. Desde cualquier app, haz clic en "← Volver al Menú"
2. Selecciona otra app del menú principal
3. Para cerrar sesión, usa "Cerrar Sesión" en el menú

### P: ¿Puedo tener múltiples ventanas abiertas?
**R:** Sí, pero comparten la misma sesión en localStorage. Si cierras sesión en una ventana, se cerrará en todas.

### P: ¿Funciona en dispositivos móviles?
**R:** Sí, la aplicación es completamente responsiva:
- ✅ Móvil (360px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)

### P: ¿Necesito conexión a internet?
**R:** Sí, porque las aplicaciones usan APIs externas:
- Weather API: openweathermap.org
- Users API: jsonplaceholder.typicode.com
- Cocktails API: thecocktaildb.com

---

## 🌦️ App de Clima

### P: ¿Puedo buscar cualquier ciudad?
**R:** Sí, puedes buscar cualquier ciudad. El formato puede ser:
- Nombre simple: "Madrid"
- Nombre y país: "Madrid, ES"
- Ciudades con espacios: "Nueva York"

### P: ¿Por qué no aparece el pronóstico a veces?
**R:** El pronóstico se carga después del clima actual. Espera un momento o recarga la página.

### P: ¿Qué significan los iconos del clima?
**R:** Son símbolos estándar de OpenWeatherMap que representan condiciones como lluvia, nube, sol, etc.

### P: ¿La música recomendada es real?
**R:** Sí, usa iframes de Spotify para mostrar recomendaciones basadas en el clima actual.

---

## 👥 App de Usuarios

### P: ¿De dónde vienen los usuarios?
**R:** Son datos de demostración de JSONPlaceholder, una API gratuita para testing.

### P: ¿Puedo editar o eliminar usuarios?
**R:** No en esta versión. La app es de solo lectura (read-only).

### P: ¿Por qué no aparecen más usuarios?
**R:** JSONPlaceholder devuelve un número fijo de usuarios. Es así por diseño.

---

## 🍹 App de Cócteles

### P: ¿Cuántos cócteles hay disponibles?
**R:** Depende de la base de datos de ThecocktailDB. Hay miles de cócteles disponibles.

### P: ¿Puedo ver los ingredientes exactos?
**R:** Cuando haces clic en "Ver detalles", aparecen las instrucciones. Los ingredientes están en el API pero requeriría cambios en el componente CocktailItem para mostrarlos de forma detallada.

### P: ¿Qué pasa si el cóctel no existe?
**R:** Verás el mensaje "No se encontraron cócteles". Intenta con otro nombre.

### P: ¿Puedo filtrar por tipo de alcohol?
**R:** No en esta versión, pero el API lo soporta. Sería una mejora futura.

---

## 🛠️ Desarrollo y Técnico

### P: ¿Cómo instalo la aplicación?
**R:** 
```bash
# Clonar el repositorio
git clone https://github.com/Ryuran1375/APP_Clima

# Entrar a la carpeta
cd APP_Clima

# Instalar dependencias
npm install

# Iniciar la aplicación
npm start
```

### P: ¿Qué versión de React se usa?
**R:** React 19.2.0 (última versión disponible en package.json)

### P: ¿Puedo modificar el código?
**R:** ¡Claro! El código está disponible en GitHub. Haz fork, modifica y presenta pull requests.

### P: ¿Hay pruebas unitarias?
**R:** No en esta versión. Está disponible `App.test.js` para empezar. Puedes correr pruebas con:
```bash
npm test
```

### P: ¿Cómo construyo para producción?
**R:** 
```bash
npm run build
```
Esto crea una carpeta `build/` optimizada para producción.

### P: ¿Qué navegadores soporta?
**R:** Los mismos que soporta React 19:
- Chrome/Edge últimas 2 versiones
- Firefox últimas 2 versiones
- Safari 12+
- En dispositivos móviles: navegadores por defecto

---

## 🎨 Personalización

### P: ¿Cómo cambio los colores?
**R:** Los colores principales están en:
- `src/styles/Login.css` - Gradiente morado
- `src/styles/MainMenu.css` - Colores de tarjetas
- Variables CSS en `src/App.css`

### P: ¿Puedo agregar un tema oscuro?
**R:** El código base en `App.css` tiene soporte para dark mode con `body.dark`. Puedes implementarlo.

### P: ¿Cómo cambio los logos/iconos?
**R:** Los iconos son emoji. Puedes cambiarlos en `MainMenu.js` línea 28-38:
```javascript
🌤️ → otro emoji
👥 → otro emoji
🍹 → otro emoji
```

---

## 🚀 Mejoras y Próximas Características

### P: ¿Cuáles son las mejoras planeadas?
**R:** Posibles mejoras futuras:
- [ ] Base de datos real con autenticación
- [ ] Perfiles de usuario personalizables
- [ ] Historial de búsquedas
- [ ] Favoritos/Guardados
- [ ] Notificaciones en tiempo real
- [ ] Exportar datos
- [ ] Tema oscuro automático
- [ ] Más aplicaciones integradas

### P: ¿Puedo agregar más apps?
**R:** ¡Absolutamente! Solo necesitas:
1. Crear un nuevo archivo en `src/apps/MyApp.js`
2. Agregar la app en el array de `apps` en `MainMenu.js`
3. Agregar el caso correspondiente en `App.js`

---

## 🐛 Solución de Problemas

### P: La app dice "Error: Ciudad no encontrada"
**R:** 
- Verifica que escribas el nombre correcto
- Prueba con el formato: "Ciudad, País" (ej: "Madrid, ES")
- Asegúrate de tener conexión a internet

### P: Los cócteles no cargan
**R:**
- Verifica tu conexión a internet
- Intenta con un término de búsqueda diferente
- Espera unos segundos antes de buscar de nuevo

### P: La sesión se cierra sola
**R:**
- Si limpias el localStorage, la sesión se pierde
- En modo incógnito, localStorage se limpia al cerrar
- Prueba en una ventana normal

### P: Los estilos no se aplican correctamente
**R:**
- Limpia la caché del navegador (Ctrl+Shift+Del)
- Actualiza la página (F5 o Ctrl+R)
- En desarrollo, restart el servidor: `npm start`

### P: "Module not found" error
**R:**
- Ejecuta `npm install` para instalar todas las dependencias
- Verifica que no hayas eliminado archivos importantes
- Comprueba las rutas de importación

---

## 📚 Recursos Útiles

- [Documentación React](https://react.dev)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- [TheCocktailDB API](https://www.thecocktaildb.com/api.php)
- [React Hooks](https://react.dev/reference/react)

---

## 📞 Contacto y Soporte

- **Repositorio:** https://github.com/Ryuran1375/APP_Clima
- **Issues:** Reporta problemas en GitHub Issues
- **Pull Requests:** Las contribuciones son bienvenidas

---

**Última actualización:** Noviembre 2025
**Versión:** 1.0.0
