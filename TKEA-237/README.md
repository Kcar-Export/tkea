# TKEA 237 Marketplace

Welcome to the TKEA 237 project, a marketplace connecting the African and Korean markets, specifically focusing on Cameroon. This project aims to facilitate trade and cultural exchange between these regions.

## Project Structure

- **app/**: Contains the main application files.
  - **page.tsx**: The main entry point for the application, rendering the homepage.
  - **layout.tsx**: Defines the layout structure and handles authentication for admin users.
  - **contact/**: Contains the contact page for user inquiries.
    - **page.tsx**: Implementation of the contact page.
  - **privacy-policy/**: Outlines the privacy policy for user data protection.
    - **page.tsx**: Details on how user data is collected and used.
  - **countries/**: Dedicated to showcasing marketplace offerings by country.
    - **cameroon/**: Highlights products and services available in Cameroon.
      - **page.tsx**: Displays the offerings for Cameroon.

- **components/**: Contains reusable React components.
  - **ContactForm.tsx**: Renders a contact form for user inquiries.
  - **PrivacyPolicy.tsx**: Displays the privacy policy content.

- **styles/**: Contains global styles for the application.
  - **globals.css**: Global CSS styles for consistent look and feel.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **next.config.mjs**: Configuration settings specific to the Next.js application.

- **tsconfig.json**: TypeScript configuration file specifying compiler options.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd TKEA-237
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- User-friendly interface for browsing products and services.
- Contact page for user inquiries and support.
- Privacy policy outlining data collection and usage practices.
- Dedicated section for Cameroon showcasing local offerings.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.