import { Button, Typography, Card as CardItem } from 'antd';
import { ReactNode } from 'react';

type Props = {
    title: string;
    linkTitle: string;
    icon: ReactNode;
};

export const Card = ({ title, linkTitle, icon }: Props) => (
    <CardItem
        headStyle={{ fontSize: '16px' }}
        bodyStyle={{ textAlign: 'center' }}
        size={'small'}
        style={{ maxWidth: '328px', borderRadius: '3px' }}
        title={<Typography.Text>{title}</Typography.Text>}
    >
        <Button type={'link'} icon={icon} style={{ color: 'var(--primary-light-6)' }}>
            {linkTitle}
        </Button>
    </CardItem>
);
