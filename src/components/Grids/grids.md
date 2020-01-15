# Grids - Placing Components on the Page
In this chapter, we'll cover the following recipes:

- Understanding breakpoints
- Filling space间距
- Abstracting containers and items抽象容器和项目
- Fixed column layout 固定列布局
- Column direction 列方向
## Introduction
Material-UI grids are used to control the layout of screens in your app. Rather then implement your own styles to manage the layout of your Material-UI components, you can leverage the Grid component. Behind the scenes, it uses CSS flexbox properties to handle flexible layouts.
Material-UI网格用于控制应用程序中屏幕的布局。 您可以利用Grid组件，而不是实施自己的样式来管理Material-UI组件的布局。 在后台，它使用CSS flexbox属性来处理灵活的布局。
## Applying breakpoints
A breakpoint is used by Material-UI to determine at what point to break the flow of content on the screen and continue it on the next line. Understanding how to apply breakpoints with Grid components is fundamental to implementing layouts in Material-UI applications.
Material-UI使用断点来确定在什么点上中断/分割屏幕上的内容流，并在下一行继续。 了解如何对Grid组件应用断点是在Material-UI应用程序中实现布局的基础。
### How to do it...
Let's say that you have four elements that you want to lay out on the screen so that they're evenly spaced and occupy all available horizontal space. The code for this is as follows:
假设您要在屏幕上布置四个元素，以使它们均匀分布并占据所有可用的水平空间。代码如下：
    参加`UnderstandingBreakpoints.js`

## Filling space 填充空间
如何填充空间：justify（水平填充空间）
With some layouts, it is impossible to have your grid items occupy the entire width of the screen. Using the justify property, you can control how grid items fill the available space in the row.
对于某些布局，不可能使网格项占据屏幕的整个宽度。 使用justify属性，您可以控制网格项目如何填充行中的可用空间。
### How to do it...
Let's say that you have four Paper components to render in a grid. Inside each of these Paper components, you have three Chip components, which are nested grid items.假设您有四个要在网格中渲染的Paper组件。 在每个Paper组件内部，都有三个Chip组件，它们是嵌套的网格项。
## Abstracting containers and items
You have lots of screens in your app, each with lots of Grid components, used to create complex layouts. Trying to read source code that has a ton of <Grid> elements in it can be daunting. Especially when a Grid component is used for both containers and for items.
您的应用程序中有很多屏幕，每个屏幕都有很多Grid组件，用于创建复杂的布局。 尝试读取其中包含大量<Grid>元素的源代码可能会令人生畏。 尤其是当Grid组件既用于容器又用于项目时。
### How to do it...
The container or the item property of Grid components determines the role of the element. You can create two components that use these properties and create an element name that's easier to read when you have lots of layout components:
网格组件的容器或item属性确定元素的角色。 您可以创建两个使用这些属性的组件，并创建一个元素名称，当您有很多布局组件时，这些元素名称更易于阅读：

## Fixed column layout固定列布局
When you use Grid components to build your layout, they often result in changes to your layout, depending on your breakpoint settings and the width of the screen. For example, if the user makes the browser window smaller, your layout might change from two columns to three. There might be times, however, when you would prefer a fixed number of columns, and that the width of each column changes in response to the screen size.
### How it works...
If you want a fixed number of columns, you should only specify the xs breakpoint property. In this example, 3 is 25% of the screen width – or 4 columns. This will never change because xs is the smallest breakpoint there is. Anything larger is applied to xs as well, unless you specify a larger breakpoint.
如果要固定数量的列，则应仅指定xs断点属性即可。 在此示例中，3是屏幕宽度的25％–或4列。 这永远不会改变，因为xs是存在的最小断点。 除非指定较大的断点，否则任何较大的值也将应用于xs。
### There's more...
You can combine different widths in a fixed way. For example, you could have header and footer Grid items that use a full-width layout, while the Grid items in between use two columns:您可以固定方式组合不同的宽度。 例如，您可能具有使用通栏布局的页眉和页脚Grid项目，而介于两者之间的Grid项目则使用两列：
`
<div className={classes.root}>
  <Grid container spacing={4}>
    <Grid item xs={12}>
      <Paper className={classes.paper}>xs=12</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper className={classes.paper}>xs=6</Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>xs=12</Paper>
    </Grid>
  </Grid>
</div>
`

The first and last Grid components have an xs value of 12 (100%), while the other Grid items have xs values of 6 (50%) for a two-column layout. Here's what the result looks like at a pixel width of 725:

## Changing column direction
When using a fixed number of columns for your layout, content flows from left to right. The first grid item goes in the first column, the second item in the second column, and so on. There could be times when you need better control over which grid items go into which columns.在布局中使用固定数量的列时，内容从左到右流动。 第一个网格项位于第一列，第二个网格项位于第二列，依此类推。 有时候，您需要更好地控制哪些网格项目进入哪些列。
### How to do it...
Let's say that you have a four-column layout, but you want the first and second items to go in the first column, the third and fourth items in the second, and so on. This involves using nested Grid containers, and changing the direction property, as follows:假设您有一个四列布局，但是您希望第一项和第二项在第一列，第三项和第四项在第二列中，依此类推。 这涉及使用嵌套的Grid容器，并更改direction属性，如下所示：