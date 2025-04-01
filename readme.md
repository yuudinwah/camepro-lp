# CamePro Landing Page

A responsive, animated landing page for "The Camellia Project" (CamePro) - a free-to-play game with a premium gold and silver aesthetic.

## 🔗 Live Demo

**[https://camepro.vercel.app/](https://camepro.vercel.app/)**

![CamePro Landing Page](https://placeholder.com/your-screenshot-here)

## Features

- ✨ **Stunning Animations** - Smooth entrance animations, scroll-based effects, and staggered reveals using Framer Motion
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🎮 **Gaming-Focused Design** - Premium gold and silver color scheme with dark background
- 🌙 **Dark Mode by Default** - Immersive dark theme perfect for gaming aesthetics
- ⚡ **Performance Optimized** - Efficient animations that only trigger when elements come into view

## Tech Stack

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/camepro-landing.git
   cd camepro-landing
   

2. Install dependencies:

    ```shellscript
    npm install
    # or
    yarn install
    ```


3. Run the development server:

    ```shellscript
    npm run dev
    # or
    yarn dev
    ```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


### Build for Production

To build the application for production:

    ```shellscript
    npm run build
    # or
    yarn build
    ```

To start the production server:

    ```shellscript
    npm run start
    # or
    yarn start
    ```

### Dependencies Installation

If you're setting up the project from scratch, here are the key dependencies you'll need:

```shellscript
# Core dependencies
npm install next react react-dom framer-motion lucide-react

# Styling
npm install tailwindcss postcss autoprefixer
npm install -D tailwindcss-animate

# Initialize Tailwind CSS
npx tailwindcss init -p
```

## Project Structure

```plaintext
camepro-landing/
├── app/
│   ├── globals.css        # Global styles including custom colors
│   └── layout.tsx         # Root layout component
├── components/
│   ├── ui/                # shadcn/ui components
│   └── animated-landing.tsx  # Main landing page component
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration with custom colors
└── README.md              # This file
```

## Customization

### Colors

The project uses a custom gold and silver color palette defined in `tailwind.config.js`. You can modify these colors to match your brand:

```javascript
colors: {
  gold: {
    500: "#FFC300", // Main gold color
    // other shades...
  },
  silver: {
    500: "#ADB5BD", // Main silver color
    // other shades...
  },
  midnight: {
    900: "#00050F", // Deep background color
    // other shades...
  }
}
```

### Content

To update the content of the landing page, edit the `animated-landing.tsx` file:

- Update the `features` array to change the game features
- Modify the `testimonials` array to update reviews
- Change images by replacing the placeholder URLs


### Adding Pages

This is a single-page landing site. To add more pages:

1. Create new files in the `app` directory following Next.js App Router conventions
2. Add navigation links in the header component


## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to a GitHub repository
2. Import your repository on Vercel
3. Vercel will detect Next.js and set up the build configuration for you


[

](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fcamepro-landing)

### Manual Deployment

You can also deploy this app to any hosting provider that supports Node.js:

1. Build your application:

```shellscript
npm run build
```


2. Start the production server:

```shellscript
npm run start
```




## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern gaming websites
- Icons provided by [Lucide Icons](https://lucide.dev/)
- Animation powered by [Framer Motion](https://www.framer.com/motion/)
- Demo hosted at [camepro.vercel.app](https://camepro.vercel.app/)


```plaintext

The README now includes:
- The demo URL prominently displayed at the top
- More detailed installation instructions including build commands
- A specific section for installing dependencies from scratch
- Additional deployment options and instructions
- Reference to the demo URL in the acknowledgments section
```
