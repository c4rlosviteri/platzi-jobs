require('ignore-styles')
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [['@babel/transform-runtime', { regenerator: true }]],
})
require('./server')
