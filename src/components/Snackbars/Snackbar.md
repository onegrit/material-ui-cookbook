# Snackbars - Temporary Messages
In this chapter, you'll learn about the following:

- Snackbar content
- Controlling visibility with state
- Snackbar transitions
- Positioning Snackbars
- Error boundaries and error Snackbars
- Snackbars with actions
- Queuing Snackbars
## Introduction
Material-UI comes with a Snackbar component that's used to display messages for users. These messages are brief, short-lived, and don't interfere with the main application components.
## Snackbar content
Text is the most common form of Snackbar message content that you'll display for your users. Because of this, the Snackbar component makes it straightforward to set message content and display the snackbar.

How to do it...
The message property of the Snackbar component accepts a string value, or any other valid React element. Here's the code that shows you how to set the content of the Snackbar component and display it:

import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const MySnackbarContent = () => <Snackbar open={true} message="Test" />;
export default MySnackbarContent;
When the page first loads, you'll see a snackbar that looks like this:

## Controlling visibility with state
Snackbars are displayed in response to something. For example, if a new resource in your application is created, then using a Snackbar component to relay this information to the user is a good choice. If you need to control the state of your snackbars, then you need to add a state that controls the visibility of the snackbar.


## Snackbar transitions
You can control the transitions used by Snackbar components when it is displayed and hidden. The Snackbar component directly supports transition customization through properties, so you don't have to spend too much time thinking about how to implement your snackbar transitions.

## Positioning snackbars
Material-UI Snackbar components have an anchorOrigin property that allows you to change the position of the snackbar when it's displayed. You might be fine using the default positioning of snackbars, but sometimes you'll need this level of customization to stay consistent with other parts of your application.


### How it works...
The two radio button groups in this example are only used to illustrate the different position value combinations that are available. In a real application where you show snackbars, you wouldn't have the configurable state to change the positioning of your snackbars. Instead, you should think of a value passed to the anchorOrigin property as a configuration value that is set once during startup.

## Error boundaries and error snackbars
Error boundaries in React enable you to capture errors that happen when your components attempt to render. You can use the Snackbar components in your error boundaries to display captured errors. Furthermore, you can style snackbars so that errors are visually distinctive from normal messages.
### How to do it...
Let's say that you have an error boundary at the top level of your application and you want to use the Snackbar component to display error messages to users. Here's an example that shows how you can do this:


### There's more...
The error boundary used in this example covered the entire application. This is good in the sense that you can blanket the entire application with error handling in one shot. But this is also bad, because the entire user interface vanishes, as the error boundary has no idea which component failed.本示例中使用的错误边界涵盖了整个应用程序。 从某种意义上讲，您可以一次性完成整个应用程序的错误处理，这是很好的。 但这也很糟糕，因为整个用户界面都消失了，因为错误边界不知道哪个组件发生了故障。
Because error boundaries are components, you can place as many of them as you like at any level of your component tree. This way, you can show Material-UI error snackbars while keeping the parts of the UI that haven't failed visible on the screen.
由于错误边界是组件，因此可以在组件树的任何级别上随意放置它们。 这样，您可以显示Material-UI错误小吃栏，同时在屏幕上保持UI的未失败部分。

## Snackbars with actions
The purpose of Material-UI snackbars is to display brief messages for the user. Additionally, you can embed the next course of action for the user in the snackbar.


### There's more...
When users create new resources in your application, you probably want to let them know when the resource is created successfully. Snackbars are a good tool for this because they don't force the user away from anything that they might be in the middle of. What would be nice is if you included an action button in the snackbar that linked to the newly created resource.

Let's modify this example so that, when the user clicks on the CREATE button, they'll see a snackbar with the following:

- A brief message 一条简短的消息
- A close action    带有关闭操作
- A link to the new resource    一个到新资源的链接

## Queuing snackbars
With larger Material-UI applications, you're likely to find yourself in a situation where more than one snackbar message is sent in a very short period of time. To deal with this, you can create a queue for all snackbar messages so that only the most recent notification is displayed, and so that the transitions are handled properly.

How to do it...
Let's say that you have several components throughout your application that need to send snackbar messages to your users. Having to manually render Snackbar components everywhere would be cumbersome—especially if all you're trying to do is display simple text snackbars.

One alternative approach is to implement a higher-order component that wraps your components with the ability to display messages by calling a function and then passing the text as the argument. Then, you can wrap any components that need the snackbar capability. Here's what the code looks like:
