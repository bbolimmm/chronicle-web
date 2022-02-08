module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
    ['babel-plugin-transform-imports', {
      '@fortawesome/free-solid-svg-icons': {
        transform: (importName) => `@fortawesome/free-solid-svg-icons/${importName}`,
        preventFullImport: true,
        skipDefaultConversion: true
      },
      '@fortawesome/pro-duotone-svg-icons': {
        transform: (importName) => `@fortawesome/pro-duotone-svg-icons/${importName}`,
        preventFullImport: true,
        skipDefaultConversion: true
      },
      '@fortawesome/pro-light-svg-icons': {
        transform: (importName) => `@fortawesome/pro-light-svg-icons/${importName}`,
        preventFullImport: true,
        skipDefaultConversion: true
      },
      '@fortawesome/pro-regular-svg-icons': {
        transform: (importName) => `@fortawesome/pro-regular-svg-icons/${importName}`,
        preventFullImport: true,
        skipDefaultConversion: true
      },
      '@fortawesome/pro-solid-svg-icons': {
        transform: (importName) => `@fortawesome/pro-solid-svg-icons/${importName}`,
        preventFullImport: true,
        skipDefaultConversion: true
      },
    }]
  ],
  presets: [
    ['@babel/preset-env', {
      corejs: '3.21',
      useBuiltIns: 'entry',
    }],
    ['@babel/preset-react', {
      runtime: 'automatic',
    }],
    '@babel/preset-flow',
  ],
};
