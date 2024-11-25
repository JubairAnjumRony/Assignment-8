# Assignment-8 - Gadget-Heaven

Welcome to **GadgetHeaven**, your go-to destination for the latest and greatest gadgets! This fully functional e-commerce platform is built with **React** and utilizes the **Context API** to manage the cart and wishlist, providing a seamless user experience.

Project-Link:https://github.com/programming-hero-web-course2/b10a8-gadget-heaven-JubairAnjumRony
LIve-LInk:https://imaginative-rabanadas-61b2db.netlify.app/

## Project Overview

GadgetHeaven is a feature-rich e-commerce platform where users can browse, filter, and purchase the latest gadgets. It offers easy navigation, a smooth shopping experience, and various functionalities to manage products in the cart and wishlist.

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


## React Concepts and Tools Used

Certainly! Here's the updated section with **React Router** highlighting both **navigation** and **dynamic routes**:

---

## React Concepts and Tools Used

- **React Router** for navigation between pages and dynamic routes (enabling seamless transitions between different pages and loading content dynamically based on URL parameters).
- **Context API** for managing global state (Cart, Wishlist).
- **React Hooks** (`useState`, `useEffect`, `useNavigate`, `useLocation`) for managing component state and handling navigation.
- **React Toastify** for toasts that notify users about adding/removing items from the cart and wishlist.
- **React Icons** for displaying cart, wishlist, and other icons.
- **Recharts** for displaying charts in the statistics page.
- **React Rating** component for product ratings.
- **React Helmet Async** for managing the document head, enabling dynamic title and meta tags for each page for better SEO and user experience.
- **LocalStorage** for persisting cart and wishlist data across page reloads.
- **Tailwind CSS** for utility-first CSS styling.
- **DaisyUI** for pre-built Tailwind components (e.g., buttons, modals, form elements) to speed up UI development.


---


## Features Implemented

- **Navbar** with route highlighting and responsive design.
- **Product Categories Sidebar** to easily filter products.
- **Product Sorting** by price (descending) and availability (in stock or out of stock).
- **Add to Cart & Wishlist** functionality with visual feedback and dynamic updates.
- **Real-time Cart Updates**: Show total item count and subtotal price in the cart.
- **Prevent Adding Out-of-Stock Products**: Products that are out of stock cannot be added to the cart.
- **Prevent Duplicate Items**: The same product cannot be added to the cart twice or to the wishlist more than once.
- **Toast Notifications** when adding/removing items from the cart or wishlist.
- **Modal for Purchase Confirmation** when items are added to the cart.
- **Cart and Wishlist Management**: Sorting items, removing them, and handling errors like price limits.
- **Dynamic Page Titles** and **Favicon** based on the current page.
- **404 Error Handling** for invalid routes.

---


