
import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes } from "react"

interface IButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    aschild?: string
}

export function Button({className, ...props}: IButtonIconProps) {
    const Component = props.aschild === "true" ? Slot : 'button'

    return (    
        <Component
            {...props}
        />
    )
}