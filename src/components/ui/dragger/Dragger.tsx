import { ChangeEvent, DragEvent, FC } from 'react'
import styles from './dragger.module.scss'
import cn from 'clsx'
import UploadIcon from '@/assets/icon/UploadIcon'

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
				<p className={styles.icon}>
					<UploadIcon />
				</p>
				<p className={styles.role}>Нажмите для загрузки или перетащите фото</p>
				<p className={styles.type}>PNG или JPG</p>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	)
}

export default Dragger
