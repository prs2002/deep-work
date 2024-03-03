import { useState } from "react";

export default function useToggle(defaultValue: boolean) {
    const [value, setValue] = useState(defaultValue);

    function toggle() {
        setValue((prev) => !prev);
    }

    return [value, toggle] as const;
}
