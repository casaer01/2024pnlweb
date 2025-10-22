// components/Layout.js
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <Outlet />  // This is where child routes render
      </main>
      <footer>Footer Content</footer>
    </div>
  );
}

export default Layout;