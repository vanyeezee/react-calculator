# react-calculator

This is a TypeScript-based calculator app built with React and AWS Amplify. The app uses a GraphQL API and a Cognito userpool for authentication.

## Installation

To install the app, follow these steps:

1. Clone the repository: `git clone https://github.com/me/reactcalculator.git` or
Run `npx create-react-app react-calculator --template typescript` to create a new React app with TypeScript support.
Build out the app's components.
2. Navigate to the app directory: `cd react-calculator`
3. Install dependencies: `npm install`

## Usage

To run the app locally, use the following command:

`npm start`

To build the app, use the following command:

`npm run build`

## AWS Amplify Integration

To set up AWS Amplify integration, follow these steps:

1. Run `amplify setup` to configure the AWS Amplify CLI on your local machine.
2. Run `amplify init` to create a new Amplify project for your app.
3. Run `amplify add auth` to add a Cognito userpool for authentication.
4. Run `amplify add api` to add a GraphQL API and use the Cognito userpool as the authentication mode.
5. Update the GraphQL API schema with rules to only allow users access to their own history.
6. Run `amplify push` to deploy the backend configuration to the cloud.
7. Configure the [Authenticator](@aws-amplify/ui-react) component to only trigger on certain actions.
8. Configure the API to sync local and cloud data. If you encounter this [known issue](https://github.com/aws-amplify/amplify-js/issues/4257), you can resolve it by following [these steps](https://github.com/aws-amplify/amplify-js/issues/4257#issuecomment-622288820)

## Testing

Write tests using [Jest for TypeScript](@types/jest).

To run tests, use the following command:

`npm test`

## Dockerfile

To build a Docker image of the app, create a file named "Dockerfile" in the root directory with the following contents:

```
FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]
```

Then, run the following command to build the Docker image:

`docker build -t react-calculator .`

And to run it:

`docker run -p 80:3000 react-calculator`

## Contributing

To contribute to this project, please follow these steps:

1. Fork this repository to your own GitHub account.
2. Clone the forked repository to your local machine.
Create a new branch for your changes.
Make your changes and commit them with a descriptive commit message.
Push your changes to your forked repository.
Submit a pull request from your forked repository to this repository.
Wait for your pull request to be reviewed and merged.

Please make sure to adhere to the following guidelines:

Follow the existing code style and conventions.
Write tests for new features and ensure that existing tests pass.
Use clear and descriptive commit messages.
Ensure that your code is well-documented.

## Contact

To contact the project maintainer, please visit their website [here](https://adok0001.github.io/#contact).
