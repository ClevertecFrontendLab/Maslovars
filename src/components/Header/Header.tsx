import { Layout, Typography, Button, Breadcrumb } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint';
import './Header.css';

const { Header: HeaderBlock } = Layout;

export const Header: React.FC = () => {
    const breakpoints = useBreakpoint();
    return (
        <HeaderBlock className='header'>
            <Breadcrumb className='breadcrump'>Главная</Breadcrumb>
            <div className='header__container'>
                <Typography.Title level={1} className='header__title'>
                    Приветствуем тебя в CleverFit — приложении,
                    <br /> которое поможет тебе добиться своей мечты!
                </Typography.Title>
                {breakpoints.xs ? (
                    <Button shape='circle' icon={<SettingOutlined />}></Button>
                ) : (
                    <Button
                        style={{ justifySelf: 'end' }}
                        icon={<SettingOutlined />}
                        type={'text'}
                        size={'small'}
                    >
                        Настройки
                    </Button>
                )}
            </div>
        </HeaderBlock>
    );
};
