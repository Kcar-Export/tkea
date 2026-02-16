import { requireAdmin } from "@/utils/adminAuth";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This function handles all authentication and authorization server-side
  await requireAdmin();

  return (
    <div>
      <header>
        <h1>TKEA 237 Marketplace</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/countries/cameroon">Cameroon</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()} TKEA 237. All rights reserved.</p>
      </footer>
    </div>
  );
}