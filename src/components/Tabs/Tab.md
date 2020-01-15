# Tabs - Grouping Content into Tab Sections
In this chapter, you'll learn about the following recipes:
- AppBar integration AppBar集成
- Tab alignment Tab布局
- Rendering tabs based on state 基于状态渲染tab
- Abstracting tab content 抽象tab内容
- Tab navigation with routes 使用路由Tab 导航
## Introduction
The Tabs Material-UI component is used to organize content on your screen. The tabs are organized in a horizontal fashion and they should feel natural for your users. You can use tabs any time your screen has lots of content that could be split into different category sections.
Tabs Material-UI组件用于组织屏幕上的内容。 这些选项卡以横向方式组织，它们对您的用户来说应该很自然。 只要屏幕上有很多内容可以分成不同的类别部分，就可以使用标签。
## AppBar integration
AppBar components can be used with the Tabs component. You can do this so that the tab buttons are rendered within an App Bar. This provides a container for your tab buttons—by default, there is nothing surrounding them.
AppBar组件可与Tabs组件一起使用。 您可以执行此操作，以便在应用栏中显示选项卡按钮。 这为您的选项卡按钮提供了一个容器-默认情况下，它们周围没有任何东西。
### How to do it...
Let's say that you have a Tabs component with three Tab buttons. Instead of rendering the tabs so that they look as though they're floating on the screen, you can wrap them in an AppBar component to give them a contained look and feel. Here's the code:`AppBarIntegrationWithTabs.js`

### There's more...
If you want tabs but you don't want the indicator that's rendered underneath the text, you can set it to be the same color as the AppBar component.如果要使用标签，但又不想在文本下方显示指示符，则可以将其设置为与AppBar组件相同的颜色。
`
<Tabs
  value={value}
  onChange={this.onChange}
  indicatorColor="primary"
>
  <Tab label="Item One" />
  <Tab label="Item Two" />
  <Tab label="Item Three" />
</Tabs>
`

## Tab alignment 标签对齐
The Tabs component has two properties to help you align your tab buttons. The centered property centers the tabs, while the fullWidth property spreads out the tabs.
`
<Tabs value={value} onChange={onChange} centered">居中对齐
<Tabs value={value} onChange={onChange} variant="fullWidth">水平平均分布
`
### There's more...
功能要点：
Tab在小屏幕时对齐方式是centered，在大屏幕时对齐方式是水平平均分布
The centered layout for tabs works well on smaller screens, while the full width layout looks good on larger screens. You can use Material-UI utilities that tell you about breakpoint changes. You can then use this information to change the alignment of your tabs.标签的居中布局在较小的屏幕上效果很好，而通栏布局在较大的屏幕上看起来不错。 您可以使用Material-UI实用程序来告诉您有关断点的更改。 然后，您可以使用此信息来更改选项卡的对齐方式。参见`TabAlignmentWithCompose.js`
`
function TabAlignment({ classes, width }) {
  const [value, setValue] = useState(0);

  const onChange = (e, value) => {
    setValue(value);
  };
`

## Rendering tabs based on state
功能要点：将Tab抽象成为state，Tab具有hidden和disabled属性，根据此状态决定是否显示、隐藏
Tabs in your React application might be driven by data. If so, you can set tab data in the state of your component to have them render initially and update if anything changes.React应用程序中的选项卡可能由数据驱动。 如果是这样，您可以将标签数据设置为组件的状态，以使其最初呈现并在发生任何更改时进行更新。
### How to do it...
Let's say that you have some data that determines the tabs to render in your app. You can set this data in the state of your component and use it to render the Tab components, as well as the tab content when tab selections are made. Here's the code:
参见`RenderingTabsBasedOnState.js`

## Abstracting tab content 抽象tab内容
If your application uses tabs in several places, you can create abstractions that simplify the markup involved with rendering tabs and tab content. Instead of having tab content defined outside of the tabs component, why not have everything be self-contained and easier to read?

### How to do it...
Let's say that your app uses tabs in several places throughout your app, and you want to simplify the markup used to create the tabs and the tab content. In the places where you use tabs, you just want to be able to render the content and not have to worry about handing state for the active tab. Here's some code that creates two new components that simplify the JavaScript XML (JSX) required for rendering tab content:
`Tab navigation with routes`

## Tab navigation with routes
功能要点：
- 基于路由的Tab
You can base your tab content on routes in a routing solution, such as react-router. To do this, you have to make your tab buttons into links, and you need to have Route components below the Tabs component to render the current URL.
### How to do it...
Let's say that your app has three URLs and you want tabs as the navigation mechanism to navigate between the routes. The first step is turning the Tab buttons into links. The second step is having Route components render the appropriate tab content, based on which one was clicked on. Here's the code:
`TabNavigationWithRoutes.js`
