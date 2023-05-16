# 发版说明

1. 登录 npm 账号

    ```shell
        npm login
    ```

2. 检查发布内容

    ```shell
        npx npm-packlist
    ```

3. 发布

    正式版

    ```shell
        npm publish --access public
    ```

    快照版

    ```shell
        npm publish --access public --tag snapshot
    ```
