/* eslint-disable */
/*module.exports = {
    "presets": [
        [
            "env",
            {
                "targets": {
                    "ie": "11"
                },
                "debug": "true"
            }
        ]
    ]
}


console.log('console');*/

const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                browsers: [ "last 2 versions", "ie >= 11" ],
            },
            modules: 'commonjs',
            useBuiltIns: "usage",
            debug: true,
            spec: true
        },
    ],
];
const plugins = [];//"transform-object-rest-spread"]

module.exports = { presets, plugins };