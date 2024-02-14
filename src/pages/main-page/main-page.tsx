import { Sider } from '@components/Sider';
import { Header } from '@components/Header';
import { Card } from '@components/MainContent/Card';
import { MainContent } from '@components/MainContent';
import { MainFooterCard } from '@components/MainFooterCard';
import { ButtonSiderToggle } from '@components/ButtonSiderToggle';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import './main-page.css';
import { useState } from 'react';

const { Footer } = Layout;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout className='container'>
            <Sider collapsed={collapsed} />
            <Layout className='main__container'>
                <ButtonSiderToggle collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                <Header />
                <MainContent>
                    <Card
                        title={'Расписать тренировки'}
                        linkTitle={'Тренировки'}
                        icon={<HeartFilled />}
                    />
                    <Card
                        title={'Назначить календарь'}
                        linkTitle={'Календарь'}
                        icon={<CalendarTwoTone />}
                    />
                    <Card
                        title={'Заполнить профиль'}
                        linkTitle={'Профиль'}
                        icon={<IdcardOutlined />}
                    />
                </MainContent>
                <Footer className='main__footer'>
                    <Button
                        type={'link'}
                        size={'large'}
                        style={{ color: 'var(--primary-light-6)' }}
                        className='main__foter__btn'
                    >
                        Смотреть отзывы
                    </Button>
                    <MainFooterCard />
                </Footer>
            </Layout>
        </Layout>
    );
};
