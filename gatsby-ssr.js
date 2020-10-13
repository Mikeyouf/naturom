const React = require("react")

exports.onRenderBody = ({
    setHeadComponents
}, pluginOptions) => {
    setHeadComponents([ <
        meta name = "viewport"
        content = "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" / >
    ])
}