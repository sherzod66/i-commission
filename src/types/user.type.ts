import { IEdges } from './edges.type'
import { IShop } from './shop.type'

export interface IUser {
	me: {
		account: {
			id: string
			nickname: string
			createdAt: string
			updatedAt: string
			shops: IEdges<IShop>
		}
		permissions: TPermissions
	}
	extensions: {
		traceId: '368bf57c-6d75-06d0-eec3-c71cf78c04ce'
	}
}

type TPermissions = [
	'product.update',
	'image.read',
	'order.create',
	'payment.read:account_self',
	'cardPaymentMethod.list',
	'accountWallet.read:account_self',
	'category.create',
	'orderProduct.list',
	'cardPaymentMethod.read',
	'orderTransaction.list',
	'orderProduct.read',
	'orderTransaction.read',
	'image.list',
	'orderProduct.list.self',
	'payment.cancel',
	'productIndex.recalculate',
	'shop.read:bought',
	'orderTransaction.list.self',
	'conversationMessage.field.conversation',
	'productCodeConsignment.create',
	'payment.list',
	'productReview.list',
	'accountRole.create',
	'order.read:customer_self',
	'product.list.active',
	'category.update',
	'account.read:self',
	'orderProduct.field.conversation',
	'productReview.read',
	'product.create',
	'productReview.create:orderProduct_order_customer_self',
	'shop.read:active',
	'payment.read',
	'order.read',
	'conversation.read',
	'accountRole.read',
	'conversation.list',
	'conversation.read:orderProduct_order_customer_self',
	'accountRole.list',
	'orderProduct.read:order_customer_self',
	'productCodeConsignment.read',
	'image.create',
	'order.validate',
	'productCodeConsignment.list',
	'payment.list.self',
	'shop.list.active',
	'shop.update',
	'order.list',
	'product.read:active',
	'shop.read',
	'productCodeConsignment.update',
	'orderTransaction.read:order_customer_self',
	'product.read:owned',
	'product.read',
	'order.list.self',
	'category.list',
	'shop.create',
	'shop.list',
	'orderProduct.message.send:order_customer_self',
	'accountRole.delete',
	'category.read',
	'orderTransaction.create',
	'product.list'
]
