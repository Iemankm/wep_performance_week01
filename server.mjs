
// import express from 'express';
// import serveStatic from 'serve-static';
// import compression from 'compression';


// const app = express();
// const server = 4000;

// app.use(compression());
// app.use(
//   serveStatic('dist', {
//     maxAge: '1y',
//     setHeaders: setCustomCacheControl,
//   })
// );

// app.listen(server);
// function setCustomCacheControl(res, path) {
//   if (serveStatic.mime.lookup(path) === 'text/html') {

//     res.setHeader(
//       'Cache-Control',
//       'public, max-age=300,stale-while-revalidate=60'
//     );
//   }
// }





import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';
const server = express();
const port = 4000;
server.use(compression());
server.use(
  serveStatic('dist', {
    maxAge: '1d',
    setHeaders: setCustomCacheControl,
  })
);
server.listen(port);
function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader(
      'Cache-Control',
      'public, max-age=60,stale-while-revalidate=60'
    );
  }
}