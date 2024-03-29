import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './buttonSiderToggle.css';

interface ButtonSiderToggleProps {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

export const ButtonSiderToggle = ({ collapsed, toggleCollapsed }: ButtonSiderToggleProps) => (
    <>
        {collapsed ? (
            <MenuUnfoldOutlined
                className='sider-switch trigger'
                data-test-id='sider-switch'
                onClick={toggleCollapsed}
            />
        ) : (
            <MenuFoldOutlined
                className='sider-switch trigger'
                data-test-id='sider-switch'
                onClick={toggleCollapsed}
            />
        )}
        {!collapsed ? (
            <MenuUnfoldOutlined
                className='sider-switch-mobile trigger'
                data-test-id='sider-switch-mobile'
                onClick={toggleCollapsed}
            />
        ) : (
            <MenuFoldOutlined
                className='sider-switch-mobile'
                data-test-id='sider-switch-mobile'
                onClick={toggleCollapsed}
            />
        )}
    </>
);
