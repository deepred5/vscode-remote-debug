# vscode-remote-debug
vscode远程调试

### debug启动
登录远程服务器，启动项目

注意：`9229`端口需要被防火墙放开
```bash
# 直接启动
node --inspect=0.0.0.0:9229 index.js

# 或者使用pm2启动
pm2 start start.json
```

### 检查是否debug开启
访问`远程服务器ip:9229/json/version`

### 本地vscode访问
debug模式启动`remote启动程序`即可