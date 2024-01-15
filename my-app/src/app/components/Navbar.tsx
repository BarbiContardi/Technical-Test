import React from "react"
import Button from "./Button";

const Navbar: React.FC = () => {
return (
    <nav className="flex flex-row mb-0">
<div>
<h1>Test</h1>
</div>
<div>
  <Button texto={"Home"} ruta={"/"} />
  <Button texto={"Emoji World"} ruta={"/emogipage"} />
</div>
    </nav>
)
}
export default Navbar;