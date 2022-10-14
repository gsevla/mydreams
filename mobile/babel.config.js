module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          cwd: "packagejson",
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@providers": "./src/providers",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
            "@constants": "./src/constants",
            "@services": "./src/services",
            "@test": "./test",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: "../.env",
        },
      ],
    ],
  };
};
