import React from 'react'

function Header() {
  return (
    <header className="header">
      <h1 className="header__heading" data-testid="app-title">
        <span role="img" aria-label="Laptop">
          💻
        </span>
        Platzi Jobs
      </h1>
    </header>
  )
}

export default Header
