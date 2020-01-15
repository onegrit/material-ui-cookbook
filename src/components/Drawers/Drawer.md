# Drawers - A Place for Navigation Controls
## Introduction
Material-UI uses drawers to present the user with the main navigation of the app. The Drawer component acts like a physical drawer that can move out of view when it is not being used. 

## Drawer types
There are three types of Drawer components that you'll use in your app, as follows:

Temporary: A transient drawer that closes when an action is taken.
Persistent: A drawer that can be opened and stays open until explicitly closed.
Permanent: A drawer that is always visible.

## Drawer item state
给予状态渲染组件
The items that are rendered in Drawer components are rarely static. Instead, the drawer items are rendered based on the state of your component, allowing for more control over how items are displayed.
### How to do it...
Let's say that you have a component that renders drawer navigation using the Drawer component. Instead of writing the items state directly in the component markup, you want to have the items state stored in the state of the component. For example, in response to permission checks on the user, items might be disabled or completely hidden.假设您有一个使用Drawer组件渲染抽屉导航的组件。 您希望将项目状态存储在组件状态中，而不是直接在组件标记中写入项目状态。 例如，响应对用户的权限检查，项目可能被禁用或完全隐藏。
## Drawer item navigation 导航抽泣
需求要点：
- 使用react-router-dome做路由
- 使用Drawer做导航
- 集成react-router-dom与Drawer
If your Material-UI app uses a router such as react-router to navigate from page to page, you'll probably want links as your Drawer items. To do so, you have to integrate components from the react-router-dom package.
如果您的Material-UI应用程序使用诸如react-router之类的路由器在页面之间导航，则可能需要将链接作为Drawer项目。 为此，您必须集成react-router-dom软件包中的组件。
### How to do it...
Let's say that your app is composed of three pages. To navigate from page to page, you want to provide your users with links in the Drawer component. Here's what the code looks like: `DrawerItemNavigation.js`

### There's more...
When the items in your drawer are links, you probably want a visual indication for the active link. The challenge is that you want to style the active link using Material-UI theme styles. Here's what the modified example looks like:当抽屉中的项目是链接时，您可能希望直观地看到活动链接。 挑战在于您要使用Material-UI主题样式设置活动链接的样式。 修改后的示例如下所示：

## Drawer sections 抽屉导航分区
When you have lots of items in your Drawer, you might want to divide your drawer into sections. When you have lots of drawer items and no sections, you end up having to put section names into the items themselves, which leads to messy and awkward drawer item labels.

### How to do it...
Let's say that you're working on an app that has screens for managing different aspects of the CPU, memory, storage, and network. Instead of having a flat list of drawer items, you could display drawer items in their relevant sections, making it easier to navigate. Here's the code to do it:
### There's more...
要点:折叠分区
When you have a lot of drawer items and sections, you can still overwhelm your users with the amount of information to parse. One solution is to have collapsible sections. For this, you can add a Button component to the ListSubheader component so that it's clickable.

## AppBar interaction 抽屉与AppBar集成
A common place to put a button that toggles the visibility of Drawer components is the AppBar component at the top of every page in your app. Furthermore, by selecting items in a drawer, the title of the AppBar component needs to change to reflect this selection. Drawer and AppBar components often need to interact with one another.
放置按钮以切换Drawer组件可见性的常见位置是AppBar组件，位于应用程序每个页面的顶部。 此外，通过选择抽屉中的项目，需要更改AppBar组件的标题以反映此选择。 Drawer和AppBar组件经常需要相互交互。
### How to do it...
Let's say that you have a Drawer component with a few items in it. You also have an AppBar component with a menu button and a title. The menu button should toggle the visibility of the drawer, and clicking on a drawer item should update the title in the AppBar. Here's the code to do it:`AppBarInteractionWithDrawer.js`