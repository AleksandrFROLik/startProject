import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, FC, memo, useCallback} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type CustomRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const CustomRadio: FC<CustomRadioPropsType> = memo((
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    },[onChangeOption])

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <div  key={name + '-' + i}>
        <label>
            <input
                name={'radioBtn' + i}
                type={'radio'}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
})

