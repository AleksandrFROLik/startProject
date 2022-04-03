//import Slider from '@mui/material/Slider/Slider'
import {FC, memo, useCallback} from 'react'
import s from 'components/common/CustomDoubleRange/CustomSuperDoubleRange.module.scss'

type CustomDoubleRangeType = {
    onChangeRange?: (value: number[]) => void
    value: [number, number]
    min: number
    max: number
    disabled?:boolean
}

export const CustomDoubleRange: FC<CustomDoubleRangeType> = memo((
    {
        onChangeRange,
        value,
        disabled,
        max, ...restProps
    }
) => {

    const onChangeCallback = useCallback((event: Event, value: number | number[], activeThumb: number) => {
        if (typeof value === 'number') {
        } else {
            onChangeRange && onChangeRange(value)
        }
    },[onChangeRange])

    return (
        <>
            <div className={s.slider}>
                {/*<Slider*/}
                {/*    disabled={disabled}*/}
                {/*    value={value}*/}
                {/*    onChange={onChangeCallback}*/}
                {/*    valueLabelDisplay="auto"*/}
                {/*    color='primary'*/}
                {/*    size='medium'*/}
                {/*    min={0}*/}
                {/*    max={max}*/}
                {/*/>*/}
            </div>

        </>
    )
})
