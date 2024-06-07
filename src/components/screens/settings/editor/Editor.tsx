import { FC } from 'react'
import styles from './editor.module.scss'
import EditFilter from './editor-filter/EditFilter'
import { useEditor } from './useEditor'
import AddProduct from './add-product/AddProduct'
import EditorTable from './editor-table/EditorTable'
import EditProduct from './editor-edit/EditProduct'

const Editor: FC = () => {
	const { isAdd, setIsAdd, isEdit, setIsEdit } = useEditor()
	return (
		<div className={styles.edit}>
			{isAdd && <AddProduct setIsAdd={setIsAdd} />}
			{!isAdd && !isEdit.isShow && (
				<div className={styles.edit__main}>
					<h2 className='text-text-xl animate-fade'>Добавить новый товар</h2>
					<EditFilter setIsAdd={setIsAdd} />
					<EditorTable setEdit={setIsEdit} />
				</div>
			)}
			{isEdit.isShow && <EditProduct editProduct={isEdit} setIsEdit={setIsEdit} />}
		</div>
	)
}

export default Editor
