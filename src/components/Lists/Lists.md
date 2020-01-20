# Lists - Display Simple Collection Data
列表：显示简单的集合数据

In this chapter, you'll cover the following recipes:
- Using state to render list items使用状态渲染列表项目
- List icons 列表icon
- List avatars and text
- List sections
- Nested lists 嵌套列表
- List controls 列表控件
- Scrolling lists 滚动列表

## Introduction
The List component in Material-UI is used to render data collections. Lists are like tables, only simpler. If you need to display an array of users, for example, you can render them in a list, showing only the most relevant data, instead of several properties in a tabular format. Material-UI lists are generic and provide a lot of flexibility.

## Using state to render list items
The data source used to render List components often comes from the state of your component. A collection—usually an array of objects—is mapped to ListItem components. As the objects in this array change, the Material-UI list items change on the screen.
用于呈现List组件的数据源通常来自组件的状态。 集合（通常是对象数组）被映射到ListItem组件。 随着此数组中对象的更改，Material-UI列表项在屏幕上也会更改。
### How to do it...
Let's say that you have an array of three objects that you need to display as a list on one of your screens. You can add this array to the state of your component, then map each array item to a ListItem component. Here's the code:

## List icons
ListItem components have first-class support for icons. By rendering icons in each list item, you can make it clear to the user what types of objects are displayed in the list.
## List avatars and text
要点：列表项目中使用Avatar以及Badge
If your list items have primary and secondary text, using an icon on its own can be less visually appealing than with an avatar surrounding the icon. It fills the space within the list item better.
如果您的列表项包含主要和次要文本，则单独使用图标的视觉吸引力要小于图标周围的头像。 它可以更好地填充列表项中的空间。
### How to do it...
Let's say that you have four categories of messages that can be displayed by your app. To access a given category, the user clicks on one of the list items. To help the user understand the categories, you'll use icons. And to make the icons stand out against the primary and secondary text of the list item, you'll wrap it with an Avatar component. Here's the code:
假设您的应用可以显示四类消息。 要访问给定的类别，用户单击列表项之一。 为了帮助用户理解类别，您将使用图标。 为了使图标在列表项的主要和次要文本中脱颖而出，您将使用Avatar组件将其包装起来。 这是代码：
### How it works...
The Avatar component is used on icons with a circular shape. The color of the circle comes from the theme palette – the shade of grey used depends on whether the theme is light or dark. The icon itself is passed as the child element:
### There's more...
If you use an Avatar with the icons in your list items, you can change the color of the Avatar and you can apply a badge to indicate unacknowledged actions to be taken. Let's modify the example so that each item in the items state can have a notifications property; that is, a number representing the number of unread messages for the category. If this number is greater than 0, you can change the Avatar color and display number of notifications in a badge. Here's what the result looks like:
如果您在列表项中使用带有图标的头像，则可以更改头像的颜色，并且可以应用badge徽标来指示要执行的未确认操作。 让我们修改该示例，以使items状态中的每个项目都可以具有notifications属性。 也就是说，代表该类别的未读消息数的数字。 如果此数字大于0，则可以更改头像的颜色并在徽章中显示通知数。 结果如下所示：

## List sections
列表分区、列表分组、分组列表
Once your lists have more than just a few items in them, you might want to consider organizing the items into sections. To do this, you split your lists into several smaller lists, which are stacked on top of one another with a divider in between them.

How to do it...
Let's say that you have several list items that can be divided into three sections. You can use three List components to group your items into their respective sections, and use a Divider component to visually indicate the section boundary for the user. Here's what the code looks like:

## Nested lists
嵌套列表、分类列表
Lists can be nested. This is useful when you have a large number of items to render. Instead of showing everything all at once, you can only display those item categories. Then the user can click on these categories to display the items.列表可以嵌套。 当您要渲染大量项目时，这很有用。 只能一次显示这些项目类别，而不能一次显示所有内容。 然后，用户可以单击这些类别以显示项目。
### How to do it...
Let's say that you have two item categories. When the user clicks on a category, the items in that category should be displayed. Here's the code to do this, by using the List component:假设您有两个商品类别。 当用户单击类别时，应显示该类别中的项目。 这是使用List组件执行此操作的代码：
## List controls
列表控件示例：
    - 开关蓝牙
    - 开关电源：
        关闭电源时，item disabled，同时关闭蓝牙

List items can be clickable, resulting in a change in state, or a link being followed, or something else entirely. This is the primary action of the item. You can have secondary actions on lists called controls. These are common actions that you might perform, depending on the type of item.
列表项可能是可单击的，从而导致状态更改或链接被跟踪，或完全其他原因。 这是列表项目的主要动作。 您可以在称为控件的列表上执行辅助操作。 这些是您可能会执行的常见操作，具体取决于项目的类型。
### How to do it...
Let's say that you have a list of devices. When you click on a list item, it might take you to a details page for the device. Each device has Bluetooth connectivity that can be toggled on or off. This is a good candidate secondary action to render in the item. Here's the code to do this:
假设您有一个设备列表。 单击列表项时，它可能会将您带到设备的详细信息页面。 每个设备都具有可以打开或关闭的蓝牙连接。 这是在项目中呈现的很好的候选辅助动作。 这是执行此操作的代码：

## Scrolling lists
大型列表渲染
滚动列表
重要：当列表项目过多时，使用生成器表达式部分渲染列表，而不是一次性生成所有列表项目，这样可以提高性能
使用生成器按需生成项目、延迟显示项目
When your lists contain a limited number of items in them, you're safe to just iterate over the item data, and render ListItem components. This becomes a problem when you have the potential for lists with over 1,000 items in them. You can render these items fast enough, but having this many items in the Document Object Model (DOM) eats a lot of browser resources, and can lead to unpredictable performance challenges for the user. The solution is to virtualize your Material-UI lists using react-virtualized
当列表中包含有限数量的项目时，可以安全地遍历项目数据并呈现ListItem组件。 当您有可能包含超过1,000个项目的列表时，这将成为一个问题。 您可以足够快地渲染这些项目，但是在文档对象模型（DOM）中拥有这么多项目会占用大量浏览器资源，并且可能给用户带来不可预测的性能挑战。 解决方案是使用react-virtualized虚拟化您的Material-UI列表
### How to do it...
Let's say that you have a list of 1,000 items in it. You want to render these items inside a list with a fixed height. In order to provide predictable performance characteristics for your users, you only want to render items that are actually visible to the user as they scroll through the list. Here's the code:
假设您有一个包含1,000个项目的列表。 您想将这些项目呈现在具有固定高度的列表中。 为了为您的用户提供可预测的性能特征，您只希望呈现用户在列表中滚动时才实际显示项目。 
