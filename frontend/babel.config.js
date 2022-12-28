module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        "@babel/plugin-proposal-export-namespace-from",
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
                alias: {
                    "@eventer": "./src/",
                },
            },
        ],
        "react-native-reanimated/plugin",
    ],
};
