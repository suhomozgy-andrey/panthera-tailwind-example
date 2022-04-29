import { Avatar } from '@suhomozgy-andrey/panthera-tailwind';
import Panthera16CertificateIcon from '@suhomozgy-andrey/panthera-tailwind/es/Icons/16/Panthera16Certificate';

interface IProjectPickerProps {
    title: React.ReactNode;
}

export const ProjectPicker = ({ title }: IProjectPickerProps) => (
    <div className='tw-flex tw-p-4'>
        <div className='tw-min-h-[48px] tw-flex tw-items-center tw-gap-2 tw-justify-between tw-w-full'>
            <div>
                <span className='tw-text-ink-main tw-font-medium tw-text-base'>{title}</span>
            </div>
            <Avatar icon={<Panthera16CertificateIcon />} size='sm' />
        </div>
    </div>
);
