# Project is under development, opened for contribution.

# What's react-sync-state?
Pure frontend solution for react state synchronization.

First implementation depends on firebase but surely it will someday enable other ways of synchronization (i.e. WebRC, AJAX) and probably
even expose some interfaces for users.

# Working *Proof of Concept*
![Proof of Concept](https://media.giphy.com/media/3o6ZtcaSBz5avv1Amk/giphy.gif)

# Approach
Simple wrap your component(s) or even a whole react app
in `<StateSync>` wrapper component.

For now api has two required props: *appId* and *stateId*, expect this to be changed.
`<StateSync appId="" stateId="">...</StateSync>`

# Example
In this repo you can find an example usage (like in gif above), be sure to add 'credentials.json'
file containing web access json from firebase console page.