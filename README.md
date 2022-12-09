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

## Overview of requirements

* React SPA with bundling from scratch
* Data fetching
  * Use provided endpoint; http://www.mocky.io/v2/5c62e7c33000004a00019b05
  * Native fetching API's only
  * Filter to **10 smallest transactions**
* Display CSS skills; no frameworks/libraries. Styled components preferred.
* Emphasis on performance. Optimise re-renders,
* Accessibility is key
* Keep it simple