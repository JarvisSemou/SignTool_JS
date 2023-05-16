# SignTool_JS

http interface authenticate tool for CTICloud

latest version: 1.0.0

## install  

yarn

```shell
    yarn add sign_tool_js
```

npm

```shell
    npm install sign_tool_js
```

## usage

1. import

    ```js
        import { SignTool, SignType } from "sign_tool_js"
    ```

2. generate CTICloud sign param

    ```js
        let sign = SignTool.genSignSync(SignType.Enterprise_Id_And_Token, {
            enterpriseId: "xxxxxxxxx",
            token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        })
    ```

    or

    ```js
        let sign = await SignTool.genSign(SignType.Enterprise_Id_And_Token, {
            enterpriseId: "xxxxxxxxx",
            token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        })
    ```
