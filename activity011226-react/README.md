# SkyHigh Rentals - React Version

This is a React.js implementation of the SkyHigh Rentals aircraft rental platform, optimized for deployment on GitHub Pages.

## Features

- **Home Page**: Featured aircraft display
- **Catalog**: Browse all available aircraft
- **User Authentication**: Login and signup functionality
- **Shopping Cart**: Add/remove aircraft rentals
- **Payment**: Payment and delivery information
- **Profile**: User profile management
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── Header.js
│   ├── Sidebar.js
│   ├── Footer.js
│   └── AircraftCard.js
├── pages/            # Page components
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   ├── Catalog.js
│   ├── Cart.js
│   ├── Login.js
│   ├── Signup.js
│   ├── Profile.js
│   ├── PaymentDelivery.js
│   └── TransactionConfirmation.js
├── App.js           # Main application component
├── index.js         # React DOM root
└── index.css        # Global styles
public/
├── index.html       # HTML template
└── manifest.json    # PWA manifest
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Technologies Used

- React 18
- React Router v6
- CSS3 for styling
- GitHub Pages for deployment

## Environment Setup

This app is configured to be deployed at `https://binsacedillo.github.io/activity011226-react`. 

Update the `homepage` field in `package.json` if you deploy to a different URL.

## Notes

- Images are referenced from a `/images` folder that should be created in the `public` directory
- State management is currently handled with React hooks (useState)
- Form submissions are mocked and log to console
- Authentication is simulated with local state

## Future Enhancements

- Backend API integration
- Real payment processing
- User authentication with backend
- Image uploads
- Advanced filtering and search
- User reviews and ratings
