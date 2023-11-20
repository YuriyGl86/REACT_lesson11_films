import { Outlet } from "react-router-dom"
import { Menu } from 'antd';
import { useState } from "react";
import { Link } from "react-router-dom";

export  function Layout() {
  const items = [{
    label: (
        <Link to="/"  rel="noopener noreferrer">
          Search Films
        </Link>
      ),
      key: 'home',
    },
    {
      label: (
        <Link to="/favorites"  rel="noopener noreferrer">
          Favorites
        </Link>
      ),
      key: 'favorites',
    }
  ]

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="container">
        <header>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </header>
        <main className="page">
          <Outlet/>
        </main>
    </div>
  )
}
