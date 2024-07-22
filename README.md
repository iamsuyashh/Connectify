# Connectify

A full-featured LinkedIn clone built using Next.js, MongoDB, Clerk for authentication, and Cloudinary for image storage.

## Features

- User Authentication with Clerk
- Image upload and storage with Cloudinary
- MongoDB for database
- Next.js for server-side rendering and static site generation
- Responsive design
- User profiles
- Posts and comments

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next.js API routes, MongoDB
- **Authentication:** Clerk
- **Image Storage:** Cloudinary

## Installation

1. Clone the repository

    ```bash
    git clone https://github.com/your-username/linkedin-clone.git
    cd linkedin-clone
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Set up environment variables

    Create a `.env.local` file in the root of your project and add the following variables:

    ```env
    MONGODB_URI=<your-mongodb-uri>
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
    CLERK_API_KEY=<your-clerk-api-key>
    CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    CLOUDINARY_API_KEY=<your-cloudinary-api-key>
    CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
    ```

4. Run the development server

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- Sign up or log in with Clerk
- Create a profile
- Create, edit, and delete posts
- Comment on posts

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
