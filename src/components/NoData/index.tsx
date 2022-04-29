import Panthera48NoPreviewIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/48/Panthera48NoPreview';

interface INoDataProps {
    title: string;
    icon?: React.ReactNode;
}

export const NoData = ({ title, icon }: INoDataProps) => (
    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-sky-darkest tw-text-sm'>
        <div className='tw-mb-1 tw-flex'>{icon ?? <Panthera48NoPreviewIcon />}</div>
        {title}
    </div>
);
