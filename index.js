require('dotenv').config();
const express = require('express');

const router = require('./app/router');

const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
    info: {
        version: '1.0.0',
        title: 'Oblog',
        description: 'A blog REST API',
        license: {
        name: 'MIT',
        },
    },
    security: {
        BasicAuth: {
        type: 'http',
        scheme: 'basic',
        },
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: './**/*.js',
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/api-docs',
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: false,
    // Open API JSON Docs endpoint.
    apiDocsPath: '/v3/api-docs',
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
    // You can customize your UI options.
    // you can extend swagger-ui-express config. You can checkout an example of this
    // in the `example/configuration/swaggerOptions.js`
    swaggerUiOptions: {},
};

// expressJSDocSwagger(app)(options);

//1ère étape : on récupère et configure une fonction depuis le package
const firstFunction = expressJSDocSwagger(app);

//on ajoute un middleware à notre app express en exécutant cette 1ère fonction qui va prendre en paramètre l'object de config
firstFunction(options);
//welcome everybody, please don't messed out
app.use(cors());

//on prévient express qu'il peut recevoir des infos au format json dans le body de la request
app.use(express.json());

app.use('/v1', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});