# Cards - Display Detailed Information
 In this chapter, you'll learn the following about Cards:

- Main content
- Card header
- Performing actions
- Presenting media
- Expandable cards
## Introduction
Cards are a Material Design concept used to display specific information on a given subject. For example, the subject could be an object returned by an API endpoint. Or, the subject could just be part of a complex object—in this case, you can use multiple cards to organize information in a way that helps the user understand what they're looking at.
## Main content
The main content of a Card component is where information concerning the subject is placed. The CardContent component is a child of Card, and you can use it to render other Material UI components, such as Typography.
### How to do it...
Let's say that you're working on a detail screen for some type of entity, such as a blog post. You've decided to use a Card component to render some of the entity details since the entity is the subject under consideration. Here's the code that will render a Card component with information about a particular subject:`MainContent.js`

## Card header
The CardHeader component is used to render the header of a card. This includes the title text, as well as some other potential elements. The reason you might want to use a CardHeader component is so that you can let it handle the layout styles of the header and to keep the markup within your Card semantic.


## Performing actions
Cards are used to display specific actions about a subject. Often, users take action on subjects, such as sending a contact a message or deleting a contact. CardActions components can be used by Card components to display actions that users can take on the subject.

## Presenting media
Cards have built-in capabilities for displaying media. This includes things such as images and videos that become the focal point of the card.

### How to do it...
Let's say that you have an image of the subject that the Card component is displaying. You can use the CardMedia component to render the image. You should use this component instead of something like <img> because it will handle a number of styling issues for you. Here's the code:
`PresentingMedia.js`


## Expandable cards
可扩展card
Sometimes, you can't fit everything into a card that you might want to. To accommodate, you can make your cards expandable, meaning that the user can click on an expand button to reveal additional content.

### How to do it...
Let's see that there's additional content about a subject within a card that does the following:

- Takes up a little too much vertical space
- Isn't very important and doesn't need to be shown by default
You can deal with both of these challenges by putting the content into an expandable region of the card. Then, the vertical space isn't an issue and the user can look at the content if they deem it relevant. Here's an example that builds on an earlier example from this chapter to make part of the card content hidden by default:

