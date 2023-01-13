
import { Button } from 'antd'
import { Component, ReactPropTypes } from 'react'
import './index.less'

class homeIndex extends Component {

	constructor(props: ReactPropTypes) {
		super(props)
		this.state = {
			userInfo: {}
		}
	}

	render() {
		return (
			<div>
				<div className="name">用户信息</div>
				<Button type='primary'>按钮</Button>
			</div>
		)
	}

}

export default homeIndex
