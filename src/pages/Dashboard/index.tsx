import { DashboardWidget } from '../../components/DashboardWidget';
import { NoData } from '../../components/NoData';
import { ProjectPicker } from '../../components/ProjectPicker';
import { DefaultLayout } from '../../Lyouts/DefaultLayout';

import styles from './styles.module.scss';

export const Dashboard = () => {
    return (
        <DefaultLayout
            contentTitle={
                <div className={styles.dashboardTitle}>
                    <ProjectPicker title='Dashboard' />
                </div>
            }
        >
            <div className='tw-flex tw-flex-wrap tw-gap-4'>
                <DashboardWidget title='My tasks' noDataContent={<NoData title='Tasks missing' />} />
                <DashboardWidget title='Runs' count={12} noDataContent={<NoData title='Runs missing' />} />
                <DashboardWidget title='Issues' count={127} noDataContent={<NoData title='Issues missing' />} />
                <DashboardWidget title='Plans' count={34} noDataContent={<NoData title='Plans missing' />} />
                <DashboardWidget title='Tests' count={179} noDataContent={<NoData title='Tests missing' />} />
                <DashboardWidget title='Teams' count={78} noDataContent={<NoData title='Team missing' />} />
            </div>
        </DefaultLayout>
    );
};
