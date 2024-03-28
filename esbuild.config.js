const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

// Detectar el modo de entorno (desarrollo por defecto)
const isProd = process.env.NODE_ENV === 'production';

esbuild.build({
  entryPoints: ['./src/server.tsx'], // Asegúrate de usar .ts a menos que necesites .tsx
  bundle: true,
  platform: 'node',
  target: 'node18',
  outdir: 'dist',
  plugins: [nodeExternalsPlugin()],
  loader: { '.ts': 'tsx', '.js': 'jsx' },
  minify: isProd, // Minificar solo en producción
  sourcemap: !isProd, // Mapas de fuente solo en desarrollo
}).catch(() => process.exit(1));
