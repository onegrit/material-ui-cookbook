# App Bar
App Bars - The Top Level of Every Page 每页的顶级组件
In this chapter, you'll learn about the following recipes:
- Fixed position 固定位置
- Hide on scroll 滚动隐藏
- Toolbar abstraction 抽象Toobar
- With navigation 带导航的Toolbar
## Introduction
App Bars are the anchor point of any Material-UI application. They provide context and are usually always visible as the user navigates around the application.
## Fixed position
You probably want your AppBar component to stay visible at all times. By using fixed positioning, AppBar components remain visible even as the user scrolls down the page.
### How to do it...
You can use the fixed value of the position property. Here's how you do it： 参见代码
`FixedPositionAppBar.js`
### There's more...
When the screen in this example first loads, some of the content is hidden behind the AppBar component. This is because the position is fixed and it has a higher z-index value than the regular content. This is expected, so that when you scroll, the regular content goes behind the AppBar component. The solution is to add a top margin to your content. The problem is that you don't necessarily know the height of the AppBar.
在此示例中的屏幕首次加载时，某些内容隐藏在AppBar组件后面。 这是因为位置是固定的，并且具有比常规内容更高的z-index值。 这是所期望的，因此，当您滚动时，常规内容位于AppBar组件的后面。 解决方案是在您的内容中增加顶部页边距。 问题是您不一定知道AppBar的高度。
You could just set a value that looks good. A better solution is to use the toolbar mixin styles. You can access this mixin object by making styles a function that returns an object. Then, you'll have access to the theme argument, which has a toolbar mixin object.您可以设置一个看起来不错的值。 更好的解决方案是使用工具栏的混合样式。 您可以通过使样式成为返回对象的函数来访问此mixin对象。 然后，您将可以访问主题参数，该参数具有工具栏mixin对象。


## Hide on scroll
注：本方案采用的是高阶组件和类组件的方式实现的；官网有hook方案
If you have a lot of content on your screen that requires the user to scroll vertically, the App Bar could be a distraction. One solution is to hide the AppBar component while the user is scrolling down.
如果屏幕上有很多内容需要用户垂直滚动，则应用栏可能会分散注意力。 一种解决方案是在用户向下滚动时隐藏AppBar组件。
### How to do it...
To hide the AppBar component while the user is scrolling down, you have to know when the user is scrolling. This requires listening to the scroll event on the window object. You can implement a component that listens to this event and hides the AppBar component while scrolling. Here's how it's done:要在用户向下滚动时隐藏AppBar组件，您必须知道用户何时滚动。 这需要侦听窗口对象上的滚动事件。 您可以实现一个侦听此事件并在滚动时隐藏AppBar组件的组件。 这是完成的过程：参见HideAppBarOnScroll

## Toolbar abstraction
Toolbar code can get verbose if you have to render toolbars in several places. To address this, you can create your own Toolbar component that encapsulates the content patterns of toolbars, making it easier to render AppBar components in several places.如果必须在多个位置渲染工具栏，则工具栏代码可能会变得冗长。 为了解决这个问题，您可以创建自己的工具栏组件，该组件封装了工具栏的内容模式，从而使在多个位置呈现AppBar组件更加容易。
### How to do it...
Let's assume that your app renders AppBar components on several screens. Each AppBar component also renders Menu and title to the left, as well as Button to the right. Here's how you can implement your own AppBar component so that it's easier to use on several screens:

## With navigation
Appbar与react router结合使用
Material-UI apps are typically made up of several pages that are linked together using a router, such as react-router. Each page renders an App Bar that has information specific to that page. This is one example of when the abstraction that you created in the Toolbar abstraction recipe comes in handy.
Material-UI应用程序通常由几个页面组成，这些页面使用路由器（例如react-router）链接在一起。 每个页面都会呈现一个具有该页面特定信息的应用栏。 这是当您在工具栏抽象配方中创建的抽象派上用场时的一个示例。
### How to do it...
Let's say that you're building an app that has three pages. On each page, you want to render an App Bar with the title prop of the page. Furthermore, the menu in the App Bar should contain links to the three pages. Here's how to do it:
假设您正在构建一个包含三个页面的应用程序。 在每个页面上，您都希望使用页面的标题属性来渲染应用栏。 此外，应用程序栏中的菜单应包含指向这三个页面的链接。 方法如下：
### There's more...
Most of the time, the screens that make up your app will follow the same pattern. Rather than have repetitive code in the render property of your routes, you can create a higher-order function that accepts arguments for the unique parts of the screen and returns a new component that can be used by the render prop.