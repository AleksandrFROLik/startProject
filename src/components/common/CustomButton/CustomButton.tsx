import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC, memo} from 'react'
import s from './SuperButton.module.scss'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CustomButtonPropsType = DefaultButtonPropsType & {
    cancel?: boolean
}

export const CustomButton: FC<CustomButtonPropsType> = memo((
    {
        cancel, className,
        ...restProps
    }
) => {

    const finalClassName = `${s.default} ${cancel && s.cancel} ${className}`

    return (

        <button
            onClick={restProps.onClick}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >
        </button>

    )
});


