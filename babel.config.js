module.exports = api => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  const isDev = !api.env('production');
  const result = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      // Enable development transform of React with new automatic runtime
      ['@babel/preset-react', { development: isDev, runtime: 'automatic' }],
    ],
    plugins: [
      '@babel/proposal-numeric-separator',
      '@babel/transform-runtime',
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
    ],
  };

  if (isDev) {
    result.plugins.push('react-refresh/babel');
  }
  return result;
};
