const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

Encore.setOutputPath('public/theme/')
  .setPublicPath('/theme')
  .enableSourceMaps(!Encore.isProduction()) // Für Debugging
  .disableSingleRuntimeChunk()

  // Einstiegspunkt für die Anwendung
  .addEntry('default', './theme/js/default.js')

  // Kopiert Bilder von theme/img nach public/theme/img
  // TODO: Bilder stattdessen optimieren
  .addPlugin(
    new CopyWebpackPlugin({
      patterns: [{ from: './theme/img', to: 'img' }],
    })
  )

  .addPlugin(
    new StylelintPlugin({
      configFile: '.stylelintrc.yml',
      files: 'theme/scss/**/*.scss',
    })
  )

  .configureFilenames({
    js: Encore.isProduction() ? 'js/[name].[contenthash:6].js' : 'js/[name].js',
    css: Encore.isProduction()
      ? 'css/[name].[contenthash:6].css'
      : 'css/[name].css',
  })

  // Sass-Optionen konfigurieren
  .enableSassLoader((options) => {
    options.sassOptions = {
      quietDeps: true, // Unterdrückt Deprecation-Warnungen
      sourceMap: true,
      silenceDeprecations: [
        'mixed-decls',
        'import',
        'global-builtin',
        'slash-div',
      ],
    };
  })

  .enablePostCssLoader()

  .configureDevServerOptions((options) => {
    options.hot = true;
    options.static = {
      watch: false,
    };
    options.server = {
      type: 'https',
      options: {
        key: '/usr/local/etc/httpd/certs/localhost-key.pem',
        cert: '/usr/local/etc/httpd/certs/localhost.pem',
      },
    };

    options.watchFiles = [
      'templates/**/*.twig', // Twig-Templates beobachten
      'templates/**/*.html5', // html5-Templates beobachten
    ];

    options.liveReload = true; // Live-Reload nur für die beobachteten Dateien (Twig)
  });

module.exports = Encore.getWebpackConfig();
