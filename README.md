# 动态菜单
# 网络请求封装
# mobx集成
# 无状态组件中使用mobx，主要使用在react-hook中，具体可参考src/components/pages/UnStatusMobx.js
# 按钮权限控制，根据用户的角色的不同加载对应角色的按钮具体可参考src/components/btnPromiss/AuthComponent.js
SiderCustom.jsx配置动态的菜单路由
# 需要加入面包屑的功能，方便用户查询自己打开了那些菜单
# 防止dom列表过长的解决方案
```bash
    为防止下拉加载过程中dom不停的push,可以采用空dom的形式进行填充并设置相应的高度将空dom撑开。
    以此来防止清空dom导致的高度问题
```
# react-yuanqi
