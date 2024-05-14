# Overview

# Introduction

- Purpose of the document
- Overview of the feature

# System Overview

- Brief description of the system
- Explanation of the relevant parts of the system for context

# Feature Description

- Detailed description of the feature
- Purpose and benefits of the feature

# Implementation Details

- High-level workflow description
- Diagram: Flowchart of the process (include if applicable)
- Key functions and their roles in the feature
  - `validateInput()` : Ensures input is not empty and converts to lowercase
  - `findPokemon()` : Searches for Pokémon in `fetchedData`
  - `renderPokemon()` : Renders Pokémon data in HTML

# Event Handling

- Description of event listeners involved
- Interaction between the DOM and event listeners

# Data Handling

- Description of data flow
- How data is fetched and stored
- Structure of `fetchedData` array
- Destructuring of API response

# Error Handling

- Common errors and their handling
- Example: Handling empty input or no matches found

# User Interface Considerations

- How the feature affects the user interface
- Elements added or changed in the UI

# Testing

- Key scenarios to test
- Expected outcomes for tests

# Conclusion

- Summary of the feature
- Final considerations and recommendations for developers implementing the feature

## Javascript

- Event listeners

  - click (various buttons that toggle hide/show content, count how many times a roll event has been triggered)

- Functions

  - fetchData()

- Methods, Properties, & Functions

  - document.getElementById()

- Concepts

  - async functions look just like regular arrow functions

- Structure of JS in this order:
  - global lets (included default price and cash in drawer array)
  - variables targetting elements
  - custom functions
    - Logic functions to format and check inputs
    - Updating functions (update the UI)
    - Reset functions (reset the UI)
  - event listeners
    - orchestrate actions (combo of generate UI, update UI, reset UI)

## CSS

- EX: Bulma CSS Framework https://bulma.io/documentation/

## Other Tools

- Googel fonts
  - Ubuntu for body
  - Posten for Headers

![Pokemon IA Flow](assets/images/pokemon-ia-flow.png)
