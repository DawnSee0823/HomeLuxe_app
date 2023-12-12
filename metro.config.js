const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const { resolver } = getDefaultConfig();

const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false
            }
        })
    },
    resolver: {
        assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...resolver.sourceExts, 'svg', 'jsx', 'js', 'ts', 'tsx'], // Add 'svg' to allow importing SVG files in JSX/TSX files
    },
    dependencies: {
        'react-native-vector-icons': {
            platforms: {
                ios: null,
            },
        },
    }
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
