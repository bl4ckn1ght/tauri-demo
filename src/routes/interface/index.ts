export interface MetaProps {
	title: string // 标题
	keepAlive?: boolean // 是否缓存
	requiresAuth?: boolean // 是否需要登录
	key?: string // 用来对应path的值
	hidden?: boolean // 是否需要隐藏
}

export interface RouteObject {
	caseSensitive?: boolean
	children?: RouteObject[]
	element?: React.ReactNode
	index?: boolean
	path?: string
	meta?: MetaProps
	isLink?: string
}
