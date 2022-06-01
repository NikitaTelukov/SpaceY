import {ChangeEvent, ReactNode} from "react";

export interface LogoI {
    width: number
    height: number
    isDarkMode: boolean
}

export interface LayoutI {
    children: ReactNode
}

export interface TextI {
    type?: 'text2' | 'texto1' | 'text3_little' | 'text3_medium' | 'text3_large' | 'display' | 'heading1' | 'heading2' | 'heading3'
    color?: 'sun' | 'gray05' | 'mars_light' | 'earth' | 'saturn'
    children: ReactNode
    spacing?: number
    isDarkMode?: boolean
    customClass?: string
}

export interface ButtonI {
    children: ReactNode
    color: 'mars'
    width?: string
    isDarkMode?: boolean
    type?: 'submit'
}

export interface InfoIconI {
    src: string
    children?: ReactNode
}

export interface InputI {
    label: string
    type: "text" | "checkbox"
    onChange?: (e: ChangeEvent<HTMLInputElement>)=> void
    value?: string | number
}

export interface SocialIconI {
    src: string
    link: string
}

export interface FooterLinkI {
    children: ReactNode
    link: string
}