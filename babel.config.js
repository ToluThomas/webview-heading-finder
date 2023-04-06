module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // Components
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          templates: './src/components/templates',
          screens: './src/components/screens',

          // Utils
          utils: './src/utils',
          constants: './src/utils/constants',
          helpers: './src/utils/helpers',
          types: './src/utils/types',

          // Assets
          assets: './src/assets',
        },
      },
    ],
  ],
};
