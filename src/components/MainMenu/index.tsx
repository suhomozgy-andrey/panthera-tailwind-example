import Panthera32TestsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Tests';
import Panthera32PlansIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Plans';
import Panthera32RunsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Runs';
import Panthera32IssuesIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Issues';
import Panthera32ReportsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Reports';
import Panthera32TeamIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Team';
import Panthera32SettingsIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Settings';
import Panthera32SubmitIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/32/Panthera32Submit';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import classNames from 'classnames';

interface ICustomLinkProps {
    icon: React.ReactNode;
}

function CustomLink({ icon, children, to, ...props }: LinkProps & ICustomLinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={classNames('tw-flex tw-items-center tw-flex-col tw-text-xs tw-block tw-no-underline', {
                'tw-text-utility-darkest': !match,
                'tw-text-primary-main': match
            })}
            to={to}
            {...props}
        >
            {icon}
            <span>{children}</span>
        </Link>
    );
}

export const MainMenu = () => (
    <div className='tw-grow tw-flex tw-flex-col tw-items-center tw-gap-5 tw-overflow-y-auto md:tw-py-5 tw-px-4'>
        <CustomLink to='/tests' icon={<Panthera32TestsIcon className='tw-mb-1 tw-text-center' />}>
            Tests
        </CustomLink>
        <CustomLink to='/plans' icon={<Panthera32PlansIcon className='tw-mb-1 tw-text-center' />}>
            Plans
        </CustomLink>
        <CustomLink to='/runs' icon={<Panthera32RunsIcon className='tw-mb-1 tw-text-center' />}>
            Runs
        </CustomLink>
        <CustomLink to='/issues' icon={<Panthera32IssuesIcon className='tw-mb-1 tw-text-center' />}>
            Issues
        </CustomLink>
        <CustomLink to='/tasks' icon={<Panthera32SubmitIcon className='tw-mb-1 tw-text-center' />}>
            Tasks
        </CustomLink>
        <CustomLink to='/teams' icon={<Panthera32TeamIcon className='tw-mb-1 tw-text-center' />}>
            Teams
        </CustomLink>
        <CustomLink to='/reports' icon={<Panthera32ReportsIcon className='tw-mb-1 tw-text-center' />}>
            Reports
        </CustomLink>
        <CustomLink to='/settings' icon={<Panthera32SettingsIcon className='tw-mb-1 tw-text-center' />}>
            Settings
        </CustomLink>
    </div>
);
