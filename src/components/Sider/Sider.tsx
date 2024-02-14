import { useState } from 'react';
import { Menu, Divider } from 'antd';
import { Layout } from 'antd';
import {
    CalendarTwoTone,
    HeartTwoTone,
    IdcardOutlined,
    MenuFoldOutlined,
    TrophyTwoTone,
} from '@ant-design/icons';
import cleverFit from './../../assets/icons/cleverfit.svg';
import cleverFitSmall from './../../assets/icons/cleverfitSmall.svg';
import fit from './../../assets/icons/fit.svg';
import './Sider.css';

const { Sider: SiderBlock } = Layout;

export const Sider = ({ collapsed }: { collapsed: boolean }) => {
    const [collapsedWidth, setCollapsedWidth] = useState(64);
    const [width, setWidth] = useState(208);

    return (
        <SiderBlock
            breakpoint='sm'
            width={width}
            collapsedWidth={collapsedWidth}
            trigger={null}
            collapsible
            collapsed={collapsed}
            className='sider'
            onBreakpoint={(broken) => {
                setCollapsedWidth(broken ? 0 : 64);
                setWidth(broken ? 106 : 208);
            }}
            {...(width === 208 ? {} : { style: { position: 'fixed', zIndex: '1' } })}
        >
            <div className='sider__logo'>
                {!collapsed ? (
                    <img src={cleverFit} alt='CleverFit' className='sider__logo_large' />
                ) : null}
                {collapsed ? <img src={fit} alt='Fit' className='sider__logo_small' /> : null}
                <img src={cleverFitSmall} alt='cleverFitSmall' className='cleverFitSmall' />
            </div>
            <Menu className='sider__menu' mode='inline'>
                <Menu.Item
                    key='1'
                    icon={<CalendarTwoTone />}
                    style={{
                        ...(collapsed && width === 208 ? {} : { paddingLeft: '16px' }),
                        ...(width === 208 ? {} : { paddingLeft: '0' }),
                    }}
                >
                    <div>Календарь</div>
                </Menu.Item>
                <Menu.Item
                    key='2'
                    icon={<HeartTwoTone />}
                    style={{
                        ...(collapsed && width === 208 ? {} : { paddingLeft: '16px' }),
                        ...(width === 208 ? {} : { paddingLeft: '0' }),
                    }}
                >
                    <div>Тренировки</div>
                </Menu.Item>
                <Menu.Item
                    key='3'
                    icon={<TrophyTwoTone />}
                    style={{
                        ...(collapsed && width === 208 ? {} : { paddingLeft: '16px' }),
                        ...(width === 208 ? {} : { paddingLeft: '0' }),
                    }}
                >
                    <div>Достижения</div>
                </Menu.Item>
                <Menu.Item
                    key='4'
                    icon={<IdcardOutlined />}
                    style={{
                        ...(collapsed && width === 208 ? {} : { paddingLeft: '16px' }),
                        ...(width === 208 ? {} : { paddingLeft: '0' }),
                    }}
                >
                    <div>Профиль</div>
                </Menu.Item>
                <div>
                    <Divider className='divider' />
                    <Menu.Item
                        key='5'
                        icon={
                            <MenuFoldOutlined
                                className={collapsed ? 'icon_exit' : 'icon_exit__padding'}
                            />
                        }
                        {...(width === 208 ? {} : { style: { textAlign: 'center' } })}
                    >
                        <div>Выход</div>
                    </Menu.Item>
                </div>
            </Menu>
        </SiderBlock>
    );
};
