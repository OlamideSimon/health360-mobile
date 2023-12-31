module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 'transform-inline-environment-variables',
      // Required for expo-router
      'expo-router/babel',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      // [
      //   '@tamagui/babel-plugin',
      //   {
      //     components: ['tamagui'],
      //     config: './tamagui.config.ts',
      //     logTimings: true,
      //   },
      // ],
      // 'react-native-reanimated/plugin',
    ],
  }
}
