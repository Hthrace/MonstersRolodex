# Monsters Rolodex - React.js Portfolio Project

**Monsters Rolodex** is a React.js portfolio project that demonstrates React.js and state management techniques. It retrieves data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) and allows you to filter the monsters by typing in a search box. This project showcases React.js skills, particularly in state management.

## [Live Demo](https://hthrace.github.io/MonstersRolodex/)
This app is deployed on [Github Pages](https://pages.github.com/) using [Github Actions](https://github.com/features/actions).

## Features

- **Monster List**: Display a list of monsters with their names, images, and emails.
- **Search**: Filter the monster list in real-time by typing in the search box.

## Project Purpose

This project serves as a portfolio piece to demonstrate proficiency in React.js and state management. It focuses on retrieving data from an external API, managing application state, and efficiently updating the user interface based on user input.

## Getting Started

Follow these steps to run the project locally and explore the state management implementation:

1. **Clone the Repository**: Start by cloning this repository to your local machine using Git:

```
git clone https://github.com/Hthrace/MonstersRolodex.git
```

2. **Navigate to the Project Directory**: Move to the project directory:

```
cd MonstersRolodex
```

3. **Install Dependencies**: Install the project dependencies using npm:

```
npm install
```

4. **Start the Development Server**: Run the following command to start the development server with Vite:

```
npm run dev
```

This will launch the app in your default web browser at `http://localhost:5173`.

## How to Use

1. **View Monster List**: When you access the app, you will see the monster list displayed on the screen.

2. **Search for Monsters**: Use the search box at the top of the page to filter the monsters. As you type, the list will update in real-time to display matching results.

## API Integration (JSONPlaceholder)

This project integrates with the JSONPlaceholder API to fetch monster data for demonstration purposes. The API endpoints and requests are defined in the `src/api` directory. JSONPlaceholder is a free fake online REST API for testing and prototyping.

You can find more information about JSONPlaceholder here: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Technologies Used

- React.js
- Vite (for development and deployment)
- CSS (for styling)

## Deployment

To deploy the Monsters Rolodex app using Vite, follow these steps:

1. Build the project:

```
npm run build
```

2. Deploy the built files to your hosting service of choice. You can use platforms like Netlify, Vercel, GitHub Pages, or any other hosting solution that supports static websites.

3. Configure your hosting service to serve the built files from the `dist` directory.

4. Access the deployed app via the provided URL.

## Portfolio Project

This project is intended to showcase React.js skills, particularly in state management. It's a demonstration of how to efficiently manage application state and update the UI based on user interactions.

## Contributing

This project is for portfolio demonstration purposes and is not actively seeking contributions. However, you are welcome to fork the repository and adapt it to your own projects.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the React.js and Vite communities for their excellent documentation and resources.
