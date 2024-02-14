import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import './MainFooterCard.css';

export const MainFooterCard: React.FC = () => {
    return (
        <div className='download'>
            <div className='download__info'>
                <div className='download__title'>Скачать на телефон</div>
                <div className='download__subtitle'>Доступно в PRO-тарифе</div>
            </div>
            <Divider className='divider' />
            <div className='download__btns'>
                <Button
                    size={'small'}
                    type={'link'}
                    style={{ color: 'var(--neutral-gray-13)' }}
                    icon={<AndroidFilled />}
                    className='download__btn'
                >
                    Android OS
                </Button>
                <Button
                    size={'small'}
                    type={'link'}
                    style={{ color: 'var(--neutral-gray-13)' }}
                    icon={<AppleFilled />}
                    className='download__btn'
                >
                    Apple iOS
                </Button>
            </div>
        </div>
    );
};
