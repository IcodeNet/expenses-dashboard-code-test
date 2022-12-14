# Bud – Frontend Developer Exercise

As a Frontend Developer, your task is to connect to an API, receive some transaction data and
show it on a web page.

We don’t have a visual design for you, which means you have the freedom to be creative! Don’t
overdo it though. We appreciate a clean and simple visual design but this is not a design task.

## The API

The data is available on a mocked API at http://www.mocky.io/v2/5c62e7c33000004a00019b05

## Requirements

- Your code should fetch the data directly from the API endpoint
- It should filter the transactions to the **10 smallest expenses** and display them
accordingly
- The description, date and amount should be displayed for each transaction

## What we are looking for

- We would prefer it if you use **React**, but other libraries such as Vue are welcome if this
doesn't match your experience.
- We’d like to see **assets bundled** with a tool like Webpack, Rollup or any other popular
module bundler of your choice that could be used in a production application.
- Consider the structure and style of your code; we want to see how you would code in a
shared codebase that needs to be understood by all developers involved and would be
used in production with scalability in mind.
- We don’t expect a fully designed application but we do want to see your CSS skills (we
use StyledComponents).
- Make sure that your code doesn’t cause needless re-renders and uses performance best
practices.
- At Bud we care about accessibility. Make sure your code follows semantic HTML
conventions and adds good accessibility where possible.
- **Please don’t use Create React App or any other tools that remove the need for set
up**; we’d like to see your understanding of module bundlers and build tools and how you
set up a project. It’s ok to re-use code you’ve used in previous projects as long as it’s
your own code.
- **Please don’t use libraries such as axios, lodash, jQuery and Bootstrap**; we’d like to
see understanding of the different web APIs and how you integrate them.

## Tips

- We don’t expect full browser compatibility, feel free to use all the latest APIs including
experimental ones
- We are happy with either JavaScript or TypeScript
- Bonus points for unit tests
- Bonus points for StyledComponents instead of vanilla CSS
- Bonus points for error and loading state handling
- We value quality over quantity and would prefer if you write code well instead of trying to
do too much for the time allocated to the task
- If you proceed to the next stage you will have a chance to tell us what you would have
added or done differently given more time to work on the task

You should be able to complete this exercise in roughly two hours but are free to spend more
time on it if you wish to add polish.

## Submission

Push your finished exercise in a repository on your preferred code versioning and hosting
platform (GitHub / GitLab / BitBucket etc). with instructions on how to run it (a README will do
just fine), and send us the link. Alternatively, you can also email us the zipped files.

Good luck!

---

## Getting Started

Install dependencies via `yarn install`.

To run this application in dev mode:

1. Run the application via `yarn start-dev`.

To build the production bundle:

1. Build the application via `yarn build`.

To test the application:

1. Run unit tests via `yarn test`.

## Rationale

### Data Handling & Formatting

State management and data fetching for this application is intentionally kept clean and uncomplicated:

* Data fetching
  * Fetched via the native `fetch` API, which requires zero additional config to call the provided endpoint.
  * Backend response is fully-typed via `ProviderDataResponse`, allowing for effective handling and implementation of this response.
  * Handles error scenarios for both API-related and network-level failures accordingly.
* State management
  * Uses React `useState` hook to store the API response as the single source of truth for all provider data.
  * Only a single section of this application requires access to this state.
  * State sharing is not required via context or global state management patterns and libraries.
* Formatting
  * API data remains untouched in the `providerData` state.
  * API contract contains a lot of data unrelated to expenses.
    * `transactions` included unsorted income and expenses.
  * Filtering and sorting this data is computed and memoized in a separate variable, eliminating the need to alter the source of truth.

### Performance

Expensive computations such as `filteredTransactions` are callbackized to prevent using unnecessary resource to compute sorting and filtering logic. The benefits of such callbackizing/memoizing would become even more significant if the app were required to iterate on a larger dataset, such as hundreds/thousands of array items.

Components such as the `ResultsSelect` are memoized to prevent unnecessary re-rendering. These components are static by nature and should be unaffected by changes in ancestor component re-renders.

### Testing

Testing is implemented through the use of Jest and [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro), allowing this application to be tested in a way that closely reflects how I expect the end-user to use it. RTL also provides a much cleaner and more developer-friendly style of implementing tests minimizing reference to low-level API's and significantly improving the readibility of tests.

Predominantly, I have implemented integration-style tests in `src/containers/Dashboard/__tests__/Dashboard.test.tsx`. Additionally, I have added unit tests where I feel these add value, particularly concerning utility-type functions that are intended for more global/shared usage.

### User Interface

The UI for this application is intentionally kept simple due to the nature of reading large amounts of data. Styled Components are used throughout.

Two key areas exist:

1. Expenses table, which contains the 10 (default) smallest expenses. This was part of the base requirements.
2. Account info card section is implemented to provide more contextual information that complements the transaction information.
   1. This was added beyond the requirements of this task.

### User Experience & Accessibility

Appropriate implementation of accessibility best practices are implemented throughout.

I opted for using an HTML `table` to display transactional data to leverage native accessibility for highlighting data headings and values. The use of `table` was a trade-off against visual layout for smaller devices. To accommodate wide rows, horizontal scrolling *might* be required on and is enabled. This is implemented in such a way that is per [WCAG spec](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) which permits two-directional scrolling for data tables. Horizontal scrolling is also made accessible for assistive technologies, allowing for focus and scrolling via arrow keys.

The task requirements require only the top 10 *smallest expenses* to be displayed. The API data in fact contains more than 10 expenses. To improve the user experience, the application defaults to displaying 10 smallest expenses but allows users to select to view more if required.

Additionally, given that the API contract contained contextual information regarding the user's account information and balance, I have also opted to display this information in cards to create a more dashboard-like experience.

#### Loading & Error Handling

Graceful degradation of the platform is key during notable events such as loading and error states, ensuring the user is contextually aware of the application's state.

Skeleton-style loaders are implemented during fetching the API data to indicate the application is in a transitionary state clearly.

<img width="958" alt="Screenshot 2022-12-13 at 17 08 49" src="https://user-images.githubusercontent.com/33296316/207403861-c1a731b7-0357-442b-b2c4-9470318e6e10.png">

Error handling is also implemented during data fetching and is displayed as an alert on the screen if the API returns a bad status code or the network fails.

<img width="952" alt="Screenshot 2022-12-13 at 17 10 18" src="https://user-images.githubusercontent.com/33296316/207403913-b20b6724-1c53-4398-8e06-a101d3ba1492.png">

### Potential Improvements

If I were to iterate on this solution and implement improvements, I would consider the following points:

* Abstracting fetch provider and related state into a custom hook.
* Adding user-selectable sorting (ascending/descending) to amount or date table headers.
* Implement an E2E test via Cypress.
* Implement ESLint to ensure consistent file formatting and conventions across app.
