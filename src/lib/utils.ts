import clsx, {ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]){
    // twMerge: merge two types of styles
    // eg: px-2 py-2 --> p-2 (lhs = rhs)
    return twMerge(clsx(inputs))
}