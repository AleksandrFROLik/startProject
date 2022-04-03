import {FC, memo, useState} from "react";
import s from './Paginator.module.scss';
import {CustomButton} from "components/common/CustomButton/CustomButton";



type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    changeNumberPage: (p: number) => void
    portionSize: number
    disabled?: boolean
}

export const Paginator: FC<PaginatorPropsType> = memo(({
                                  totalCount,
                                  pageSize,
                                  currentPage,
                                  changeNumberPage,
                                  portionSize, disabled
                              }: PaginatorPropsType) => {


    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginatorContainer}>

            <CustomButton cancel={portionNumber < 2} disabled={portionNumber < 2 || disabled} className={s.button}
                         onClick={() => setPortionNumber(portionNumber - 1)}>prev</CustomButton>

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => <span key={p}
                                className={currentPage === p ? s.selectedPage : s.notselectpage}
                                onClick={() => changeNumberPage(p)}>{p}</span>
                )}

            <CustomButton cancel={portionCount == portionNumber} disabled={portionCount == portionNumber || disabled}
                         className={s.button}
                         onClick={() => setPortionNumber(portionNumber + 1)}>next</CustomButton>

        </div>
    )
})

