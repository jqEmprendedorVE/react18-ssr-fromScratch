# React SSR con TypeScript y esbuild

Este proyecto demuestra cómo configurar un servidor SSR (Server-Side Rendering) para React usando TypeScript y esbuild, optimizado para un rápido desarrollo y rendimiento en producción.

## Requisitos

- Node.js (v14+ recomendado)
- pnpm

## Instalación

Clona este repositorio y luego instala las dependencias:

```
pnpm install
```

## Uso

Para iniciar el servidor en modo de desarrollo con recarga en caliente:

```
npm run dev
```

Para construir el proyecto para producción:

```
npm run build
```

Luego inicia el servidor construido:

```
npm start
```

## Estructura de Archivos
`src/`: Código fuente, incluyendo server.tsx para el servidor SSR y App.tsx para el componente React.
`dist/`: Archivos compilados listos para producción.
`esbuild.config.js`: Configuración de esbuild para el build y desarrollo.

## Licencia
Este proyecto se distribuye bajo la licencia MIT.


