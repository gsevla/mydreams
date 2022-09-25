module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@providers": "./src/providers",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
          },
        },
      ],
    ],
  };
};
