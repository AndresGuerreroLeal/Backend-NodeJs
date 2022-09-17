const express = require('express');
const cors = require('cors');
const SwaggerUI = require('swagger-ui-express');
const SwagerDoC = require('swagger-jsdoc');
const passport = require('passport');
const morgan = require('morgan');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middleware/error.handler');
const { checkApiKey } = require('./middleware/auth.handler');

const routerApi = require('./routes');

const app = express();

const whitelist = ['http://localhost:3001', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.use(cors(options));
app.use(express.json());
app.use(passport.initialize());
app.use(morgan('combined'));
require('./utils/auth');

const specs = SwagerDoC({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CHALLENGE BACKEND - NodeJs 🚀',
      version: '1.0.0',
      description:
        'Una API para explorar el mundo de Disney, la cual permitirá conocer y modificar los personajes que lo componen y entender en qué películas estos participaron.',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: ['./src/routes*.js'],
});

app.use(checkApiKey);
routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(specs));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
