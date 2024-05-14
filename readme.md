# Overview

# Introduction

- Pokemon search app fetches data from an API and renders it in HTML based on a user's input of the Pokemon name or id.

# System Overview

- API variables
- DOM variables
- Function variables
- Event listeners

# Feature Description

- An input field that gets the Pokemon name or id

# Implementation Details

- High-level workflow description
- Diagram: Flowchart of the process (include if applicable)
- Key functions and their roles in the feature
  - `validateInput()` : Ensures input is not empty and converts to lowercase
  - `findPokemon()` : Searches for Pokémon in `fetchedData`
  - `renderPokemon()` : Renders Pokémon data in HTML

# Event Handling

- Click function on `searchBtn`

# Data Handling

- Description of data flow
- Data is fetched using async await
- Structure of `fetchedData` array is destructured
- Destructuring of API response based on the values required

# Error Handling

- Handling empty input or no matches found
- Handling invalid input
- Handling API errors

# User Interface Considerations

- Simple input field with a button trigger
- Display of data in HTML via card

# Testing

- No tests yet

# Conclusion

- Data on Pokemon is fetched from an API by either name or id
- Pokemon data is rendered in HTML
- User can search for Pokemon by name or id
- Additional features could be sorts and filters by types and stats

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
