import "./globals.css";

export const metadata = {
  title: "Products",
  description: "Project on product Listing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

