# Text - Collecting Text Input
In this chapter, you'll learn about the following topics:

- Controlling input with state
- Placeholder and helper text
- Validation and error display
- Password fields
- Multiline input
- Input adornments
- Input masking


## Introduction
Material-UI has a flexible text input component that can be used in a variety of ways to collect user input. Its usages range from collecting simple one-liner text input to masked input adorned with icons.
Material-UI具有灵活的文本输入组件，可以通过多种方式来收集用户输入。 它的用法范围从收集简单的单行文本输入到带有图标的蒙版输入。
## Controlling input with state
The TextField component can be controlled by the React component, state, just like regular HTML text input elements. As with other types of form controls, the actual value is often the starting point—the state for each form control grows more complex as more functionality is added.就像常规的HTML文本输入元素一样，TextField组件可以由React组件状态控制。 与其他类型的表单控件一样，实际值通常是起点–随着添加更多功能，每个表单控件的状态变得越来越复杂。
### How to do it...
Just like any other text input element, you need to provide the TextField component with an onChange event handler that updates the state for the input. Without this handler, the value of the input won't change as the user types. Let's look at an example where three text fields are rendered and they're each controlled by their own piece of state:

## Placeholder and helper text
At a minimum, text fields should have a label so that the user knows what to type. But a label on its own can be downright confusing—especially if you have several text fields on the same screen. To help the user understand what to type, you can utilize placeholder and helperText in addition to label.文本字段至少应具有标签，以便用户知道要键入的内容。 但是单独使用标签可能会造成混乱，尤其是在同一屏幕上有多个文本字段的情况下。 为了帮助用户理解要键入的内容，除了标签外，还可以使用占位符和helperText。

## Validation and error display
Even with helper text, placeholders, and labels, users will inevitably enter something that's not quite right. It's not that they are trying to mess things up (some are, to be fair); it's that mistakes happen. When mistakes are made, text input fields need to be marked as being in an error state.
即使使用辅助文本，占位符和标签，用户也不可避免地会输入不太正确的内容。 这并不是说他们试图弄乱事情（有些是公平的）。 就是错误发生了。 发生错误时，需要将文本输入字段标记为处于错误状态。
### How to do it...
Let's say that you have two inputs: a phone number and an email address, and you want to make sure that the values provided by the user are correct.


## Input masking
Some text inputs require values with a specific format. With Material-UI TextField components, you can add masking capabilities that help guide the user toward providing the correct format.
某些文本输入要求使用特定格式的值。 使用Material-UI TextField组件，您可以添加掩蔽功能，以帮助指导用户提供正确的格式。
### How to do it...
Let's say that you have phone number and email fields and you want to provide an input mask for each. Here's how you can use the MaskedInput component from react-text-mask with TextField components to add masking abilities:
假设您有电话号码和电子邮件字段，并且想为每个字段提供输入掩码。 这是如何将react-text-mask中的MaskedInput组件与TextField组件一起使用来添加遮罩功能的方法：
