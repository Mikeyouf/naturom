const React = require("react")

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
      key="1"
    />,
    // <script
    //   key="2"
    //   type="text/javascript"
    //   src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/vendors/scrolloverflow.min.js"
    // />,
  ])
}
