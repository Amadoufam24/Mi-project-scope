import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Carga las variables de entorno. El tercer parámetro '' permite cargar variables sin prefijo VITE_.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Esto reemplaza 'process.env.API_KEY' en tu código con el valor real de la variable
      // durante el proceso de build, permitiéndote usarla sin exponerla en el repo.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});