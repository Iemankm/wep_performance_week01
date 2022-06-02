
import express from 'express';
import serveStatic from 'serve-static';
import compression from 'compression';


const app = express();
const server = 4000;

app.use(compression());
app.use(
  serveStatic('dist', {
    maxAge: '1y',
    setHeaders: setCustomCacheControl,
  })
);

app.listen(server);
function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {

    res.setHeader(
      'Cache-Control',
      'public, max-age=300,stale-while-revalidate=60'
    );
  }
}




