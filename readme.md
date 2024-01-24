# PDF Reader
PDF Reader is an app that we can read a PDF (following the doc format) and you can get the people that are inside it. The main idea of this project was to improve my ReGex knowledge, then I tried to use it the most possible. I followed a Fluent Interface Design Pattern that our code follows a flow similar to a cascade where we are always using the last step result. This pattern improves code readability being easier to test, understand, and maintain!

I created a `TextProcessorFacade` using a facade pattern to separate the complex flow in an unique class. The facade method came to solve the problem when we have a complex system which contains a lot of moving parts and we only want to use one part. In our case, we are cascading the `TextProcessFluentApi` flow and only returning the result of all the flow that are the people from the PDF

I only used NodeJS and some JS libraries to help with the test coverage. Thanks for reading and enjoying my code!