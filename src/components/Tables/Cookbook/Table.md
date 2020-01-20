# Tables - Display Complex Collection Data
In this chapter, you'll learn about the following topics:

- Stateful tables 状态表格
- Sortable columns 排序列
- Filtering rows 过滤行
- Selecting rows 选择行
- Row actions 行操作

## Introduction
If your application needs to display tabular data, you can use the Material-UI Table component, along with all of its supporting components. Unlike grid components, which you might have seen or used in other React libraries, the Material-UI component is unopinionated. This means that you have to write your own code to control table data. On the plus side, the Table component stays out of your way and lets you implement things your own way.
如果您的应用程序需要显示表格数据，则可以使用Material-UI Table组件及其所有支持组件。 与您可能已经在其他React库中看到或使用过的网格组件不同，Material-UI组件是不受限制的。 这意味着您必须编写自己的代码来控制表数据。 从好的方面来说，Table组件不会影响您，让您以自己的方式实现事情。
## Stateful tables
With Table components, it's rare that you'll have static markup that defines the row data of the table. Instead, component state will map to the rows that make up your table data. For example, you might have a component that fetches API data that you want displayed in a table.
使用表格组件，很少会有静态标记来定义表格的行数据。 相反，组件状态将映射到构成表数据的行。 例如，您可能具有一个组件，该组件可提取要在表中显示的API数据。
### How to do it...
Let's say that you have a component that fetches data from an API endpoint. When the data loads, you want to display the tabular data in a Material-UI Table component. Here's what the code looks like:
### There's more...
One suboptimal aspect of this example is the user's experience while they wait for table data to load. Showing the column headers upfront is fine, since you know what they are ahead of time and the user might too. What's needed is some sort of indicator that the actual row data is, in fact, loading.此示例的一个次优方面是用户等待表数据加载时的体验。 预先显示列标题是可以的，因为您可以提前知道它们，并且用户也可以。 需要的是某种指示符，表明实际的行数据实际上正在加载。
One way to fix this issue is to add a circular progress indicator underneath the column headers. This should help the user understand that not only are they waiting for data to load, but that it's the table row data specifically, thanks to the position of the progress indicator.解决此问题的一种方法是在列标题下方添加循环进度指示器。 这应该可以帮助用户理解，由于进度指示器的位置，它们不仅在等待数据加载，而且特别是表行数据。

## Sortable columns
排序列
可排序的表格

### There's more...
What if your data is already sorted by a particular column when it arrives from the API? If this is the case, you'll probably want to indicate which columns the rows are sorted by and in what direction, before the user starts interacting with the table.如果您的数据从API到达时已经按特定的列进行了排序，该怎么办？ 如果是这种情况，您可能需要在用户开始与表进行交互之前，指出行按哪些列以及按什么方向排序。

To do so, you just need to change the default column state. For example, let's say that the Average column is sorted in descending order by default. Here's what your initial column state would look like:为此，您只需要更改默认列状态。 例如，假设默认情况下，Average列按降序排序。 这是您初始列状态的样子：

## Filtering rows
过滤列
Where there are tables, there's potential for too much information. This is why adding a search feature to your tables is a good idea. It allows the user to remove irrelevant rows from the table as they type.
### How to do it...
Let's say that you have a table with lots of rows in it, meaning that the user is going to have a tough time scrolling through the entire table. To make things easier for them, you decide to add a search feature to your table that filters rows by checking whether the search text exists within the name column. Here's the code:假设您有一个包含很多行的表，这意味着用户将很难滚动整个表。 为了使他们更轻松，您决定在表中添加搜索功能，该功能通过检查名称列中是否存在搜索文本来过滤行。 这是代码：`FilteringRows.js`


## Selecting rows
Users often need to interact with specific rows in a table. For example, they might select a row and then perform an action that uses data from the selected row. Or, the user selects multiple rows, which produces new data related to their selection. With Material-UI tables, you can mark rows as selected using a single TableRow property.
### How to do it...
In this example, let's assume that the user needs to be able to select multiple rows in your table. As rows are selected, another section on the screen is updated with data that reflects the selected rows. Let's start by looking at the Card component, which displays data from the selected table rows:

## Row Actions
行操作：启动、停止

Table rows often represent an object that you can perform actions on. For example, you might have a table of servers where each row represents a server that can be turned on or off. Instead of making your users click a link that takes them away from the table to perform an action, you can include common actions directly in each table row.
表行通常代表可以对其执行操作的对象。 例如，您可能有一个服务器表，其中每一行代表一个可以打开或关闭的服务器。 您可以使用户直接在每个表行中包含常用操作，而不用使用户单击使他们离开表的链接来执行操作。
## How to do it...
Let's say that you have a table with rows that have servers that can be turned on or off, depending on their current state. You want to include both of these actions as part of each table row, so that the user can more easily control their servers without spending lots of time navigating. The buttons also need to change their color and disabled state based on the state of the row.
假设您有一个表，其中包含行，行的服务器可以根据其当前状态进行打开或关闭。 您希望将这两个操作都包含在每个表行中，以便用户无需花费大量时间进行导航就可以更轻松地控制其服务器。 按钮还需要根据行的状态更改其颜色和禁用状态。
