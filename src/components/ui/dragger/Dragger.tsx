import { ChangeEvent, DragEvent, FC } from 'react'
import styles from './dragger.module.scss'
import cn from 'clsx'
import DownloadSvg from '@/assets/icon/download.svg'

type TDragger = {
	dragStarHandler: (e: DragEvent<HTMLDivElement>) => void
	dragLeaveHandler: (e: DragEvent<HTMLDivElement>) => void
	dragDropHandler: (e: DragEvent<HTMLDivElement>) => void
	isDragger: boolean
	inputImageHandler: (e: ChangeEvent<HTMLInputElement>) => void
	description: string
	label: string
}

const Dragger: FC<TDragger> = ({
	dragDropHandler,
	dragLeaveHandler,
	dragStarHandler,
	isDragger,
	inputImageHandler,
	description,
	label
}) => {
	return (
		<div
			onDragStart={dragStarHandler}
			onDragLeave={dragLeaveHandler}
			onDragOver={dragStarHandler}
			onDrop={dragDropHandler}
			className={cn(styles.dragger, { [styles.drag]: isDragger })}
		>
			<label className={styles.dragger__label} htmlFor={label}></label>
			<input
				accept='.jpg, .png, .jpeg'
				className='hidden'
				id={label}
				type='file'
				onChange={inputImageHandler}
				multiple={false}
			/>
			<div className={styles.dragger__download}>
				<p>
					<DownloadSvg />
				</p>
				<p>Нажмите для загрузки или перетащите фото</p>
				<p>PNG или JPG</p>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Dragger
