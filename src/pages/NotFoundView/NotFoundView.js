import { NotFoundPage } from 'components/NotFoundPage';
import { useOnGoMainPage } from 'hooks';

export const NotFoundView = () => {
    const onGoMainPage = useOnGoMainPage();

    return <NotFoundPage onGoMainPage={onGoMainPage} />;
};
