import {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, FC, memo, useCallback} from 'react'
import s from 'components/common/CustomDoubleRange/CustomSelect.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const CustomSelect: FC<SuperSelectPropsType> = memo((
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <option key={o + '-' + i} className={s.option} value={o}>{o}</option>
    )) : []


    const onChangeCallback = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    },[onChange, onChangeOption])

    return (
        <select onChange={onChangeCallback} className={s.select} {...restProps}>
            {mappedOptions}
        </select>
    )
})


