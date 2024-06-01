# Product Listing page

A brief description of what Next.js project does and its purpose.

## About 

I have Buit this project For The Assignment Project Given where i have to use mock Api like [Fake Store API](https://fakestoreapi.com/) which use to get Data from Api and using it I have created a Product list their price content details images and their ratings also i have implemented a searchBar for products Which can help to track the products. tailwind and reacticons used For better Ul and responsiveness for the page.💯

## Table of Contents

- [Product Listing page](#product-listing-page)
  - [About](#about)
  - [Table of Contents](#table-of-contents)
  - [Installation :  👨‍💻](#installation---)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
    - [Tailwind CSS](#tailwind-css)
    - [React Icons](#react-icons)
    - [Mock API](#mock-api)
  - [points to be noted 👍](#points-to-be-noted-)

## Installation :  👨‍💻

Follow these steps to install and set up the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/my-username/my-repo-name.git
    cd my-repo-name
    ```

2. **Install dependencies**

    If you're using npm:

    ```bash
    npm install
    ```

    Or if you're using Yarn:

    ```bash
    yarn install
    ```
    Install reacticons

    ```bash
    npm i react-icons
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

    Or with Yarn:

    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Tailwind CSS 

Tailwind CSS is already configured in this project. You can start using it in your components like this:

```jsx
<div className="bg-blue-500 text-white p-4 rounded">
  Hello, Tailwind CSS!
</div>
```

### React Icons

React Icons are also included. To use an icon, import it and include it in your component:

```jsx
import { FaBeer } from 'react-icons/fa';

const IconExample = () => (
  <div>
    <FaBeer size={30} />
    Cheers!
  </div>
);

export default IconExample;
```

### Mock API

This project uses a mock API for development purposes. You can find the mock API configuration in the `/pages/api` directory. Here is an example of a mock API endpoint:

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, world!' });
}
```

You can call this API endpoint from your components like this:

```javascript
import { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{data.message}</div>;
};

export default FetchData;
```

## points to be noted 👍
1. Ensure you have a stable internet connection to fetch data from the Fake Store API.
2. If you encounter any issues during installation or setup, please refer to the official Next.js documentation or open an issue in the GitHub repository.
