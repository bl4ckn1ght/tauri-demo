import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'

import { message } from 'antd'
import { AdminToken } from '@/utils/index'

export interface IResponse {
	code: number
	data: any
	msg: string
}

let axiosInstance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 300000,
	method: 'POST',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	transformRequest: [
		function (data: any) {
			delete data.Authorization
			data = qs.stringify(data)
			return data
		}
	]
})

axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.headers.authorization) {
			localStorage.setItem(AdminToken, response.headers.authorization)
		} else {
			if (response.data && response.data.token) {
				localStorage.setItem(AdminToken, response.data.token)
			}
		}

		if (response.status === 200) {
			return response.data
		} else {
			showMessage(response.status)
			return response.data
		}
	},
	(error: any) => {
		const { response } = error
		if (response) {
			showMessage(response.status)
			return Promise.reject(response.status)
		} else {
			message.error('网络连接异常，请稍后再试！')
		}
	}
)

axiosInstance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const TOKEN = localStorage.getItem(AdminToken)

		if (TOKEN) {
			(config as any).headers.Authorization = TOKEN
		}

		return config
	},
	(error: any) => {
		return Promise.reject(error)
	}
)

const showMessage = (status: number | string) => {
	let msg: string = ''
	switch (status) {
		case 101:
			msg = '用户未登录，请登陆后操作！'
			break
		case 102:
			msg = '用户不存在，请重新登录！'
			break
		case 400:
			msg = '请求地址不存在或包含不支持的参数'
			break
		case 401:
			msg = '未授权'
			break
		case 403:
			msg = '不允许访问'
			break
		case 404:
			msg = '请求的资源不存在'
			break
		case 500:
			msg = '接口出错，请刷新重试'
			break
	}
	message.warning(msg, 5)
}

export default axiosInstance
