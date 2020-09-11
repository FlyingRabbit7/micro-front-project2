import React from 'react';
import { Menu, Layout } from 'antd';
import {
  withRouter,
  Link
} from "react-router-dom";

const { Sider } = Layout;

class Siderbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultSelectedKeys: '/react',
    };
  }

  componentWillMount() {
    const { location } = this.props;
    let pathname = location.pathname;
    this.setState({
      defaultSelectedKeys: pathname,
    })
  }

  render() {
    const { defaultSelectedKeys } = this.state;

    return (
      <Sider
        width={200}
        className="site-layout-background"
        onClick={this.handleClick}
        onSelect={this.handleSelect}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={[defaultSelectedKeys]}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="/react">
            <Link to="/react">React16</Link>
          </Menu.Item>
          <Menu.Item key="/vue">
            <Link to="/vue">vue</Link>
          </Menu.Item>
          <Menu.Item key="/static">
            <Link to="/static">static</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Siderbar)