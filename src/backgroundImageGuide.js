// Instructions for adding background images in React

/* METHOD 1: Using public folder (Recommended for user-uploaded images) */
// 1. Place your image in: public/images/your-image.jpg
// 2. In your CSS, use: background-image: url('./images/your-image.jpg');
// Note: Use relative path starting with './' for public folder

/* METHOD 2: Using src/assets folder (For bundled images) */
// 1. Place image in: src/assets/your-image.jpg  
// 2. Import in component: import bgImage from './assets/your-image.jpg';
// 3. Use in style: style={{backgroundImage: `url(${bgImage})`}}

/* METHOD 3: Direct URL in CSS (For online images) */
// background-image: url('./');

const backgroundImageGuide = null;
export default backgroundImageGuide;