# Coding Convetions and Dev Guideline

[React]: static/img/pack-code.png "React"
<p align="center">
<img width="70" height="70" src="static/img/pack-code.png">
</p>

## Index

  - [Code Review](#code-review)
    - [Mindset](#mindset)
    - [Start](#start)
    - [Basics](#basics)
  - [Coding or Reviewing](#code)
    - [CSS Classes](#css-classes)
    - [Inline Styles](#inline-styles)
    - [Libraries](#libraries)
    - [Comments](#comments)
    - [Variables](#variables)
    - [Arrow Functions](#arrow-functions)
    - [Functions](#functions)
  - [React/Redux](#reactredux)
    - [Renders](#renders)
    - [Memo](#memo)
    - [useEffect](#useeffect)
    - [Fetching Data](#fetching-data)
    - [Feedback Messages](#error-feedback-messages)
    - [Tools and Views](#tools)
  - [Labels](#labels)
  - [QA](#qa)
  - [Documentation](#documentation)

### Quick

Check existing functionalities in order to take into account solutions already created for the resolution of new problems, avoid duplication and promote reuse.  Whenever possible, modularize.
</br>
Do not return a Code Review for things like a blank line or a comment with a small error, as developers we will try to avoid it, but we will not complicate the workflow for something like this, there are more important things. 

<strong>Unused components, functionalities and code must be removed.</strong>

Most feature tickets must go through design. Bugs, and other modifications can skip this stage, but whenever there are visual changes, design must take part.

<a name="code-review"></a>

## Code Review

<a name="mindset"></a>

### Mindset

- No sarcasm
- Be humble
- Be explicit
- Ask questions
- Assume the author had the best intentions
- Don't take it personally

<a name="start"></a>

### Start

1. Understand the code
    * Make sure you completely understand the code
    * Evaluate all the architecture trade offs
2. Check code quality
	* Readability/comprehensibility, are other team members likely to be able to maintain it, is appropriately commented?
    * Verify code correctness
    * Check for well-organized and efficient core logic
    * Is the code as general as it needs to be, without being more general that it has to be?
    * Make sure the code is maintainable
    * Enforce stylistic consistency with the rest of the codebase
	* Is the file structure clear/sensible?
3. Verify that the code is tested well
    * Confirm adequate test Coverage
    * Check tests having the right dependencies and are testing the right things
	* Is the test output (test names, assertion names) meaningful?
4. Make sure the code is safe to deploy
    * Ask if the code is forwards/backwards compatible. In particular, be on the lookout if the code is changing the serialization/deserialization of something
    * Run through a roll-back scenario to check for rollback safety
	* Consistent (or existent) error-handling?

<a name="basics"></a>

### Basics

* No warnings
* Correct Proptypes
* Meaningful Tests
* Constants in `UPPERCASE`
* Without magic numbers, define explanatory variables
* Comments, preferably more, to less, say why, not what
* Using functional components with Hooks instead of classes
* Destructure the props in the function arguments instead of in the body
* When you create handler functions to handle events, and setStates are performed inside, check that the accessed variable doesn't belong to an old instance of the scope, to do this pass to the `setState` function a method, and this way we access the previous version of the state (example: `setState(prev => !prev)`)

<a name="code"></a>

## Coding or Reviewing

<a name="css-classes"></a>

### CSS Classes

When there is more than one class or the classes are dynamic, use the method: `getClassName({ ...booleans })`.

<a name="inline-styles"></a>

### Inline Styles 

Do not use inline styles if not completely necessary, use css classes (have better performance).

<a name="libraries"></a>

### Libraries

Add a library to the project when is really necessary.

<a name="comments"></a>

### Comments

More is better than less, but write WHY you are doing something, NOT HOW.

<a name="variables"></a>

### Variables

Use descriptive variable names, prefer long variable name instead of a short one that says nothing. It will eventually be transpiled so it doesn't matter the size if it improves readability.

<a name="arrow-functions"></a>

### Arrow Functions

Avoid instantiating new functions of this one when it is not necessary, for example when passing as prop of another component, if you can pass the function directly, pass it without creating a new wrapping arrow function, if this causes a loss of context, no problem with creating a new one, is only to avoid unnecessary new instances.

Use Arrow Functions when you need information from the scope, otherwise use the classic function statement.

<a name="functions"></a>

### Functions

Separate functions that do not depend on the context of a component (state, context, props, etc.) outside the component, and if the amount of functions extracted outside is more than one or two small, should be passed to a separate file utils.js/helper.js within the same folder of the component, to have a cleaner component.

Whenever possible use the _new ES features_ (6-2020 and so on) in place of the old ones.

Ex: `async/await`, `try/catch` instead of `Promise`:
* _Avoid instantiating more functions_
* _It's more legible_
* _In nesting the context is not lost_
* _Allows to reuse the code in conditional paths_

Use Arrow Functions when you need information from the scope, otherwise use the classic function statement.

When the functions depend on some property present in the state or in the props, it is probably best to wrap it in a useCallback.

<a name="react"></a>

## React/Redux

<a name="renders"></a>

### Renders

Check that there are no more renderings than necessary. In general, only one render must be maintained per state change, several times you may need a second render to get info, and in very few more than two.
Within the _React Event Handler_ (`onClick`, `onBlur`, etc) several `setStates` can be assigned one after the other, but outside of that, React will not make a batch with all that it must execute, which will produce several renderings (one for each _setState_).

<a name="memo"></a>

### Memo

Whenever possible, use memo to optimize renderings. It is used as a replacement for shouldComponentUpdate, and can receive a function with the old and new props to decide whether to update or not. 

More info: https://dmitripavlutin.com/use-react-memo-wisely/

<a name="use-effect"></a>

### useEffect 
Use several useEffect when you need to implement different logics to execute and they depend on different props change, do not use a single useEffect with conditionals inside to check the change of a specific prop. 

<a name="fetching-data"></a>

#### Fetching data

...complete me...

<a name="error-feedback-messages"></a>

### Feedback messages


- Snackbar: ...complete me...

- Confirmation: ...complete me...


<a name="tools"></a>

### Tools and Views

Complete with details of the Interface needeed in Tools and Views, and how to implement a new one.

- Block
- Static
- Dynamic
- Toolset
- properties


<a name="labels"></a>

## Labels

Most strings with texts, are written in English, include these labels along with existing ones. In general if they are common names they will go in global, but if they are referring to the current section, a file will be created for it.

For example:
```
Constants/labels/global
Constants/labels/section
```

This prepares the environment and will make it easier for us to implement translations.

<a name="qa"></a>

## QA

For Quality Assurance we need to add `data-testid` for most of main elements. With these ids it is possible to build automatic tests.

To do this, you should use the Hook `useTestMode`, this Hook will return the props for the element that you can deconstruct on the component you need.
You should include this Hook on all elements that need to be reachable by QA.

Usage example:
```
import useTestMode from 'Hooks/useTestMode';

...
const testProps = useTestMode(testId);
return <Input {...testProps} />;
```

<strong>ID:</strong> Separated by `-`, tries to include path to element, like `item-card-asd89`, is an Item, has a Card, with the id "asd89".

<a name="documentation"></a>

## Documentation

CR Good Practices: https://phauer.com/2018/code-review-guidelines/

Cost of Skipping TDD & Code Reviews: https://medium.com/javascript-scene/the-outrageous-cost-of-skipping-tdd-code-reviews-57887064c412

Crafting Better Code Reviews: https://medium.com/@vaidehijoshi/crafting-better-code-reviews-1a5fc00a9312

if you want to contribute, do it 🍿