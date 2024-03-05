import React from "react"

export const ThemeToggle = () => {
  const changeTheme = (themeName: string) => {
    document.body.className = themeName
  }

  return (
    <div>
      <button onClick={() => changeTheme("")}>Clair</button>
      <button onClick={() => changeTheme("dark-theme")}>Sombre</button>
      <button onClick={() => changeTheme("pink-theme")}>Coloré</button>
    </div>
  )
}
