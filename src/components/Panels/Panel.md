# Expansion Panels - Group Content into Panel Sections
In this chapter, you'll learn about the following:

- Stateful expansion panels
- Formatting panel headers
- Scrollable panel content
- Lazy loading panel content
## Introduction
Expansion panels are containers for your content. Usually, screens in your Material-UI applications are divided into sections so that users can mentally organize the information that they're looking at. The ExpansionPanel component is one way that you can create these sections. You can even combine expansion panels with other organizational components, such as tabs, to provide a consistent organizational layout for your users.
## Stateful expansion panels
You can use component the state to control every aspect of your expansion panels. For example, each panel could be represented as an object in an array, where each object has panel title and panel content properties. There are other aspects you can control, such as visibility and disabled panels.您可以使用组件状态来控制扩展面板的各个方面。 例如，每个面板可以表示为数组中的一个对象，其中每个对象都具有面板标题和面板内容属性。 您还可以控制其他方面，例如可见性和禁用的面板。
### How to do it...
Let's say that your component has a state for rendering expansion panels. The panels themselves are objects in an array. Here's the code to do this:
`StatefulExpansionPanels.js`
### There's more...
You can also use state to control whether or not a panel is expanded. For example, you can use ExpansionPanel components to create an accordion widget—there's always one panel open, and opening another panel closes anything that's open.
您还可以使用状态来控制面板是否展开。 例如，您可以使用ExpansionPanel组件创建一个手风琴小部件-始终打开一个面板，而打开另一个面板则关闭所有打开的面板。
## Formatting panel headers
Headers in ExpansionPanel components can be formatted. Typically, the Typography component is used to render text within an expansion panel header. This means that you can use properties of Typography to customize the way that your expansion panel headers appear.

### How to do it...
Let's say that you want the text within your ExpansionPanel headers to stand out relative to the text in the content section of each panel. You can change the variant property of the Typography component in the ExpansionPanelSummary component. Here's the code to do it:假设您希望ExpansionPanel标头中的文本相对于每个面板的内容部分中的文本突出。 您可以在ExpansionPanelSummary组件中更改Typography组件的variant属性。 这是执行此操作的代码：

### How it works...
To make the heading text stand out relative to the text in the ExpansionPanelDetails component, you only had to change the variant property of the Typography component used in the header. In this case, you're using the subtitle1 variant, but there are a number of other variants that you can use here.要使标题文本相对于ExpansionPanelDetails组件中的文本突出，您只需更改标题中使用的Typography组件的variant属性。 在这种情况下，您使用的是subtitle1变体，但是您可以在此处使用许多其他变体。

## Scrollable panel content
可滚动内容的panel
The height of an ExpansionPanel component, when expanded, changes so that all of the content is visible on the screen. In cases where you have a lot of content in your panels, this isn't ideal because the panel headers aren't visible to the user. Instead of having to scroll down the entire page, you can make the content within the panel scrollable.展开时，ExpansionPanel组件的高度会发生变化，以便所有内容在屏幕上可见。 如果面板中的内容很多，这是不理想的，因为面板标题对用户不可见。 您不必使整个页面向下滚动，而可以使面板中的内容可滚动。

### How to do it...
Let's say that you have three panels, each with several paragraphs of text. Rather than having each panel adjust its height to accommodate the content, you can make the panels a fixed height and scrollable. Here's the code:假设您有三个面板，每个面板都有几段文字。 不必使每个面板调整其高度以容纳内容，而是可以使面板固定高度并可以滚动。 这是代码：


## Lazy loading panel content
功能要点:
- 懒/延迟加载面板中的内容
If you're rendering expansion panels that are all collapsed by default, you don't have to populate the ExpansionPanelDetails component up front. Instead, you can wait for the user to expand the panel—then you can make whatever API calls you need in order to render the content.如果要渲染默认情况下全部折叠的扩展面板，则不必在前面填充ExpansionPanelDetails组件。 相反，您可以等待用户展开面板，然后可以进行呈现任何API调用所需的内容。
### How to do it...

Let's say that you have an API function that fetches content based on an index value. For example, if the first panel is expanded, the index value will be 0. You need to be able to call this function when the panel is expanded, supplying the corresponding index value. Here's what the code looks like:假设您有一个API函数，该函数根据索引值获取内容。 例如，如果第一个面板展开，则索引值将为0。当面板展开时，您需要能够调用此函数，并提供相应的索引值。 代码如下所示：

### There's more...
There are a couple of improvements that you could make with this example. First, you could show a progress indicator within the panel while the content is loading so that the user knows that something is happening. The second improvement can be made both when the panel expands and when it collapses—this should be avoided.
您可以通过此示例进行一些改进。 首先，您可以在加载内容时在面板中显示进度指示器，以便用户知道正在发生的事情。 当面板展开和折叠时都可以做出第二个改进，这应该避免。
