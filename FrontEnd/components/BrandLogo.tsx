import Image from 'next/image';

export const BrandLogo = () => {
    const logoFolder = '/logo.svg'
    return (
        <Image height={200} width={200} src={logoFolder} alt={'Brand logo'}/>
    )
}