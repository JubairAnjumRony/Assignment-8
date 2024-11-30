# Assignment-8 - Gadget-Heaven

Welcome to **GadgetHeaven**, your go-to destination for the latest and greatest gadgets! This fully functional e-commerce platform is built with **React** and utilizes the **Context API** to manage the cart and wishlist, providing a seamless user experience.

LIve-Link:https://imaginative-rabanadas-61b2db.netlify.app/

## Project Overview

GadgetHeaven is a feature-rich e-commerce platform where users can browse, filter, and purchase the latest gadgets.  The site features a structured navigation bar, product categories, and individual product details pages. Key functionalities include a shopping cart, a wishlist system, and product filtering. The Context API will manage the cart and wishlist

---

## Features

- **Responsive Navbar** with active route highlighting.
- **Product Categories Sidebar** to filter products by categories (Computers, Phones, etc.).
- **Product Cards**: Each card displays detailed product information such as price, image, description, and specifications.
- **Add to Cart & Wishlist**: Visual feedback when adding products to the cart or wishlist. Once added, the buttons disable to prevent duplicates.
- **Sorting**: Sort products by price in descending order, and filter by availability (in stock vs out of stock).
- **Statistics Page**: A **Composed Chart** that shows product prices vs. product names, as well as scatter plots for ratings.
- **Cart & Wishlist Management**: Remove products from the cart or wishlist, and sort cart items by price.
- **Dynamic Title**: Page titles change dynamically to improve user experience.
- **Modal for Purchase Confirmation**: After adding products to the cart, users can confirm their purchase with a modal.
- **404 Error Page**: Users are redirected to a 404 page for invalid routes.
- **Real-time Cart Updates**: Display real-time updates for total items and subtotal price in the cart.
- **In-stock/Out-of-stock Handling**: Products that are out of stock cannot be added to the cart.
- **Prevent Duplicate Additions**: Users cannot add the same product to the cart twice or wishlist more than once.

---



## React Fundamental Concepts and Tools Used in this Project

- **React Router** for navigation between pages and dynamic routes (enabling seamless transitions between different pages and loading content dynamically based on URL parameters).
- **Tailwind CSS** for utility-first CSS styling.
- **DaisyUI** for pre-built Tailwind components (e.g., buttons, modals, form elements) to speed up UI development.
- **React Hooks** (`useState`, `useEffect`, `useNavigate`, `useLocation`) for managing component state and handling navigation.
- **React Toastify** for toasts that notify users about adding/removing items from the cart and wishlist.
- **React Icons** for displaying cart, wishlist, and other icons.
- **Recharts** for displaying charts in the statistics page.
- **React Rating** component for product ratings.
- **React Helmet Async** for managing the document head, enabling dynamic title and meta tags for each page for better SEO.


 ## Tools used for handling and managind data

- **Context API** for managing global state (Cart, Wishlist).
- **LocalStorage** for persisting cart and wishlist data across page reloads.


---


## Features Implemented

- 1. **Navbar** with route highlighting and responsive design.
- 2. **Product Categories Sidebar** to easily filter products.
- 3. **Product Sorting** by price (descending) and availability (in stock or out of stock).
- 4. **Add to Cart & Wishlist** functionality with visual feedback and dynamic updates.
- 5. **Real-time Cart Updates**: Show total item count and subtotal price in the cart.
- 6. **Prevent Adding Out-of-Stock Products**: Products that are out of stock cannot be added to the cart.
- 7. **Prevent Duplicate Items**: The same product cannot be added to the cart twice or to the wishlist more than once.
- 8. **404 Error Handling** for invalid routes.

---


