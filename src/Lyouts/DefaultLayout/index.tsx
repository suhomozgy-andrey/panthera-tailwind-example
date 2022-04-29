import React from 'react';
import classnames from 'classnames';
import Panthera24HamburgerIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/24/Panthera24Hamburger';

import { MainMenu } from '../../components/MainMenu';
import { MainMenuLogo } from '../../components/MainMenuLogo';
import { MainMenuUser } from '../../components/MainMenuUser';
import { AppContext, TAppContext } from '../../context/AppContext';
import { ProjectPicker } from '../../components/ProjectPicker';

interface IDefaultLayoutProps {
    children: React.ReactNode;
    contextualNavigation?: {
        title: React.ReactNode;
        navigation: React.ReactNode;
    };
    contentTitle?: React.ReactNode;
    contentTitleText?: String;
}

export const DefaultLayout = ({
    children,
    contextualNavigation,
    contentTitle,
    contentTitleText
}: IDefaultLayoutProps) => {
    const { title, navigation } = contextualNavigation ?? {};

    const {
        subNavigation: { setSubNavigationOpened, subNavigationOpened }
    } = React.useContext<TAppContext>(AppContext);

    const onHamburgerClick = () => {
        setSubNavigationOpened((prevResult) => !prevResult);
    };

    return (
        <div className='tw-h-full tw-flex tw-items-stretch tw-text-ink-main'>
            <div
                className='tw-min-w-[80px] tw-flex tw-flex-col tw-justify-between tw-content-between tw-pb-3'
                style={{
                    boxShadow: 'inset -1px 0 0 0 rgba(0, 0, 0, 0.04)'
                }}
            >
                <MainMenuLogo />
                <MainMenu />
                <MainMenuUser />
            </div>
            {contextualNavigation && (
                <div
                    className={classnames('tw-min-w-[240px] tw-bg-sky-lightest tw-flex tw-flex-col tw-gap-5', {
                        'tw-hidden': !subNavigationOpened
                    })}
                >
                    <ProjectPicker title={title} />
                    <div className='tw-px-4 tw-flex-grow'>{navigation}</div>
                </div>
            )}
            <div className='tw-flex tw-overflow-auto'>
                <div className='tw-flex tw-flex-col tw-min-w-[932px]'>
                    {contentTitle ?? (
                        <div className='tw-px-4 tw-py-[22px] tw-flex tw-items-center'>
                            <Panthera24HamburgerIcon
                                className='tw-mr-[22px] tw-cursor-pointer'
                                onClick={onHamburgerClick}
                            />
                            <span className='tw-block tw-text-2xl'>{contentTitleText}</span>
                        </div>
                    )}

                    <div className='tw-overflow-auto tw-px-4 tw-pt-5 tw-pb-5'>{children}</div>
                </div>
            </div>
        </div>
    );
};
