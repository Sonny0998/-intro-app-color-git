# 🚀 Comandos Útiles - Sitio EDHA

## 📦 Gestión de Dependencias

```bash
# Instalar todas las dependencias
npm install

# Actualizar dependencias
npm update

# Verificar dependencias obsoletas
npm outdated

# Auditar seguridad
npm audit
```

## 🔧 Desarrollo

```bash
# Iniciar servidor de desarrollo (puerto 3000)
npm run dev

# Iniciar en puerto específico
npm run dev -- -p 3001

# Limpiar caché de Next.js
rm -rf .next
```

## 🏗️ Build y Producción

```bash
# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start

# Analizar el bundle
npm run build -- --analyze
```

## 🧹 Linting y Formateo

```bash
# Ejecutar ESLint
npm run lint

# Corregir problemas automáticamente
npm run lint -- --fix
```

## 🧪 Testing (si se agregan tests)

```bash
# Ejecutar tests
npm test

# Tests en modo watch
npm test -- --watch

# Coverage
npm test -- --coverage
```

## 📝 TypeScript

```bash
# Verificar tipos
npx tsc --noEmit

# Generar declaraciones de tipos
npx tsc --declaration
```

## 🌐 Despliegue

### Vercel (Recomendado para Next.js)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Desplegar
netlify deploy

# Desplegar a producción
netlify deploy --prod
```

## 🔍 Debugging

```bash
# Modo debug de Node.js
NODE_OPTIONS='--inspect' npm run dev

# Ver variables de entorno
npm run dev -- --debug
```

## 📊 Análisis de Performance

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Bundle analyzer
npm install --save-dev @next/bundle-analyzer
```

## 🗂️ Gestión de Archivos

```bash
# Ver estructura del proyecto
tree -I 'node_modules|.next|.git'

# Buscar archivos
find . -name "*.tsx" -type f

# Contar líneas de código
find . -name "*.tsx" -o -name "*.ts" | xargs wc -l
```

## 🔄 Git (Control de versiones)

```bash
# Inicializar repositorio
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit: EDHA website"

# Agregar remote
git remote add origin [URL_DEL_REPO]

# Push a GitHub
git push -u origin main

# Ver estado
git status

# Ver historial
git log --oneline
```

## 🌍 Variables de Entorno

Crear archivo `.env.local`:

```bash
# Crear archivo de variables de entorno
cat > .env.local << EOF
NEXT_PUBLIC_SITE_URL=https://edha.org
NEXT_PUBLIC_CONTACT_EMAIL=info@edha.org
NEXT_PUBLIC_PHONE=+509XXXXXXXX
EOF
```

## 🔐 Seguridad

```bash
# Auditar dependencias
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix

# Forzar correcciones
npm audit fix --force
```

## 📱 Testing Responsive

```bash
# Iniciar con ngrok para testing en dispositivos móviles
npm install -g ngrok
npm run dev &
ngrok http 3000
```

## 🎨 Tailwind CSS

```bash
# Regenerar configuración de Tailwind
npx tailwindcss init -p

# Purgar CSS no utilizado
npm run build
```

## 📦 Optimización de Imágenes

```bash
# Instalar sharp para optimización de imágenes
npm install sharp

# Optimizar imágenes manualmente
npx next-image-export-optimizer
```

## 🔄 Actualizar Next.js

```bash
# Actualizar Next.js a la última versión
npm install next@latest react@latest react-dom@latest

# Verificar versión
npx next --version
```

## 📊 Monitoreo

```bash
# Ver logs en tiempo real
npm run dev | tee logs.txt

# Analizar performance
npm run build && npm run start
```

## 🛠️ Utilidades de Desarrollo

```bash
# Abrir en VS Code
code .

# Abrir en navegador
open http://localhost:3000

# Ver puertos en uso
lsof -i :3000

# Matar proceso en puerto 3000
kill -9 $(lsof -t -i:3000)
```

## 📚 Documentación

```bash
# Generar documentación de componentes
npx typedoc --out docs src

# Servir documentación
npx http-server docs
```

## 🎯 Comandos Rápidos

```bash
# Todo en uno: limpiar, instalar, build
rm -rf node_modules .next && npm install && npm run build

# Reiniciar desarrollo
npm run dev

# Verificar todo antes de commit
npm run lint && npm run build
```

## 🌟 Comandos Personalizados (agregar a package.json)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "clean": "rm -rf .next node_modules",
    "fresh": "npm run clean && npm install",
    "deploy": "npm run build && vercel --prod",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

## 📞 Soporte

Si necesitas ayuda:
1. Revisa la documentación de Next.js: https://nextjs.org/docs
2. Consulta Tailwind CSS: https://tailwindcss.com/docs
3. Comunidad de Next.js: https://github.com/vercel/next.js/discussions

---

**¡Estos comandos te ayudarán a gestionar tu sitio EDHA de manera eficiente!** 🚀
