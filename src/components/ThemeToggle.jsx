import { useEffect, useState } from "react";


export default function ThemeToggle() {
const [dark, setDark] = useState(
window.matchMedia("(prefers-color-scheme: dark)").matches
);


useEffect(() => {
document.documentElement.classList.toggle("dark", dark);
}, [dark]);


return (
<button
onClick={() => setDark(!dark)}
className="border rounded-full px-3 py-1"
>
{dark ? "☀" : "🌙"}
</button>
);
}