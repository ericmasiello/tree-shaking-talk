module.exports = {
    plugins: [
        '@babel/plugin-transform-modules-commonjs',
        ['@babel/plugin-transform-runtime', {
          useESModules: true,
        }],
    ],
};
