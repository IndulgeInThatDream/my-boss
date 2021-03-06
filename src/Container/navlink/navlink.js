/*
 * @Author: renpengfei
 * @Date: 2018-08-09 17:05:47
 * @Last Modified by: renpengfei
 * @Last Modified time: 2018-12-15 11:49:00
 */
import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
@withRouter
@connect(state => state.chat)
class NavLinkBar extends React.Component {
    static proTypes = {
        data: PropTypes.bool.isRequired
    }
    constructor(props) {
        super(props)
    }
    render() {
        const navList = this
            .props
            .data
            .filter(v => !v.hide)
        const { pathname } = this.props.location
        return (
            <div className='tab-bar'>
                <TabBar>
                    {navList.map(v => (
                        <TabBar.Item
                            badge={v.path === '/msg'
                            ? this.props.unread
                            : ''}
                            key={v.path}
                            title={v.title}
                            icon={{
                            uri: require(`./img/${v.icon}.png`)
                        }}
                            selectedIcon={{
                            uri: require(`./img/${v.icon}-active.png`)
                        }}
                            selected={pathname === v.path}
                            onPress={() => {
                            this
                                .props
                                .history
                                .push(v.path)
                        }}></TabBar.Item>
                    ))
}
                </TabBar>
            </div>

        )
    }

}
export default NavLinkBar