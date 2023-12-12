import { useState } from "react"
import "./style.css"

function Main() {
  const [bgColor, setBgColor] = useState("white")
  const [textColor, setTextColor] = useState("#1b1b1b")
  const [buttonStyle, setButtonStyle] = useState("white")

  function handleClick() {
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white")
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b")
    setButtonStyle(bgColor === "white" ? "#1b1b1b" : "white")
  }

  return (
    <>
      <section style={{ backgroundColor: bgColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: buttonStyle,
            color: textColor,
            border: `2px,solid ${textColor}`,
          }}
        >
          Change Theme
        </button>

        <section className="content">
          <h1>
            Welcome to A <br />
            Real World
          </h1>
        </section>
      </section>
    </>
  )
}

export default Main
