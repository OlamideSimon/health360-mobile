module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 'transform-inline-environment-variables',
      // Required for expo-router
      'expo-router/babel',
      // [
      //   [
      //     '@tamagui/babel-plugin',
      //     {
      //       components: ['tamagui'],
      //       config: './tamagui.config.ts',
      //       logTimings: true,
      //     },
      //   ],
      // ],
      // // NOTE: this is only necessary if you are using reanimated for animations
      // 'react-native-reanimated/plugin',
    ],
  }
}
