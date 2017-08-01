In short: A container does data fetching and then renders its corresponding sub-component.

* Are concerned with how things work.
* May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
* Provide the data and behavior to presentational or other container components.
* Are often stateful, as they tend to serve as data sources.
* Are usually generated using higher order components such as connect() from React Redux or inject() from React mobx