import express, { Request, Response } from 'express';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const server = express();

// Asegúrate de que la ruta y la sintaxis sean correctas
server.get('/', (_req: Request, res: Response) => {
  // La declaración y uso de appString está correcta aquí
  const appString = ReactDOMServer.renderToString(<App />);
  // Envío de la respuesta con appString
  res.send(`<html><body><div id="root">${appString}</div></body></html>`);
});

server.listen(3000, () => console.log('Server is running on port 3000'));
