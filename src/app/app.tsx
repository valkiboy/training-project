import { useTheme } from 'app/providers/theme-provider';
import { classNames } from 'shared/lib/class-names/class-names';
import { Navbar } from 'widgets/navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App;