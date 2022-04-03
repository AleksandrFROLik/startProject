import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, memo, useCallback} from 'react'
import s from 'components/common/CustomCheckbox/CustomCheckbox.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

export const CustomCheckbox: FC<SuperCheckboxPropsType> = memo((
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        children,

        ...restProps
    }
) => {
    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeChecked) {
            onChangeChecked(e.currentTarget.checked)
        } else if (onChange) {
            onChange(e)
        }
    },[onChangeChecked, onChange])

    const finalInputClassName = `${className && className} ${s.checkbox} `

    return (
        <label className={s.checkboxLabel}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                id="checkbox-id"
                className={finalInputClassName}
                {...restProps}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    )
})


