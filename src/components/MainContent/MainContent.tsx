import { ReactNode } from 'react';
import './MainContent.css';

type MainProps = {
    children: ReactNode;
};

export const MainContent: React.FC<MainProps> = ({ children }) => {
    return (
        <div className='main-content__container'>
            <div className='main-content__description'>
                <div>С CleverFit ты сможешь:</div>
                <ul className='main-content__list'>
                    <li>
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                    </li>
                    <li>
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты с нормами и рекордами;
                    </li>
                    <li>
                        — создавать свой профиль, где тыможешь загружать свои фото, видео и отзывы о
                        тренировках;
                    </li>
                    <li>
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным
                        инструкциям и советам профессиональных тренеров.
                    </li>
                </ul>
            </div>

            <div className='main-content__text'>
                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                откладывай на завтра — начни тренироваться уже сегодня!
            </div>
            {children}
        </div>
    );
};
